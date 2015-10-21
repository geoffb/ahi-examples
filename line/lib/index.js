var Engine = require("ahi/core/Engine");
var Entity = require("ahi/core/Entity");
var math = require("ahi/math");

Entity.defineComponent("ants", require("./components/Ants"));

var game = new Engine(640, 480);

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
var segmentWidth = 640 / segments;
var halfHeight = 480 / 2;
var scaleY = 1;

for (var x = 1; x < segments; ++x) {
	var offsetY = math.lerp(0, halfHeight, x / segments) * scaleY;
	line.lineRender.addPoint(
		x * segmentWidth,
		halfHeight + offsetY
	);
	scaleY *= -1;
}

game.camera.transform.position.x = 640 / 2;
game.camera.transform.position.y = 480 / 2;

game.addEntity(line);

game.start();
