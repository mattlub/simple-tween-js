const tweenLibrary = require('./tween')

const test = {}
tweenLibrary(test)

// function (startValue, distance, duration, animationType, loop) {
const tween = new test.Tween(0, 10, 1000, 'linear', 'repeat')

console.log(tween.getValue())


setTimeout(() => {
  console.log(500, tween.getValue())
}, 500)

setTimeout(() => {
  console.log(1100, tween.getValue())
}, 1100)

setTimeout(() => {
  console.log(1200, tween.getValue())
}, 1200)

setTimeout(() => {
  console.log(2000, tween.getValue())
}, 2000)

setTimeout(() => {
  console.log(3500, tween.getValue())
}, 3500)

const times = [0, 500, 1000, 2000]