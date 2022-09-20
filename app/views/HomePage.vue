<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label text="Home"></Label>
      <ActivityIndicator busy="true" @busyChange="onBusyChanged" />
    </StackLayout>
  </Page>
</template>
  
<script lang="ts">
import Vue from "nativescript-vue";
import { EventData } from "@nativescript/core/data/observable";
import { ActivityIndicator } from "@nativescript/core/ui/activity-indicator";
export default Vue.extend({
  mounted: function () {
    console.log("&&&&mounted home frame");
  },
  methods: {
    onBusyChanged(evt: EventData) {
      let obj = evt.object as ActivityIndicator;
      console.log(`is busy ${obj.busy}`);
    },
  },
});
</script>
