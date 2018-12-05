const fs = require('fs')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let totalFeet = 0
    data.toString().split('\r\n').forEach(line => {
        const [ l, w, h ] = line.split('x')
        let sorted = [l, w, h].sort((a, b) => a - b)

        totalFeet += 2 * sorted[0] + 2 * sorted[1] + l * w * h
    })

    console.log(totalFeet) // 3812909
})