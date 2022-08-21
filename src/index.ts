import {config} from './config';
import {Client} from 'discord.js';
import {ready, interactionCreate} from './listeners';

console.log('Bot is starting...');

const client = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(config.BOT_TOKEN);
