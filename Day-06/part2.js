const fs = require('fs');

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let lights = new Uint8Array(1000 * 1000)
    data.toString().split('\r\n').forEach(line => {
        let [start, end] = line.match(/(\d[^\s]+(?=[^,])\d*)/g).map(match => {
            return match.split(',').map(v => parseInt(v))
        })

        for (let x = start[0]; x <= end[0]; x++) {
            for (let y = start[1]; y <= end[1]; y++) {
                let index = 1000 * x + y

                if (line.startsWith('toggle')) {
                    lights[index] = lights[index] + 2
                } else if (line.startsWith('turn on')) {
                    lights[index] = lights[index] + 1
                } else {
                    if (lights[index] > 0) {
                        lights[index] = lights[index] - 1
                    }
                }
            }
        }
    })

    let totalBrightness = 0
    lights.map(light => totalBrightness += light)

    console.log(totalBrightness) // 14687245
})