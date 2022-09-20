<template>
  <Page>
    <Drawer ref="drawer">
      <SideSheet ~leftDrawer />
      <SideSheet ~rightDrawer />
      <NavMDBottom ~topDrawer />
      <NavMDBottom ~bottomDrawer />
      <Frame ~mainContent id="main-frame"><HomePage /></Frame>
    </Drawer>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import HomePage from "./HomePage.vue";
import SideSheet from "../components/SideSheet.vue"
import NavMDBottom from "../components/NavMDBottom.vue";
export default Vue.extend({
  components: {
    HomePage,
    NavMDBottom,
    SideSheet,
  },
});
</script>

