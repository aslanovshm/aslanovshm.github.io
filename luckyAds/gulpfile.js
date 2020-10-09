const gulp = require('gulp')
const cleanDir = require('del')
const plumber = require('gulp-plumber')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const jpegmin = require('imagemin-mozjpeg')
const pngmin = require('imagemin-pngquant')
const svgmin = require('imagemin-svgo')
const convertToWebp = require('gulp-webp');
const svgSprite = require('gulp-svgstore')
const jsmerge = require('gulp-concat')
const jsmin = require('gulp-uglify-es').default
const preprocessor = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssmin = require('gulp-csso')
const sourcemaps = require('gulp-sourcemaps')
const convertToZip = require('gulp-zip')
const rename = require('gulp-rename')
const changed = require('gulp-changed')
const browserSync = require('browser-sync').create()

const src = './src'
const public = './public'

exports.clean = clean = (done) => {
  done()
  return cleanDir(public);
}

exports.pages = pages = (done) => {
  gulp.src(src + '/*.html')
    .pipe(plumber())
    .pipe(changed(public))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(public))
  done()
}

exports.styles = styles = (done) => {
  gulp.src(src + '/styles/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(preprocessor())
    .pipe(postcss([autoprefixer({ grid: 'autoplace' })]))
    .pipe(postcss([require('postcss-sort-media-queries')({ sort: 'mobile-first' })]))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest(public + '/assets/styles'))
  done()
}

exports.fonts = fonts = (done) => {
  gulp.src(src + '/fonts/*')
    .pipe(changed(public + '/assets/fonts'))
    .pipe(gulp.dest(public + '/assets/fonts'))
  done()
}

exports.images = images = (done) => {
  gulp.src(src + '/images/*.{png,jpg,jpeg,svg}')
    .pipe(changed(public + '/assets/images'))
    .pipe(imagemin([
      jpegmin({ progressive: true, quality: 90 }),
      pngmin({ quality: [0.65, 0.80] }),
      svgmin({ plugins: [{ removeViewBox: false }] })
    ]))
    .pipe(gulp.dest(public + '/assets/images'))
  done()
}

exports.webp = webp = (done) => {
  gulp.src(src + '/images/*.{png,jpg,jpeg}')
    .pipe(convertToWebp({ quality: 70 }))
    .pipe(gulp.dest(public + '/assets/images'))
  done()
}

exports.sprite = sprite = (done) => {
  gulp.src(src + '/images/sprite/*.svg')
    .pipe(imagemin([
      svgmin({ plugins: [{ removeViewBox: false }] })
    ]))
    .pipe(svgSprite({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(public + '/assets/images'))
  done()
}

exports.scripts = scripts = (done) => {
  gulp.src(src + '/scripts/*.js')
    .pipe(plumber())
    .pipe(changed(public + '/assets/scripts'))
    .pipe(jsmerge('script.min.js'))
    .pipe(jsmin())
    .pipe(gulp.dest(public + '/assets/scripts'))
  done()
}

exports.stream = stream = (done) => {
  browserSync.init({ server: { baseDir: public } }),
    gulp.watch(src + '/*.html', gulp.series('pages')).on('change', browserSync.reload),
    gulp.watch(src + '/styles/**/*.scss', gulp.series('styles')).on('change', browserSync.reload),
    gulp.watch(src + '/scripts/*', gulp.series('scripts')).on('change', browserSync.reload),
    gulp.watch(src + '/fonts/*', gulp.series('fonts')).on('change', browserSync.reload),
    gulp.watch(src + '/images/*', gulp.series(['images', 'webp'])).on('change', browserSync.reload),
    gulp.watch(src + '/images/sprite/*', gulp.series('sprite')).on('change', browserSync.reload)
  done()
}

exports.zip = zip = (done) => {
  gulp.src(public + '/*')
    .pipe(convertToZip('layout.zip'))
    .pipe(gulp.dest('./'))
  done()
}

exports.public = gulp.series(pages, styles, fonts, images, webp, sprite, scripts)