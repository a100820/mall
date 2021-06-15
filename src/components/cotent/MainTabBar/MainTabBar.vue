<template>
  <tab-bar>
    <tab-bei-item path="/home">
      <template v-slot:item-icon>
        <!-- <img src="./assets/img/tabber/home.png" alt=""/> -->
        <i class="iconfont">&#xe62d;</i>
      </template>
      <template v-slot:item-text><div>首页</div></template>
    </tab-bei-item>

    <tab-bei-item path="/categore">
      <template v-slot:item-icon>
        <!-- <img src="./assets/img/tabber/fenlei.png" alt=""/> -->
        <i class="iconfont">&#xe64e;</i>
      </template>
      <template v-slot:item-text><div>分类</div></template>
    </tab-bei-item>

    <tab-bei-item path="/profile">
      <template v-slot:item-icon>
        <!-- <img src="./assets/img/tabber/tab.png" alt="" /> -->
        <i class="iconfont">&#xe61a;</i>
      </template>
      <template v-slot:item-text><div>我的</div></template>
    </tab-bei-item>
    <tab-bei-item path="/shopcar" activeColor="blue">
      <template v-slot:item-icon>
        <i class="iconfont">&#xe699;</i>
      </template>
      <template v-slot:item-text><div>购物车</div></template></tab-bei-item
    >
  </tab-bar>
</template>

<script>
import tabBeiItem from "components/common/tabbar/TabBeritem.vue";
import tabBar from "components/common/tabbar/aaa.vue";
export default {
  name: "MainTabBar",
  components: {
    tabBar,
    tabBeiItem,
  },
};
</script>

<style>
@import "~assets/iconfont/iconfont.css";
</style>