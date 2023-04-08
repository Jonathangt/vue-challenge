<script lang="ts">

import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'
import { routeLinks } from '@/router/link-routes'
import NavBar from '@/shared/components/NavBar.vue'

export default defineComponent({
	name: 'App',
	components:{
		NavBar,
	},
	setup() {
		return {
			routeLinks
		}
	},
})
</script>

<template>
	<div class="wrapper">
		<header>
			<NavBar :links="routeLinks" />
		</header>
		<main>
			<RouterView />
		</main>
	</div>
</template>

<style scoped lang="scss">
.wrapper{
	display: flex;
	flex-direction: column;
}
</style>
