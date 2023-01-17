console.log("hello world");

var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');
canvas.height = 750;
canvas.width = 1500;
c.fillRect(725,350,50,50);
c.fillRect(750,0,1,750);
c.fillRect(0, 375,1500,1)

console.log(canvas);