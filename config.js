/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
  
══════════════════════════════════════════════════════════════════════════
                            ( OWNER  DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ Queen Multi-device Whatsapp Bot
✅ Coded By DarkWinzo 
══════════════════════════════════════════════════════════════════════════
                              ( CONTACT ME )
══════════════════════════════════════════════════════════════════════════
✅ Telegram: https://t.me/DarkWinzo
✅ Whatsapp: https://wa.link/jw9ki6
✅ Instagram:https://msng.link/o/?darkwinzo=ig
✅ Youtube: https://youtube.com/c/DarkWinzo                                                                                                      
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ @project_name Queen-MD [WA Multi-device]
✅ @author DarkWinzo <https://github.com/DarkWinzo>
✅ @description A WhatsApp based 3ʳᵈ party application that provide many 
   services with a real-time automated conversational experience
✅ @link <https://github.com/DarkWinzo/Queen-MD>
✅ @version 0.0.1
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT RULES )
══════════════════════════════════════════════════════════════════════════
✅ If you want to recode, reupload
   or copy the codes/script,
   please Contact me;
✅ If the recoded/reupload or copy script? "i will take action immediately"
✅ © 2022 Queen Bot Inc.Technical Hacker Team
✅ God Bless You, Family and Myself
══════════════════════════════════════════════════════════════════════════
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
    zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
    'https://zenzapis.xyz': '805a6c3fa9',
}

// Apikeyyy
bear = 'FreeApikey'

global.herokuapi = process.env.HEROKU_API_KEY
global.herokuapp = process.env.HEROKU_APP_NAME
// Other
let fake = process.env.OWNER_NUMBER
global.owner = ['94704274987',`${fake}`]
global.ownername = process.env.OWNER_NAME
global.ownernomer = process.env.OWNER_NUMBER
global.premium = ['94704274987',`${fake}`]
global.packname = process.env.PACK_NAME
global.author = process.env.STICKER_AUTHOR_NAME
global.darkwinzocontact = '9'+'4'+'7'+'7'+'5'+'2'+'0'+'0'+'9'+'3'+'5'
global.botname = 'Ｓ'+'Ｌ'+'Ｓ'+'Ａ'+'Ｃ'+'Ｈ'+'Ｉ'+'Ｈ'
global.sessionName = 's'+'e'+'s'+'s'+'i'+'o'+'n'+'.'+'q'+'u'+'e'+'e'+'n'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '*වැඩේ ඉවරයි...✓*',
    admin: 'මෙම විධානය භාවිතා කළ හැක්කේ *Group Admin* සඳහා පමණි !',
    botAdmin: 'සමාවන්න😔️,මට මෙම කණ්ඩායමේ *පරිපාලක (Admin)* වරයෙකු නොවී මෙම විධානය ක්‍රියාත්මක කළ නොහැක.',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'මෙම විධානය භාවිතා කළ හැක්කේ මගේ *හිමිකරුට* පමණි !',
    group: 'මෙම විධානය සාදා ඇත්තේ *Groups* සඳහා පමණි !',
    private: 'මෙම විධානය සාදා ඇත්තේ *Private Chats* සඳහා පමණි !',
    bot: 'මෙම විධානය භාවිතා කළ හැක්කේ මගේ *Owner number* එක සඳහා  පමණි !',
    wait: 'මදක් රැදී සිටින්න...⏳️',
    endLimit: 'ඔබගේ දෛනික සීමාව කල් ඉකුත් වී ඇත, සීමාව සෑම පැය 12කට වරක් නැවත සකසනු ලැබේ.',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./src/Media/Image/Queen.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
global.contactme = '+'+'9'+'4'+'7'+'7'+'5'+'2'+'0'+'0'+'9'+'3'+'5'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
