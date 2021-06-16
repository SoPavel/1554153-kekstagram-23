// #1 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  if(min < 0 || max < 0){
    return undefined;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


getRandomInt(200, 130);


// #2 Исправил!
function checkLength(string, maxLength) {
  return (string.length <= maxLength);
}

checkLength();

//
