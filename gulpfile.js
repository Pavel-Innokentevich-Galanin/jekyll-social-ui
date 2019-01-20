var
    browserSync  = require("browser-sync"),
    gulp         = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    min_CSS      = require("gulp-clean-css"),
    concat       = require("gulp-concat"),
    notify       = require("gulp-notify"),
    SASS_to_CSS  = require("gulp-sass");

var
    proxy = "127.0.0.1:4000",
    HTML_files = [
        "./**/*.html",
        "!./_site/**/*.html"
    ],
    SASS_flies = [
        "./assets/sass/-var/**/*.sass",
        "./assets/sass/**/*.sass"
    ],
    dist_SASS_files = "./uploads/";

gulp.task('html',
    function ()
    {
        return gulp.src(HTML_files)
            .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('sass',
    function ()
    {
        return gulp.src(SASS_flies)
            .pipe(concat('style.sass'))
            .pipe(SASS_to_CSS({ outputStyle: 'expanded' }).on("error", notify.onError()))
            .pipe(concat('style.min.css'))
            .pipe(autoprefixer({
                browsers: ['last 300 versions']
            }))
            .pipe(min_CSS())
            .pipe(gulp.dest(dist_SASS_files))
            .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('serve',
    function ()
    {
        browserSync(
            {
                proxy: proxy,
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
        gulp.watch(HTML_files, gulp.parallel('html'));
        gulp.watch(SASS_flies, gulp.parallel('sass'));
    }
);

gulp.task('default', gulp.parallel('watch', 'html', 'sass', 'serve'));