<template>
  <header class="bg-primary sticky top-0">
    <div
      class="container w-[85%] mx-auto flex items-center justify-between mt-5"
    >
      <div>
        <img src="../assets/logo.png" class="h-[50px] w-[120px]" alt="" />
      </div>
      <nav class="hidden md:flex space-x-6 items-center relative">
        <router-link to="/" class="p-4 font-bold">Home</router-link>
        <router-link to="/about" class="p-4 font-bold">About Us</router-link>
        <router-link to="/contact" class="p-4 font-bold"
          >Contact Us</router-link
        >
        <div class="relative group p-4 font-bold">
          <span class="cursor-pointer">Trading</span>
          <div
            class="absolute top-full left-0 mt-2 hidden group-hover:flex flex-col bg-white text-black font-extrabold rounded-md shadow-lg p-2 z-50 w-48"
          >
            <router-link
              to="/crypto-trading"
              class="hover:text-blue-400 py-3 text-[0.9rem] px-2"
              >Crypto Trading</router-link
            >
            <router-link
              to="/stock-trading"
              class="hover:text-blue-400 py-3 text-[0.9rem] px-2"
              >Stock Trading</router-link
            >
            <router-link
              to="/options-trading"
              class="hover:text-blue-400 py-3 text-[0.9rem] px-2"
              >Option Trading</router-link
            >
            <router-link
              to="/forex-trading"
              class="hover:text-blue-400 py-3 text-[0.9rem] px-2"
              >Forex Trading</router-link
            >
          </div>
        </div>
        <router-link to="/signin" class="hover:text-blue-400 p-4 font-bold"
          >Sign In</router-link
        >
        <router-link
          to="/signup"
          class="hover:text-blue-400 py-3 px-7 text-center font-extrabold border-2 border-black"
          >Sign Up</router-link
        >
      </nav>
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div class="pos">
      <div
        class="tradingview-widget-container"
        style="width: 100%; height: 46px"
      >
        <iframe
          scrolling="no"
          allowtransparency="true"
          frameborder="0"
          src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22US%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22description%22%3A%22Binance%20Smart%20Chain%22%2C%22proName%22%3A%22BINANCE%3ABNBUSDT%22%7D%2C%7B%22description%22%3A%22Luna%22%2C%22proName%22%3A%22BINANCE%3ALUNAUSDT%22%7D%2C%7B%22description%22%3A%22Gold%22%2C%22proName%22%3A%22CURRENCYCOM%3AGOLD%22%7D%2C%7B%22description%22%3A%22Gasoline%22%2C%22proName%22%3A%22PEPPERSTONE%3AGASOLINE%22%7D%2C%7B%22description%22%3A%22Aptos%22%2C%22proName%22%3A%22BINANCE%3AAPTUSDT%22%7D%2C%7B%22description%22%3A%22Crude%20oil%22%2C%22proName%22%3A%22CURRENCYCOM%3AOIL_CRUDE%22%7D%2C%7B%22description%22%3A%22Solana%22%2C%22proName%22%3A%22BINANCE%3ASOLUSDT%22%7D%2C%7B%22description%22%3A%22Polygon%20Matic%22%2C%22proName%22%3A%22BINANCE%3AMATICUSDT%22%7D%2C%7B%22description%22%3A%22Shiba%20Inu%22%2C%22proName%22%3A%22BINANCE%3ASHIBUSDT%22%7D%2C%7B%22description%22%3A%22Cardano%22%2C%22proName%22%3A%22BINANCE%3AADAUSDT%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A74%2C%22utm_source%22%3A%22eliteoptions.online%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22eliteoptions.online%2F%22%7D"
          title="ticker tape TradingView widget"
          lang="en"
          style="
            user-select: none;
            box-sizing: border-box;
            display: block;
            height: 46px;
            width: 100%;
          "
        ></iframe>
        <div class="tradingview-widget-copyright"></div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[9999]"
        @click.self="toggleMenu"
      >
        <div
          class="w-3/4 bg-white h-full shadow-lg transform transition-transform duration-300"
        >
          <div class="w-full flex justify-end">
            <button @click="toggleMenu" class="p-4 border-l border-borderColor">
              <svg
                class="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav class="flex flex-col text-black bg-white">
            <router-link
              to="/"
              class="text-lg border-t border-borderColor py-3 pl-4 font-bold"
            >
              Home</router-link
            >
            <router-link
              to="/about-us"
              class="text-lg border-t border-borderColor py-3 pl-4 font-bold"
              >About Us</router-link
            >
            <router-link
              to="/contact-us"
              class="text-lg border-t border-borderColor py-3 pl-4 font-bold"
              >Contact Us</router-link
            >

            <div class="border-t w-full border-borderColor py-3 px-4 font-bold">
              <div
                class="flex justify-between items-center"
                @click="showTradingMenu = !showTradingMenu"
              >
                <span class="text-lg">Trading</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[26px] h-[26px] stroke-black"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m7 10l5 5l5-5"
                      stroke-width="1.9"
                    />
                  </svg>
                </div>
              </div>

              <div class="flex flex-col gap-3 font-bold mt-1" :class="addStyle">
                <router-link to="/crypto-trading" class=""
                  >Crypto Trading</router-link
                >
                <router-link to="/stock-trading" class=""
                  >Stock Trading</router-link
                >
                <router-link to="/options-trading" class=""
                  >Option Trading</router-link
                >
                <router-link to="/forex-trading" class=""
                  >Forex Trading</router-link
                >
              </div>
            </div>

            <router-link
              to="/signin"
              class="text-lg border-t border-borderColor py-3 pl-4 font-bold"
              >Sign In</router-link
            >
            <router-link
              to="/signup"
              class="text-lg border-t border-borderColor py-3 pl-4"
            >
              <div
                class="w-fit mt-3 border-2 font-extrabold px-8 rounded-sm py-3 border-black"
              >
                Sign Up
              </div></router-link
            >
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      showTradingMenu: false,
    };
  },

  computed: {
    addStyle() {
      return this.showTradingMenu ? "flex" : "hidden";
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.tradingview-widget-copyright {
  font-size: 13px !important;
  line-height: 32px !important;
  text-align: center !important;
  vertical-align: middle !important;
  /* @mixin sf-pro-display-font; */
  font-family: -apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu,
    sans-serif !important;
  color: #b2b5be !important;
}

.tradingview-widget-copyright .blue-text {
  color: #2962ff !important;
}

.tradingview-widget-copyright a {
  text-decoration: none !important;
  color: #b2b5be !important;
}

.tradingview-widget-copyright a:visited {
  color: #b2b5be !important;
}

.tradingview-widget-copyright a:hover .blue-text {
  color: #1e53e5 !important;
}

.tradingview-widget-copyright a:active .blue-text {
  color: #1848cc !important;
}

.tradingview-widget-copyright a:visited .blue-text {
  color: #2962ff !important;
}
</style>
