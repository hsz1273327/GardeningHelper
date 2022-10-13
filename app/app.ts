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

import ImageModulePlugin from '@nativescript-community/ui-image/vue';
import { initialize as imageInitialize } from '@nativescript-community/ui-image';
import CanvasPlugin from '@nativescript-community/ui-canvas/vue';
// import ZoomImageModulePlugin from '@nativescript-community/ui-zoomimage/vue';
// import { installMixins as imageInstallMixins  } from '@nativescript-community/ui-image-colorfilter';



import { install as installBottomsheet } from "@nativescript-community/ui-material-bottomsheet";
import { install as installUIDrawer } from '@nativescript-community/ui-drawer';
import { LocalNotifications } from '@nativescript/local-notifications'


LocalNotifications.hasPermission().then((res) => { console.log(`LocalNotifications.hasPermission ${res}`) })
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
import CardViewPlugin from '@nativescript-community/ui-material-cardview/vue';
Vue.use(CardViewPlugin);

import CollectionView from '@nativescript-community/ui-collectionview/vue';
Vue.use(CollectionView);

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

Vue.use(CanvasPlugin);

imageInitialize();
Vue.use(ImageModulePlugin);
// imageInstallMixins();
// Vue.use(ZoomImageModulePlugin);
import { LineChart } from "@nativescript-community/ui-chart/charts"
Vue.registerElement('LineChart', () => LineChart);

import { BarChart } from "@nativescript-community/ui-chart/charts"
Vue.registerElement('BarChart', () => BarChart);

import { ScatterChart } from "@nativescript-community/ui-chart/charts"
Vue.registerElement('ScatterChart', () => ScatterChart);

import { BubbleChart } from "@nativescript-community/ui-chart/charts"
Vue.registerElement('BubbleChart', () => BubbleChart);

import { HorizontalBarChart } from "@nativescript-community/ui-chart/charts"
Vue.registerElement('HorizontalBarChart', () => HorizontalBarChart);

import { CandleStickChart } from "@nativescript-community/ui-chart/charts"
Vue.registerElement('CandleStickChart', () => CandleStickChart);

import { PieChart } from "@nativescript-community/ui-chart/charts"
Vue.registerElement('PieChart', () => PieChart);

import { RadarChart } from "@nativescript-community/ui-chart/charts"
Vue.registerElement('RadarChart', ()=>RadarChart);

import waterfallInstall from '@nativescript-community/ui-collectionview-waterfall';
waterfallInstall();

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Main)]),
}).$start()
