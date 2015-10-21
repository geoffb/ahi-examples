var exports = module.exports = function (conf) {};

var proto = exports.prototype;

proto.update = function (dt) {
	var lineRender = this.entity.lineRender;
	lineRender.lineDashOffset -= 0.1 * dt;
};
