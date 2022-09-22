<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label text="Home" id="banner" ref="banner"></Label>
      <Button text="snackbar" @tap="onActionTapSnackbar" />
    </StackLayout>
  </Page>
</template>
  
<script lang="ts">
import Vue from "nativescript-vue";
import { EventData } from "@nativescript/core/data/observable";
import {
  DismissReasons,
  SnackBarAction,
  showSnack,
} from "@nativescript-community/ui-material-snackbar";
interface showSnackResult {
  command: SnackBarAction;
  reason: DismissReasons;
  event: number;
}
export default Vue.extend({
  methods: {
    onActionTapSnackbar(evt: EventData) {
      showSnack({
        message: "this is test snack with action!",
        actionText: "done",
      }).then((r: showSnackResult) => {
        console.log("showSnack result", r);
      });
    },
  },
});
</script>
