let fs = require('fs')
global.owner = ['6285174357879'] // Put your number here
global.mods = JSON.parse(fs.readFileSync('./src/mods.json')) // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit // Premium user has unlimited limit
global.link = JSON.parse(fs.readFileSync('./src/grouplink.json'))
global.group = link.map((v, i) => `Group ${i + 1}\n${v}`).join('\n\n');
global.numberowner = '6285174357879'
global.nameowner = 'Rico' //Owner name
global.name = 'Andrico' // owner name for contacts
global.namebot = '5CT-MD' // bot name 
global.mail = 'andricosyahputraa@gmail.com' // email or gmail
global.instagram = 'https://linktr.ee/kikoenak4'//Instagram 
//global.community = {
  //game: '120363242705186427@g.us',
//}
global.partner = ''
global.menu = 'https://pomf2.lain.la/f/g6jrwm26.jpg' //image menu , but not work 
global.eror = '_*Server Error*_' // for eror message 
//global.rwait = '⌛' //wait message 
global.wait = '_*Tunggu sedang di proses...*_' //wait message 
global.wm = '*5CT-MD*' // watermark bot 
global.playlist = '37i9dQZF1DWTwnEm1IYyoj' //song play list
const moment = require('moment-timezone') 


////// ALL of apikey ///////
//INI WAJIB DI ISI!//
global.lann = 'pD7u6Xat'
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'PjoZNP4j'
//Daftar https://api.botcahx.eu.org 

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',//git clone from nurutomo api and start node on dekstop
  nrtm2: 'http://localhost:5000', //just my local host
  xteam: 'https://api.xteam.xyz',//
  vhtear: 'https://api.vhtear.com',//
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org',
  lolhuman: 'http://api.lolhuman.xyz',//
  alya: 'https://api.alyachan.dev/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.zeks.xyz': 'qyVJpszt0uSAL0lGCfOQIV3BVfp',
  'https://api.xteam.xyz': 'Syahrulidhamz30',
  'http://api.lolhuman.xyz': 'd5d9e369ab0bf0c231d43b17',
  'https://api.vhtear.com': 'Syahrulidhamz30',
  'https://api.betabotz.eu.org': 'pD7u6Xat',
  'https://api.botcahx.eu.org': 'PjoZNP4j',
  'https://api.alyachan.dev/': 'syah11'
}
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ Andrico
global.set = {
    footer: 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ Andrico, //another watermark message?
    
}
//global.Func = new (require('./lib/functions')) //just function 
//global.scrap = new (require('./lib/scrape')) //just scraper 
global.packname = 'Hi' // another Watermark 
global.author = '⫹⫺ 5CT 𝙱𝙾𝚃' //watermark author?

global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'//just message 
global.urlnya = "-" //apa lah 

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ' //don't change 
global.phn = '+62 851-7435-7879' //tell me it work 

global.multiplier = 69 // The higher, The harder levelup

//////FOR TIME//////
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`

let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset    0 is  0.00
// Offset  420 is  7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

global.botdate = `⫹⫺ Day's: ${week} ${date}`
global.bottime = `ᴛɪᴍᴇ: ${wktuwib}`

global.ucap = ucap
function ucap() {
  const hr = moment.tz('Asia/Jakarta').format('HH')
  let ucap
  if (hr >= 2 && hr < 10) {
    ucap = 'Pagi 🌤️🏞️'
  } else if (hr >= 10 && hr <= 14) {
    ucap = 'Siang ☀️🏝️'
  } else if (hr > 14 && hr <= 17) {
    ucap = 'Sore ⛅🌅'
  } else {
    ucap = 'Malam 🌙🌌'
  }
  return 'Selamat ' + ucap
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
