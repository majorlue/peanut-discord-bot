import {} from 'dotenv/config';

const config: Record<string, string> = {
  BOT_TOKEN: process.env.BOT_TOKEN ?? '',
};

export {config};
