import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'normalize.css/normalize.css'
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper);
import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),

}).$mount('#app')