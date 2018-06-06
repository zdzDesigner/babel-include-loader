var { getOptions } = require('loader-utils');
var babel = require('babel-core');
var path = require('path');
var jsonfile = require('jsonfile');
var babelrc = getbabelrc();

module.exports = function (content, map, meta) {
    this.cacheable();
    var callback = this.async();
    var optins =  getOptions(this);
    var bool = false;
    

    if(optins && optins.babelrc){
        babelrc = optins.babelrc;
    }

    if(~this.context.indexOf('node_modules')){
        var res = babel.transform(content,babelrc)
        content = res.code
    }

    callback(null,content);
    
}

function getbabelrc(){

    var appRootPath = process.cwd();
    var babelrcPath = path.resolve(appRootPath,'./.babelrc');
    var babelrc = '';

    if(babelrcPath){
        try{
            babelrc = jsonfile.readFileSync(babelrcPath);    
        }catch(err){
            console.error('.babelrc 配置路径为：'+babelrcPath+'; 路径应配置在根目录下')
        }
    }

    return babelrc;

}