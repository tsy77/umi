import groupBy from 'lodash.groupby';
// import { winPath } from 'umi-utils';
// import registerBabel from 'af-webpack/registerBabel';
import { getLocaleFileList } from '../utils';

/**
 * [
 *  {
 *    id: 'test',
 *    name: 'zh_CN',
 *    text: '',
 *    path:
 *  }
 * ]
 *
 * groupBy id
 * @param opts
 */
const getLocaleList = (...opts) => {
  const localeFileList = getLocaleFileList(...opts);
  if (Array.isArray(localeFileList) && localeFileList.length > 0) {
    const locales = localeFileList.map(localeFile => ({
      name: localeFile.name,
      paths: localeFile.paths,
    }));

    const localeList = [];

    localeFileList.forEach(localeFile => {
      const { paths = [], name } = localeFile;
      paths.forEach(path => {
        try {
          // registerBabel({
          //   only: [path],
          // });
          const data = require(path).default || require(path);
          Object.keys(data).forEach(id => {
            localeList.push({
              id,
              name,
              text: data[id],
              path,
            });
          });
        } catch (e) {
          console.error('localeFileList error', e);
        }
      });
    });
    const listMap = groupBy(localeList, locale => locale.id);
    const list = Object.keys(listMap).map(id => {
      const itemMap = listMap[id].reduce((acc, curr) => {
        const { name, id, ...rest } = curr;
        return {
          ...acc,
          [curr.name]: rest,
        };
      }, {});
      return {
        id,
        ...itemMap,
      };
    });
    return {
      locales,
      list,
    };
  }
  return [];
};

export default getLocaleList;
