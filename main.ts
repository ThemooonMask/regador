let Umidade = 0
basic.showIcon(IconNames.Target)
datalogger.setColumnTitles("Unidade de Terra")
robotbit.Servo(robotbit.Servos.S1, 50)
basic.forever(function () {
    Umidade = pins.digitalReadPin(DigitalPin.P1)
    datalogger.log(datalogger.createCV("Unidade de Terra", pins.digitalReadPin(DigitalPin.P1)))
    if (Umidade > 1000) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (Umidade > 800) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        robotbit.Servo(robotbit.Servos.S1, 50)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        robotbit.Servo(robotbit.Servos.S1, 50)
        basic.pause(5000)
    }
})
