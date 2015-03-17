var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;

ctx.font = "30px Arial";
ctx.fillText(today,10,50);
