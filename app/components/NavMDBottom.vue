<template>
  <MDBottomNavigationBar
    activeColor="#e57373"
    badgeColor="#1976d2"
    selectedTabIndex="0"
    @tabSelected="onBottomNavigationTabSelected"
  >
    <MDBottomNavigationTab title="Home" />
    <MDBottomNavigationTab title="Page1" />
    <MDBottomNavigationTab title="Page2" />
  </MDBottomNavigationBar>
</template>
  
  <script lang="ts">
import Vue from "nativescript-vue";
import { TabSelectedEventData } from "@nativescript-community/ui-material-bottomnavigationbar";
import HomePage from "../views/HomePage.vue";
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
export default Vue.extend({
  methods: {
    onBottomNavigationTabSelected(args: TabSelectedEventData) {
      console.log("!!!!!");
      // this.$closeBottomSheet(args.object.id)
      switch (args.newIndex) {
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
          console.log(`unknown index ${args.newIndex}`);
      }
      
    },
  },
});
</script>
  
  