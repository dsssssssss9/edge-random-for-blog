let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setBrightness(168)
strip.clear()
strip.show()
let Bright = 196
let Delay = 0
basic.forever(function () {
    for (let index = 0; index <= 9; index++) {
        strip.setPixelColor(index, neopixel.rgb(randint(0, Bright), randint(0, Bright), randint(0, Bright)))
        strip.show()
    }
    basic.pause(randint(10, Delay))
})
