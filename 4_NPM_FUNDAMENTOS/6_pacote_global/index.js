const _ = require('lodash')

const a = [1, 2, 2, 2, 2, 2, 3, 4, 5, 5, 5, 5, 7, 8, 10, 12, 13, 12]

const uniqueValues = _.sortedUniq(a)

console.log(uniqueValues)