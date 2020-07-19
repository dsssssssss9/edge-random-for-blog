let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    for (let index = 0; index <= 9; index++) {
        strip.setPixelColor(index, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        strip.show()
    }
})
