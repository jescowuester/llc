const postcss = require('rollup-plugin-postcss');
const cssnano = require('cssnano');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        plugins: [
          require('autoprefixer'),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        extract: 'dist/styles.css',
      })
    );
    return config;
  },
};
