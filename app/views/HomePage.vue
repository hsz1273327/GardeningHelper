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
      <fab
        rippleColor="blue"
        :text="iconUnicode('\uf067')"
        @tap="onActionTap"
        class="fas fab-button"
      ></fab>

      <RangeSeekBar
        col="1"
        :minValue="rangeSeekBarProp.minValue"
        :maxValue="rangeSeekBarProp.maxValue"
        :valueMin="rangeSeekBarProp.valueMin"
        :valueMax="rangeSeekBarProp.valueMax"
        :minRange="rangeSeekBarProp.minRange"
        :step="rangeSeekBarProp.step"
        @valueChanged="valueChanged($event)"
        @finalValueChanged="finalValueChanged($event)"
        class="range-seek-bar"
      />

      
    </StackLayout>
  </Page>
</template>
  
<script lang="ts">
import Vue from "nativescript-vue";
import { RangeSeekBarEventData } from '@nativescript-community/ui-range-seek-bar';
import { EventData } from "@nativescript/core/data/observable";

export default Vue.extend({
  data: function () {
    return {
      isChecked: false,
      selectedDate: new Date(),
      tfvalue: "",
      rangeSeekBarProp: {
        minValue: 0,
        maxValue: 100,
        valueMin: 10,
        valueMax: 60,
        minRange: 10,
        step: 2.4,
      },
    };
  },
  methods: {
    valueChanged(event: RangeSeekBarEventData) {
      Object.assign(this.rangeSeekBarProp, event.value);
    },
    finalValueChanged(event: RangeSeekBarEventData) {
      Object.assign(this.rangeSeekBarProp, event.value);
    },
    toggleCheck() {
      this.isChecked = !this.isChecked;
    },
    getCheckProp() {
      console.log(this.isChecked);
    },
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
.range-seek-bar {
    bar-color: #8990c4;
    bar-highlight-color: #2434ad;
    thumb-color: #1a246d;
    bar-height: 10;
    corner-radius: 30;
}

/* MDSpeedDialButton {
  border-radius: 20;
}
MDSpeedDialItemButton {
  border-radius: 15;
} */
</style>
