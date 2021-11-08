
//function init() {
console.log("I'm running")
let showData;
d3.json("show_display.json").then((shows) => {
    showData = shows;

    var runTimes = ["15-30", "30-55", "60-75"];
    var dropDownCharacteristics = d3.select('#selDataset2');
    function fillDropDown(showData) {

        if (showData === "HBO") {
            runTimes.forEach(item => {
                dropDownCharacteristics.append("option").text(item).attr("value", item);
            });
            runtimeDropdownChange('15-30');
        }
        else if (showData === "Netflix") {
            runTimes.forEach(item => {
                dropDownCharacteristics.append("option").text(item).attr("value", item);
            });
            runtimeDropdownChange('15-30');
        }
        else if (showData === "NBC") {
            runTimes.forEach(item => {
                dropDownCharacteristics.append("option").text(item).attr("value", item);
            });
            runtimeDropdownChange('15-30');
        }
        else {
            runTimes.forEach(item => {
                dropDownCharacteristics.append("option").text(item).attr("value", item);
            });
            runtimeDropdownChange('15-30');
        }
    }


    function runtimeDropdownChange(network) {
        d3.json("show_display.json").then((shows) => {

            let display = d3.select("#sample-metadata");
            display.html("");
            // filter to get different boro's cuisines

            let networkSamples = shows.filter(function (citation) {
                return citation.network == network
            });
            console.log(networkSamples)

            // let episodeSamples = networkSamples.filter(function (episodes) {
            //   return episodes.name == followers
            // });
            // console.log(episodeSamples)
            let filter = {followers: "4618578"}
           

            let networkReduced = shows.map(({ network, name, followers, runtime }) => ({ network, name, followers, runtime }));
            console.log(networkReduced)

            results = networkReduced.filter(function(item){
                for (var key in filter){
                    if (item[key] === undefined || item[key] != filter[key])
                    return false;
                }
                return true;
            });
            console.log(results)

           
            var showNames = ["Game of Thrones", "The Leftovers", "Sex and the City", "Silicon Valley", "The Night Of"];
            var runtimeNumbers = ["55", "60", "30"];
            
            function filters (networks, showNames, runtime) {
              return networks.filter(function (network) {
                return showNames.indexOf(network.name) !== -1 && 
                  runtime.indexOf(network.runtime) !== -1;        // check if the car's model is allowed
              });
            }
            
            var filtered = filters(networkReduced, showNames, runtimeNumbers);
            console.log(filtered);
            
            let networkCounts = getcounts(networkSamples, "name");
            console.log("networkCounts", networkCounts)
            let networkNames = Object.keys(networkCounts)
            console.log(Object.keys(networkCounts))
            console.log(Object.values(networkCounts));
            let followerCounts = getcounts(networkSamples, "followers");
            console.log("followers", followerCounts)
            Object.entries(networkNames).forEach(([, b]) => {
                display.append("h5").text(` -  ${b}`);
            });
        })
        
    }
    runtimeDropdownChange("HBO")

    
    // function getNetworkRuntimes(shows, network) {
    //     //console.log(shows)
    //     let networkRuntimes = []
    //     let showsFilter = Object.keys(network);
    //     console.log(showsFilter)
    //     return shows.filter(networkshows => {
    //         return showsFilter.every(runtime => {
    //             if (!network[runtime].length) {
    //                 return true;
    //             }
    //             if (shows.network) {
    //                 return network[runtime].includes(shows.network);
    //             } else {
    //                 return network[runtime].some(filter => shows.some(v => v.network === filter));
    //             }
    //         });

    //     });
    // console.log(networkRuntimes)
    // let networks = []
    // shows.forEach(function (value) {
    //   //let variable= value.network
    //   //console.log(variable)
    //   //if (networkRuntimes)
    //   // let networks = shows.filter(function (citation) {
    //   //   return citation.runtime == network
    //   // });

    //   //  for (var j = 0; j < networks.length; j++) {
    //   //        networkRuntimes.push(networks[j].name);
    //   //    }
    //   if (!networks.includes(value.network)) {
    //     networks.push(value.network)
    //   }
    //     if (!networkRuntimes.includes(value.runtime)) {
    //       networkRuntimes.push(value.runtime)
    //     }

    //     else {
    //       networks[value.network[networks]] = 1;
    //     }
    //     console.log(networkRuntimes)
    //   });



    //return networkRuntimes
    //}



    // function getPopularShows(shows, network, runtime) {
    //     let popularShows = []








    //     return popularShows
    // }

    // function networkDropdownChange(network) {
    //     console.log("heres my network: ", network)
    //     console.log("my show data: ", showData)
    //     runtimes = getNetworkRuntimes(showData, network)


    // }
    // function runtimeDropdownChange(runtime) {
    //     console.log("heres my runtime: ", runtime)
    //     //   let followerCount = shows.filter(function (count) {
    //     //     return count.name == runtime
    //     // });
    //     // console.log(followerCount)
    //     let myNetwork = d3.select("#selDataset").text();
    //     popularShows = getPopularShows(showData, myNetwork, runtime)
    // }
    function dropdown(network) {
        d3.json("show_display.json").then((shows) => {
            // //get samples info from json file
            //console.log("data", data)
            // let shows = [];
            // for (var i = 0; i < data.length; i++) {
            //   shows.push(data[i]);
            // }
            let display = d3.select("#sample-metadata");
            display.html("");
            // filter to get different boro's cuisines
            const twoCategories = { data: shows.map(({ network, name }) => ({ network, name })) };
            console.log("twoLabels", twoCategories)

            let networkSamples = shows.filter(function (citation) {
                return citation.network == network
            });
            console.log(networkSamples)
            // let episodeSamples = networkSamples.filter(function (episodes) {
            //   return episodes.name == followers
            // });
            // console.log(episodeSamples)
            let networkCounts = getcounts(networkSamples, "name");
            console.log("networkCounts", networkCounts)
            console.log(Object.keys(networkCounts))
            console.log(Object.values(networkCounts));
            let followerCounts = getcounts(networkSamples, "followers");
            console.log("followers", followerCounts)

            let networkSampleResults = Object.keys(networkCounts).map(f => ({ type: f, count: networkCounts[f] }))
            console.log("networkSampleResults", networkSampleResults)
            // Sort the data by the most number of violations in each boro in descending (most to least)
            let netValues = Object.values(networkSampleResults).sort((a, b) => b.count - a.count);
            console.log("netvalues", netValues)
            // Slice the first 5 objects
            SlicedData = netValues.slice(0, 5);
            console.log("SlicedData", SlicedData)

            let followerResults = Object.keys(followerCounts).map(f => ({ type: f, count: followerCounts[f] }))
            console.log("followerResults", followerResults)
            // Sort the data by the most number of violations in each boro in descending (most to least)
            let followerValues = Object.values(followerResults).sort((a, b) => b.count - a.count);
            console.log("followerValues", followerValues)
            // Slice the first 5 objects
            followerSlicedData = followerValues.slice(0, 5);
            console.log("followerSlicedData", followerSlicedData)
            //  //get a list of the 5 top violations
            episodeDisplay = []
            for (var s = 0; s < SlicedData.length; s++) {
                episodeDisplay.push(SlicedData[s].type);
            }
            console.log("episodedisplay", episodeDisplay)
            //loop to get violations info into the top violations in each boro box
            Object.entries(episodeDisplay).forEach(([, b]) => {
                display.append("h5").text(`- ${b}`);
            });

            // let dropDown = d3.select("#selDataset");
            // network.forEach((c) => {
            //   dropDown.append("option").text(c).property("value", c)
            // });
            // let dropDown2 = d3.select("#selDataset2");
            // tvList.forEach((o) => {
            //   dropDown2.append("option").text(o).property("value", o)
            // })
        })
    }

    //dropdown("BBC One")


    function dropdown2(network) {
        d3.json("show_display.json").then((shows) => {
            // //get samples info from json file
            //console.log("data", data)
            // let shows = [];
            // for (var i = 0; i < data.length; i++) {
            //   shows.push(data[i]);
            // }
            let display = d3.select("#sample-metadata2");
            display.html("");
            //console.log(data)
            console.log(network)
            console.log(shows)
            let runTimeSamples = shows.filter(sampleobject => sampleobject.network == network);
            // let runTimeSamples = shows.filter(function (runTime) {
            //   return runTime.network == network
            // });
            console.log(runTimeSamples)
            // let episodeSamples = networkSamples.filter(function (episodes) {
            //   return episodes.name == followers
            // });
            // console.log(episodeSamples)
            let runTimeCounts = getcounts(runTimeSamples, "name");
            console.log("networkCounts", runTimeCounts)
            console.log(Object.keys(runTimeCounts))
            console.log(Object.values(runTimeCounts));
            let runTimeSampleResults = Object.keys(runTimeCounts).map(f => ({ type: f, count: runTimeCounts[f] }))
            console.log("runTimeResults", runTimeSampleResults)
            // Sort the data by the most number of violations in each boro in descending (most to least)
            let runTimeValues = Object.values(runTimeSampleResults).sort((a, b) => b.count - a.count);
            console.log("runTimevalues", runTimeValues)
            // Slice the first 5 objects
            runTimeSlicedData = runTimeValues.slice(0, 5);
            console.log("runtimeSlicedData", runTimeSlicedData)
            runTimeDisplay = []
            for (var s = 0; s < runTimeSlicedData.length; s++) {
                runTimeDisplay.push(runTimeSlicedData[s].type);
            }
            console.log("runtimedisplay", runTimeDisplay)
            //loop to get violations info into the top violations in each boro box
            Object.entries(runTimeDisplay).forEach(([, b]) => {
                display.append("h5").text(`- ${b}`);
            });
            // dropdown2("75")

        })
    }
    //changes with dropdown changes
    function optionChanged(view) {
        fillDropDown(view);


    };

    //initializes everything when the page runs
    function init() {


        // //  // see dropdown
        d3.json("show_display.json").then((data) => {
            console.log(data)
            let shows = [];
            for (var i = 0; i < data.length; i++) {
                shows.push(Object.values(data)[i]);
            }
            console.log("shows", shows)
            var obj = {};
            shows.forEach(function (value) {
                //console.log(value)
                if (obj[value["network"]]) {
                    obj[value["network"]]++;
                }
                else {
                    obj[value["network"]] = 1;
                }
            })
            console.log(obj)
            console.log("ID#", shows)
            const twoLabels = { data: shows.map(({ network, name }) => ({ network, name })) };
            console.log("twoLabels", twoLabels)
            let results = Object.keys(obj).map(e => ({ type: e, count: obj[e] }))
            console.log("results", results)
            network = []
            for (var j = 0; j < results.length; j++) {
                network.push(results[j].type);
            }
            console.log("network", network)
            var tvShows = {};
            shows.forEach(function (value) {
                //console.log(value)
                if (tvShows[value["runtime"]]) {
                    tvShows[value["runtime"]]++;
                }
                else {
                    tvShows[value["runtime"]] = 1;
                }
            })
            console.log(tvShows)
            let tvResults = Object.keys(tvShows).map(e => ({ type: e, count: obj[e] }))
            console.log("tvResults", tvResults)
            tvList = []
            for (var j = 0; j < tvResults.length; j++) {
                tvList.push(tvResults[j].type);
            }

            let dropDown = d3.select("#selDataset");
            network.forEach((c) => {
                dropDown.append("option").text(c).property("value", c)
            });
            let dropDown2 = d3.select("#selDataset2");
            tvList.forEach((o) => {
                dropDown2.append("option").text(o).property("value", o)
            })
        })
    }

    //setting function to get any 2 different elements of the json file
    function getcounts(dataArray, myParam) {

        var finalArray = {};
        dataArray.forEach(function (networkNames) {
            //console.log(value)
            if (finalArray[networkNames[myParam]]) {
                finalArray[networkNames[myParam]]++;
            }
            else {
                finalArray[networkNames[myParam]] = 1;
            }
        });
        return finalArray;

    }
})
    //}
    //init()