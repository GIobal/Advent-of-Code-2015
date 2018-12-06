const fs = require('fs')

fs.readFile('input.txt', (error, data) => {
    if (error) throw error

    let niceStrings = []
    data.toString().split('\r\n').forEach(string => {
        // Check if it contains at least 3 vowels.
        let amountOfVowels = 0
        let vowels = ['a', 'e', 'i', 'o', 'u']
        string.split('').forEach(char => {
            if (vowels.includes(char)) amountOfVowels++
        })
        let containsThreeVowels = amountOfVowels >= 3

        // Check if at least one letter appears twice in a row.
        let containsDoubleLetter = false
        for (let i = 0, l = string.length; i < l; i++) {
            if (i !== string.length - 1) {
                if(string[i] === string[i + 1]) containsDoubleLetter = true
            }
        }

        // Check for any naughty strings.
        let containsNaughtyString = false
        let naughtyStrings = ['ab', 'cd', 'pq', 'xy']
        naughtyStrings.forEach(naughty => {
            if (string.indexOf(naughty) > -1) {
                containsNaughtyString = true
            }
        })

        if (containsDoubleLetter && containsThreeVowels && !containsNaughtyString) {
            niceStrings.push(string)
        }
    })

    console.log(niceStrings.length) // 255
})