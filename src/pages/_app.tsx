import type { AppProps } from 'next/app';

import Layout from '@/layout';

import './global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
