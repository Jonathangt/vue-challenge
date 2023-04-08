<script lang="ts">

import { defineComponent, ref } from 'vue';
import type { MiamiHoteles } from '@/modules/reservation/interfaces/hotels';
import { dbMiamiHoteles } from '@/modules/reservation/db/miamiHotels';
import { generateStars } from '@/modules/reservation/utils/generateStars';

interface Props {
    bolCusrtomer: boolean;
}

export default defineComponent({
    name: "CardHotel",

    props: {
        bolCusrtomer: {
            type: Boolean,
            required: true,
            default: false,
        }
    },

    setup( props: Props ) {
        const arrHotels = ref<MiamiHoteles[]>([...dbMiamiHoteles])

        return {
            //properties
            arrHotels,
            props,

            //methods
            generateStars,
        };
    },
})
</script>

<template>
    <div class="card-list">
        <div class="card" v-for="card in arrHotels" :key="card.name">
            {{ card.name }}
            <ul>
                <li>Rate: {{ generateStars(card.score) }}</li>
                <span class="">Weekday rates</span>
                <ul>
                    <li v-if="!props.bolCusrtomer">Regular customer: {{ `$${ card.ratePerWeekRegularCustomer }` }}</li>
                    <li v-else>Rewards customer: {{ `$${ card.ratePerWeekRewardsCustomer }` }}</li>
                </ul>
                <span class="">The weekend rates</span>
                <ul>
                    <li v-if="!props.bolCusrtomer">Regular customer: {{ `$${ card.weekendRateRegularCustomer }` }}</li>
                    <li v-else>Rewards customer: {{ `$${ card.weekendRateRewardsCustomer }` }}</li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.card {
    margin: 1rem;
}
</style>
