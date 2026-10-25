import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    //嵌套子路由
    children:[
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/pwdsetting',
        name: 'PwdSetting',
        component: () => import('../views/PwdSetting.vue'),
        meta:{requiredAuth:true} //改元数据作用：路由拦截，当前路由需要验证身份
      },
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  //兜底路由
  // {
  //   path:'*',
  //   redirect:'/404',
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//路由拦截器
router.beforeEach((to,from,next) =>{
  if(to.meta.requiredAuth){ //前往的页面是否需要验证
    if(Boolean(sessionStorage.getItem("uid"))){
      next();
    }else{
      next({
        path:'/',
      })
    }
  }else{
    next();
  }
});


export default router
