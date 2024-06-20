//rush-md//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "vrf@vrftechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacPdLXJ93wP6q0b962J";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacPdLXJ93wP6q0b962J";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d31762a021e4dfd7eda52.jpg";
global.devs = "94760000000";
global.sudo = process.env.SUDO_NUMBERS || "94760000000";
global.sudo = process.env.SUDO || "94760000000";
global.owner = process.env.OWNER_NUMBER || "94760000000";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "https://telegra.ph/file/d31762a021e4dfd7eda52.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d31762a021e4dfd7eda52.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94760000000";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "94760000000";

global.api_smd = "https://api-smd.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU_STYLE || "G2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝗥𝗨𝗦𝗛 𝗠𝗗 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝟰.𝟬.𝟬",
  author: process.env.STICKER_AUTHOR || "𝗥𝗨𝗦𝗛 𝗠𝗗",
  packname: process.env.STICKER_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝗥𝗨𝗦𝗛-𝗠𝗗",
  ownername: process.env.OWNER_NAME || "𝗥𝗨𝗦𝗛",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
