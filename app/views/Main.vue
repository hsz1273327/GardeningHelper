<template>
  <Page actionBarHidden="true">
    <GridLayout rows="*, auto">
      <Frame id="main-frame" row="0">
        <HomePage />
      </Frame>
      <NavMDBottom row="1"/>
    </GridLayout>

    <!-- <GridLayout rows="auto,*">
      <NavMDBottom row="0"/>
      <Frame id="main-frame" row="1">
        <Home />
      </Frame>
    </GridLayout> -->
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import NavMDBottom from "../components/NavMDBottom.vue";
import HomePage from "./HomePage.vue";

export default Vue.extend({
  components: { NavMDBottom, HomePage },
});
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
