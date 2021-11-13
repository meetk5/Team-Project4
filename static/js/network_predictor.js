// Good Mood input
var slider_good = document.getElementById("myGoodRange");
var output_good = document.getElementById("outputGood");
output_good.innerHTML = slider_good.value;
console.log(slider_good);
console.log(output_good);
console.log(slider_good.value);

slider_good.oninput = function () {
    output_good.innerHTML = this.value;
}

var good = d3.select("#myGoodRange").property("value");
console.log(good);

// Fun Mood Input
var slider_fun = document.getElementById("myFunRange");
var output_fun = document.getElementById("outputFun");
output_fun.innerHTML = slider_fun.value;

slider_fun.oninput = function () {
    output_fun.innerHTML = this.value;
}

var fun = d3.select("#myFunRange").property("value");
console.log(fun);

// Wow Mood Input
var slider_wow = document.getElementById("myWowRange");
var output_wow = document.getElementById("outputWow");
output_wow.innerHTML = slider_wow.value;

slider_wow.oninput = function () {
    output_wow.innerHTML = this.value;
}

var wow = d3.select("#myWowRange").property("value");
console.log(wow);

// Sad Mood Input
var slider_sad = document.getElementById("mySadRange");
var output_sad = document.getElementById("outputSad");
output_sad.innerHTML = slider_sad.value;

slider_sad.oninput = function () {
    output_sad.innerHTML = this.value;
}

var sad = d3.select("#mySadRange").property("value");
console.log(wow);

// So-So Mood Input
var slider_soso = document.getElementById("mySosoRange");
var output_soso = document.getElementById("outputSoso");
output_soso.innerHTML = slider_soso.value;

slider_soso.oninput = function () {
    output_soso.innerHTML = this.value;
}

var soso = d3.select("#mySosoRange").property("value");
console.log(soso);

// Bad Mood Input
var slider_bad = document.getElementById("myBadRange");
var output_bad = document.getElementById("outputBad");
output_bad.innerHTML = slider_bad.value;

slider_bad.oninput = function () {
    output_bad.innerHTML = this.value;
}

var bad = d3.select("#myBadRange").property("value");
console.log(bad);


// Submit On Click Event
// var submitnetwork = document.getElementById("submitbtn");
// submitnetwork.addEventListener('click', findnetwork);

// Network function code
function findnetwork() {
    console.log("Network function running")
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
        console.log("Running then function")
        console.log(moodresult)
        if (err) { throw err };
        if (!moodresult) {
            console.log("I wasn't able to get data from the Web API you selected.");
            return;
        }

        d3.select("#network").text(`Suggested Network: ${moodresult}`)

        d3.json("/tvdata").then(function (data) {

            console.log(data);

            var time = d3.select("#selRuntime").property("value");
            console.log(time)

            let showname = []

            for (i = 0; i < data.length; i++) {
                if ((data[i]['Network'] == moodresult) && (data[i]['Runtime'] == time)) {
                    showname.push(data[i]['Name'])
                }
            }
            console.log(showname);

            // d3.select("#showlist").text(`- ${showname.slice(0,5)}`)

            d3.select("#showlist").text(`Recommendation of Popular Shows:`)

            for (j = 0, k = 0; j < showname.length, k < 5; j++, k++) {
                if (showname.length == 0) {
                    d3.select("#showlist").text(`No Shows for your current runtime selection :(`)
                } else {
                    d3.select("#showlist").append("ul").append("li").text(`${showname[j]}`);
                }
                if ((k == 4) || (j == ((showname.length) - 1))) { break; }

            }
        })

    })
}


// Reset Button clearForm function code
function clearForm() {
    document.getElementById('myGoodRange').value = 50;
    d3.select("#outputGood").html("50")
    document.getElementById('myFunRange').value = 50;
    d3.select("#outputFun").html("50")
    document.getElementById('myWowRange').value = 50;
    d3.select("#outputWow").html("50")
    document.getElementById('mySosoRange').value = 50;
    d3.select("#outputSoso").html("50")
    document.getElementById('mySadRange').value = 50;
    d3.select("#outputSad").html("50")
    document.getElementById('myBadRange').value = 50;
    d3.select("#outputBad").html("50")
    document.getElementById("network").innerHTML = ""
    document.getElementById("selRuntime").value = 15
    document.getElementById("showlist").innerHTML = ""
}