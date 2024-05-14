module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    //新增的配置
    ["@babel/preset-env", { "modules": false }] //修改es2015 为@bable/preset-env 再次启动项目
  ],
  //新增的配置
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
