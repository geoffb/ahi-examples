var exports = module.exports = function Foo () {
	this.bar = "baz";
};

var proto = exports.prototype;

proto.update = function () {
	this.entity.spriteRender.sourceX = 0;
};

proto.triggerStay = function () {
	this.entity.spriteRender.sourceX = 64;
};
