# template-app

这个模板应该可以帮助您开始在Vite中使用Vue 3进行开发。
使用 Vue3.x + Vite + pinia + Element Plus + Element Icon 创建
配置Vite自动导入Vue、VueRouter、Element组件和图标

## 推荐的IDE设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 引入ts对`.vue`的类型支持

TypeScript不能处理`.vue`的类型信息。所以我们用`vue-tsc`来代替`tsc`命令行进行类型检查。在编辑器中，我们需要[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)来让TypeScript获取`.vue`的类型。

如果你觉得独立的TypeScript插件不够快，Volar还实现了一个性能更高的[接管模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)。您可以通过以下步骤启用它:

1. 禁用内置的TypeScript扩展
   1. 从VSCode的命令面板运行`Extensions: Show Built-in Extensions`
   2. 找到`TypeScript and JavaScript Language Features`，右键单击并选择`Disable (Workspace)`。
2. 通过从命令面板运行`Developer: Reload Window`来重新加载VSCode窗口。

## 自定义配置

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 安装

```sh
npm install
```

### 编译和热更新开发

```sh
npm run dev
```

### 为生产环境进行类型检查、编译和最小化

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
