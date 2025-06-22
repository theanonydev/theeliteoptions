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
import CardPayment from "./components/CardPayment.vue";
import AboutUs from "./components/AboutUs.vue";
import { db } from "./firebase";
import { ref, get } from "firebase/database";

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
      meta: { requiresAuth: true, requiresKYC: true },
    },
    {
      path: "/kyc",
      component: KycPage,
      meta: {},
    },
    {
      path: "/deposit",
      component: DepositPage,
      name: "deposit",
      meta: { requiresAuth: true, requiresKYC: true },
    },
    {
      path: "/online-payment",
      component: CardPayment,

      meta: { requiresAuth: true, requiresKYC: true },
    },
    {
      path: "/deposit/history",
      component: DepositHistory,

      meta: { requiresAuth: true, requiresKYC: true },
    },
    {
      path: "/withdraw",
      component: MakeWithdraw,

      meta: { requiresAuth: true, requiresKYC: true },
    },
    {
      path: "/amount",
      component: PaymentSection,
      meta: { requiresAuth: true, requiresKYC: true },
    },
    {
      path: "/profile",
      component: ProfilePage,
      name: "profile",
      meta: { requiresAuth: true, requiresKYC: true },
    },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach(async (to) => {
  const currentUser = auth.currentUser;

  // ✅ Block unauthenticated access to auth-required routes
  if (to.meta.requiresAuth && !currentUser) {
    return {
      path: "/signup",
      query: { redirect: to.fullPath },
    };
  }

  // ✅ Block non-verified KYC users from protected routes
  if (to.meta.requiresKYC && currentUser) {
    const kycStatusRef = ref(db, `users/${currentUser.uid}/kyc`);
    const snapshot = await get(kycStatusRef);

    const status = snapshot.exists() ? snapshot.val() : null;

    if (status !== "verified") {
      // ✅ Prevent infinite loop by skipping redirect if already on /kyc
      if (to.path !== "/kyc") {
        return { path: "/kyc" };
      } else {
        return; // Already on /kyc, allow access
      }
    }
  }

  // ✅ Let everything else pass
  return true;
});

export default router;
