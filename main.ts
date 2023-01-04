input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . . # . .
        . # # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(500)
})
basic.forever(function () {
	
})
