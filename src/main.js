import Vue from 'vue'
import { Row, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
//引入router
import router from './router'

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Button)

new Vue({
  //挂载router
  router,
  render: h => h(App),
}).$mount('#app')