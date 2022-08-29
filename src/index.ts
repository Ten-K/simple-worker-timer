import type { App } from 'vue'
import simpleWorkerTimer from './components/index'

/** 时间翻牌组件 */
export const SimpleWorkerTimer = Object.assign(simpleWorkerTimer, {
  install: (app: App) => {
    app.component(simpleWorkerTimer.name, simpleWorkerTimer)
  }
})

export default SimpleWorkerTimer
