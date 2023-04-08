import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomePage from '../../../../src/shared/pages/HomePage.vue'

describe('HomePage', () => {
    it('Matches snapshot', () => {
        const wrapper = mount(HomePage, {})
        expect(wrapper.html()).toMatchSnapshot()
    })
})
