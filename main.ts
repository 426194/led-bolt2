let y = 0
let x = 2
let dx = 1
let x2 = 1
let dx2 = 1
let x3 = 0
let dx3 = 1
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    if (x2 >= 4) {
        dx2 = -1
    } else if (x2 <= 0) {
        dx2 = 1
    }
    if (x3 >= 4) {
        dx3 = -1
    } else if (x3 <= 0) {
        dx3 = 1
    }
    x += dx
    x2 += dx2
    x3 += dx3
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x3, y, 20)
        led.plotBrightness(x2, y, 60)
        led.plot(x, y)
        y += 1
    }
    basic.pause(100)
})
