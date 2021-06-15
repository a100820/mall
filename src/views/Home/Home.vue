<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center> 购物街 </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/Homeswiper.vue";
import HomeRecommend from "./childcomps/HomeRecommend.vue";
import { getHomeMutidata } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  // 一旦创建调用生命周期函数
  created() {
    getHomeMutidata().then((res) => {
      // console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
