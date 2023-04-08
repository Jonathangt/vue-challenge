import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CardHotel from '../../../../../src/modules/reservation/components/CardHotel.vue'

describe('CardHotel', () => {
    it('Matches snapshot', () => {
        const wrapper = mount(CardHotel, {})
        expect(wrapper.html()).toMatchSnapshot()
    })
})
