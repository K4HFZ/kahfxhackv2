const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const CFonts = require('cfonts');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
	console.clear()
 CFonts.say(`Hack Sg`, {
            font: '3D',
            align: 'left',
            gradient: ['red', 'magenta']
        })
        await sleep(2500);
        console.clear()
        console.log(`${chalk.yellow(` SCRIPT TERBARU 2022 - 5 - 21 @FadlanKull`)}`)
console.log(`${chalk.white(`
1 Push Trophy
3 Push Crown

Choose to use the available number`)} 
`);
const round = rs.question(`[+] Tempel Kode Auth🤘😎  : `);
    console.log('');
    
    const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/'+round, {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

  const auth = rs.question('Auth Token : ');
  console.log('');
console.clear()
  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Maybe Auth Token Expired ?`));

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.white(`\rTime : [ ${moment().format('HH:mm:ss')} ] ${chalk.red(`!`)}${chalk.yellow(`User : ${username}`)} | ${chalk.red(`!`)}${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.red(`!`)}${chalk.green(`Crown : ${crown}`)}

${chalk.green(` Status : Succes✓`)}\n`));
await sleep(0);
console.log(chalk.white(`\rTime : [ ${moment().format('HH:mm:ss')} ] ${chalk.red(`!`)}${chalk.white(`User : ${username}`)} | ${chalk.red(`!`)}${chalk.white(`Trophy : ${trophy}`)} | ${chalk.red(`!`)}${chalk.white(`Crown : ${crown}`)}

${chalk.red(` Status : Succes✓`)}\n`));
await sleep(0);
console.log(chalk.white(`\rTime : [ ${moment().format('HH:mm:ss')} ] ${chalk.red(`!`)}${chalk.white(`User : ${username}`)} | ${chalk.red(`!`)}${chalk.white(`Trophy : ${trophy}`)} | ${chalk.red(`!`)}${chalk.white(`Crown : ${crown}`)}

${chalk.green(` Status : Succes✓`)}\n`));
await sleep(0);
console.log(chalk.white(`\rTime : [ ${moment().format('HH:mm:ss')} ] ${chalk.red(`!`)}${chalk.white(`User : ${username}`)} | ${chalk.red(`!`)}${chalk.white(`Trophy : ${trophy}`)} | ${chalk.red(`!`)}${chalk.white(`Crown : ${crown}`)}

${chalk.red(` Status : Succes✓`)}\n`));
await sleep(0);
console.log(chalk.white(`\rTime : [ ${moment().format('HH:mm:ss')} ] ${chalk.red(`!`)}${chalk.white(`User : ${username}`)} | ${chalk.red(`!`)}${chalk.white(`Trophy : ${trophy}`)} | ${chalk.red(`!`)}${chalk.white(`Crown : ${crown}`)}

${chalk.green(` Status : Succes✓`)}\n`));
await sleep(0);
console.log(chalk.white(`\rTime : [ ${moment().format('HH:mm:ss')} ] ${chalk.red(`!`)}${chalk.white(`User : ${username}`)} | ${chalk.red(`!`)}${chalk.white(`Trophy : ${trophy}`)} | ${chalk.red(`!`)}${chalk.white(`Crown : ${crown}`)}

${chalk.red(` Status : Succes✓`)}\n`));
await sleep(0);
console.log(chalk.white(`\rTime : [ ${moment().format('HH:mm:ss')} ] ${chalk.red(`!`)}${chalk.white(`User : ${username}`)} | ${chalk.red(`!`)}${chalk.white(`Trophy : ${trophy}`)} | ${chalk.red(`!`)}${chalk.white(`Crown : ${crown}`)}

${chalk.green(` Status : Succes✓`)}\n`));
await sleep(0);
    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Akun Anda Ke Band !`));
     break;
    }
  }


})();
