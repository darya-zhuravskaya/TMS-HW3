const date: Date = new Date();
const message = `Текущая дата: ${date.getMonth()}/${ date.getFullYear()}/${date.getDate()}. Текущее время: ${date.toLocaleTimeString()}.`
console.log(message)