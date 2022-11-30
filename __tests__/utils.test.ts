import { describe, test, expect } from 'vitest'
import { formatDate, padLeftZero } from '../src/utils'

describe('时间格式化', () => {
  test('将时间转化为hhiiss格式', () => {
    expect(formatDate(new Date(1669791839049), 'hhiiss')).toBe('150359')
  })
})

describe('日期时间补零', () => {
  test('当时间小于十补零', () => {
    expect(padLeftZero('1')).toBe('01')
  })

  test('当时间大于等于十返回原始值', () => {
    expect(padLeftZero('10')).toBe('10')
  })
})
