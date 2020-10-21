input.onButtonPressed(Button.A, function () {
    radio.sendString("oh my god")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("uuuuuuu")
})
basic.showNumber(0)
radio.setGroup(1)
basic.forever(function () {
	
})
