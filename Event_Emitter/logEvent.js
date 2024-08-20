const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "dd:MM:yyyy\t HH:mm : ss"));
console.log(uuid());
