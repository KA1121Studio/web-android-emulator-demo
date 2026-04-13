// config/default.js

require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },

  emulator: {
    adbHost: process.env.ADB_HOST || "localhost",
    adbPort: process.env.ADB_PORT || 5555,
  },

  room: {
    maxUsers: process.env.MAX_USERS || 5,
    timeout: process.env.ROOM_TIMEOUT || 1000 * 60 * 10, // 10分
  }
};
