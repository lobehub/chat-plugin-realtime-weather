const resources = {
  'en-US': {
    common: {
      data: {
        date: 'Date',
        daytemp_float: 'Daytime Temperature',
        dayweather: 'Daytime Weather',
        daywind: 'Daytime Wind',
        nighttemp_float: 'Nighttime Temperature',
        nightweather: 'Nighttime Weather',
        nightwind: 'Nighttime Wind',
        week: 'Week',
      },
      title: 'Weather Data for the Next 7 Days ({{city}})',
      updateAt: 'Last Updated',
    },
  },
  'zh-CN': {
    common: {
      data: {
        date: '日期',
        daytemp_float: '日间温度',
        dayweather: '日间天气',
        daywind: '日间风速',
        nighttemp_float: '夜间温度',
        nightweather: '夜间天气',
        nightwind: '夜间风速',
        week: '星期',
      },
      title: '近7日天气数据（{{city}}）',
      updateAt: '更新时间',
    },
  },
} as const;

export default resources;
