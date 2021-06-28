import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'normalize.css/normalize.css'
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import store from './store/index';
import toast from "components/common/toast/index"

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
//使用图片懒加载
Vue.use(VueLazyLoad, {
    loading: require('assets/img/common/placeholder.png')
})
Vue.use(VueAwesomeSwiper);
import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])

//安装toast插件
Vue.use(toast)

Vue.prototype.$bus = new Vue()


Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
    router,
    render: h => h(App),
    store,

}).$mount('#app')