# jekyll-social-ui

## Дерево проекта

```
.
├── _site                   //папка с сгенерированным сайтом
├── node_modules            //папка с Node JS модулями
├── src                     //папка с Java Script и SASS
├── src-jekyll              //папка с проектом Jekyll
│   ├── _data               //папка для YML, JSON, CSV файлов
│   ├── _includes           //папка с отрывками HTML
│   ├── _layouts            //папка с шаблонами HTML
│   ├── _pages              //папка со страницами, например, на HTML и Markdown
│   ├── dist                //папка, куда компилируются стили, скрипты и подгружаються шрифты 
│   ├── robots.txt          //файл для поисковых роботов
│   └── sitemap.xml         //файл с картой сайта
├── _config.yml             //файл настроек Jekyll
├── .browserslistrc         //файл настроек Autoprefixer
├── .gitignore              //файл, в котором описываем, что игнорировать Git'ом
├── package.json            //файл, содержаший какие пакеты Node JS нужно установить
├── package-lock.json       //...
├── postcss.config.js       //файл настроек Post CSS
├── README.md               //файл с описанием
├── webpack.config.js       //файл настроек Web Pack (общий)
├── webpack.dev.js          //файл настроек Web Pack (development mode)
└── webpack.prod.js         //файл настроек Web Pack (production mode)

9 directories, 12 files
```

## Как работать с репозиторием

1. Клонируем
1. Устанавливаем пакеты командой $ `npm i` (должен быть установлен Node JS)
1. В терминале 1 запускаем WebPack командой $ `npm run dev`
1. В терминале 2 запускаем Jekyll генератор страниц и сервер командой $ `jekyll s`
1. Запускаем в браузере [127.0.0.1:4000/jekyll-social-ui/](http://127.0.0.1:4000/jekyll-social-ui/)
1. Кодим

## Отправка на продакшен

1. Собираем проект командой $ `npm run build`
1. Отправляем папку `_site` на хостинг. Например, команда $ `npm run deploy` отправит папку `_site` на `GitHub pages`
