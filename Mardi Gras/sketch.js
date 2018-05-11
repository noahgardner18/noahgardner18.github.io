var iDidNotHitHer;
var patrick;
var sponge;
var bidoof;
var krabs
var alright
var korea;
var kubrick;

var x = 0

function preload() {
  patrick = loadImage("Surprised-Patrick-Meme-08.png")
  bidoof = loadImage("399-Bidoof.png")
  sponge = loadImage("mocking sponge.png")
  krabs = loadImage("krabs.png")
  alright = loadImage("alright alright alright.png")
  iDidNotHitHer = loadImage("0xj5W.gif")
  korea = loadImage("North-Korea.jpg")
  kubrick = loadSound("Ligeti_ Requiem II Kyrie.mp3")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  kubrick.setVolume(1);
  kubrick.play();
  kubrick.jump(180, 17);

}

function draw() {
  background(korea)
  image(krabs, x, 500, 200, 200)
  image(patrick, x-200, 500, 200, 200)
  image(bidoof, x-400, 500, 200, 200)
  image(sponge, x-600, 500, 200, 200)
  image(alright, x-900, 500, 400, 200)
  image(iDidNotHitHer, x-1200, 500, 400, 200)

x+= 5;

}
