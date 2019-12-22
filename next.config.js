const withStylus = require('@zeit/next-stylus');

const isProd = () => process.env.NODE_ENV === 'production';

module.exports = withStylus({
    cssModules: true,
    env: {
        root: isProd() ? 'https://next-js-project.roman40a.now.sh' : null,
    },
});
