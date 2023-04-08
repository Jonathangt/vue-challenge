<script lang="ts">

import { defineComponent } from 'vue';
import ReservationLayout from '@/modules/reservation/layout/ReservationLayout.vue';

export default defineComponent({
    name: "HomePage",

    components: {
        ReservationLayout
    },

    setup() {
        return {};
    },
})
</script>

<template>
    <div>
        <h2>Miami Hotel Group</h2>
        <ReservationLayout />
    </div>
</template>

<style scoped lang="scss">
h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>
