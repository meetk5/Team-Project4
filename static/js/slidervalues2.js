var form = d3.select("form");

form.on("#submitbtn", findnetwork);

form.on("#reset", clearform);




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


function clearForm() {
  d3.select("#myGoodRange").html("")
  d3.select("#myGoodRange").html("")
  d3.select("#myGoodRange").html("")
  d3.select("#myGoodRange").html("")
  d3.select("#myGoodRange").html("")
}