import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AboutPage from '../../../../src/shared/pages/AboutPage.vue'

describe('AboutPage', () => {
    it('Matches snapshot', () => {
        const wrapper = mount(AboutPage, {})
        expect(wrapper.html()).toMatchSnapshot()
    })
})
