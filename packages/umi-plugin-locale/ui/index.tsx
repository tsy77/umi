import React from 'react';
import { IUiApi } from 'umi-types';
import { HomeOutlined } from '@ant-design/icons';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

export default (api: IUiApi) => {
  api.addLocales({
    'zh-CN': zhCN,
    'en-US': enUS,
  });

  api.addPanel({
    title: 'org.umi.ui.locale.panel.title',
    path: '/locale',
    icon: <HomeOutlined />,
    component: () => <p>Hello</p>,
  });
};
