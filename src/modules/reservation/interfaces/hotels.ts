
import type { dbCustomerType } from "@/modules/reservation/db/miamiHotels";

export interface MiamiHoteles {
    name: string;
    score: number;
    ratePerWeekRegularCustomer: number;
    ratePerWeekRewardsCustomer: number;
    weekendRateRegularCustomer: number;
    weekendRateRewardsCustomer: number;
}

export interface CustomerType {
    regular: string;
    rewards: string;
}

export interface TotalCostAndRecommendedHotel {
    logInfoHotel: MiamiHoteles;
    cheapestHotelRate: number;
}