//function init() {
  
    function dropdown(network) {
        d3.json("runtime.json").then((data) => {
          // //get samples info from json file
          console.log("data", data)
          let shows = [];
          for (var i = 0; i < data.length; i++) {
            shows.push(data[i]);
          }
         // console.log(shows)
          let display = d3.select("#sample-metadata");
          display.html("");
          console.log(shows)
          let networkSamples = shows.filter(function (citation) {
            return citation.runtime == network
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
          // let followerCounts = getcounts(networkSamples, "followers");
          // console.log("followers", followerCounts)
      
          let networkSampleResults = Object.keys(networkCounts).map(f => ({ type: f, count: networkCounts[f] }))
          console.log("networkSampleResults", networkSampleResults)
          // Sort the data by the most number of violations in each boro in descending (most to least)
          let netValues = Object.values(networkSampleResults).sort((a, b) => b.count - a.count);
          console.log("netvalues", netValues)
          // Slice the first 5 objects
          SlicedData = netValues.slice(0, 5);
          console.log("SlicedData", SlicedData)
      
          
          episodeDisplay = []
          for (var s = 0; s < SlicedData.length; s++) {
            episodeDisplay.push(SlicedData[s].type);
          }
          console.log("episodedisplay", episodeDisplay)
          //loop to get violations info into the top violations in each boro box
          Object.entries(episodeDisplay).forEach(([, b]) => {
            display.append("h5").text(`- ${b}`);
          });
      
         
        })
      }
      
     // dropdown("55")
      
      
      
      //changes with dropdown changes
      function optionChanged(view) {
        dropdown(view);
       
      
      };
      
      //initializes everything when the page runs
      function init() {
      
      
        // //  // see dropdown
        d3.json("runtime.json").then((data) => {
          console.log(data)
          
          var tvShows = {};
          data.forEach(function (value) {
            //console.log(value)
            if (tvShows[value["runtime"]]) {
              tvShows[value["runtime"]]++;
            }
            else {
              tvShows[value["runtime"]] = 1;
            }
          })
          console.log(tvShows)
          let tvResults = Object.keys(tvShows).map(e => ({ type: e, count: tvShows[e] }))
          console.log("tvResults", tvResults)
          tvList = []
          for (var j = 0; j < tvResults.length; j++) {
            tvList.push(tvResults[j].type);
          }
      
          // let dropDown = d3.select("#selDataset");
          // network.forEach((c) => {
          //   dropDown.append("option").text(c).property("value", c)
          // });
          let dropDown = d3.select("#selDataset");
          tvList.forEach((o) => {
            dropDown.append("option").text(o).property("value", o)
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
      //}
      init()