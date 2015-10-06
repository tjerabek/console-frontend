var util = require('gulp-util');

module.exports = {
  application: {
    name: 'ApiaryConsole'
  },
  gulp: {
    httpServer: {
      host: util.env.HOST || 'localhost',
      port: util.env.PORT || 8282,
      lrPort: util.env.LRPORT || 35730,
      run: true,
      open: true,
      //proxy: false
    },
    dirs: {
      build: 'build/',
      src: 'src/',
      parts: {
        app: 'app/',
        css: 'css/',
        sass: 'scss/',
        assets: [
          'images/sprites/*.png'
        ]
      },
      srcApp: 'src/app/',
      srcCss: 'src/css/',
      srcSass: 'src/scss/',
      buildCss: 'build/css/'
    },
    filename: {
      index: 'index.html',
      sass: 'app.scss',
      css: 'app.css',
      js: {
        application: 'scripts.js',
        vendor: 'vendor.js',
        config: 'config.js',
      }
    }
  }
};
