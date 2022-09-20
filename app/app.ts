import Vue from 'nativescript-vue'
import { isIOS } from '@nativescript/core';
import { installMixins, themer } from '@nativescript-community/ui-material-core';
import BottomNavigationBar from '@nativescript-community/ui-material-bottomnavigationbar/vue'
import TabsPlugin from '@nativescript-community/ui-material-tabs/vue';
import BottomSheetPlugin from '@nativescript-community/ui-material-bottomsheet/vue';
import DrawerPlugin from '@nativescript-community/ui-drawer/vue'
import { install as installBottomsheet } from "@nativescript-community/ui-material-bottomsheet";
import { install as installUIDrawer} from '@nativescript-community/ui-drawer';

import Main from './views/Main.vue'
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
installBottomsheet();
installUIDrawer()
Vue.use(BottomNavigationBar);
Vue.use(TabsPlugin);
Vue.use(BottomSheetPlugin);
Vue.use(DrawerPlugin);

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Main)]),
}).$start()
