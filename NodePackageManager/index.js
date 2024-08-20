const { format } = require('date-fns')

const {v4} = require('uuid')
console.log(format(new Date(), 'dd : MM : yyyy\tHH : mm : ss'))
console.log(v4())