$(document).ready(function () {    
    $function animate() {
        drawBox(150,150);
    }
});

c= document.getElementById("productCanvas");
ctx=c.getContext("2d");

function drawBox(bx,by) {
    ctx.beginPath();
    ctx.rect(bx,by, 60,60);
    ctx.lineWidth = "4";
    ctx.strokeStyle = "#40a";
    ctx.stroke();
    ctx.closePath;
}



