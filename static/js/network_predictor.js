var form = d3.select("form");

form.on("#submitbtn", findnetwork);

form.on("reset", clearForm);




var slider_good = document.getElementById("myGoodRange");
var output_good = document.getElementById("outputGood");
output_good.innerHTML = slider_good.value;


slider_good.onchange = function () {
    output_good.innerHTML = this.value;
    console.log(output_good.innerHTML)
}

var good = d3.select("#myGoodRange").property("value");
console.log(good);

console.log(slider_good)
console.log(output_good)



var slider_fun = document.getElementById("myFunRange");
var output_fun = document.getElementById("outputFun");
output_fun.innerHTML = slider_fun.value;

slider_fun.oninput = function () {
    output_fun.innerHTML = this.value;
}



var slider_wow = document.getElementById("myWowRange");
var output_wow = document.getElementById("outputWow");
output_wow.innerHTML = slider_wow.value;

slider_wow.oninput = function () {
    output_wow.innerHTML = this.value;
}



var slider_sad = document.getElementById("mySadRange");
var output_sad = document.getElementById("outputSad");
output_sad.innerHTML = slider_sad.value;

slider_sad.oninput = function () {
    output_sad.innerHTML = this.value;
}



var slider_soso = document.getElementById("mySosoRange");
var output_soso = document.getElementById("outputSoso");
output_soso.innerHTML = slider_soso.value;

slider_soso.oninput = function () {
    output_soso.innerHTML = this.value;
}


var slider_bad = document.getElementById("myBadRange");
var output_bad = document.getElementById("outputBad");
output_bad.innerHTML = slider_bad.value;

slider_bad.oninput = function () {
    output_bad.innerHTML = this.value;
}

function findnetwork() {
    d3.event.preventDefault();
    var good = d3.select("#myGoodRange").property("value");
    var fun = d3.select("#myFunRange").property("value");
    var wow = d3.select("#myWowRange").property("value");
    var sad = d3.select("#mySadRange").property("value");
    var soso = d3.select("#mySosoRange").property("value");
    var bad = d3.select("#myBadRange").property("value");
    console.log(good);

    var moodList = [good, fun, wow, sad, soso, bad];

    d3.json("/get_your_recommendation", {
        method: "POST",
        body: JSON.stringify(
            moodList
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(function (moodresult, err) {
        if (err) { throw err };
        if (!moodresult) {
            console.log("I wasn't able to get data from the Web API you selected.");
            return;
        }
    })
}


function clearForm() {
    d3.select("#top-note-sel").html("");
    d3.select("#middle-note-sel").html("");
    d3.select("#base-note-sel").html("");
    d3.select(".results-row").html("");
    d3.select("tbody").html("");

}