import type {Client} from 'discord.js';
import {commands} from '../commands';

const ready = (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }
    await client.application.commands.set(commands);
    console.log(`${client.user.username} is online`);
  });
};

export {ready};
