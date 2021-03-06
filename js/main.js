// Set up renderer and append to body. This ends up as a canvas.
var renderer = PIXI.autoDetectRenderer(800, 600, { antialias: true });
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
var graphics = new PIXI.Graphics();
stage.addChild(graphics);

// Create a function to draw a circle with our 
// graphics object.
function drawCircle(x, y, r) {
    graphics.lineStyle(0);
    graphics.beginFill(0xFFFF0B, 0.5);
    graphics.drawCircle(x, y, r);
    graphics.endFill();
}

// Initialize variables.  We're drawing a circle
// with radius littleR and it follows the path
// centered at (centerX, centerY) with radius bigR
var t = 0;
var centerX = 300;
var centerY = 300;
var bigR = 200;
var littleR = 60;

// run the render loop
animate();

function animate() {
    var x = bigR*Math.sin(t) + centerX;
    var y = bigR*Math.cos(t) + centerY;

    graphics.clear();
    drawCircle(x, y, littleR);
    t += .05;

    renderer.render(stage);
    requestAnimationFrame( animate );
}
