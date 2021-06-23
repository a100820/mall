<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="left" @click="backClick()">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:center>
        <div class="center">
          <span
            v-for="(item, index) in title"
            :key="index"
            class="title"
            @click="itemClick(index)"
            :class="{ active: curryIndex == index }"
            >{{ item }}</span
          >
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      curryIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.curryIndex = index;
      this.$emit("itemClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  font-size: 13px;
}
.left img {
  /* font-size: 20px; */
  /* line-height: 44px; */
  padding-top: 12px;
}

.title {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>>
