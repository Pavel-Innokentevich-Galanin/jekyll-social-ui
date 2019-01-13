var
    browserSync  = require("browser-sync"),
    gulp         = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    min_CSS      = require("gulp-clean-css"),
    concat       = require("gulp-concat"),
    notify       = require("gulp-notify"),
    SASS_to_CSS  = require("gulp-sass");

gulp.task('html',
    function ()
    {
        return gulp.src("./site/**/*.html")
            .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('css',
    function ()
    {
        return gulp.src([
                "./site/assets/sass/1-first/**/*.sass",
                "./site/assets/sass/**/*.sass"
            ])
            .pipe(concat('style.sass'))
            .pipe(SASS_to_CSS({ outputStyle: 'expanded' }).on("error", notify.onError()))
            .pipe(concat('style.css'))
            .pipe(autoprefixer({
                browsers: ['last 300 versions']
            }))
            .pipe(min_CSS())
            .pipe(gulp.dest("./site"))
            .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('serve',
    function ()
    {
        browserSync(
            {
                proxy: "127.0.0.1:4000",
                open: false,
                // notify: false,
		        // online: false, // Work Offline Without Internet Connection
                // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
            }
        );
    }
);

gulp.task('watch',
    function ()
    {
        gulp.watch("./site/**/*.html", gulp.parallel('html'));
        gulp.watch("./site/assets/sass/**/*.sass", gulp.parallel('css'));
    }
);

gulp.task('default', gulp.parallel('watch', 'html', 'css', 'serve'));