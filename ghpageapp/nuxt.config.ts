import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Borozky Github Website',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Borozky Github Page' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/ga.js', ssr: false }
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        ["@nuxtjs/dotenv", { /* Options can be found here: https://github.com/nuxt-community/dotenv-module#options */}]
    ],
    /*
    ** Build configuration
    */
    build: {
        /**
         * Extends webpack config here
         */
        extend(config, { isDev, isClient }) {

            // // run ESLint on save
            // if (isDev && isClient) {
            //     config.module.rules.push({
            //         enforce: 'pre',
            //         test: /\.(js|vue)$/,
            //         loader: 'eslint-loader',
            //         exclude: /(node_modules)/
            //     })
            // }
        }
    },
    env: {
        "ACADEMIC_TRANSCRIPT": "https://drive.google.com/open?id=1EXXH9w6v-_9PRTXhbbjfNtjbfhDDPoDs",
        "ACADEMIC_TRANSCRIPT_DATE_ISSUED": "29 November 2018"
    },
    server: {
        host: '0.0.0.0', // default: localhost
    },
}

export default config;