

function setup() {
  createCanvas(500, 500);
  noFill();
  for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
      x = int(random(0, 500));
      y = int(random(0, 500));
      a = int(random(0, 500));
      b = int(random(0, 500));
      rect(a, b, x, y);
    }           
  }
}


function draw() {
  
}
