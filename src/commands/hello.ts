import type {BaseCommandInteraction, Client} from 'discord.js';
import type {command} from '../types/commands';

export const hello: command = {
  name: 'hello',
  description: 'Returns a greeting',
  type: 'CHAT_INPUT',
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = 'Hello world!';

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
