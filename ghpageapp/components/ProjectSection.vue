<template>
    <div id="ProjectSection">
        <div class="container">
            <h2 class="section-title">Projects</h2>
        </div>
        <project-detail v-for="(project, index) in projects" 
            :key="index" 
            v-bind="project">
        </project-detail>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetail from "./ProjectDetail.vue";

import abcCineplexCorp from "../assets/project-thumbnails/abc-cineplex-corp.png";
import brainstormIt from "../assets/project-thumbnails/brainstormit.com.au.png";
import cinegoIOSApp from "../assets/project-thumbnails/cinego-ios-application.png";
import cinemaAurora from "../assets/project-thumbnails/cinema-aurora-project.png";
import emda from "../assets/project-thumbnails/emda.co.nz.png";
import findACarerPrototype from "../assets/project-thumbnails/find-a-carer-html-prototype.png";
import gmobility from "../assets/project-thumbnails/gmobility.com.au.png";
import prototypeLabellingTool from "../assets/project-thumbnails/Prototype-Labelling-Tool.png";
import mappingTooThumbnail from "../assets/project-thumbnails/solar-panel-mapping-tool.png";
import tmcnhsWebsite from "../assets/project-thumbnails/tmcnhs-website.png";

export default Vue.extend({
    data() {
        return {
            projects: [
                {
                    description: "Mapping tools to help users draw solar panels in the roof tops. Written in ReactJS",
                    link: "https://s3-ap-southeast-2.amazonaws.com/rmit-s3485376-maptool/advanced/build-05/index.html",
                    thumbnail: mappingTooThumbnail,
                    title: "Solar Panel Mapping Tool (Advanced Prototype)",
                },
                {
                    description: "Label drawing tool written with jQuery and Redux.",
                    link: "http://35.203.176.225/jquery-labelmaker/index.html",
                    thumbnail: prototypeLabellingTool,
                    title: "Prototype barcode labelling tool",
                },
                {
                    description: "For assignments 1 & 2 of the course Software Engineering Project Management. Developed using Scrum methodologies. Written in ASP.NET Core 2.0 Razor Pages",
                    thumbnail: cinemaAurora,
                    title: "Cinema Aurora Movie Booking Website",
                },
                {
                    description: "Cinema booking iOS application for Assignment 1 & 2 of iPhone Engineering Course. Uses Swift 3 and Firebase SDK",
                    link: "https://github.com/rmit-s3485376-joshua-orozco/cinego",
                    thumbnail: cinegoIOSApp,
                    title: "Cinego iOS App",
                },
                {
                    description: "Assignment 2 of the course Web Development Technologies. Written in ASP.NET Core 1.0 MVC and SQL Server",
                    link: "https://github.com/rmit-s3485376-joshua-orozco/cineplex",
                    thumbnail: abcCineplexCorp,
                    title: "ABC Cineplex Corp Movie Booking Web Application",
                },
                {
                    description: "HTML prototype for Find a Carer website. Uses Bootstrap v3",
                    link: "http://35.203.176.225/findacarer/index.html",
                    thumbnail: findACarerPrototype,
                    title: "HTML Prototype for FindACarer",
                },
                {
                    description: "Website for Trece Martires City National High School in Philippines. Powered by Blogger. Uses custom design. Heavily optimized for slow internet connection",
                    link: "https://tmcnhs.blogspot.com",
                    thumbnail: tmcnhsWebsite,
                    title: "TMCNHS Website",
                },
                {
                    description: "Portfolio site for BrainStormIT. Uses Wordpress + SiteOrigin",
                    link: "http://brainstormit.com.au",
                    thumbnail: brainstormIt,
                    title: "Brainstorm IT Web site",
                },
                {
                    description: "EMD Advantage company website. Powered by Wordpress + SiteOrigin",
                    link: "http://emda.co.nz",
                    thumbnail: emda,
                    title: "EMD Advantage Website",
                },
                {
                    description: "My first commercial web project. Website that sells products for aged-care. Powered by Wordpress + WooCommerce",
                    link: "http://www.gmobility.com.au",
                    thumbnail: gmobility,
                    title: "GMobility ECommerce Website",
                },

            ],
        };
    },
    components: {
        "project-detail": ProjectDetail,
    },
});
</script>


<style>
#ProjectSection {
    background-color: #FFFFFF;
    padding-top: 15px;
}


#ProjectSection .section-title {
    margin-bottom: 40px;
    margin-top: 20px;
}
</style>

