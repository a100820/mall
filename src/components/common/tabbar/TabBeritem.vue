<template>
  <div class="tab-item" @click="ItemClick">
    <div :style="activeStyle"><slot name="item-icon"></slot></div>

    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBeiItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // Isactive: true,
    };
  },
  computed: {
    Isactive() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.Isactive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    ItemClick() {
      // // this.router.push("/location").catch((err) => {
      // //   console.log(err);
      // });
      // if (this.$router.path == this.path) console.log("aaa");
      this.$router.replace(this.path).catch((err) => err);
    },
  },
};
</script>

<style>
.tab-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  /* vertical-align: middle; */
}
.tab-item i {
  font-size: 24px;
}
/* .active {
  color: red;
} */
</style>