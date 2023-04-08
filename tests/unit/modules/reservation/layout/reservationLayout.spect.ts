import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ReservationLayout from '../../../../../src/modules/reservation/layout/ReservationLayout.vue'

describe('ReservationLayout', () => {
    it('Matches snapshot', () => {
        const wrapper = mount(ReservationLayout, {})
        expect(wrapper.html()).toMatchSnapshot()
    })
})
