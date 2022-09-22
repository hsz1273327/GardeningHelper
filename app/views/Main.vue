<template>
  <Page actionBarHidden="true">
    <!--底部导航-->
    <GridLayout rows="*, auto">
      <Frame id="main-frame" row="0" ref="outerView">
        <HomePage />
      </Frame>
      <NavMDBottom row="1" ref="bottomBar"/>
    </GridLayout>
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

