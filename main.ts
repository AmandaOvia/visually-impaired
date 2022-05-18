let range: neopixel.Strip = null
let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    RED()
    basic.pause(1000)
    YELLOW()
    basic.pause(1000)
    GREEN()
    basic.pause(1000)
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
}
basic.forever(function () {
	
})
