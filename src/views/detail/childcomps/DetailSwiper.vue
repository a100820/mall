<template>
  <swiper :options="swiperOptions" class="detailSwiper">
    <swiper-slide v-for="(item, index) of topImage" :key="index">
      <img class="swiper-img" :src="item" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "DetailSwiper",
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
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style >
.detailSwiper {
  height: 300px;
  overflow: hidden;
}
.swiper-pagination-bullet-active {
  background: var(--color-tint);
}
</style>
