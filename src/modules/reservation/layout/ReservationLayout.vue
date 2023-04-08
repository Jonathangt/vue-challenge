<script lang="ts">
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import CardHotel from "@/modules/reservation/components/CardHotel.vue";
import Datepicker from "@vuepic/vue-datepicker";

import { dbMiamiHoteles } from "@/modules/reservation/db/miamiHotels";
import { findCheapestHotel } from "@/modules/reservation/utils/reservation";
import { generateStars } from "@/modules/reservation/utils/generateStars";
import type { dbCustomerType } from "@/modules/reservation/db/miamiHotels";
import type { TotalCostAndRecommendedHotel } from "@/modules/reservation/interfaces/hotels";

export default defineComponent({
	name: "ReservationLayout",

	components: {
		CardHotel,
		Datepicker,
	},

	setup() {
		const arrSelectedDays = ref<Array<Date>>([]);
		const bolCusrtomer = ref<boolean>(false);
		const reserveResultHotel = ref<TotalCostAndRecommendedHotel | undefined>();
		const srtCustomer = ref<dbCustomerType>("regular");

		watch(bolCusrtomer, (currentValue) => {
			srtCustomer.value = currentValue ? "rewards" : "regular";
			reserveResultHotel.value = undefined;
		});

		const handleReservation = () => {
			reserveResultHotel.value = undefined;
			if (!arrSelectedDays.value || !arrSelectedDays.value.length) {
				alert("You must select the days to reserve");
				return;
			}
			reserveResultHotel.value = findCheapestHotel(arrSelectedDays.value, srtCustomer.value, dbMiamiHoteles);
		};
		return {
			//properties
			arrSelectedDays,
			bolCusrtomer,
			reserveResultHotel,

			//methods
			handleReservation,
			generateStars,
		};
	},
});
</script>

<template>
	<div class="reservation">
		<h3 class="title-reservation">Hotel reservation</h3>
		<CardHotel :bol-cusrtomer="bolCusrtomer" />

		<div class="reservation-info">
			Regular customer
			<label class="switch">
				<input type="checkbox" v-model="bolCusrtomer" />
				<span class="slider round"></span>
			</label>
			Rewards customer

			<div class="picker-date">
				<Datepicker
					:enable-time-picker="false"
					:min-date="new Date()"
					hide-offset-dates
					multi-dates
					v-model="arrSelectedDays"
				/>
				<button @click="handleReservation">Search hotel</button>
			</div>
		</div>

		<div class="reservation-info" v-if="reserveResultHotel && reserveResultHotel.cheapestHotelRate">
			Total reserve: {{ `$${ reserveResultHotel.cheapestHotelRate }` }}
			<div class="hotel-info">
				<div class="hotel-name">
					Recommended Hotel: {{ reserveResultHotel.logInfoHotel?.name }}
				</div>
				<div class="hotel-score">
					Score: {{ generateStars(reserveResultHotel.logInfoHotel?.score) }}
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss" src="@/modules/reservation/styles/reservationLayout.scss"></style>