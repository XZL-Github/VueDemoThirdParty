import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(BaiduMap, {
    ak: '1NmEHOeYKOaNIgUIe0xwU108fQuaTczL' //官方提供的ak秘钥
})
Vue.use(mavonEditor)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
