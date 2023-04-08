
import type { MiamiHoteles } from '@/modules/reservation/interfaces/hotels';
import type { dbCustomerType } from '@/modules/reservation/db/miamiHotels';

interface TotalCostAndRecommendedHotel {
    logInfoHotel: MiamiHoteles;
    cheapestHotelRate: number;
}

/**
 * Calculate the cost of a reservation for a given date, customer type, and hotel.
 * @description This function calculates the cost of a reservation for a given date, customer type, and hotel.
 *  It first determines whether the given date is a weekday or a weekend day. Then, depending on the customer type,
 *  it selects the corresponding rate (weekend or weekday) from the hotel object. Finally, it returns the rate as the cost of
 *  the reservation.
 * @param { Date } date The date of the reservation.
 * @param { dbCustomerType } customerType The type of customer ("regular" or "rewards").
 * @param { MiamiHoteles } hotel The hotel for which the reservation is being made.
 * @returns { number } The cost of the reservation for the given date, customer type, and hotel.
 */
const calculateCostReservation = (date: Date, customerType: dbCustomerType, hotel: MiamiHoteles): number => {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    let rate = null
    if ( customerType === "regular" ) {
        rate =  isWeekend ? hotel.weekendRateRegularCustomer : hotel.ratePerWeekRegularCustomer
    }else{
        rate = isWeekend ? hotel.weekendRateRewardsCustomer : hotel.ratePerWeekRewardsCustomer
    }
    return rate;
}

/**
 * Return the cheapest hotel, according to the list of selected days, type of client and a list of hotels.
 * @param { Array } dateStrings array of selected dates
 * @param { dbCustomerType } customerType Type of the customer (regular or rewards)
 * @param { MiamiHoteles } hotels List of available hotels
 * @returns { TotalCostAndRecommendedHotel } An object with the total value of the rate and hotel information
*/
export const findCheapestHotel = (dateStrings: Date[], customerType: dbCustomerType, hotels: MiamiHoteles[]): TotalCostAndRecommendedHotel => {

    let logInfoHotel = hotels[0];
    let cheapestHotelRate = Infinity;
    // debugger
    for (const hotel of hotels) {
        let totalCost = 0;

        for (const date of dateStrings) {
            totalCost += calculateCostReservation(date, customerType, hotel);
        }
        if (totalCost < cheapestHotelRate || (totalCost === cheapestHotelRate && hotel.score > logInfoHotel.score)) {
            cheapestHotelRate = totalCost;
            logInfoHotel = hotel;
        }
    }

    return {
        logInfoHotel,
        cheapestHotelRate,
    };
}
