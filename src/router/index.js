import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.创建路由组件
import Main from '../views/Main.vue'
// import User from '../views/User.vue'

Vue.use(VueRouter)
// 2.将路由与组件进行映射

const routes = [
    { path: '/home', component: Main },
    // { path: '/user', component: User }
  ]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

// 4. 将router实例对外暴露
export default router


// 5. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// 此处，我们的根实例是在main.js中，所以去main.js中挂载
