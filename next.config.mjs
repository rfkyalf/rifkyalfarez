/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'i.pinimg.com',
      },
    ],
  },
};

export default nextConfig;
