const fs = require('fs')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let contents = data.toString()
    let position = 0
    let basementHit = false

    for (let i = 0, l = contents.length; i < l; i++) {
        position = contents[i] === '(' ? position + 1 : position - 1

        if (position === -1 && !basementHit) {
            basementHit = true

            console.log(i + 1) // 1771
        }
    }
})