<template>
  <section class="bg-primaryDark h-screen w-screen">
    <!-- Sidebar with fixed width -->
    <div class="w-[4rem] shrink-0 absolute h-fit py-6 max-sm:hidden">
      <SideBar @open-panel="handleOpenPanel" />
    </div>

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <home-header />

      <!-- Asset Dropdown -->
      <div class="flex justify-center py-1">
        <div class="relative w-72">
          <button
            @click="showDropdown = !showDropdown"
            class="flex items-center justify-center w-full p-2 text-white"
          >
            <div
              class="flex items-center gap-2 px-3 justify-center bg-primaryDark2 py-2 rounded-lg"
            >
              <img
                :src="getAssetIcon(selectedAsset)"
                alt="icon"
                class="w-4 h-4"
              />
              <span class="text-[0.76rem] font-medium">
                {{ selectedAsset || "Select Pair" }}
              </span>
            </div>
          </button>
          <div
            v-if="showDropdown"
            class="absolute z-10 mt-2 w-full bg-primaryDark2 border border-borderColor rounded-xl shadow-lg"
          >
            <div class="flex gap-2 p-4 relative">
              <div
                class="border border-borderColor rounded-lg bg-primaryLight text-[0.8rem] text-textLight1 px-2 py-1"
              >
                Trading
              </div>
              <div class="rounded-lg text-[0.8rem] text-textLight2 px-2 py-1">
                Stock
              </div>

              <button class="absolute right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-iconColor w-[15px] h-[15px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.1"
                    d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7"
                  />
                </svg>
              </button>
            </div>

            <!-- Custom dropdown for filtering -->
            <div class="flex items-center px-4 gap-3">
              <div class="relative flex-1">
                <button
                  @click="showTypeDropdown = !showTypeDropdown"
                  class="w-full p-2 text-[0.84rem] border border-borderColor rounded-xl bg-primaryDark text-textLight1 text-left flex justify-between items-center"
                >
                  {{ selectedType }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 ml-2 fill-textLight2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </button>
                <div
                  v-if="showTypeDropdown"
                  class="absolute mt-1 w-full bg-primaryDark2 border border-borderColor rounded-lg shadow-lg z-20"
                >
                  <div
                    v-for="type in assetTypes"
                    :key="type"
                    @click="selectType(type)"
                    class="px-4 py-2 hover:bg-primaryLight text-[0.84rem] text-white cursor-pointer"
                  >
                    {{ type }}
                  </div>
                </div>
              </div>
            </div>

            <div
              v-for="asset in filteredAssets"
              :key="asset.symbol"
              class="flex items-center gap-2 px-4 py-2 hover:bg-primaryDark2 text-white cursor-pointer"
              @click="selectAsset(asset)"
            >
              <img :src="getAssetIcon(asset.name)" alt="icon" class="w-5 h-5" />
              <span>{{ asset.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 py-2 px-3">
        <!-- TradingView Chart -->
        <div
          class="md:col-span-3 rounded-2xl shadow-lg bg-white"
          style="height: 500px"
        >
          <div id="tradingview-widget" class="w-full h-full" />
        </div>

        <!-- Recent Panel -->
        <div
          class="md:col-span-2 rounded-2xl shadow-lg py-6 bg-primaryDark2 space-y-4 text-white max-sm:hidden"
        >
          <h1 class="text-center mb-4 text-[1.2rem]">Recent deals</h1>
          <div v-if="position">
            <h3
              class="border-b border-borderColor px-4 py-1 text-gray-400 text-[0.81rem]"
            >
              {{ new Date().toLocaleDateString() }}
            </h3>
            <div class="">
              <div
                class="flex justify-between px-4 py-2 border-b border-borderColor"
              >
                <div class="flex gap-2 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[20px] h-[20px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#0d9d2c"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.1"
                        d="m17 14l-5-5l-5 5"
                      />
                    </svg>
                  </div>
                  <div class="flex flex-col items-center">
                    <p class="font-semibold text-[0.84rem]">
                      {{ position.market }}
                    </p>
                    <p class="text-gray-400 text-[0.8rem]">
                      {{ new Date().toLocaleTimeString() }}
                    </p>
                  </div>
                </div>
                <div class="flex flex-col items-center">
                  <p
                    :class="
                      position.unrealizedProfit >= 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    "
                    class="font-semibold text-[0.84rem]"
                  >
                    {{ position.unrealizedProfit >= 0 ? "+" : ""
                    }}{{ position.unrealizedProfit }}
                  </p>
                  <p class="text-gray-400 text-[0.8rem]">
                    ${{ position.size }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-white text-center">No recent deals.</div>
        </div>

        <!-- Trade History -->
        <div
          class="md:col-span-3 rounded-2xl shadow-lg p-4 bg-primaryDark2 space-y-4 hidden"
        >
          <h2 class="text-xl font-bold text-white">Trade History</h2>
          <div v-if="tradeHistory.length">
            <div
              v-for="trade in tradeHistory"
              :key="trade.date"
              class="border-b border-gray-700 py-2"
            >
              <div class="flex justify-between text-white">
                <span>Market:</span><span>{{ trade.market }}</span>
              </div>
              <div class="flex justify-between text-white">
                <span>Amount:</span><span>{{ trade.amount }} USD</span>
              </div>
              <div class="flex justify-between text-white">
                <span>Profit/Loss:</span>
                <span
                  :class="trade.profit >= 0 ? 'text-green-500' : 'text-red-500'"
                  >{{ trade.profitLoss }} USD</span
                >
              </div>
              <div class="flex justify-between text-white">
                <span>Date:</span><span>{{ trade.date }}</span>
              </div>
            </div>
          </div>
          <div v-else class="text-white">No trade history.</div>
        </div>

        <!-- Trade Panel (Hidden for now) -->
        <div
          class="md:col-span-2 rounded-2xl shadow-lg p-4 bg-primaryDark2 space-y-4 max-sm:hidden"
        >
          <h2 class="text-xl font-bold text-white">Place a Trade</h2>
          <!-- Trade buttons and inputs (already exist elsewhere) -->
        </div>
      </div>

      <!-- Fixed Bottom Controls -->
      <div
        class="fixed bottom-0 left-0 w-full bg-transparent p-4 flex justify-center gap-5 items-center z-50 max-sm:hidden"
      >
        <div class="flex border border-gray-700 bg-primaryDark2 rounded-lg">
          <div class="flex flex-col gap-0 border-r border-gray-700">
            <button
              @click="adjustAmount(1)"
              class="flex justify-center h-full items-center border-b border-gray-700 px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#cfcfcf"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  stroke="#cfcfcf"
                />
              </svg>
            </button>
            <button
              @click="adjustAmount(-1)"
              class="flex justify-center items-center h-full px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path fill="#cfcfcf" d="M19 12.998H5v-2h14z" stroke="#cfcfcf" />
              </svg>
            </button>
          </div>
          <div class="flex flex-col px-6 py-1">
            <h1 class="text-white text-center font-bold">
              $ <span>{{ amount }}</span>
            </h1>
            <span class="text-white text-[0.81rem]">Investment</span>
          </div>
        </div>

        <div class="flex border border-gray-700 bg-primaryDark2 rounded-lg">
          <button
            @click="placeTrade('sell')"
            class="text-red-400 border-r border-gray-700 font-bold text-lg bg-transparent px-12 py-4"
          >
            SELL
          </button>
          <button
            @click="placeTrade('buy')"
            class="text-green-400 rounded-xl font-bold text-lg bg-transparent px-12 py-4"
          >
            BUY
          </button>
        </div>

        <div class="flex items-center gap-2">
          <select
            v-model="expiry"
            class="p-2 border border-gray-700 rounded-xl bg-primaryDark2 text-white"
          >
            <option value="1m">1:00</option>
            <option value="3m">30:00</option>
            <option value="5m">1H</option>
          </select>
        </div>
      </div>
      <div
        class="fixed bottom-0 left-0 w-full border-t border-borderColor bg-primaryDark2 grid grid-cols-2 gap-2 px-1 pt-2 pb-3 items-center z-30"
      >
        <div class="flex items-center justify-center gap-6">
          <button
            @click="adjustAmount(-1)"
            class="flex justify-center items-center h-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[15px] w-[15px]"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#f7f7f7"
                stroke-linecap="round"
                d="M19.5 12h-15"
                stroke-width="1"
              />
            </svg>
          </button>

          <div class="flex flex-col items-center">
            <h1 class="text-white text-center text-[0.88rem] font-medium">
              $<span>{{ amount }}</span>
            </h1>
            <span class="text-gray-400 text-[0.81rem] font-light"
              >Investment</span
            >
          </div>

          <button
            @click="adjustAmount(1)"
            class="flex justify-center h-full items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[15px] w-[15px]"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#f7f7f7"
                stroke-linecap="round"
                d="M12 3.5v17m8.5-8.5h-17"
                stroke-width="1.1"
              />
            </svg>
          </button>
        </div>

        <div class="flex items-center justify-center gap-6">
          <button
            @click="adjustAmount(-1)"
            class="flex justify-center items-center h-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[15px] w-[15px]"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#f7f7f7"
                stroke-linecap="round"
                d="M19.5 12h-15"
                stroke-width="1"
              />
            </svg>
          </button>

          <div class="flex flex-col items-center">
            <h1 class="text-white text-center text-[0.88rem] font-medium">
              <span>01:00</span>
            </h1>
            <span class="text-gray-400 text-[0.81rem] font-light"
              >deal duration</span
            >
          </div>

          <button class="flex justify-center h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[13px] h-[20px]"
              viewBox="0 0 12 24"
            >
              <defs>
                <path
                  id="weuiArrowOutlined0"
                  fill="#f7f7f7"
                  d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                />
              </defs>
              <use
                fill-rule="evenodd"
                href="#weuiArrowOutlined0"
                transform="rotate(-180 5.02 9.505)"
              />
            </svg>
          </button>
        </div>
        <button
          @click="placeTrade('sell')"
          class="text-red-400 border rounded-xl border-borderColor font-bold text-sm bg-transparent py-3"
        >
          <router-link to="/deposit">SELL</router-link>
        </button>

        <button
          @click="placeTrade('buy')"
          class="text-green-400 rounded-xl border border-borderColor font-bold text-sm bg-transparent py-3"
        >
          <router-link to="/deposit">BUY</router-link>
        </button>
        >
      </div>
    </div>
  </section>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
import SideBar from "./SideBar.vue";

export default {
  components: { HomeHeader, SideBar },
  data() {
    return {
      activePanel: null,
      selectedAsset: "BTC/USD",
      showDropdown: false,
      showTypeDropdown: false,
      selectedType: "All",
      assetTypes: ["All", "Currencies", "Indices"],
      assets: [
        {
          name: "BTC/USD",
          symbol: "BINANCE:BTCUSDT",
          icon: require("@/assets/AllPairs/btc.png"),
          type: "Currencies",
        },
        {
          name: "ETH/USD",
          symbol: "BINANCE:ETHUSDT",
          icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
          type: "Currencies",
        },
        {
          name: "AAPL",
          symbol: "NASDAQ:AAPL",
          icon: "https://logo.clearbit.com/apple.com",
          type: "Indices",
        },
        {
          name: "EUR/USD",
          symbol: "FX:EURUSD",
          icon: "https://flagcdn.com/w320/eu.png",
          type: "Currencies",
        },
      ],
      amount: 1,
      expiry: "1m",
      tradePlaced: false,
      position: null,
      tradeHistory: [],
      chartWidget: null,
    };
  },
  computed: {
    filteredAssets() {
      if (this.selectedType === "All") return this.assets;
      return this.assets.filter((asset) => asset.type === this.selectedType);
    },
  },
  mounted() {
    this.loadTradingView(this.assets[0].symbol);
  },
  methods: {
    handleOpenPanel(panel) {
      this.activePanel = panel;
    },
    getAssetIcon(name) {
      const asset = this.assets.find((a) => a.name === name);
      return asset ? asset.icon : "";
    },
    selectAsset(asset) {
      this.selectedAsset = asset.name;
      this.showDropdown = false;
      this.loadTradingView(asset.symbol);
    },
    selectType(type) {
      this.selectedType = type;
      this.showTypeDropdown = false;
    },
    loadTradingView(symbol) {
      if (this.chartWidget) {
        this.chartWidget.remove();
      }
      this.chartWidget = new window.TradingView.widget({
        container_id: "tradingview-widget",
        width: "100%",
        height: 500,
        symbol,
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#1f2937",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: false,
      });
    },
    placeTrade(type) {
      const trade = {
        market: this.selectedAsset,
        amount: this.amount,
        profitLoss: type === "buy" ? this.amount * 0.05 : -this.amount * 0.05,
        date: new Date().toLocaleString(),
        type,
      };
      this.tradeHistory.push(trade);

      this.position = {
        market: this.selectedAsset,
        size: this.amount,
        entryPrice: 1000,
        value: this.amount * 1000,
        unrealizedProfit: trade.profitLoss,
      };

      this.tradePlaced = true;
      setTimeout(() => (this.tradePlaced = false), 3000);
    },
    adjustAmount(value) {
      this.amount = Math.max(1, this.amount + value);
    },
  },
};
</script>

<style scoped>
/* Add any scoped custom styles here */
</style>
