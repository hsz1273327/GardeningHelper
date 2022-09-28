<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label text="Label" />
      <Label textWrap="true">
        <FormattedString>
          <Span text="This text has a " />
          <Span text="red " style="color: red" />
          <Span text="piece of text. " />
          <Span text="Also, this bit is italic, " fontStyle="italic" />
          <Span text="and this bit is bold." fontWeight="bold" />
        </FormattedString>
      </Label>
      <HTMLLabel
        fontSize="50"
        fontFamily="Cabin Sketch,res/cabinsketch"
        width="100%"
        paddingTop="5"
        color="#336699"
        textWrap="true"
        :html="someBindedValue"
        verticalAlignment="top"
      />

      <!-- Clickable Link Usage -->
      <HTMLLabel
        html="<a href='https://youtube.com'>Open Youtube.com</a>"
        linkColor="pink"
        linkUnderline="false"
        @linkTap="onLinkTap($event)"
        fontFamily="OpenSans"
        fontSize="16"
        margin="2 5 5 5"
        textWrap="true"
      ></HTMLLabel>

      <CanvasLabel id="canvaslabel" fontSize="10" color="white" backgroundColor="darkgray">
        <CGroup fontSize="18" verticalAlignment="middle" paddingLeft="20">
            <CSpan :text="line('canvaslabel')" fontWeight="bold" />
            <CSpan :text="line('next line')" color="#ccc" fontSize="16" />
        </CGroup>
        <CSpan text="end" color="lightgray" fontSize="14" textAlignment="right" paddingRight="20" paddingTop="4" />
    </CanvasLabel>
    </StackLayout>
  </Page>
</template>
  
<script lang="ts">
import Vue from "nativescript-vue";
import { EventData } from "@nativescript/core/data/observable";

export default Vue.extend({
  data: function () {
    return {
      someBindedValue:
        "<p>This is really powerful. <b>Amazing to be quite honest</b></p>",
    };
  },
  methods: {
    // event binded to the linkTap on the HTMLLabel
    onLinkTap(evt: EventData) {
      console.log("Linktap ok");
    },
    iconUnicode(icon: string): string {
      return `${icon}`;
    },
    line(row:string): string {
      return `${row}\n`
    }
  },
});
</script>

<style scoped>


/* MDSpeedDialButton {
  border-radius: 20;
}
MDSpeedDialItemButton {
  border-radius: 15;
} */
</style>
