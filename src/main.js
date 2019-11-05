import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'lib-flexible'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
