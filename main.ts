basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= 4; j++) {
            if (I % 2 == 0 && j % 2 == 0) {
                led.plot(I, j)
            } else if (I % 2 != 0 && j % 2 != 0) {
                led.plot(I, j)
            }
        }
    }
})
