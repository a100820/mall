<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @itemClick="itemClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll class="wrapper" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :top-image="topImage"></detail-swiper>
      <detail-best-info :goods="goods"></detail-best-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @detailImageLoad="detailImageLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="param"
        :itemParams="paramInfo"
      ></detail-param-info>
      <detail-comment-info
        ref="comment"
        :commentInfo="commentInfo"
      ></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </scroll>
    <detail-tab-bar />
    <back-top @click.native="backClick" v-show="IsShowbacktop" />
  </div>
</template>

<script>
import DetailNavBar from "./childcomps/DetailNavBar.vue";
import DetailSwiper from "./childcomps/DetailSwiper.vue";
import DetailBestInfo from "./childcomps/DetailBestInfo.vue";
import DetailShopInfo from "./childcomps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childcomps/DetailParamInfo.vue";
import DetailCommentInfo from "./childcomps/DetailCommentInfo";
import DetailTabBar from "./childcomps/DetailTabBar";

import GoodsList from "components/cotent/goods/GoodsList";
import BackTop from "components/cotent/backTop/BackTop/";

import Scroll from "components/common/scroll/Scroll";

import { imageListenerMix } from "common/mixin.js";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBestInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailTabBar,

    Scroll,
  },
  mixin: [imageListenerMix],
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopY: [],
      IsShowbacktop: false,
    };
  },
  created() {
    //保存传入的id
    this.iid = this.$route.params.iid;
    //根据id获取详情数据
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      // console.log(data);

      //获取轮播图片
      this.topImage = data.itemInfo.topImages;
      //获取商品基础信息并保存到goods实例对象
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺基础信息并保存到shop实例对象
      this.shop = new Shop(data.shopInfo);
      //获取商品详细信息
      this.detailInfo = data.detailInfo;
      //获取参数信息
      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //请求推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommend = res.data.data.list;
    });
    //已渲染完所以dom包括子组件里的，但是图片未加载完的话，获取offsetTop也不准
    this.$nextTick(() => {});
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("ietmImageLoad", this.ietmImageListener);
  },

  methods: {
    detailImageLoad() {
      this.$refs.scroll.imageRefresh();
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
    },
    backClick() {
      this.$refs.scroll.backToTop(0, 0);
    },

    itemClick(index) {
      // console.log(index);
      this.$refs.scroll.backToTop(0, -this.themeTopY[index], 100);
    },
    contentScroll(position) {
      const positionY = -position.y;
      this.IsShowbacktop = -position.y > 1000;
      // console.log(positionY);
      for (let i = 0; i < this.themeTopY.length - 1; i++) {
        if (
          positionY >= this.themeTopY[i] &&
          positionY < this.themeTopY[i + 1]
          // this.$refs.nav.curryIndex != i
        ) {
          this.$refs.nav.curryIndex = i;
          // console.log(i);
        }
      }
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.wrapper {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  /* bottom: 0; */
  bottom: 49px;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>
