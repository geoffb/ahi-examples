var Engine = require("ahi");
var Entity = require("ahi/core/Entity");

Entity.defineComponent("foo", require("./components/Foo"));
Entity.definePrefabs(require("./prefabs"));

var game = new Engine();

for (var i = 0; i < 20; ++i) {
	var player = Entity.fromPrefab("player");
	player.transform.position.x = Math.round(Math.random() * 640);
	player.transform.position.y = Math.round(Math.random() * 200);
	var speed = 0.05 + Math.random() * 0.1;
	player.rigidBody.velocity.x = Math.random() > 0.5 ? -speed : speed;
	//player.rigidBody.velocity.y = Math.random() > 0.5 ? -speed : speed;
	game.addEntity(player);
}

game.start();
