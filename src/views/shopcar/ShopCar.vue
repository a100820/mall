<template>
  <div class="shopcar">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <template v-slot:center> 购物车({{ cartLength }})</template>
    </nav-bar>
    <!-- 商品列表 -->
    <scroll class="content" ref="scroll"> <cart-list /> </scroll>

    <!-- 底部汇总 -->
    <cart-botton-bar class="botton-bar" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import Scroll from "components/common/scroll/Scroll";
import CartBottonBar from "./childComps/CartBottonBar.vue";
import CartList from "./childComps/CartList.vue";
//将getters里的属性映射成这里的计算属性
import { mapGetters } from "vuex";

export default {
  name: "ShopCar",
  components: {
    NavBar,

    Scroll,
    CartBottonBar,
    CartList,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
  activated() {
    this.$refs.scroll.imageRefresh();
  },
};
</script>

<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.shopcar {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
  overflow: hidden;
}
.botton-bar {
  position: absolute;

  left: 0;
  right: 0;
  bottom: 49px;
}
</style>

