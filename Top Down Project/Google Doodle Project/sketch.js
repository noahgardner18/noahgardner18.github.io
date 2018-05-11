var hit = false
var newmanText;
var hesseMan;
function setup() {
  rectMode(CORNER)
  imageMode(CENTER)
  createCanvas(windowWidth, windowHeight)
  newmanText = loadImage("newmandoodle.png")
  hesseMan = loadImage("Hesse 2.JPG")
}

function draw() {
  background(255)
  image(newmanText, 768, 300)
  rect(350, 220, 140, 140)
  noFill()
  if(hit == true){
    image(hesseMan, 400, 150)
    this.document.location.href ="http://nowellhesse.blogspot.com/"
  }
  hit = collidePointRect(mouseX, mouseY, 350, 220, 140, 140)

}
