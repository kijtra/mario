const mix = require('laravel-mix');

Mix.manifest.refresh = _ => void 0;

mix
  .setPublicPath('./')
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')(),
      require('css-mqpacker')()
    ]
  })
  .sass('resources/mario.scss', 'mario.css');
