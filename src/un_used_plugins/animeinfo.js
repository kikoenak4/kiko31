// let fetch = require('node-fetch')
// let { JSDOM } = require('jsdom')
// let handler = async (m, { conn, text }) => {
//     if (!text) throw `Masukkan query!`
//     let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
//     if (!res.ok) throw 'Server Error.. Harap lapor owner'
//     let json = await res.json()
//     let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
//     //Scrape Genre MAL by DwiR
//     res = await fetch(`https://myanimelist.net/anime/${mal_id}`)
//     if (!res.ok) throw 'Server Error.. Harap lapor owner'
//     let html = await res.text()
//     let { document } = new JSDOM(html).window
//     let genAnim = [...document.querySelectorAll('div[class="spaceit_pad"] > * a')].map(el => el.href).filter(href => href.startsWith('/anime/genre/'))
//     let animeingfo = `✨️ *Title:* ${title}
// 🎆️ *Episodes:* ${episodes}
// 🎗️ *Genre:* ${genAnim.join(", ")}
// ➡️ *Start date:* ${start_date}
// 🔚 *End date:* ${end_date}
// 💬 *Show Type:* ${type}
// 💌️ *Rating:* ${rated}
// ❤️ *Score:* ${score}
// 👥 *Members:* ${members}
// 💚️ *Synopsis:* ${synopsis}
// 🌐️ *URL*: ${url}`
//     conn.sendFile(m.chat, image_url, 'img.jpg', animeingfo, m)
// }
// handler.help = ['animeinfo <judul>']
// handler.tags = ['search']
// handler.command = /^(animeinfo)$/i
// //maapin fatur :<
// module.exports = handler