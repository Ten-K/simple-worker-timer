import { formatDate } from './utils'

onmessage = () => {
  setInterval(() => {
    // 获取当前时间
    const now = new Date()
    const nowTimeStr = formatDate(new Date(now.getTime() - 1000), 'hhiiss')
    const nextTimeStr = formatDate(now, 'hhiiss')
    postMessage({ nowTimeStr, nextTimeStr })
  }, 1000)
}
