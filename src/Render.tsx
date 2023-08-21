import { PluginRenderProps } from '@lobehub/chat-plugin-sdk';
import { Table } from 'antd';
import { createStyles } from 'antd-style';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { createI18nNext } from './locales/create';
import { WeatherResult } from './type';

const useStyles = createStyles(({ css, token }) => ({
  time: css`
    color: ${token.colorTextQuaternary};
  `,
  title: css`
    font-weight: bold;
  `,
}));

const i18n = createI18nNext();
const Render = memo<PluginRenderProps<WeatherResult>>(({ content }) => {
  const { t } = useTranslation('common');

  const { styles } = useStyles();
  return (
    <div>
      {content.map((item, index) => (
        <Flexbox gap={8} key={`${item.city}-${index}`}>
          <Flexbox align={'center'} distribution={'space-between'} horizontal>
            <div className={styles.title}>{t('title', { city: item.city })}</div>
            <div className={styles.time}>
              {t('updateAt')}： {item.reporttime}
            </div>
          </Flexbox>
          <Table
            bordered
            columns={[
              { dataIndex: 'date', title: t('data.date') },
              { dataIndex: 'week', title: t('data.week') },
              { dataIndex: 'dayweather', title: t('data.dayweather') },
              { dataIndex: 'daytemp_float', title: t('data.daytemp_float') },
              { dataIndex: 'daywind', title: t('data.daywind') },
              { dataIndex: 'nightweather', title: t('data.nightweather') },
              { dataIndex: 'nighttemp_float', title: t('data.nighttemp_float') },
            ]}
            dataSource={item.casts}
            pagination={false}
            rowKey={'date'}
          />
        </Flexbox>
      ))}
    </div>
  );
});

const Wrapper = memo<PluginRenderProps<WeatherResult>>((props) => {
  useEffect(() => {
    i18n.finally();
  }, []);

  return <Render {...props} />;
});

export default Wrapper;
