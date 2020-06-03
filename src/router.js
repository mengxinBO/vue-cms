// 1.导入 vue-router包
import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import PhotoList from './components/photos/PhotoList.vue'

// 3.创建路由对象
var router = new VueRouter({
    routes:[ //配置路由规则
      { path:'/', redirect: '/home'}, //重定向  默认跳转首页
      { path: '/home', component: HomeContainer},
      { path: '/member', component: MemberContainer},
      { path: '/shopcar', component: ShopcarContainer},
      { path: '/search', component: SearchContainer},
      { path: '/home/newslist',component:NewsList},
      { path: '/home/photolist', component:PhotoList}

    ],
    linkActiveClass:"mui-active" //覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

// 把路由对象暴露出去
export default router