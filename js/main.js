// #1 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(100, 130);


// #2 Исправил!
function checkLength (minString, maxString) {
  return (minString.length <= maxString);
}

checkLength();

//
