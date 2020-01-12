//
// TODOLIST:
//   - 单元测试
//   - example 里面的 antd 依赖改为 umi 插件
//

import { join, dirname } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import Mustache from 'mustache';
import { getMomentLocale, getLocaleFileList, isNeedPolyfill } from './utils';
import server from './server/index';

export default function(api, options = {}) {
  const { config, paths } = api;
  const { targets } = config;

  if (isNeedPolyfill(targets)) {
    api.addEntryPolyfillImports({
      source: 'intl',
    });
  }
  api.addRuntimePluginKey('locale');

  api.addPageWatcher(join(paths.absSrcPath, config.singular ? 'locale' : 'locales'));

  api.onOptionChange(newOpts => {
    options = newOpts;
    api.rebuildTmpFiles();
  });

  api.addRendererWrapperWithComponent(() => {
    const baseSeparator = options.baseSeparator || '-';
    const localeFileList = getLocaleFileList(
      paths.absSrcPath,
      paths.absPagesPath,
      config.singular,
      baseSeparator,
    );
    const wrapperTpl = readFileSync(join(__dirname, '../template/wrapper.jsx.tpl'), 'utf-8');
    const defaultLocale = options.default || `zh${baseSeparator}CN`;
    const [lang, country] = defaultLocale.split(baseSeparator);
    const wrapperContent = Mustache.render(wrapperTpl, {
      baseSeparator,
      localeList: localeFileList,
      antd: options.antd !== false,
      baseNavigator: options.baseNavigator !== false,
      useLocalStorage: options.useLocalStorage !== false,
      defaultLocale,
      defaultLang: lang,
      defaultAntdLocale: `${lang}_${country}`,
      defaultMomentLocale: getMomentLocale(lang, country),
    });
    const wrapperPath = join(paths.absTmpDirPath, './LocaleWrapper.jsx');
    writeFileSync(wrapperPath, wrapperContent, 'utf-8');
    return wrapperPath;
  });

  api.modifyAFWebpackOpts(memo => {
    return {
      ...memo,
      alias: {
        ...(memo.alias || {}),
        // umi/locale is deprecated
        // recommend use `import { getLocale } from 'umi-plugin-locale';` now.
        'umi/locale': join(__dirname, './locale.js'),
        'react-intl': dirname(require.resolve('react-intl/package.json')),
      },
    };
  });

  api.addUIPlugin(require.resolve('../dist/index.umd'));

  server(api, options);
}
