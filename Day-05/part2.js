const fs = require('fs')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let niceStrings = []
    data.toString().split('\r\n').forEach(string => {

        // Map all possible pairs with no overlapping.
        let pairs = {}
        for (let i = 0, l = string.length; i < l; i++) {
            if (i !== string.length - 1) {
                let pair = string[i] + string[i + 1]
                if (!pairs.hasOwnProperty(pair)) pairs[pair] = []

                if (!pairs[pair].includes(i) && !pairs[pair].includes(i + 1)) {
                    pairs[pair].push(i)
                    pairs[pair].push(i + 1)
                }
            }
        }

        let containsDoublePair = Object.keys(pairs).filter(pair => {
            return pairs[pair].length >= 4
        }).length > 0

        let hasLetterThatRepeats = false
        for (let i = 0, l = string.length; i < l; i++) {
            if (i !== string.length - 2) {
                if (string[i] === string[i + 2]) {
                    hasLetterThatRepeats = true
                }
            }
        }

        if (containsDoublePair && hasLetterThatRepeats) {
            niceStrings.push(string)
        }
    })

    console.log(niceStrings.length) // 255
})