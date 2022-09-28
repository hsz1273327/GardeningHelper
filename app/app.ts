import Vue from 'nativescript-vue'
import { isIOS } from '@nativescript/core';
import { installMixins, themer } from '@nativescript-community/ui-material-core';
import BottomNavigationBar from '@nativescript-community/ui-material-bottomnavigationbar/vue'
import TabsPlugin from '@nativescript-community/ui-material-tabs/vue';
import BottomSheetPlugin from '@nativescript-community/ui-material-bottomsheet/vue';
import ActivityIndicatorPlugin from '@nativescript-community/ui-material-activityindicator/vue';
import ProgressPlugin from '@nativescript-community/ui-material-progress/vue';
import DrawerPlugin from '@nativescript-community/ui-drawer/vue'
import ButtonPlugin from '@nativescript-community/ui-material-button/vue';
import FloatingActionButtonPlugin from '@nativescript-community/ui-material-floatingactionbutton/vue';
import speeddialPlugin from '@nativescript-community/ui-material-speeddial/vue';
import CheckBoxPlugin from '@nativescript-community/ui-checkbox/vue';
import DateTimePickerPlugin from "@nativescript/datetimepicker/vue";
import TextFieldPlugin from '@nativescript-community/ui-material-textfield/vue';
import SekkBarPlugin from '@nativescript-community/ui-range-seek-bar/vue';
import { Label as HTMLLabel, enableIOSDTCoreText } from '@nativescript-community/ui-label';
import CanvasLabel from '@nativescript-community/ui-canvaslabel/vue';


import { install as installBottomsheet } from "@nativescript-community/ui-material-bottomsheet";
import { install as installUIDrawer} from '@nativescript-community/ui-drawer';
import { LocalNotifications } from '@nativescript/local-notifications'


LocalNotifications.hasPermission().then((res)=>{console.log(`LocalNotifications.hasPermission ${res}`)})
import Main from './views/Main.vue'
installMixins();
if (isIOS) {
  themer.setPrimaryColor('#3f51b5');
  themer.setAccentColor('#e57373');
  themer.setSecondaryColor('#1976d2');
  enableIOSDTCoreText();
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
Vue.use(ActivityIndicatorPlugin);
Vue.use(ProgressPlugin);
Vue.use(DrawerPlugin);
Vue.use(ButtonPlugin);
Vue.use(FloatingActionButtonPlugin);
Vue.use(speeddialPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DateTimePickerPlugin);
Vue.use(TextFieldPlugin);
Vue.use(SekkBarPlugin);
Vue.registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);
Vue.use(CanvasLabel);
Vue.registerElement('HTMLLabel', () => HTMLLabel);

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Main)]),
}).$start()
