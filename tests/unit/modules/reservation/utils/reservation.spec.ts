import { describe, it, expect } from 'vitest'

import type { MiamiHoteles } from '../../../../../src/modules/reservation/interfaces/hotels';
import { findCheapestHotel } from '../../../../../src/modules/reservation/utils/reservation';

describe('findCheapestHotel', () => {
	const hotels: MiamiHoteles[] = [
		{
			name: 'Lakewood',
			score: 3,
			ratePerWeekRegularCustomer: 110,
			ratePerWeekRewardsCustomer: 80,
			weekendRateRegularCustomer: 90,
			weekendRateRewardsCustomer: 80,
		},
		{
			name: 'Bridgewood',
			score: 4,
			ratePerWeekRegularCustomer: 160,
			ratePerWeekRewardsCustomer: 110,
			weekendRateRegularCustomer: 60,
			weekendRateRewardsCustomer: 50,
		},
		{
			name: 'Ridgewood',
			score: 5,
			ratePerWeekRegularCustomer: 220,
			ratePerWeekRewardsCustomer: 100,
			weekendRateRegularCustomer: 150,
			weekendRateRewardsCustomer: 40,
		},
	];

	it('should return Lakewood for regular customer with the dates sent', () => {
		const arrSelectedDays = [
			new Date('2023-04-10T19:38:00.000Z'),
			new Date('2023-04-11T19:38:00.000Z'),
			new Date('2023-04-12T19:38:00.000Z')
		]

		const srtCustomer = 'regular'
		const reserveResultHotel = findCheapestHotel(arrSelectedDays, srtCustomer, hotels);
		const nameHotel = reserveResultHotel.logInfoHotel
		expect(nameHotel.name).toBe('Lakewood');
	});


	it('should return Ridgewood for regular rewards with the dates sent', () => {
		const arrSelectedDays = [
			new Date('2023-04-27T20:03:00.000Z'),
			new Date('2023-04-28T20:03:00.000Z'),
			new Date('2023-04-29T20:03:00.000Z'),
		]

		const srtCustomer = 'rewards'
		const reserveResultHotel = findCheapestHotel(arrSelectedDays, srtCustomer, hotels);
		const nameHotel = reserveResultHotel.logInfoHotel
		expect(nameHotel.name).toBe('Ridgewood');
	});
});