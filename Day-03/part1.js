const fs = require('fs')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let contents = data.toString()
    let locations = ['0,0']
    let currentLocation = locations[0]

    for (let i = 0, l = contents.length; i < l; i++) {
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
        if (!locations.includes(currentLocation)) {
            locations.push(currentLocation)
        }
    }

    console.log(locations.length) // 2081
})