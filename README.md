# babel-include-loader
> 解决 **.babelrc** 中配置了 ignore *node_modules*, 但 *node_modules*中存在源码es6、7源码的问题

> 环境 **webpack ^3.x**, **babel-loader ^7.x**, **vue-loader ^13.x**

## .babelrc 配置

```js
{
    ...
    "ignore":["node_modules"]
    ...
}

## webpack 配置

```js
{
    test: /\.js$/,
    loader: 'babel-loader'
},
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options:{
        preLoaders:{
            js:'babel-include-loader'
        }
    }
},
{
    test: /\.js$/,
    loader: 'babel-include-loader',
    include: [path.resolve(__dirname ,'./node_modules/custom-module')]
}
...

```

