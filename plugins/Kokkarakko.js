const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config')
const axios = require('axios');

Asena.addCommand({ on: 'text', fromMe: false,onlyPm: true }, (async (message, match) => {

    var r_text = new Array();
    r_text[0] = Config.IMG;
    var i = Math.floor(1 * Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    let regexb1Julie = new RegExp('.')
    let regexb2Julie = new RegExp('a')
    let regexb3Julie = new RegExp('e')
    let regexb4Julie = new RegExp('i')
    let regexb5Julie = new RegExp('o')
    let regexb6Julie = new RegExp('u')

    if (regexb1Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (regexb2Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (regexb3Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (regexb4Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (regexb5Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (regexb6Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
}));
