const
    SRC = {
        HTML: [
            './**/*.html',
            '!./**/node_modules/**/*.html',
            '!./**/_site/**/*.html'
        ],
        SASS: [
            './_includes/constants/**/*.sass',
            './_includes/**/*.sass'
        ]
    },
    DIST = {
        SASS: './uploads/' 
    },
    WATCH = {
        HTML: SRC['HTML'],
        SASS: SRC['SASS']
    },
    proxy = '127.0.0.1:4000';

const
    browserSync  = require("browser-sync"),
    gulp         = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    clean_css    = require("gulp-clean-css"),
    concat       = require("gulp-concat"),
    notify       = require("gulp-notify"),
    sass         = require("gulp-sass");

gulp.task('html', function () {
    return gulp.src(SRC['HTML'])
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', function () {
    return gulp.src(SRC['SASS'])
        .pipe(concat('style.sass'))
        .pipe(sass({ outputStyle: 'expanded' })
        .on("error", notify.onError()))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 300 versions']
        }))
        .pipe(clean_css())
        .pipe(gulp.dest(DIST['SASS']))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('serve', function () {
    browserSync({
        proxy: proxy,
        open: false,
        notify: true,
        tunnel: false
    });
});

gulp.task('watch', function () {
    gulp.watch(WATCH['HTML'], gulp.parallel('html'));
    gulp.watch(WATCH['SASS'], gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('watch', 'html', 'sass', 'serve'));
