import { winPath } from 'umi-utils';
import { join } from 'path';
import getLocaleList from './getLocaleList';

const absSeparatorSrcPath = winPath(join(__dirname, '..', '../examples/base-separator/src'));
const absSeparatorPagesPath = winPath(join(__dirname, '..', '../examples/base-separator/src/page'));

describe('getLocaleList', () => {
  it('Separator', () => {
    const list = getLocaleList(absSeparatorSrcPath, absSeparatorPagesPath, false, '_');
    expect(list).toEqual({
      locales: [
        {
          name: 'en_US',
          paths: [
            `${absSeparatorSrcPath}/locales/en_US.js`,
            `${absSeparatorPagesPath}/temp/locales/en_US.js`,
          ],
        },
        {
          name: 'sk',
          paths: [
            `${absSeparatorSrcPath}/locales/sk.js`,
            `${absSeparatorPagesPath}/temp/locales/sk.js`,
          ],
        },
        {
          name: 'zh_CN',
          paths: [
            `${absSeparatorSrcPath}/locales/zh_CN.js`,
            `${absSeparatorPagesPath}/temp/locales/zh_CN.js`,
          ],
        },
      ],
      list: [
        {
          id: 'test',
          en_US: {
            text: 'test en {name}',
            path: `${absSeparatorSrcPath}/locales/en_US.js`,
          },
          sk: {
            text: 'test sk {name}',
            path: `${absSeparatorSrcPath}/locales/sk.js`,
          },
          zh_CN: {
            text: '测试中文 {name}',
            path: `${absSeparatorSrcPath}/locales/zh_CN.js`,
          },
        },
        {
          id: 'test2',
          en_US: {
            text: 'test en {name}',
            path: `${absSeparatorPagesPath}/temp/locales/en_US.js`,
          },
          sk: {
            text: 'test sk {name}',
            path: `${absSeparatorPagesPath}/temp/locales/sk.js`,
          },
          zh_CN: {
            text: '测试中文 {name}',
            path: `${absSeparatorPagesPath}/temp/locales/zh_CN.js`,
          },
        },
      ],
    });
  });
});
