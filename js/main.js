// #1
function myNumber(min, max) {
  let randNumber = Math.random() * (max-min);
  randNumber = Math.round(randNumber);
  return randNumber;
}
myNumber(3, 10);

// #2
function getCeilNumber(min, max) {
  return Math.ceil(Math.random()* (max - min) - min);
}
getCeilNumber(10, 20);

//   Оба примера выдуманны мной
