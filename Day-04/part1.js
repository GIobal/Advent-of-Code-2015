const fs = require('fs')
const crypto = require('crypto')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let key = data.toString()
    let i = 0

    while (true) {
        let hash = crypto.createHash('md5').update(key + i).digest('hex')
        if (hash.startsWith('00000')) {
            console.log(i) // 254575
            break
        }
        i++
    }
})
