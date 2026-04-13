// server/emulator.js

const { exec } = require("child_process");

function runAdbCommand(command) {
  return new Promise((resolve, reject) => {
    exec(`adb ${command}`, (error, stdout, stderr) => {
      if (error) {
        console.error("ADB Error:", error);
        return reject(error);
      }
      resolve(stdout.trim());
    });
  });
}

// タップ
async function tap(x, y) {
  return runAdbCommand(`shell input tap ${x} ${y}`);
}

// テキスト入力
async function inputText(text) {
  return runAdbCommand(`shell input text "${text}"`);
}

module.exports = {
  tap,
  inputText,
};
