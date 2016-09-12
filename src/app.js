import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import Routers from './routers';
import Vuex from 'vuex';
// components
import App from './app.vue';
import vueTap from 'v-tap';


// install plugins
Vue.use(Router);
Vue.use(Resource);
Vue.use(Vuex);
Vue.use(vueTap);
// instantiate routing
let router = new Router();
Routers(router);

router.start(App, '#KKZ');
