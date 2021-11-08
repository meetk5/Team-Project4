
//function init() {
var form = d3.select("form");

// Create fragrance
// form.on("submit", sliders);

form.on("reset", clearForm);

function dropdown(network) {
    d3.json("show_display.json").then((data) => {
        // //get samples info from json file
        //console.log("data", data)
        let shows = [];
        for (var i = 0; i < data.length; i++) {
            shows.push(data[i]);
        }
        // console.log(shows)
        let display = d3.select("#sample-metadata");
        display.html("");

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
    d3.json("show_display.json").then((data) => {
        console.log(data)

        var tvShows = {};
        data.forEach(function (value) {
            //console.log(value)
            if (tvShows[value["network"]]) {
                tvShows[value["network"]]++;
            }
            else {
                tvShows[value["network"]] = 1;
            }
        })
        console.log(tvShows)
        let tvResults = Object.keys(tvShows).map(e => ({ type: e, count: tvShows[e] }))
        console.log("tvResults", tvResults)
        tvList = []
        for (var j = 0; j < tvResults.length; j++) {
            tvList.push(tvResults[j].type);
        }


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
//------------------------------------------------------------------------------------
function slider() {
    d3.event.preventDefault();
    var goodRange = d3.select("#myGoodRange").property("value");
    var funRange = d3.select("#myFunRange").property("value");
    var wowRange = d3.select("#myWowRange").property("value");
    var sadRange = d3.select("#mySadRange").property("value");
    var sosoRange = d3.select("#mySosoRange").property("value");
    var badRange = d3.select("#myBadRange").property("value");

    var moodNumber = []
    for (i = 0; i < goodRange; i++) {
        var goodRangeID = "#goodRange" + i;
        console.log(goodRangeID);
        var goodRangeFeature = "good_range_" + d3.select(goodRangeID).node().value;
        console.log(goodRangeFeature);
        moodNumber.push(goodRangeFeature);
    }
    for (i = 0; i < funRange; i++) {
        var funRangeID = "#funRange" + i;
        console.log(funRangeID);
        var funRangeFeature = "fun_range_" + d3.select(funRangeID).node().value;
        console.log(funRangeFeature);
        moodNumber.push(funRangeFeature);
    }
    for (i = 0; i < wowRange; i++) {
        var wowRangeID = "#wowRange" + i;
        console.log(wowRangeID);
        var wowRangeFeature = "wow_range_" + d3.select(wowRangeID).node().value;
        console.log(wowRangeFeature);
        moodNumber.push(wowRangeFeature);
    }
    for (i = 0; i < sadRange; i++) {
        var sadRangeID = "#sadRange" + i;
        console.log(sadRangeID);
        var sadRangeFeature = "sad_range_" + d3.select(sadRangeID).node().value;
        console.log(sadRangeFeature);
        moodNumber.push(sadRangeFeature);
    }
    for (i = 0; i < sosoRange; i++) {
        var sosoRangeID = "#sosoRange" + i;
        console.log(sosoRangeID);
        var sosoRangeFeature = "soso_range_" + d3.select(sosoRangeID).node().value;
        console.log(sosoRangeFeature);
        moodNumber.push(sosoRangeFeature);
    }
    for (i = 0; i < badRange; i++) {
        var badRangeID = "#badRange" + i;
        console.log(badRangeID);
        var badRangeFeature = "bad_range_" + d3.select(badRangeID).node().value;
        console.log(badRangeFeature);
        moodNumber.push(badRangeFeature);
    }
    d3.json("show_display.json", {
        method: "POST",
        body: JSON.stringify(
            moodNumber
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(function (moodResult, err) {
        if (err) { throw err };
        if (!moodResult) {
            console.log("I wasn't able to get data from the Web API you selected.");
            return;
        }
    var resultsRow = d3.select("FIGURE OUT WHERE")
    resultsRow.html("")
    resultsRow.append("h4")
        .text(moodResult)

    })
}
function clearForm() {
    d3.select("#myGoodRange").html("");
    d3.select("#myFunRange").html("");
    d3.select("#myWowRange").html("");
    d3.select("#mySadRange").html("");
    d3.select("#mySosoRange").html("");
    d3.select("#myBadRange").html("");
    d3.select("d-flex justify-content-center").html("");
    //d3.select("tbody").html("");

}