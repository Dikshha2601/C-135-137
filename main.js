status = null;

function preload() {}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function start() {
  status = true;
  objectDetector = ml5.objectDetector("cocossd", function () {
    console.log("Model loaded");
  });
}

function draw() {
  image(video, 0, 0, 640, 420);
}
