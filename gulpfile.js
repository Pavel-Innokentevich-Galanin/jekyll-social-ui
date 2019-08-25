const PATHS = {
    proxy: '127.0.0.1:4000/jekyll-social-ui/',
    src: {
        HTML: [
            './**/*.html',
            '!./_site/**/*.html',
            '!./node_modules/**/*.html',
        ],
        SASS: [
            './src/consts/**/*.sass',
            './**/*.sass',
            '!./_site/**/*.sass',
            '!./node_modules/**/*.sass',
        ]
    },
    dist: {
        SASS: './_public/dist/'
    },
};

const browserSync = require("browser-sync");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const clean_css = require("gulp-clean-css");
const concat = require("gulp-concat");
const notify = require("gulp-notify");
const sass = require("gulp-sass");

gulp.task('sass', function () {
    return gulp.src(PATHS.src.SASS)
        .pipe(concat('styles.sass'))
        .pipe(
            sass({ outputStyle: 'expanded' })
                .on("error", notify.onError())
        )
        .pipe(concat('styles.css'))
        .pipe(autoprefixer())
        .pipe(clean_css())
        .pipe(gulp.dest(PATHS.dist.SASS))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('serve', function () {
    browserSync({
        proxy: PATHS.proxy,
        open: false,
        notify: true,
        tunnel: false
    });
});

gulp.task('watch', function () {
    gulp.watch(PATHS.src.HTML).on('change', browserSync.reload);
    gulp.watch(PATHS.src.SASS, gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel(
    'watch',
    'sass',
    'serve'
));
