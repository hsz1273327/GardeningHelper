<template>
  <!-- <Page>
    <ActionBar>
      <Label text="Home"/>
    </ActionBar>

    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; "/>
          <Span :text="message"/>
        </FormattedString>
      </Label>
    </GridLayout>
  </Page> -->
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>
    <MDBottomNavigationBar
      activeColor="red"
      inactiveColor="yellow"
      backgroundColor="black"
      @tabSelected="onBottomNavigationTabSelected"
    >
      <MDBottomNavigationTab title="First" icon="ic_home" />
      <MDBottomNavigationTab
        title="Second"
        icon="ic_view_list"
        isSelectable="false"
      />
      <MDBottomNavigationTab title="Third" icon="ic_menu" />
    </MDBottomNavigationBar>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { TabSelectedEventData } from "@nativescript-community/ui-material-bottomnavigationbar";
const description = "Position";
export default Vue.extend({
  methods: {
    onBottomNavigationTabSelected(args: TabSelectedEventData) {
      console.log("!!!!!");
      console.log(args.oldIndex);
      console.log(args.newIndex);
      // Frame.topmost().goBack();
    },
  },
});
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
