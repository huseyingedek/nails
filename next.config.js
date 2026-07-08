/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: process.env.NEXT_DIST || '.next',
  eslint: {
    // Türkçe metinlerdeki kesme işaretleri (') no-unescaped-entities
    // uyarıları build'i durdurmasın diye kapalı.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

module.exports = nextConfig;
