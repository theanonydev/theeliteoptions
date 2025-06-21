import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import SignInPage from "./components/SignInPage.vue";
import SignUpPage from "./components/SignUpPage.vue";
import CryptoTrading from "./components/TradingPages/CryptoTrading.vue";
import StockTrading from "./components/TradingPages/StockTrading.vue";
import ForexTrading from "./components/TradingPages/ForexTrading.vue";
import OptionsTrading from "./components/TradingPages/OptionsTrading.vue";
import ContactUs from "./components/ContactUs.vue";
import TradingInterface from "./components/TradingInterface.vue";
import { auth } from "./firebase";
import ProfilePage from "./components/views/ProfilePage.vue";
import DepositPage from "./components/views/DepositPage.vue";
import PaymentSection from "./components/views/PaymentSection.vue";
import KycPage from "./components/views/KycPage.vue";
import DepositHistory from "./components/DepositTab/DepositHistory.vue";
import MakeWithdraw from "./components/DepositTab/MakeWithdraw.vue";
import AboutUs from "./components/AboutUs.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/contact-us",
      component: ContactUs,
    },
    {
      path: "/about-us",
      component: AboutUs,
    },
    {
      path: "/signin",
      component: SignInPage,
    },
    {
      path: "/signup",
      component: SignUpPage,
    },
    {
      path: "/crypto-trading",
      component: CryptoTrading,
    },
    {
      path: "/stock-trading",
      component: StockTrading,
    },
    {
      path: "/forex-trading",
      component: ForexTrading,
    },
    {
      path: "/options-trading",
      component: OptionsTrading,
    },
    {
      path: "/app",
      component: TradingInterface,
      meta: { requiresAuth: true },
    },
    {
      path: "/app/account/verification",
      component: KycPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/deposit",
      component: DepositPage,
      name: "deposit",
      meta: { requiresAuth: true },
    },
    {
      path: "/deposit/history",
      component: DepositHistory,

      meta: { requiresAuth: true },
    },
    {
      path: "/withdraw",
      component: MakeWithdraw,

      meta: { requiresAuth: true },
    },
    {
      path: "/amount",
      component: PaymentSection,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      component: ProfilePage,
      name: "profile",
      meta: { requiresAuth: true },
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    return {
      path: "/signup",

      query: { redirect: to.fullPath },
    };
  }
});

export default router;
