<template>
  <Stacklayout marginLeft="10" marginRight="10">
    <Button id="to-homepage-btn" @tap="toHomePage" text="Home Page"></Button>
    <Button id="to-page1-btn" @tap="toPage1" text="Page 1"></Button>
    <Button id="to-page2-btn" @tap="toPage2" text="Page 2"></Button>
  </Stacklayout>
</template>

<script lang="ts">
import Vue from "vue";
import { TapGestureEventData } from "@nativescript/core/ui/gestures";
import { NativeScriptVue } from "nativescript-vue";
export default Vue.extend({
  methods: {
    toHomePage(evt: TapGestureEventData) {
      this.$closeBottomSheet(evt.object.id);
    },
    toPage1(evt: TapGestureEventData) {
      this.$closeBottomSheet(evt.object.id);
    },
    toPage2(evt: TapGestureEventData) {
      this.$closeBottomSheet(evt.object.id);
    },
  },
});
</script>