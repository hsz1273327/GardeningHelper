import Vue from 'nativescript-vue'
import BottomNavigationBar from '@nativescript-community/ui-material-bottomnavigationbar/vue'
import { installMixins, themer } from '@nativescript-community/ui-material-core';
import { isIOS } from '@nativescript/core';
installMixins();
if (isIOS) {
    themer.setPrimaryColor('#3f51b5');
    themer.setAccentColor('#e57373');
    themer.setSecondaryColor('#1976d2');
}

themer.createShape('cut', {
  cornerFamily: 'cut' as any,
  cornerSize: {
      value: 0.5,
      unit: '%'
  }
});

Vue.use(BottomNavigationBar);

import Main from './views/Main.vue'
declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Main)]),
}).$start()
