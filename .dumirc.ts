import { defineConfig } from 'dumi';
import { Github } from 'lucide-react';

import { homepage, name } from './package.json';

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
  name,
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
  title: 'Lobe UI',
};

export default defineConfig({
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://npm.elemecdn.com/@lobehub/assets-favicons/assets/favicon.ico'],
  // locales: [{ id: 'en-US', name: 'English' }],
  mfsu: {},
  npmClient: 'pnpm',
  outputPath: 'docs-dist',
  // ssr: isProduction ? {} : false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Lobe Chat RealTime Weather Plugin',
});
