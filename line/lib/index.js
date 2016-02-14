var Engine = require("ahi/core/Engine");
var Entity = require("ahi/core/Entity");
var math = require("ahi/math");

Entity.defineComponent("ants", require("./components/Ants"));

const WIDTH = 640;
const HEIGHT = 480;

var game = new Engine(WIDTH, HEIGHT);

var line = new Entity({
	transform: {},
	lineRender: {
		strokeStyle: "cyan",
		lineWidth: 8,
		lineJoin: "round",
		lineCap: "round",
		lineDash: [20, 40]
	},
	ants: {}
});

var segments = 10;
var segmentWidth = Math.round(WIDTH / segments);
var halfHeight = Math.round(HEIGHT / 2);
var scaleY = 1;

for (var x = 1; x < segments; ++x) {
	var offsetY = math.lerp(0, halfHeight, x / segments) * scaleY;
	line.lineRender.addPoint(
		x * segmentWidth,
		halfHeight + offsetY
	);
	scaleY *= -1;
}

game.addEntity(line);

game.camera.transform.position.set(
	Math.round(WIDTH / 2),
	Math.round(HEIGHT / 2)
);

game.start();
