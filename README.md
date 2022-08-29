# simple-worker-timer

- 基于`vue3` 、`web worker`的翻牌计时器

## 📦 安装

```bash
  pnpm i simple-worker-timer
```

## 🚗 用法

```ts
<script setup lang="ts">
import SimpleWorkerTimer from 'simple-worker-timer'
</script>

<template>
  <SimpleWorkerTimer />
</template>
```

## ⚠️ 注意

- 将**node_modules/simple-worker-timer/dist/assets**文件夹复制一份到**node_modules/.vite/deps**下
- 具体原因详见[vite issues](https://github.com/vitejs/vite/issues/9861)

![](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/20220829160248.png)
![](https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/20220829150922.png)
