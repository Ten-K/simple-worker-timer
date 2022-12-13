# simple-worker-timer

- 基于`vue3` 、`web worker`的翻牌计时器

## 📦 安装

```bash
  # 通过 NPM 安装
  npm i simple-worker-timer
```

```bash
 # 通过 Yarn 安装
  yarn add simple-worker-timer
```

## 🕸️ CDN

`simple-worker-timer`也提供了 UMD 版本，可以直接通过 CDN 加载，然后直接使用：

```html
<link rel="stylesheet" href="https://unpkg.com/simple-worker-timer@1/dist/style.css" />

<!--需要在vue.js之后导入 -->
<script src="https://unpkg.com/simple-worker-timer@1/dist/index.umd.js"></script>
```

查看[HTML 示例](https://github.com/Ten-K/simple-worker-timer/blob/main/example/Html/index.html)

## 🚗 用法

```ts
<script setup lang="ts">
import SimpleWorkerTimer from 'simple-worker-timer'
</script>

<template>
  <SimpleWorkerTimer />
</template>
```
