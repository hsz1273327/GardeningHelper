import Vue from 'nativescript-vue'
import BottomNavigationBar from '@nativescript-community/ui-material-bottomnavigationbar/vue'
import { themer } from '@nativescript-community/ui-material-core';
import { isIOS } from '@nativescript/core';

if (isIOS) {
    themer.setPrimaryColor('#3f51b5');
    themer.setAccentColor('#e57373');
    themer.setSecondaryColor('#1976d2');
}
import { installMixins } from '@nativescript-community/ui-material-core'
installMixins();

Vue.use(BottomNavigationBar);

import Home from './components/Home.vue'
declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
