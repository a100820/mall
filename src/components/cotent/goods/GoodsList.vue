<template>
  <div class="goods clearfix">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodsitem="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
}
</style>