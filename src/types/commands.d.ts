import type {
  BaseCommandInteraction,
  ChatInputApplicationCommandData,
  Client,
} from 'discord.js';

export interface command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: BaseCommandInteraction) => void;
}
