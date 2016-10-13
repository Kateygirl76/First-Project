function setup() { 
  createCanvas( 800 , 800 );
}

function draw() {
  ellipse( mouseX, mouseY , 100 , 100 );
  fill( 102 , 0 , 102 );
  stroke( 153 , 102 , 255 );
  triangle( mouseX , mouseY , 58 , 20 , 86 , 75 );
}
