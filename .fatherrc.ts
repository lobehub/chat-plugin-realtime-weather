import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    output: { path: 'dist', filename: 'index' },
    externals: ['react', 'react-dom', 'antd', 'antd-style', 'i18next', 'react-i18next'],
  },
});
