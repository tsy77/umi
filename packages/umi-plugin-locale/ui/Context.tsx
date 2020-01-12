import React from 'react';
import { IUiApi } from 'umi-types';

const Context = React.createContext<{ api: IUiApi }>({ api: {} });

export default Context;
