function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return _instanceof(left, right); } }

var a = 1;

var b = function (a, b) {
  return a + b + 1;
};

_instanceof(a, b);