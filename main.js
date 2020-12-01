video = null;
status = null;

function preload() {
  video = createVideo("video.mp4");
  video.hide();
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}

function start() {
  status = true;
  objectDetector = ml5.objectDetector("cocossd", function () {
    console.log("Model loaded");
    video.loop();
    video.speed(1);
    video.volume(0);
  });
}

function draw() {
  image(video, 0, 0, 640, 420);
}
