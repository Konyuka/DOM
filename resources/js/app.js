require('./bootstrap');
import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
// import store from "./store";

InertiaProgress.init()
Vue.use(Datetime)
Vue.use(plugin)

const el = document.getElementById('app')

new Vue({
    // store,
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
            // resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(el)

