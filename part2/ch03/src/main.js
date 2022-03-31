import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'


Vue.config.productionTip = false
Vue.use(VueRouter); // vue router쓰겠다고 이렇게 써야 한다. 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
