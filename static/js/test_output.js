var sel = document.getElementById("selectNetwork");

function display(){
    var selector =document.getElementById('followerdetails');
    selector.value = sel.options[sel.selectedIndex].value;
   // document.getElementById('followerdetails').value = value;
}