function setup() { 
  createCanvas( 1000 , 1000 );
}

function draw() {
  quad( mouseY , mouseX , 86  , 20 , 69 , 63 , 30 , 76 );
  fill( 255 , 153 , 0 )
  stroke( 128  , 0  , 0 );
  triangle( mouseX , mouseY , 58 , 20 , 86 , 75 );
  stroke( 128 , 0  , 0 )
}
