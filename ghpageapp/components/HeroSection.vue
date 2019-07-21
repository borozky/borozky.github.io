<template>
    <div class="hero-section">
        <div class="hero-content">
            <div class="container clearfix">

                <div id="Summary">
                    <h1 id="Author">Joshua Orozco</h1>
                    <h2 id="Role">
                        Full-stack Developer
                    </h2>
                    <p id="SkillSet">
                        <span>Backend</span> &#183;
                        <span>Front-end</span> &#183;
                        <span>Mobile</span> &#183;
                        <span>.NET</span>
                    </p>
                    <p id="Location">
                        <small>Melbourne, Australia</small>
                    </p>
                    <ul id="AdditionalDetails">
                        <li>
                            <i class="fa fa-graduation-cap"></i> RMIT University Bachelor of I.T. graduate
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i> <a href="mailto:joshua.b.orozco@gmail.com">joshua.b.orozco@gmail.com</a>
                        </li>
                        <li>
                            <i class="fa fa-linkedin"></i> <a href="https://linkedin.com/in/joshua-orozco-8819b0a0" target="_blank">https://linkedin.com/in/joshua-orozco-8819b0a0</a>
                        </li>
                        <li>
                            <i class="fa fa-github"></i> <a href="https://github.com/borozky/" target="_blank">https://github.com/borozky/</a>
                        </li>
                    </ul>
                    <ul id="Documents">
                        <li><i class="fa fa-file"></i> <a href="https://drive.google.com/open?id=1UV3Gww6Db0bqDvrBY24IWL2rassMjxTU" target="_blank" title=".NET Resume (Updated 09 December 2018)">Resume</a></li>
                        <li><i class="fa fa-bar-chart"></i> <a :href="academic_transcript" target="_blank" :title="`Academic Transcript (Issued ${ academic_transcript_date_issued })`">Academic Transcript</a></li>
                    </ul>
                </div>

                <div id="WebTechIcons">
                    <span class="tech-icon" style="background-color: transparent">
                        <img src="../assets/react.svg" title="ReactJS + Redux" alt="">
                    </span>
                    <span class="tech-icon" style="border-radius: 100%">
                        <img src="../assets/netcore.svg" title="C#, ASP.NET Core, Entity Framework" alt="">
                    </span>
                    <span class="tech-icon">
                        <img src="../assets/laravel.svg" title="Laravel" alt="">
                    </span>
                    <span class="tech-icon" style="background-color: transparent">
                        <img src="../assets/yii.svg" title="Yii Framework" alt="">
                    </span>
                    <span class="tech-icon">
                        <img src="../assets/wordpress.svg" title="Wordpress Theme and Plugin Development" alt="">
                    </span>
                    <span class="tech-icon" style="width: auto; background-color: transparent">
                        <img src="../assets/azure-sql.svg" title="SQL, MySQL, SQLite, SQL Server" alt="" style="width: auto">
                    </span>
                    <span class="tech-icon">
                        <img src="../assets/ios-dev.svg" title="iOS Development and Design" alt="">
                    </span>
                    <span class="tech-icon" style="background-color: transparent">
                        <img src="../assets/android-dev.svg" title="Android Development" alt="">
                    </span>
                    <span class="tech-icon" style="background: transparent">
                        <img src="../assets/java.svg" title="Java SE, Java EE, Swing, Maven" alt="">
                    </span>
                    <span class="tech-icon" style="background-color: transparent">
                        <img src="../assets/google-maps-js-api.png" title="Google Maps Javascript API" alt="">
                    </span>
                    <span class="tech-icon" style="background-color: transparent">
                        <img src="../assets/git.svg" title="Git, GitHub, GitFlow" alt="">
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: function() {
        return {
            academic_transcript: process.env["ACADEMIC_TRANSCRIPT"],
            academic_transcript_date_issued: process.env["ACADEMIC_TRANSCRIPT_DATE_ISSUED"],
        }
    }
})
</script>

<style scoped>
.hero-section {
    background-color: #592C8F;
    color: #FFFFFF;
    font-size: 14px;
    padding-bottom: 30px;
    padding-top: 30px;
}

.hero-section a {
    color: #FFFFFF;
    text-decoration: underline;
}

.hero-section a:hover {
    text-decoration: none;
}

.hero-content {
    width: 100%;
}

#Summary {
    display: inline-block;
    vertical-align: top;
}

#AdditionalDetails, #Documents {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 40px;
    line-height: 1.4;
}

#WebTechIcons {
    display: inline-block;
    max-width: 360px;
    margin-top: 30px;
}

.tech-icon {
    display: inline-block;
    background-color: #FFFFFF;
    height: 40px;
    width: 40px;
    border-radius: 10px;
    margin: 10px;
}

.tech-icon img {
    display: inline-block;
    width: 100%;
    height: 100%;
}

#Author, #Role, #SkillSet, #Location {
    margin: 0;
}

#Author {
    font-size: 40px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 15px;
}

#Role {
    font-weight: normal;
}

#SkillSet {
    display: inline-block;
}

#AdditionalDetails li,
#Documents li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 3px;
}

#AdditionalDetails i.fa, 
#Documents i.fa {
    display: inline-block;
    position: absolute;
    left: 0;
    width: 20px;
}

@media screen and (min-width: 769px) {
    .hero-section {
        font-size: 16px;
    }

    .hero-section a {
        color: #FFFFFF;
        text-decoration: underline;
    }

    .hero-section a:hover {
        text-decoration: none;
    }

    #Summary {
        margin-right: 100px;
    }

    .tech-icon {
        height: 60px;
        width: 60px;
        border-radius: 20px;
    }

    #Author {
        font-size: 60px;
    }
}
</style>



