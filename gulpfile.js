const
    proxy = "127.0.0.1:4000",
    HTML_files = [
        "./**/*.html",
        "!./**/node_modules/**/*.html",
        "!./_site/**/*.html"
    ],
    SASS_flies = [
        "./assets/sass/-var/**/*.sass",
        "./assets/sass/**/*.sass"
    ],
    dist_SASS_files = "./uploads/";

const
    browserSync = require("browser-sync"),
    gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    clean_css = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    notify = require("gulp-notify"),
    sass = require("gulp-sass");

gulp.task('html', function () {
    return gulp.src(HTML_files)
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', function () {
    return gulp.src(SASS_flies)
        .pipe(concat('style.sass'))
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 300 versions']
        }))
        .pipe(clean_css())
        .pipe(gulp.dest(dist_SASS_files))
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
    gulp.watch(HTML_files, gulp.parallel('html'));
    gulp.watch(SASS_flies, gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('watch', 'html', 'sass', 'serve'));
