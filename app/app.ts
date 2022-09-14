import Vue from 'nativescript-vue'
import Home from './components/Home.vue'
import BottomNavigationBar from '@nativescript-community/ui-material-bottomnavigationbar/vue';

Vue.use(BottomNavigationBar);
declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
