<template>
  <SegmentedBar
    selectedBackgroundColor="#e57373"
    :selectedIndex="defaultIndex"
    @selectedIndexChanged="onIndexSelected"
    id="nav-segbar"
  >
    <SegmentedBarItem title="Home" />
    <SegmentedBarItem title="Page1" />
    <SegmentedBarItem title="Page2" />
  </SegmentedBar>
</template>
    
<script lang="ts">
import Vue from "nativescript-vue";
import { View } from "@nativescript/core";
import { SelectedIndexChangedEventData } from "@nativescript/core/ui/segmented-bar";
import HomePage from "../views/HomePage.vue";
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
export default Vue.extend({
  props: {
    canCloseBottomSheet: {
      type: Boolean,
      default: false,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onIndexSelected(evt: SelectedIndexChangedEventData) {
      console.log("!!!!!");
      switch (evt.newIndex) {
        case 0:
          {
            this.$navigateTo(HomePage, {
              transition: { name: "fade" },
              frame: "main-frame",
            });
          }
          break;
        case 1:
          {
            this.$navigateTo(Page1, {
              transition: { name: "fade" },
              frame: "main-frame",
            });
          }
          break;
        case 2:
          {
            this.$navigateTo(Page2, {
              transition: { name: "fade" },
              frame: "main-frame",
            });
          }
          break;
        default:
          console.log(`unknown index ${evt.newIndex}`);
      }
      if (this.canCloseBottomSheet) {
        let obj = evt.object as View;
        try{
            this.$closeBottomSheet(obj.id,evt.newIndex);
        } catch (e){
            console.log(`try to closeBottomSheet get error: ${e}`)
        }
      }
    },
  },
});
</script>