const mix = require('laravel-mix');

const SRC = {
  index: 'src/index.html',
  js: 'src/main.js'
};

const DEST = {
  dist: 'dist'
};

mix.js(SRC.js, DEST.dist);
mix.copy(SRC.index, DEST.dist);

// Custom webpack config
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  });
}
