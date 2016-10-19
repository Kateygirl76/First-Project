function setup() { 
  createCanvas( 1000 , 1000 );
}

function draw() {
  quad( mouseY , mouseX , 86  , 20 , 69 , 63 , 30 , 76 );
  fill( 255 , 255 , 204 )
  stroke( 0 , 255 , 204 );
  triangle( mouseX , mouseY , 58 , 20 , 86 , 75 );
  stroke( 0 , 255 , 204 )
}
