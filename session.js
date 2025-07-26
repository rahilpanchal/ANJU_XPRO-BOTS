//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 4.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVKZW9jOWVnVkNhQURJd3U2YWN2ZjdiT3hmeTJuVUpHNmZRS0NXRVZscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWtPbStlMWxuZ05GWXBCcTUybk1xOWFVMVdqYVQ0M1QraGZ5SStHRFl6Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ2Z1ek1WbFlQNHdvVjJCaHY4OE1qUis2V1FjMXRKY0l1aDNmT0VyNW5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2Zm9WTSs0OWs4VGY3VFlZMG5aS01kWWlNRUxjZWdhZnZyM2krQVlJZWtzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFQjZXNTNxMmFDZFdobmdwUHpMQ0VHODNxSkZ6V2U5U0pTSzg4K1JTVzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5aeTdFTSt5aUtVRnRnelJsZjJJQnNsMjY4THV3N3I5R051SjVPUGRkUVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBMQTc4QmI2aGl5SC8xYWhpallRd25reGtHWUxIaDIwK0NOdDR2OWIyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5keS9yVEVab0JwTTJWeTAraGdxUi9lUVJYYzRUQldZWUVpSkVDOUJqZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml1c2F3SXlJZTA1ZU5LR2xhQ0hWKytTTTFCTkVhYnlRSnd1ZlI5eGlQaEpoRjA3TUhYVmp5V1lvVnMrVkZnNS9saDMzTlg0R1dCUDZyeXlnUFlFOGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJ1TGdxU084QitTQ2dIY2FsR3NkVThJaUd0QzFoMjlQNVV2SzkzNnhVZGMwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzAxNzY1OTEyNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNDI1N0JBRUZEMkFFMDJCQTY1MERERDcwMEZFMzBEQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUzNTUwMTUzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTcwMTc2NTkxMjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjU2OEE3RjgyNzE4NTVFMEM0OTIwNTkyNUU5MDc0NUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MzU1MDE1M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRlhGVkZMb3lRWlNMY0htbXQ0R0U2USIsInBob25lSWQiOiI5MTA0NzJhYi02MjA5LTQwMGUtODk0Ni04NGNhNTA5ZDQzYzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmFHTFc2NEtzUWZoYzRSMXFlRXhUdXU3QVJZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMNHJRNUJ3MVVlZEdUQU5uM2hYMjNWUU1PTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHMUdCMkNXVyIsIm1lIjp7ImlkIjoiOTE3MDE3NjU5MTI0OjI5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTkxODUyMzYzOTU2Mjc2OjI5QGxpZCIsIm5hbWUiOiLij6Twk4ap8J2TofCdk6rwnZOx8J2TvvCdk7Ug8JOGqiDwn6qE8J+RkfCfqbXwn6q9In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLU0pxQmtRdVpxVXhBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJYnJXT2ZyMm14SzdMWEdHTDZrdVBHUDhHbGtzSE5SL05qRWFVVFJwdjNvPSIsImFjY291bnRTaWduYXR1cmUiOiJvdEhwYlZnSlpUbzZEd0U1ZC9VRjduNGl2RE5Ra2MvMDVwSThwV09tRnlTTU9BOGFHdEZrYnJPM1ZtRFJYbkc4bFVYOGlWWXRzYUp6bHM0R3ZYOTlEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicERxUlQzdUN4bW5aYjNpZGZlWHc1eUJRWlR5QnR3M3ZDdlZmZHFyNUZPWHc4STRDSDV1b1RmbmJCSkplN1RRQWFFV2I1NlVaS2VEOUl4ZTk2Z0NSaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTcwMTc2NTkxMjQ6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0c2MWpuNjlwc1N1eTF4aGkrcExqeGovQnBaTEJ6VWZ6WXhHbEUwYWI5NiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzNTUwMTUwLCJsYXN0UHJvcEhhc2giOiJDNGZKTiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFhYIn0=",
SUDO: process.env.SUDO || ["917017659124","94758775628"],
PORT: process.env.PORT || "8000",
FOOTER: process.env.FOOTER || "> QUEEN ANJU XPRO\n> Developed by Mr. Rashmika\n> GitHub Repository: github.com/Mrrashmika/QUEEN_ANJU_xPro\n🌟 Premium Version | Advanced Features | Secure & Reliable 🌟\n© 2025 QUEEN ANJU XPRO. All rights reserved.",
};
