var slider = document.getElementById("myHappyRange");
var output = document.getElementById("outputHappy");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
