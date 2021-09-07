import VueRouter from "vue-router";

import Home from './components/Home'
import Discover from "./components/Discover"
import AllOrder from "./components/AllOrder"
import UserCentral from "./components/UserCentral"
import FooterNav from "./components/FooterNav"

import Login from "./components/Login"
import Register from "./components/Register"
import ShopLists from "./components/ShopLists"
import ShopMain from "./components/ShopMain"
import SetOrder from "./components/SetOrder"
import Payment from "./components/Payment"


const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "content",
      components: {
        content:Home,
        footernavs: FooterNav
      }
    },
    {
      path: "/discover",
      components: {
        content: Discover,
        footernavs: FooterNav
      }
    },
    {
      path: "/allorder",
      components: {
        content: AllOrder,
        footernavs: FooterNav
      } 
    },
    {
      path: "/usercentral",
      components: {
        content: UserCentral,
        footernavs: FooterNav
      }
    },
    {
      path: "/login",
      components: {
        content: Login,
      } 
    },
    {
      path: "/register",
      components: {
        content: Register,
      } ,
    },
    {
      path: "/shopmain",
      components: {
        content: ShopMain,
      },
    },
    {
      path: "/shoplists",
      components: {
        content: ShopLists,
      },
    },
    {
      path: "/setorder",
      components: {
        content: SetOrder,
      },
    },
    {
      path: "/payment",
      components: {
        content: Payment,
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/payment' && from.path == '/allorder') {
    next(false)
  }
  else {
    next()
  }
})
export default router