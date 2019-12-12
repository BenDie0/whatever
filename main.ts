let RandmNumber15 = 0
let randomNumbers610 = 0
let _1100 = 0
forever(function () {
    RandmNumber15 = Math.randomRange(1, 5)
    game.splash("this is a number from 1-5", "Hello" + ":" + RandmNumber15)
})
forever(function () {
    randomNumbers610 = Math.randomRange(6, 10)
    game.splash("this is a number from 6-10", "Hello" + ":" + randomNumbers610)
})
forever(function () {
    _1100 = Math.randomRange(1, 100)
    game.splash("this is a number from 1-100", "Hello" + ":" + _1100)
})
