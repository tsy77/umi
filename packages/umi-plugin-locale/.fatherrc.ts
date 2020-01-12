import * as path from 'path';

export default [
  {
    target: 'node',
    cjs: { type: 'babel', lazy: true },
    disableTypeCheck: true,
    browserFiles: ['src/locale.js'],
  },
  {
    entry: 'ui/index.tsx',
    typescriptOpts: {
      check: false,
    },
    nodeResolveOpts: {
      customResolveOptions: {
        moduleDirectory: [
          path.join(__dirname, '..', '..', 'node_modules'),
          path.join(__dirname, 'node_modules'),
        ],
      },
    },
    extraExternals: ['antd', 'react', 'react-dom'],
    umd: {
      name: 'locale',
      minFile: false,
      globals: {
        antd: 'window.antd',
        react: 'window.React',
        'react-dom': 'window.ReactDOM',
      },
    },
  },
];
