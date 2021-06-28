<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center> 购物街 </template>
    </nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control1"
      @tabclick="tabclick"
      ref="tabcontrol1"
      v-show="IscontrolFix"
    />
    <scroll
      class="content"
      ref="Scroll"
      :probe-type="3"
      @scroll="contentscroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperimgLoad="swiperimgLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabclick="tabclick"
        ref="tabcontrol"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="IsShowbacktop" />
  </div>
</template>

<script>
import HomeSwiper from "./childcomps/Homeswiper.vue";
import HomeRecommend from "./childcomps/HomeRecommend.vue";
import HomeFeature from "./childcomps/Homefeature.vue";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/cotent/tabControl/TabControl";
import GoodsList from "components/cotent/goods/GoodsList";
import BackTop from "components/cotent/backTop/BackTop/";

import { imageListenerMix } from "common/mixin.js";

import { getHomeMutidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },
  mixin: [imageListenerMix],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currytype: "pop",
      IsShowbacktop: false,
      offsetTop: 0,
      IscontrolFix: false,
      saveY: 0,
    };
  },
  // 一旦创建调用生命周期函数
  created() {
    this.getHomeMutidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // this.$bus.$on("ietmImageLoad", () => {
    //   this.$refs.Scroll && this.$refs.Scroll.imageRefresh();
    // });
  },
  mounted() {},
  methods: {
    // 事件监听
    // debounce(func, delay) {
    //   let timer = null;
    //   return function (...args) {
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       func.apply(this, args);
    //     }, delay);
    //   };
    // },
    tabclick(index) {
      this.currytype = Object.keys(this.goods)[index];
      this.$refs.tabcontrol.curryIndex = index;
      this.$refs.tabcontrol1.curryIndex = index;
    },
    backClick() {
      this.$refs.Scroll.backToTop(0, 0);
    },
    contentscroll(position) {
      this.IsShowbacktop = -position.y > 1000;
      this.IscontrolFix = -position.y > this.offsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currytype);

      // await fetchData();
    },
    swiperimgLoad() {
      this.offsetTop = this.$refs.tabcontrol.$el.offsetTop;
    },

    // 网络请求
    getHomeMutidata() {
      getHomeMutidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    // 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // 定时器防止卡顿时多次上拉加载更多请求多次数据
        setTimeout(() => {
          this.$refs.Scroll.finishPullUp();
        }, 500);
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currytype].list;
    },
  },
  // 进入路由
  activated() {
    this.$refs.Scroll.scroll.refresh();
    this.$refs.Scroll.scroll.scrollTo(0, this.saveY);
    // console.log(this.saveY);
  },
  // 离开路由
  deactivated() {
    this.saveY = this.$refs.Scroll.scroll.y;
    //取消全局事件的监听
    this.$bus.$off("ietmImageLoad", this.ietmImageListener);
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}

.tab-control1 {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.home {
  position: relative;
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>
