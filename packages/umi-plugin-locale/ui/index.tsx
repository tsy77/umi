import React from 'react';
import { IUiApi } from 'umi-types';
import { HomeOutlined } from '@ant-design/icons';

export default (api: IUiApi) => {
  api.addPanel({
    title: 'Locale',
    path: '/locale',
    icon: <HomeOutlined />,
    component: <div>Hello Locales</div>,
  });
};
