var exports = module.exports = function Foo () {};

var proto = exports.prototype;

proto.update = function () {
	var entity = this.entity;
	var transform = entity.transform;
	var spriteRender = entity.spriteRender;
	transform.layerOrder = transform.position.y + spriteRender.sourceWidth / 2;
};
