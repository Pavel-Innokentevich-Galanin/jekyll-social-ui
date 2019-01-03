const
    browserSync  = require("browser-sync"),
    gulp         = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    min_CSS      = require("gulp-clean-css"),
    concat       = require("gulp-concat"),
    notify       = require("gulp-notify"),
    SASS_to_CSS  = require("gulp-sass");

const
    html_files = [
        "./*.html",
        "./_includes/*.html"
    ];

gulp.task('html',
    function ()
    {
        return gulp.src(html_files)
            .pipe(browserSync.reload({stream: true}));
    }
);

gulp.task('css',
    function ()
    {
        return gulp.src([
                "./assets/sass/1-less-libs/**/*.sass",
                "./assets/sass/**/*.sass"
            ])
            .pipe(concat('style.sass'))
            .pipe(SASS_to_CSS({ outputStyle: 'expanded' }).on("error", notify.onError()))
            .pipe(concat('style.css'))
            .pipe(autoprefixer({
                browsers: ['last 300 versions']
            }))
            .pipe(min_CSS())
            .pipe(gulp.dest("./"))
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
        gulp.watch(html_files, gulp.parallel('html'));
        gulp.watch("./assets/sass/**/*.sass", gulp.parallel('css'));
    }
);

gulp.task('default', gulp.parallel('watch', 'html', 'css', 'serve'));