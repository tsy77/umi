export default [
  {
    target: 'node',
    cjs: { type: 'babel', lazy: true },
    disableTypeCheck: true,
    browserFiles: ['src/locale.js'],
  },
  {
    target: 'browser',
    entry: 'ui/index.tsx',
    disableTypeCheck: true,
    typescriptOpts: {
      check: false,
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
