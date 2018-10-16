<template>
    <div id="HomePage" class="site-wrapper">
        <div class="hero-section">
            <div class="hero-content">
                <div class="container">

                    <div id="Summary">
                        <h1 id="Author">Joshua Orozco</h1>
                        <h2 id="Role">.NET / Full-stack Developer</h2>
                        <p id="SkillSet">
                            <span>.NET</span> &#183;
                            <span>Backend</span> &#183;
                            <span>Front-end</span> &#183;
                            <span>Mobile</span>
                        </p>
                        <p>
                            <small>Melbourne, Australia</small>
                        </p>
                        <ul id="AdditionalDetails">
                            <li>RMIT University Bachelor of I.T. student</li>
                            <li>Email: <a href="mailto:joshua.b.orozco@gmail.com">joshua.b.orozco@gmail.com</a></li>
                            <li>LinkedIn: <a href="https://linkedin.com/in/joshua-orozco-8819b0a0" target="_blank">https://linkedin.com/in/joshua-orozco-8819b0a0</a></li>
                            <li>Github: <a href="https://github.com/borozky/" target="_blank">https://github.com/borozky/</a></li>
                        </ul>
                        <p>
                            <br/>
                            <small>
                                Projects section coming soon...
                            </small>
                        </p>
                    </div>

                    <div id="WebTechIcons">
                        <span class="tech-icon" style="border-radius: 100%">
                            <img src="../assets/netcore.svg" alt="">
                        </span>
                        <span class="tech-icon">
                            <img src="../assets/laravel.svg" alt="">
                        </span>
                         <span class="tech-icon">
                            <img src="../assets/wordpress.svg" alt="">
                        </span>
                         <span class="tech-icon" style="background-color: transparent">
                            <img src="../assets/react.svg" alt="">
                        </span>
                        <span class="tech-icon" style="width: auto; background-color: transparent">
                            <img src="../assets/azure-sql.svg" alt="" style="width: auto">
                        </span>
                        <span class="tech-icon">
                            <img src="../assets/ios-dev.svg" alt="">
                        </span>
                        <span class="tech-icon" style="background-color: transparent">
                            <img src="../assets/android-dev.svg" alt="">
                        </span>
                        <span class="tech-icon" style="background: transparent">
                            <img src="../assets/java.svg" alt="">
                        </span>
                        <span class="tech-icon" style="background-color: transparent">
                            <img src="../assets/google-maps-js-api.png" alt="">
                        </span>
                        <span class="tech-icon" style="background-color: transparent">
                            <img src="../assets/git.svg" alt="">
                        </span>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hero-section {
    background-color: #592C8F;
    color: #FFFFFF;
    height: 480px;
    margin-top: 38px;
    font-size: 14px;
}

.hero-section a {
    color: #FFFFFF;
    text-decoration: underline;
}

.hero-section a:hover {
    text-decoration: none;
}

.container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
}

.hero-content {
    width: 100%;
}

#Summary {
    display: inline-block;
    vertical-align: top;
}

#AdditionalDetails {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 40px;
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

#Author {
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 15px;
}

#Role {
    font-weight: normal;
}

#SkillSet {
    display: inline-block;
}

@media screen and (min-width: 769px) {
    .hero-section {
        font-size: 16px;
        margin-top: 60px;
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

    #AdditionalDetails {
        margin-top: 60px;
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


