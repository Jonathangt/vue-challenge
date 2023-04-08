import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../../src/views/HomeView.vue'

describe('HomeView', () => {
    it('Matches snapshot', () => {
        const wrapper = mount(HomeView, {})
        expect(wrapper.html()).toMatchSnapshot()
    })
})
