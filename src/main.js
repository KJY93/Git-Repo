// import components
import Vue from 'vue' 
import Router from 'vue-router'
import App from './App'
import ReadMe from './components/ReadMe'
import Home from './components/Home'
import NotFound from './components/NotFound'

// setup routers
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/readme/:username/:id',
      name:'readme', 
      props: true,
      component: ReadMe
    },
    {
      path: '/search',
      name: 'search',
      component: ReadMe
    },
    { path: '*', component: NotFound }  

  ],
   mode: 'history'
 })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
