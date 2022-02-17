let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(204,255,255);

  line(200,0,200,200)
  rect(267,75,65,100)

  rect(67,75,65,100);
  strokeWeight(3)

  fill(160,82,45)
  rect(67,30,20,50);
  rect(78,130,20,40);
  rect(267,30,20,50);
  rect(278,130,20,40);

  fill(255,255,255)
  rect(107,120,15,15);
  rect(307,120,15,15);

  ellipse(68,20,10,10);
  ellipse(80,15,10,10);
  ellipse(70,05,10,10);

  
  fill(255,192,203)
  triangle(100, 20, 50, 100,150, 100)
  triangle(300, 20,250, 100,350, 100)
  strokeWeight(3)

  fill(255,255,255)
  var x = 20 + 2*Math.sin(PI*j/20)
  var y = 15 + 2*Math.sin(PI*j/20)
  var z = 5 + 2*Math.sin(PI*j/20)
  j += 0.1

  ellipse(268,x,10,10);
  ellipse(280,y,10,10);
  ellipse(270,z,10,10);
  var y = 200 + 20*Math.sin(PI*j/20)
  j += 1
  fill(240, 192, 35)
 
}
