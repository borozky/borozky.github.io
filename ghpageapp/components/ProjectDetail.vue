<template>
    <div class="project-detail">
        <div class="container clearfix">
            <div class="project-detail-inner">
                <div class="left">
                    <div class="detail">
                        <h3>{{ title }}</h3>
                        <p>{{ description }}</p>
                        <p v-if="link != '#'">
                            <br/>
                            <a :href="link" target="_blank">{{ link }}</a>
                        </p>
                    </div>
                </div>
                <div class="right">
                    <div class="thumbnail">
                        <a :href="link" :target="link != '#' ? '_blank' : ''">
                            <img :src="thumbnail" :alt="title"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        description: {
            required: true,
            type: String,
        },
        link: {
            default: "#",
            required: false,
            type: String,
        },
        thumbnail: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
    },
});
</script>



<style>
.project-detail {
    display: table;
    width: 100%;
    padding-bottom: 100px;
}

.project-detail .left {
    float: left;
    width: 320px;
}

.project-detail .left .detail {
    display: inline-block;
}

.project-detail .right {
    float: right;
    text-align: right;
}

.project-detail .right .thumbnail {
    display: inline-block;
    width: 500px;
}

.project-detail .right .thumbnail img {
    display: inline-block;
    width: 100%;
}

.detail h3 {
    margin-bottom: 15px;
}
</style>

