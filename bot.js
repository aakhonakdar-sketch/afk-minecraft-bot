const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: Number(process.env.MC_PORT || 25565),
  username: process.env.MC_USERNAME,
  auth: 'offline',
  version: false
});

bot.on('login', () => {
  console.log('Bot joined the server!');
});

bot.on('spawn', () => {
  console.log('Bot spawned!');
});

bot.on('kicked', (reason) => {
  console.log('Bot kicked:', reason);
});

bot.on('error', (err) => {
  console.log('Error:', err.message);
});

bot.on('end', () => {
  console.log('Bot disconnected.');
});
