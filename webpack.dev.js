const conf = require('./webpack.config')

conf.mode = "development"
conf.watch = true

module.exports = conf;