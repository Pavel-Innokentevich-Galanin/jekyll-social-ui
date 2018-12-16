const
    gulp         = require('gulp'),
    min_HTML     = require('gulp-htmlmin'),
    less         = require('gulp-less'),
    path         = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    min_CSS      = require('gulp-cssnano'),
    min_JS       = require('gulp-uglify'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    notify       = require("gulp-notify");

const
    watch_HTML_files = [
        './assets/html/*.html',
    ];
    watch_LESS_files = [
        './assets/less/**/*.less',
    ];
    watch_JS_files = [
        './assets/js/**/*.js',
    ];

const
    html_files = [
        './assets/html/*.html',
    ],
    css_files = [
        './assets/less/less-libs/**/*.less',
        './assets/less/preloader/**/*.less',
        './assets/less/header/**/*.less',
        './assets/less/footer/**/*.less',
        './assets/less/index/**/*.less',
        './assets/less/*.less',
    ],
    js_files = [
        './assets/js/**/*.js',
    ];

const
    dest_HTML_files = './';
    dest_LESS_files = './';
    dest_JS_files = './';

gulp.task('html',
    function ()
    {
        return gulp.src(html_files)
            .pipe(min_HTML({ collapseWhitespace: true }))
            .pipe(gulp.dest(dest_HTML_files))
            .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('less',
    function ()
    {
        return gulp.src(css_files)
            .pipe(concat('style.css'))
            .pipe(less({
                paths: [ path.join(__dirname, 'less', 'includes') ]
            })).on("error", notify.onError())
            .pipe(autoprefixer({
                browsers: ['last 300 versions']
            }))
            .pipe(min_CSS())
            .pipe(gulp.dest(dest_LESS_files))
            .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('js',
    function ()
    {
        return gulp.src(js_files)
            .pipe(concat('scripts.js'))
            .pipe(min_JS()).on("error", notify.onError())
            .pipe(gulp.dest(dest_JS_files))
            .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('serve',
    function ()
    {
        browserSync(
            {
                server: "./",
                tunnel: true,
            }
        );
    }
);

gulp.task('watch',
    function ()
    {
        gulp.watch(watch_HTML_files, gulp.parallel('html'));
        gulp.watch(watch_LESS_files, gulp.parallel('less'));
        gulp.watch(watch_JS_files, gulp.parallel('js'));
    }
);

gulp.task('default', gulp.parallel('watch', 'html', 'less', 'js', 'serve'));