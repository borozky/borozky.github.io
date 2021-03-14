<template>
    <div id="HomePage">
        <header>
            <div class="container">
                <h2>Projects</h2>
            </div>
        </header>
        <projects-list />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import ProjectsList from "../components/ProjectsList.vue"

export default Vue.extend({
    components: {
        "projects-list": ProjectsList,
    },
    //@ts-ignore
    scrollToTop: false,
})
</script>

<style lang="scss" scoped>
header {
    padding-top: 30px;
    padding-bottom: 15px;

    h2 {
        margin: 0;
    }
}
</style>



