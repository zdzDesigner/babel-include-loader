#babel-include-loader

## webpack 配置
```js
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options:{
        preLoaders:{
            js:'babel-include-loader'
        }
    }
}
...

```