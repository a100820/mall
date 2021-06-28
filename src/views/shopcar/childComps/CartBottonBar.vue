<template>
  <div class="button-bar">
    <div class="checked-content">
      <check-button
        class="checked-button"
        :isChecked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="price">合计￥{{ totalPrice.toFixed(2) }}</div>
    <div class="calculate" @click="cacuClick">去付款({{ checkLength }})</div>
  </div>
</template>


<script>
import CheckButton from "components/cotent/checkButton/CheckButton";

export default {
  name: "CartBottonBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.carList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0);
    },
    checkLength() {
      return this.$store.state.carList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.$store.state.carList.length === 0) return false;
      return this.$store.state.carList.every((item) => {
        return item.checked;
      });
    },
  },
  methods: {
    checkClick() {
      //全部选中时,点击取反
      if (this.isSelectAll) {
        this.$store.state.carList.forEach((item) => {
          item.checked = false;
        });
      }
      //有未选中的，让其选择
      else {
        this.$store.state.carList.forEach((item) => {
          item.checked = true;
        });
      }
    },
    cacuClick() {
      if (this.checkLength == 0) this.$toast.show("请选择商品", 2000);
    },
  },
};
</script>

<style scoped>
.button-bar {
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.checked-content {
  display: flex;
  align-items: center;
  margin-left: 5px;
  width: 60px;
}
.checked-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 3px;
}
.calculate {
  width: 80px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>