<template>
  <Page>
    <GridLayout rows="auto,*">
      <Button text="change" @tap="onButtonTap" row="0" id="change-btn" />
      <Frame id="main-frame" row="1">
        <HomePage />
      </Frame>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { TapGestureEventData } from "@nativescript/core/ui/gestures";
import HomePage from "./HomePage.vue";
import BottomSheet from "../components/BottomSheet.vue";
export default Vue.extend({
  components:{
    HomePage
  },
  methods: {
    onButtonTap(evt: TapGestureEventData) {
      this.$showBottomSheet(BottomSheet, {
        dismissOnBackgroundTap: true,
        closeCallback: (...args: any) => {
          console.log("bottom sheet closed",args);
        },
      });
    },
  },
});
</script>

