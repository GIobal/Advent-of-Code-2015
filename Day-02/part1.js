const fs = require('fs')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let totalSquareFeet = 0
    data.toString().split('\r\n').forEach(line => {
        const [ l, w, h ] = line.split('x')
        let slack = [l*w, w*h, h*l].sort((a, b) => a - b)[0]

        totalSquareFeet += 2*l*w + 2*w*h + 2*h*l + slack
    })

    console.log(totalSquareFeet) // 1598415
})