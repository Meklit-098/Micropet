input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # # # .
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # . # .
        # . # . #
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
let food = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    basic.pause(5000)
    food += -1
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (input.lightLevel() > 1000) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
