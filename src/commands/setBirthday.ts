import type {BaseCommandInteraction, Client} from 'discord.js';
import {prisma} from '../prisma/client';
import type {command} from '../types/commands';

export const setBirthday: command = {
  name: 'birthday',
  description: 'Set your birthday!',
  type: 'CHAT_INPUT',
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const commandUser = interaction.user;

    await prisma.discordUser.upsert({
      where: {id: commandUser.id},
      create: {id: commandUser.id, name: commandUser.username},
      update: {},
    });

    const response = `Set your birthday to ${commandUser}!`;
    await interaction.followUp({
      ephemeral: true,
    });
  },
};
