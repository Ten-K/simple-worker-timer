import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Filpper from '../src/components/filpper'

describe('Filpper', () => {
  it('默认props渲染', () => {
    const wrapper = mount(Filpper)
    expect(wrapper.html()).toContain('<div class="digital front number0"></div>')
    expect(wrapper.html()).toContain('<div class="digital back number1"></div>')
  })

  it('接收frontText, backText参数渲染', async () => {
    const wrapper = mount(Filpper, {
      propsData: {
        frontText: 1,
        backText: 2
      }
    })
    expect(wrapper.html()).toContain('<div class="digital front number1"></div>')
    expect(wrapper.html()).toContain('<div class="digital back number2"></div>')
  })
})
