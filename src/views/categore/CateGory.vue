<template>
  <div id="category">
    <Navbar class="nav-bar">
      <div slot="center">商品分类</div>
    </Navbar>
    <div class="content-box">
      <TabMenu :categories="categories" @selectItem="selectItem" />
      <div class="tab-content">
        <Scroll class="wrapper" :data="[categoryData]" ref="scroller">
          <TabContentCategory :subcategories="showSubcategory" />
          <TabControl
            :titles="['综合', '新品', '销量']"
            @titleClick="tabClick(currentIndex)"
          />
          <GoodsList :goods="showCategoryDetail" />
        </Scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar";

import TabMenu from "./childComps/TabMenu";
import TabContentCategory from "./childComps/TabContentCategory";

import TabControl from "components/cotent/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/cotent/goods/GoodsList";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
import { POP, SELL, NEW } from "common/const";
import { tabControlMixin } from "common/mixin";

export default {
  name: "CateGory",
  components: {
    Navbar,
    TabMenu,
    TabControl,
    Scroll,
    TabContentCategory,
    GoodsList,
  },
  mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    };
  },
  created() {
    // 1.请求分类数据
    this._getCategory();

    // 2.监听图片加载完成
    this.$bus.$on("itemCategoryImageLoad", () => {
      this.$refs.scroller.refresh();
    });
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail(POP);
        this._getCategoryDetail(SELL);
        this._getCategoryDetail(NEW);
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res.data;
      });
    },
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;

  position: relative;
  z-index: 9;
}

.content-box {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}

.tab-content {
  flex: 1;
}

.wrapper {
  height: 100%;
}
</style>
