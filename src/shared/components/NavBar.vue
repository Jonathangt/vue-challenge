<script lang="ts">
import { defineComponent } from 'vue';
import type { RouterLink } from '@/router/link-routes'

interface Props {
  links: RouterLink[];
}

export default defineComponent({
    name: 'Navbar',
    props: {
        links: {
            type: Array as () => Array<RouterLink>,
            default: () => [],
            required: true,
        },
    },
    setup(props: Props) {
       return {
            props
       }
    }
});
</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="vue Logo" height="25" width="25">

        <Router-Link v-for="link of props.links" :key="link.path" :to="link.path">
            {{  link.title }}
        </Router-Link>
    </nav>
</template>

<style scoped lang="scss" src="../styles/navBar.scss"></style>