const { stripIndents } = require("common-tags");

module.exports = client => {
    const date = new Date()
    console.log(stripIndents`${client.user.username} online. 
    ${(date.getMonth() + 1).toString().padStart(2, '0')}/${
        date.getDate().toString().padStart(2, '0')}/${
        date.getFullYear().toString().padStart(4, '0')} ${
        date.getHours().toString().padStart(2, '0')}:${
        date.getMinutes().toString().padStart(2, '0')}:${
        date.getSeconds().toString().padStart(2, '0')}`
    );
}