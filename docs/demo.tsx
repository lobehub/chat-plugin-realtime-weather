import Render from '@lobehub/chat-plugin-realtime-weather';

import { data } from './data';

export default () => {
  return <Render content={data} name={'realtimeWeather'} />;
};
