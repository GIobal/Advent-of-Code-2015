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
                    lights[index] = !lights[index]
                } else lights[index] = line.startsWith('turn on')
            }
        }
    })

    console.log(lights.filter(light => light).length) // 543903
})