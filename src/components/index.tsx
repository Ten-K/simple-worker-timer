import Flippers from './filpper'
import MyWork from '../worker?worker'
import { formatDate } from '../utils/index'
import { HTMLElementPlus } from '../types/index'
import { ref, unref, nextTick, onUnmounted, defineComponent } from 'vue'

import './index.css'

export default defineComponent({
  name: 'SimpleWorkerTimer',
  setup() {
    const worker = ref<Worker | null>(null)
    const flipObjs = ref<(HTMLElementPlus | null)[]>([])

    const flipperHour1 = ref<HTMLElementPlus | null>(null)
    const flipperHour2 = ref<HTMLElementPlus | null>(null)
    const flipperMinute1 = ref<HTMLElementPlus | null>(null)
    const flipperMinute2 = ref<HTMLElementPlus | null>(null)
    const flipperSecond1 = ref<HTMLElementPlus | null>(null)
    const flipperSecond2 = ref<HTMLElementPlus | null>(null)
    // 初始化数字
    const init = () => {
      const now = new Date()
      const nowTimeStr = formatDate(new Date(now.getTime()), 'hhiiss')

      for (let i = 0; i < flipObjs.value.length; i++) {
        flipObjs?.value[i]?.setFront(nowTimeStr[i])
      }
    }

    // 开始计时
    const run = () => {
      if (!window.Worker) return
      worker.value = new MyWork()
      worker.value.postMessage('')
      worker.value.onmessage = (e) => {
        const { nowTimeStr, nextTimeStr } = e.data
        for (let i = 0; i < flipObjs.value.length; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]) {
            continue
          }
          flipObjs?.value[i]?.flipDown(nowTimeStr[i], nextTimeStr[i])
        }
      }
    }

    nextTick(() => {
      flipObjs.value = [unref(flipperHour1), unref(flipperHour2), unref(flipperMinute1), unref(flipperMinute2), unref(flipperSecond1), unref(flipperSecond2)]

      init()
      run()
    })

    onUnmounted(() => {
      worker.value?.terminate()
    })

    return () => (
      <div class="flip-clock">
        <Flippers ref={flipperHour1} />
        <Flippers ref={flipperHour2} />
        <em>:</em>
        <Flippers ref={flipperMinute1} />
        <Flippers ref={flipperMinute2} />
        <em>:</em>
        <Flippers ref={flipperSecond1} />
        <Flippers ref={flipperSecond2} />
      </div>
    )
  }
})
