
import type { MiamiHoteles } from '@/modules/reservation/interfaces/hotels';

export const dbMiamiHoteles:MiamiHoteles[] = [
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
]

export type dbCustomerType = 'regular' | 'rewards';
