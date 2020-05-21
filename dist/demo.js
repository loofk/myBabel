import _Array$from from "@babel/runtime-corejs2/core-js/array/from";
import _instanceof from "@babel/runtime-corejs2/helpers/instanceof";
var a = 1;

var b = function (a, b) {
  return a + b + 1;
};

_instanceof(a, b);

var c = _Array$from({
  length: 10
}, function () {
  return 1;
})[(1, 2, 3)].includes(1) && console.log('babel-runtime tranformed');

var d = _Array$from({
  length: 10
}, function () {
  return 1;
});