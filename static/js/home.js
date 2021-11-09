//function (success)
// function getNetworkRuntimes(shows, network) {
//     console.log(shows)
//     let networkRuntimes = []
//     let showsFilter = Object.keys(network);
//     console.log(showsFilter)
//     return shows.filter(networkshows =>{
//       return showsFilter.every(runtime =>{
//         if(!network[runtime].length) {
//           return true;
//         }
//         if(shows.network){
//           return network[runtime].includes(shows.network);
//         } else{
//         return network[runtime].some(filter => shows.some(v => v.network === filter));
//         }
//       });


// var sliderSimple = d3
// //.sliderBottom()
// //.min(d3.min(data))
// //.max(d3.max(data))
// //.width(300)
// //.tickFormat(d3.format('.2%'))
// //.ticks(5)
// //.default(0.015)
// .on('onchange', val => {
//   d3.select('p#value-simple').text(d3.format('.2%')(val));
// });

// var gSimple = d3
// .select('div#slider-simple')
// .append('svg')
// .attr('width', 500)
// .attr('height', 100)
// .append('g')
// .attr('transform', 'translate(30,30)');

// gSimple.call(sliderSimple);





var slider_good = document.getElementById("myGoodRange");
var output_good = document.getElementById("outputGood");
output_good.innerHTML = slider_good.value;

slider_good.oninput = function() {
  output_good.innerHTML = this.value;
}


var good = d3.select("#myGoodRange").property("value");
console.log(good);




var slider_fun = document.getElementById("myFunRange");
var output_fun = document.getElementById("outputFun");
output_fun.innerHTML = slider_fun.value;

slider_fun.oninput = function() {
  output_fun.innerHTML = this.value;
}


var fun = d3.select("#myFunRange").property("value");
console.log(fun);



var slider_wow = document.getElementById("myWowRange");
var output_wow = document.getElementById("outputWow");
output_wow.innerHTML = slider_wow.value;

slider_wow.oninput = function() {
  output_wow.innerHTML = this.value;
}

var wow = d3.select("#myWowRange").property("value");
console.log(wow);


var slider_sad = document.getElementById("mySadRange");
var output_sad = document.getElementById("outputSad");
output_sad.innerHTML = slider_sad.value;

slider_sad.oninput = function() {
  output_sad.innerHTML = this.value;
}

var sad = d3.select("#mySadRange").property("value");
console.log(wow);



var slider_soso = document.getElementById("mySosoRange");
var output_soso = document.getElementById("outputSoso");
output_soso.innerHTML = slider_soso.value;

slider_soso.oninput = function() {
  output_soso.innerHTML = this.value;
}


var soso = d3.select("#mySosoRange").property("value");
console.log(soso);


var slider_bad = document.getElementById("myBadRange");
var output_bad = document.getElementById("outputBad");
output_bad.innerHTML = slider_bad.value;

slider_bad.oninput = function() {
  output_bad.innerHTML = this.value;
}


var bad = d3.select("#myBadRange").property("value");
console.log(bad);


function getfollower(){
//var variables = ["succesful", "not successful"]
    document.getElementById('success').on(function (success) {
        var clickcode = '';
        for (var i = 0; i < success.points.length; i++) {
            clickcode = success.points[i].x;
        }

        let followdata = getfollower(clickcode);
        console.log(followdata.length);

        let followerdisplay = d3.select("#followerdetails");
        followerdisplay.html("");

        followerdisplay.append("h5").text(`Expected Followers ${clickcode}:`);

        for (k = 0; k < restdata.length; k++) {
            followerdisplay.append("ul").append("li").text(`${followdata[k]}`);
        }
    })
}