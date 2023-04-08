
import { describe, it, expect } from 'vitest'
import { generateStars } from '../../../../../src/modules/reservation/utils/generateStars';

describe('generateStars', () => {
	it('Must generate the number of stars received', () => {
		expect(generateStars(3)).toBe('⭐⭐⭐');
		expect(generateStars(5)).toBe('⭐⭐⭐⭐⭐');
		expect(generateStars(0)).toBe('');
	});
});