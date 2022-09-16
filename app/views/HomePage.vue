<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label text="Home"></Label>
    </StackLayout>
  </Page>
</template>
  
<script lang="ts">
import Vue from "nativescript-vue";
export default Vue.extend({
  mounted: function () {
    console.log("&&&&mounted home frame");
  },
});
</script>
