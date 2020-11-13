import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home"
import List from "../views/List"
import My from "../views/My"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },{
      path:"/home",
      name:"Home",
      component:Home
    },{
      path:"/list",
      name:"List",
      component:List,
    },{
      path:"/my",
      name:"My",
      component:My
    }
  ]
})
