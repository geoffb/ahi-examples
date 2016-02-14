var Engine = require("ahi/core/Engine");
var Entity = require("ahi/core/Entity");

// Create an instance of the Ahi engine, specifiying the size of our canvas
var game = new Engine(640, 480);

// Create a simple entity
var shape = new Entity({
	// The Transform component contains the position of your entity is required for all entities
	transform: {},
	// The ShapeRender component renders a shape at the position from the Transform component
	shapeRender: {
		// points are relative to transform.position
		// points are listed as: [x, y, x, y, ... x, y]
		// These points describe an equilateral triangle
		points: [0, -150, 150, 150, -150, 150],
		// fillStyle is the color of our shape
		fillStyle: "orange"
	}
});

// Add our newly created shape entity to the engine
game.addEntity(shape);

// And finally, start the engine
game.start();
