import tvShow from "./modules/component_tvShow.js";
import movie from "./modules/component_movie.js";
import audio from "./modules/component_audio.js";


//these are the same as Express routes -> router.get('/, ... do something with the request)
const routes = [
    { path: '/tvShow', name: 'tvShow', component: tvShow },
    { path: '/movie', name: 'movie', component: movie },
    { path: '/audio', name: 'audio', component: audio }
]

const router = new VueRouter({
    routes //short for routes: routes
})


const vm = new Vue({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");