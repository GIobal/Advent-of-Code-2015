const fs = require('fs')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let contents = data.toString()
    let locations = ['0,0']
    let currentLocationSanta = locations[0]
    let currentLocationRobot = locations[0]

    for (let i = 0, l = contents.length; i < l; i++) {
        let currentLocation = i % 2 ? currentLocationSanta : currentLocationRobot
        let [x, y] = currentLocation.split(',')

        switch(contents[i]) {
            case '>':
                x++
                break;
            case '<':
                x--
                break
            case '^':
                y++
                break
            default:
                y--
                break
        }

        currentLocation = [x, y].join(',')

        if (i % 2) {
            currentLocationSanta = currentLocation
        } else {
            currentLocationRobot = currentLocation
        }

        if (!locations.includes(currentLocation)) {
            locations.push(currentLocation)
        }
    }

    console.log(locations.length) // 2341
})