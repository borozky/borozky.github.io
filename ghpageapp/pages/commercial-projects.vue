<template>
    <div id="HomePage" class="site-wrapper">
        <hero-section></hero-section>

        Commercial projects
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import HeroSection from "../components/HeroSection.vue";

export default Vue.extend({
    components: {
        "hero-section": HeroSection
    },
})
</script>


<style>
/* nothing */
</style>


