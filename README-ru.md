## README

[English](README.md) [Русский](README-ru.md)

---

## Запуск сервера

Нужно иметь на компьютере `docker`

Запускаем `docker-compose.yml`:

```bash
sudo docker-compose up
```

---

## Дерево проекта

```
$ tree --charset ascii
.
|-- README-ru.md        //файл с описанием  
|-- README.md           //файл с описанием
|-- _config.yml         //файл настроек Jekyll
|-- _data               //папка с файлами *.yml, *.csv, *.json
|-- _includes           //папка с кусками кода
|-- _layouts            //папка шаблонов для Jekyll
|-- _pages              //папка со страницами, которая перемещает контент в корень сайта
|-- _public             //папка, которая перемещает контент в корень сайта
|-- _sass               //папка со стилями SASS
|-- _site               //папка с готовым сайтом
|-- docs                //документы, задания
`-- docker-compose.yml  //docker, который поднимает виртуальную машину

8 directories
```
