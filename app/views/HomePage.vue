<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <CollectionView
        :items="simplecardprops"
        itemIdGenerator="index"
        colWidth="100%"
        rowHeight="200"
        layoutStyle="waterfall"
        @loadMoreItems="onLoadMoreItems"
        @dataPopulated="onDataPopulated"
      >
        <v-template>
          <SimpleCard v-bind="item.prop" />
        </v-template>
      </CollectionView>
    </StackLayout>
  </Page>
</template>
  

<script lang="ts">
import Vue from "vue";
import { ObservableArray } from "@nativescript/core";
import SimpleCard from "../components/SimpleCard.vue";

export default Vue.extend({
  components: {
    SimpleCard,
  },
  data: function () {
    return {
      simplecardprops: new ObservableArray([
        {
          index: 0,
          prop: {
            title: "test1",
            iconImgURL: "~/imgs/锦叶绿萝.png",
            mediaImgURL: "~/imgs/锦叶绿萝.png",
            description: "this is test's description1",
          },
        },
        {
          index: 1,
          prop: {
            title: "test2",
            iconImgURL: "~/imgs/建兰-玫瑰妖姬.jpg",
            mediaImgURL: "~/imgs/建兰-玫瑰妖姬.jpg",
            description: "this is test's description2",
          },
        },
        {
          index: 2,
          prop: {
            title: "test3",
            iconImgURL: "~/imgs/锦叶绿萝.png",
            mediaImgURL: "~/imgs/锦叶绿萝.png",
            description: "this is test's description3",
          },
        },
        {
          index: 3,
          prop: {
            title: "test4",
            iconImgURL: "~/imgs/建兰-玫瑰妖姬.jpg",
            mediaImgURL: "~/imgs/建兰-玫瑰妖姬.jpg",
            description: "this is test's description4",
          },
        },
      ]),
    };
  },
  methods: {
    onLoadMoreItems() {
      console.log("EVENT TRIGGERED: onLoadMoreItems()");
    },
    onDataPopulated(){
      console.log("EVENT TRIGGERED: onDataPopulated()");
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
