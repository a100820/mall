<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) of banners" :key="index">
        <a :href="item.link"
          ><img class="swiper-img" :src="item.image" @load="imgLoad"
        /></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  methods: {
    imgLoad() {
      this.$emit("swiperimgLoad");
    },
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        observer: true,
        observeParents: true,
      },
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style >
.swiper-img {
  width: 100%;
}
.swiper-pagination-bullet-active {
  background: var(--color-tint);
}
</style>

