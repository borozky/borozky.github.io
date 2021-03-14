<template>
    <div class="project">
        <div class="container clearfix calc">
            <div class="project-details fixed-sidebar sidebar-left">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
                <p v-if="link != '#'">
                    <br/>
                    <a :href="link" target="_blank">{{ link }}</a>
                </p>
            </div>
            <div class="project-image responsive-content">
                <a :href="link" :target="link != '#' ? '_blank' : ''">
                    <img :src="thumbnail" :alt="title"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        description: {
            required: true,
            type: String,
        },
        link: {
            required: false,
            default: "#",
            type: String,
        },
        thumbnail: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        }
    }
})
</script>

<style lang="scss" scoped>
.project {
    padding-bottom: 60px;

    a {
        word-wrap: break-word;
    }
}


.project-details {
    width: 100%;
    text-align: left;
    margin-bottom: 15px;

    h3 {
        margin-bottom: 15px;
    }
}


.project-image {
    text-align: right;

    a {
        display: inline-block;
        width: 100%;
        text-align: left;
    }

    img {
        max-width: 100%;
        height: auto;
    }
}



@media screen and (min-width: 769px) {
    .project {
        padding-top: 15px;
        padding-bottom: 70px;
    }

    .project-details {
        float: left;
        max-width: 320px;
    }

    .project-image a {
        text-align: right;
        max-width: 500px;
    }


    .clearfix.calc .fixed-sidebar {
        width: 320px;
    }

    .clearfix.calc .fixed-sidebar + .responsive-content {
        width: calc(100% - 320px);
        float: left;   
    }

    .clearfix.calc .fixed-sidebar.sidebar-left {
        float: left;
    }

    .clearfix.calc .responsive-content {
        width: calc(100% - 320px);
    }

    .clearfix.calc .responsive-content + .fixed-sidebar {
        width: 320px;
        float: left;
    }

    .clearfix.calc.sidebar-left .responsive-content {
        float: right;
    }


}

</style>
