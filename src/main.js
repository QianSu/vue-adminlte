import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import routes from './routerConfig.js'

// import changeTtle from 'vue-wechat-title'
// Vue.use(changeTtle)


Vue.use(VueRouter)
const router=new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});
Vue.use(require('vue-wechat-title'))
console.log(require('vue-wechat-title'))
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
new Vue({
	router,
  el: '#app',
  router,
  render: h => h(App)
})
