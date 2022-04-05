const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('dart-sass'));
const imagemin = require('gulp-imagemin');
const notify = require("gulp-notify");
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// css utility
// const autoprefixer = require('autoprefixer');
// const postcss = require('gulp-postcss');


const paths = {
    imagenes: "./src/img/**/*",
    scss: "./src/scss/**/*.scss",
    javascript: "./src/js/**/*.js"
}

function css() {
    return src("./src/scss/app.scss")
        .pipe(sass())
        // .pipe(postcss(autoprefixer()))
        .pipe(dest("./build/css"));
}

function javascript(){
    return src(paths.javascript)
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))
}

function minify() {
    return src("./src/scss/app.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest("./build/css"));
}

function imagen(){
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest("./build/img"))
        .pipe(notify({
            message:'Minificado terminado',
            sound: false,
            onLast: true
        }));
}
function versionWebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest("./build/img"));
}

function watchArchivos() {
    watch(paths.scss, css); //** =La carpeta actual  * = Todos los archivos con esa extension
    watch(paths.javascript, javascript);
}

exports.default = series(css,javascript,imagen,versionWebp,minify,watchArchivos);