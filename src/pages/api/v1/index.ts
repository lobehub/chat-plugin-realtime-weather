import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import fetchWeather from './_utils';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const args = await req.json();

  const result = await fetchWeather(args);

  return new Response(JSON.stringify(result));
};
