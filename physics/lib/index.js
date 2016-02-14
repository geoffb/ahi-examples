var Engine = require("ahi");
var Entity = require("ahi/core/Entity");

Entity.definePrefabs(require("./prefabs"));

const WIDTH = 640;
const HEIGHT = 480;

const COUNT = 10;

// Init game engine
var game = new Engine(WIDTH, HEIGHT);

// Flag indicating whether debugging visualization are drawn
game.renderGizmos = true;

// Create N ghost entities with random position and velocity
for (var i = 0; i < COUNT; ++i) {
	var ghost = Entity.fromPrefab("ghost");
	ghost.transform.position.x = Math.round(Math.random() * WIDTH);
	ghost.transform.position.y = Math.round(Math.random() * HEIGHT / 2);
	var speed = 0.05 + Math.random() * 0.1;
	ghost.rigidBody.velocity.x = Math.random() > 0.5 ? -speed : speed;
	ghost.rigidBody.velocity.y = Math.random() > 0.5 ? -speed : speed;
	game.addEntity(ghost);
}

// Center camera on the game area
game.camera.transform.translate(
	Math.round(WIDTH / 2),
	Math.round(HEIGHT / 2)
);

// #SHIPIT
game.start();
