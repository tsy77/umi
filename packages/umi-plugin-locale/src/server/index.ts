import { IApi } from 'umi-types';
import getLocaleList from './getLocaleList';

export default (api: IApi, options = {}) => {
  const { paths, config } = api;
  const { baseSeparator = '-' } = options;

  // socket api
  api.onUISocket(({ action, failure, success }) => {
    const { type, payload, lang } = action;
    switch (type) {
      case 'org.umi.locale.list': {
        (async () => {
          const data = getLocaleList(
            paths.absSrcPath,
            paths.absPagesPath,
            config.singular,
            baseSeparator,
          );
          console.log('data', data);
          success(data);
        })();
        break;
      }
      default:
        break;
    }
  });
};
