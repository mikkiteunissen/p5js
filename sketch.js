function setup() {
  createCanvas(400, 400); //groote scherm
  background(250);//achtergrondkleur
}

function draw() {
  noStroke();//geen rand
  fill(random() * 227, 180, 100,);//kleuren van cirkels 
  ellipse(random()*400, random()*500,10,10); //kleinste rondjes 
  ellipse(random()*400, random()*500,20,20); //middelste rondjes
  ellipse(random()*400, random()*500,40,40); //grootste rondjes
  
}
