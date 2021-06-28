<template>
  <div class="goods-item">
    <div class="goods-img">
      <img v-lazy="showImage" alt="" @load="imageLoad" @click="itemClick" />
    </div>

    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>

      <span class="collect"
        ><i class="iconfont">&#xe60f;</i>{{ goodsitem.cfav }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("ietmImageLoad");
    },
    itemClick() {
      this.$router.push("./detail/" + this.goodsitem.iid);
    },
  },
  computed: {
    showImage() {
      return (
        this.goodsitem.image || this.goodsitem.img || this.goodsitem.show.img
      );
    },
  },
};
</script scoped>

<style scoped>
.goods-item {
  width: 50%;
  /* float: left; */
  text-align: center;
  padding-bottom: 40px;
  position: relative;
}

.goods-item img {
  width: 90%;
  border-radius: 5px;
}
.goods-item p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-info {
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
@import "~assets/iconfont/iconfont.css";
</style>