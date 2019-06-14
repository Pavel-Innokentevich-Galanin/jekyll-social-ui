# Web School Lectures

## Install Git

Linux | Windows
-|-
$ `sudo apt install git` | view on official site

---

## Clone git repo

### Clone with HTTPS:

$ `git clone https://github.com/`authorOfThisRepository`/`nameOfThisRepository`.git`

### Clone with SSH:

Linux | Windows
-|-
$ `ssh-keygen` | > `ssh-keygen`
$ `cat /home/"$USER"/.ssh/`id_rsa.pub | > `cd /d C:/Users/%UserName%/.ssh/` <br> > `type ` id_rsa.pub

copy and active it at GitHub at settings

$ `git clone git@github.com:`authorOfThisRepository`/`nameOfThisRepository`.git`

---

## Install Node JS

Linux

$ `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`

$ `sudo apt-get install -y nodejs`

Windows

view on official site

## Install Ruby

$ ```sudo apt install ruby```

$ ```sudo apt install jekyll```

$ ```sudo apt install ruby-bundler```


---

## How to update npm packages

$ `sudo npx npm-check-updates -u`

$ `sudo npm i`

---

## How to start work

$ `npm i` - install node modules

At file `_config.yml`
  
  uncoment `# pg_base_url: /`
  
  comment `pg_base_url: /web-school-lectures/`

Terminal 1 : $ `bundle exec jekyll serve`

Terminal 2 : $ `gulp`
