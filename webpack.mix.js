const mix = require('laravel-mix');

/*****************************************************************
 * 初期設定
 */

mix
  .sourceMaps('./')
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')(),
      require('css-mqpacker')()
    ]
  })
  .sass('mario.scss', 'mario.css');
