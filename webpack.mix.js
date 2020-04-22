const mix = require('laravel-mix');

require('laravel-mix-tailwind');
//require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('assets/js/app.js', 'site/assets/js/app.js')
   .sass('assets/sass/app.scss', 'site/assets/css/app.css')
   .tailwind('./tailwind.config.js');

if (mix.inProduction()) {
  mix
   .purgeCss();
}