## Web School Lectures

### Web hosting:
- [GitHub Pages](https://pavelgalanin2001.github.io/web-school-lectures/)
  
### Languages:
- HTML
- CSS (FlexBox)
  - SASS

### Builder:
- Gulp:
  - ```browser-sync``` - auto refresh browser page
  - ```gulp``` - project builder with tasks
  - ```gulp-autoprefixer``` - autoprefixer for CSS
  - ```gulp-clean-css``` - min CSS
  - ```gulp-concat``` - collect files into one file
  - ```gulp-notify``` - show error notification
  - ```gulp-sass``` - compile SASS to CSS
- Jekyll - HTML builder

### Fonts:
- Font Awesome (icons)
- Open Sans
## How to run:

### If not installed git, npm, gulp, rimraf, ruby, jekyll, ruby-bundler

$ ```sudo apt install git```

$ ```sudo apt install npm```

$ ```sudo npm i -g gulp-cli```

$ ```sudo npm i -g rimraf```

$ ```sudo apt install ruby```

$ ```sudo apt install jekyll```

$ ```sudo apt install ruby-bundler```

### For the first run

$ ```npm i```

At file ```_config.yml```
  
  uncoment ```# pg_base_url: /```
  
  comment ```pg_base_url: /web-school-lectures/```

### For start server

$ ```bundle exec jekyll serve```

$ ```gulp```
