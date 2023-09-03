import { defineConfig } from 'dumi';
import { Github } from 'lucide-react';

import { homepage } from '../package.json';

const isProd = process.env.NODE_ENV === 'production';

const themeConfig = {
  actions: [
    {
      icon: Github,
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/action-icon',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  footer: 'Made with 🤯 by LobeHub',
  name: 'Realtime Weather',
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
};

export default defineConfig({
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: [
    'https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/rainbow.webp',
  ],
  mfsu: {},
  base: isProd ? '/docs/' : '/',
  publicPath: isProd ? '/docs/' : '/',
  npmClient: 'pnpm',
  outputPath: '../public/docs',
  // ssr: isProduction ? {} : false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'RealTime Weather - Lobe Chat Plugin',
});
