function setup() { 
  createCanvas( 1000 , 1000 );
}

function draw() {
  ellipse( mouseX, mouseY , 86  , 20 , 69 , 63 , 30 , 76 );
  fill( 102 , 0 , 102 )
  stroke( 153 , 102 , 255 );
  triangle( mouseX , mouseY , 58 , 20 , 86 , 75 );
}
