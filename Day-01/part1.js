const fs = require('fs')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let contents = data.toString()
    console.log((contents.split('(').length - 1) - (contents.split(')').length - 1)) // 138
})
