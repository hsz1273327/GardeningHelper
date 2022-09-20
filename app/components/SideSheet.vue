<template>
  <Stacklayout backgroundColor="white" padding="25">
    <Button id="to-homepage-btn" @tap="toHomePage" text="Home Page"></Button>
    <Button id="to-page1-btn" @tap="toPage1" text="Page 1"></Button>
    <Button id="to-page2-btn" @tap="toPage2" text="Page 2"></Button>
  </Stacklayout>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { TapGestureEventData } from "@nativescript/core/ui/gestures";
import HomePage from "../views/HomePage.vue";
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
export default Vue.extend({
  methods: {
    toHomePage(evt: TapGestureEventData) {
      this.$navigateTo(HomePage, {
        transition: { name: "fade" },
        frame: "main-frame",
      });
    },
    toPage1(evt: TapGestureEventData) {
      this.$navigateTo(Page1, {
        transition: { name: "fade" },
        frame: "main-frame",
      });
    },
    toPage2(evt: TapGestureEventData) {
      this.$navigateTo(Page2, {
        transition: { name: "fade" },
        frame: "main-frame",
      });
    },
  },
});
</script>