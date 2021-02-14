## README

[English](README.md) [Русский](README-ru.md)

---

## Starting the server

You need to have `docker` on your computer

Running `docker-compose.yml`:

```bash
sudo docker-compose up
```

Opening the site http://0.0.0.0:4000/jekyll-social-ui/

---

## Project Tree

```
$ tree --charset ascii
.
|-- README-ru.md        //file with description 
|-- README.md           //file with description
|-- _config.yml         //Jekyll settings file
|-- _data               //folder with *.yml, *.csv, *.json files
|-- _includes           //folder with the pieces of code
|-- _layouts            //template folder for Jekyll
|-- _pages              //a folder with pages that moves content to the root of the site
|-- _public             //folder that moves content to the root of the site
|-- _sass               //folder with SASS styles
|-- _site               //folder with the finished site
`-- docker-compose.yml  //docker, which raises the VM

7 directories
```
