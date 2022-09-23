<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label text="Home" id="banner" ref="banner"></Label>
      <Button
        :text="`${iconUnicode('\uf067')} snackbar`"
        @tap="onActionTap"
        @doubleTap="onActionDoubleTap"
        @longPress="onActionLongPress"
        class="fas"
      />
      <MDButton
        :text="`${iconUnicode('\uf067')} snackbar`"
        @tap="onActionTap"
        @doubleTap="onActionDoubleTap"
        @longPress="onActionLongPress"
        class="fas"
      />
      <MDButton
        :text="`${iconUnicode('\uf067')} snackbar`"
        @tap="onActionTap"
        @doubleTap="onActionDoubleTap"
        @longPress="onActionLongPress"
        variant="flat"
        class="fas"
      />
      <MDButton
        :text="`${iconUnicode('\uf067')} snackbar`"
        @tap="onActionTap"
        @doubleTap="onActionDoubleTap"
        @longPress="onActionLongPress"
        variant="text"
        class="fas"
      />
      <!-- <MDFloatingActionButton rippleColor="blue" src="res://ic_input_add"/> -->
      <MDFloatingActionButton
        rippleColor="blue"
        src="res://fa_plus"
        @tap="onActionTap"
        @doubleTap="onActionDoubleTap"
        @longPress="onActionLongPress"
      />

      <fab
        rippleColor="blue"
        :text="iconUnicode('\uf067')"
        @tap="onActionTap"
        class="fas fab-button"
      ></fab>


    </StackLayout>
  </Page>
</template>
  
<script lang="ts">
import Vue from "nativescript-vue";
import { EventData } from "@nativescript/core/data/observable";

export default Vue.extend({
  methods: {
    iconUnicode(icon: string): string {
      return `${icon}`;
    },
    onActionTap(evt: EventData) {
      console.log("tap ok");
    },
    onActionDoubleTap(evt: EventData) {
      console.log("double tap ok");
    },
    onActionLongPress(evt: EventData) {
      console.log("long press ok");
    },
  },
});
</script>

<style scoped>
.fab-button {
  height: 70;
  width: 70; 
  margin: 15;
  horizontal-align: right;
  vertical-align: bottom;
}
</style>
