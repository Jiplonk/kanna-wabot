let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6283113989278
│┝‷✧ *Dana:* 082323341102
│┝‷✧ *Linkaja:* 628
│┝‷✧ *Gopay:* 628
│┝‷✧ *Ovo:* 6283113989278
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6283113989278?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
