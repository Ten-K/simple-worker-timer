import type { App } from 'vue'
import workerTimer from './components/index'

/** 时间翻牌组件 */
export const WorkerTimer = Object.assign(workerTimer, {
  install: (app: App) => {
    app.component(workerTimer.name, workerTimer)
  }
})

export default WorkerTimer
