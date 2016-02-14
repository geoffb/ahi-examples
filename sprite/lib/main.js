var Engine = require("ahi/core/Engine");
var Entity = require("ahi/core/Entity");

var game = new Engine(640, 480);

var ghost = new Entity({
	transform: {},
	spriteRender: {
		imagePath: "media/images/ghost.png",
		width: 64,
		height: 64
	}
});

game.addEntity(ghost);

game.start();
