import _Array$from from "@babel/runtime-corejs3/core-js-stable/array/from";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _instanceof from "@babel/runtime-corejs3/helpers/instanceof";

var _context;

var a = 1;

var b = function (a, b) {
  return a + b + 1;
};

_instanceof(a, b);

var c = _includesInstanceProperty(_context = _Array$from({
  length: 10
}, function () {
  return 1;
})[(1, 2, 3)]).call(_context, 1) && console.log('babel-runtime tranformed');

var d = _Array$from({
  length: 10
}, function () {
  return 1;
});