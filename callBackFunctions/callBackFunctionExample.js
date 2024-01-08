let a = 2;
let b = 2;

function multiply() {
  b = a * b;
  console.log(`The value of b = ${b}`);
}
function getValue(callback) {
  setTimeout(function () {
    a = 5;
    callback();
  }, 500);
}

getValue(multiply);
