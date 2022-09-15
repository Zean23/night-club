input.onButtonPressed(Button.A, function () {
    Cos += 1
    basic.showNumber(Cos)
})
input.onButtonPressed(Button.B, function () {
    Cos += -2
    basic.showNumber(Cos)
})
input.onGesture(Gesture.Shake, function () {
    Cos = 0
    basic.showNumber(Cos)
})
let Cos = 0
Cos = 0
basic.showNumber(Cos)
