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

<script>
import Vue from "vue"
import ProjectDetail from "./ProjectDetail"
import mappingTooThumbnail from "../assets/project-thumbnails/solar-panel-mapping-tool.png"
import cinemaAurora from "../assets/project-thumbnails/cinema-aurora-project.png"
import prototypeLabellingTool from "../assets/project-thumbnails/Prototype-Labelling-Tool.png"
import cinegoIOSApp from "../assets/project-thumbnails/cinego-ios-application.png"
import findACarerPrototype from "../assets/project-thumbnails/find-a-carer-html-prototype.png"
import abcCineplexCorp from "../assets/project-thumbnails/abc-cineplex-corp.png"
import tmcnhsWebsite from "../assets/project-thumbnails/tmcnhs-website.png"
import brainstormIt from "../assets/project-thumbnails/brainstormit.com.au.png"
import emda from "../assets/project-thumbnails/emda.co.nz.png"
import gmobility from "../assets/project-thumbnails/gmobility.com.au.png"

export default Vue.extend({
    data() {
        return {
            projects: [
                {
                    title: "Solar Panel Mapping Tool (Advanced Prototype)",
                    description: "Mapping tools to help users draw solar panels in the roof tops. Written in ReactJS",
                    thumbnail: mappingTooThumbnail,
                    link: "https://s3-ap-southeast-2.amazonaws.com/rmit-s3485376-maptool/advanced/build-05/index.html"
                },
                {
                    title: "Prototype barcode labelling tool",
                    description: "Label drawing tool written with jQuery and Redux.",
                    thumbnail: prototypeLabellingTool,
                    link: "http://35.203.176.225/jquery-labelmaker/index.html"
                },
                {
                    title: "Cinema Aurora Movie Booking Website",
                    description: "For assignments 1 & 2 of the course Software Engineering Project Management. Developed using Scrum methodologies. Written in ASP.NET Core 2.0 Razor Pages",
                    thumbnail: cinemaAurora,
                },
                {
                    title: "Cinego iOS App",
                    description: "Cinema booking iOS application for Assignment 1 & 2 of iPhone Engineering Course. Uses Swift 3 and Firebase SDK",
                    thumbnail: cinegoIOSApp,
                    link: "https://github.com/rmit-s3485376-joshua-orozco/cinego"
                },
                {
                    title: "ABC Cineplex Corp Movie Booking Web Application",
                    description: "Assignment 2 of the course Web Development Technologies. Written in ASP.NET Core 1.0 MVC and SQL Server",
                    thumbnail: abcCineplexCorp,
                    link: "https://github.com/rmit-s3485376-joshua-orozco/cineplex"
                },
                {
                    title: "HTML Prototype for FindACarer",
                    description: "HTML prototype for Find a Carer website. Uses Bootstrap v3",
                    thumbnail: findACarerPrototype,
                    link: "http://35.203.176.225/findacarer/index.html"
                },
                {
                    title: "TMCNHS Website",
                    description: "Website for Trece Martires City National High School in Philippines. Powered by Blogger. Uses custom design. Heavily optimized for slow internet connection",
                    thumbnail: tmcnhsWebsite,
                    link: "https://tmcnhs.blogspot.com"
                },
                {
                    title: "Brainstorm IT Web site",
                    description: "Portfolio site for BrainStormIT. Uses Wordpress + SiteOrigin",
                    thumbnail: brainstormIt,
                    link: "http://brainstormit.com.au"
                },
                {
                    title: "EMD Advantage Website",
                    description: "EMD Advantage company website. Powered by Wordpress + SiteOrigin",
                    thumbnail: emda,
                    link: "http://emda.co.nz"
                },
                {
                    title: "GMobility ECommerce Website",
                    description: "My first commercial web project. Website that sells products for aged-care. Powered by Wordpress + WooCommerce",
                    thumbnail: gmobility,
                    link: "http://www.gmobility.com.au"
                },

            ],
        }
    },
    components: {
        "project-detail": ProjectDetail
    }
})
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

