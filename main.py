strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.clear()
strip.show()

def on_forever():
    for index in range(10):
        strip.set_pixel_color(index,
            neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        strip.show()
basic.forever(on_forever)
