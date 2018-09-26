module.exports = {
    ignore: ['**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts', '**/_*.tsx'],
    propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse,
    styleguideComponents: {
        Wrapper: __dirname + '/src/styleguide/Wrapper.tsx'
    },
    styleguideDir: 'docs',
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js')
};
