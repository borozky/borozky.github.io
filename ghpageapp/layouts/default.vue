<template>
  <div>
    <hero-section></hero-section>
    <nuxt/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import HeroSection from '../components/HeroSection.vue';
import Navigation from '../components/Navigation.vue';
import { NuxtConfigurationHead } from '@nuxt/config/types/head';

@Component({
    components: {
        "hero-section": HeroSection,
    }
})
export default class DefaultLayout extends Vue {}
</script>


<style>
html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    padding-bottom: 200px;
}

.container {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
* html .clearfix             { zoom: 1; } /* IE6 */
*:first-child+html .clearfix { zoom: 1; } /* IE7 */


</style>

