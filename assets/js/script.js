var c = document.getElementById( "car" );
var ctx = c.getContext("2d");

// toit de la voiture
ctx.fillStyle = "#00A954"
ctx.fillRect(150,200,200,75)
// corps de la voiture
ctx.fillStyle = "#00A954"
ctx.fillRect(100,250,300,75)
// roues
ctx.beginPath();
ctx.strokeStyle = "#gray";
ctx.fillStyle="#CDCDCD";
ctx.arc(150,355,30,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(350,355,30,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();
