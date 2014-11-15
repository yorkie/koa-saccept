
var accept = require('saccept').accept;

function saccept (option) {
  var isStrong = !option.weak;
  return function * () {
    var raw = this.request.headers['accept'];
    this.request.accept = function (ver, mime) {
      return accept(raw, res, next, isStrong, ver, mime);
    };
  };
}