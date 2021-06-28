<template>
  <div class="cartlist">
    <cart-list-item
      v-for="(item, index) in carList"
      :key="index"
      :item-info="item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

import { mapState } from "vuex";

export default {
  name: "CartList",
  computed: mapState([
    // 映射 this.carList 为 store.state.carList
    "carList",
  ]),
  components: {
    CartListItem,
  },
};
</script>

<style scoped>
</style>