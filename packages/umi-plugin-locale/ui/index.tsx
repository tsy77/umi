import React from 'react';
import { IUiApi } from 'umi-types';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';
import Content from './components/Content';
import { Logo } from './Icon';
import Context from './Context';

export default (api: IUiApi) => {
  api.addLocales({
    'zh-CN': zhCN,
    'en-US': enUS,
  });

  api.addPanel({
    title: 'org.umi.ui.locale.panel.title',
    path: '/locale',
    icon: <Logo />,
    component: api.withAPI(Context)(Content),
  });
};
