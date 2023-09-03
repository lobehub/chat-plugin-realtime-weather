import { fetchPluginMessage } from '@lobehub/chat-plugin-sdk';
import { Skeleton } from 'antd';
import { memo } from 'react';
import useSWR from 'swr';

import Render from '@/Render';
import { WeatherResult } from '@/type';

const Home = memo(() => {
  const { isLoading, data } = useSWR<WeatherResult>('fetchDataFromChat', fetchPluginMessage);

  return isLoading || !data ? <Skeleton active /> : <Render content={data} name={'test'} />;
});

export default Home;
