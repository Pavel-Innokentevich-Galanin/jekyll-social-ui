const
    PROXY = '127.0.0.1:4000/jekyll-social-ui/',
    SRC = {
        HTML: [
            './docs/**/*.html',
            '!./docs/_site/**/*.html'
        ],
        SASS: [
            './docs/consts/**/*.sass',
            './docs/**/*.sass'
        ]
    },
    DIST = {
        SASS: './docs/dist/' 
    };

const
    browserSync  = require("browser-sync"),
    gulp         = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    clean_css    = require("gulp-clean-css"),
    concat       = require("gulp-concat"),
    notify       = require("gulp-notify"),
    sass         = require("gulp-sass");

gulp.task('sass', function () {
    return gulp.src(SRC['SASS'])
        .pipe(concat('style.sass'))
        .pipe(
            sass( { outputStyle: 'expanded' } )
                .on( "error", notify.onError() )
        )
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
        proxy: PROXY,
        open: false,
        notify: true,
        tunnel: false
    });
});

gulp.task('watch', function () {
    gulp.watch(SRC['HTML']).on('change', browserSync.reload);
    gulp.watch(SRC['SASS'], gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('watch', 'sass', 'serve'));
