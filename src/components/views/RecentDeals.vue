<template>
  <section>
    <h1 class="font-light">Recent deals</h1>

    <div class="h-screen flex flex-col gap-4">
      <section class="items-center justify-center h-[50%] flex">
        <div class="flex flex-col items-center gap-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[50px] h-[50px] stroke-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.2"
                d="M8 9h8m-8 4h6m-5 5H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3l-3 3z"
              />
            </svg>
          </div>
          <p class="text-[0.86rem]">The list is empty</p>
          <router-link to="/app">
            <button
              class="w-fit px-12 rounded-lg bg-[#3269D6] font-light text-white py-2 text-[0.86rem]"
              @click="$emit('close')"
            >
              Trade
            </button>
          </router-link>
        </div>
      </section>
      <section class="font-light hidden">
        <div>
          <h1 class="py-3 text-[0.83rem] text-gray-200 px-4">Opened deals</h1>
          <div class="flex gap-3 items-center border-y border-borderColor px-2">
            <div class="py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[15px] h-[15px] stroke-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.1"
                  d="m17 14l-5-5l-5 5"
                />
              </svg>
            </div>
            <div class="flex gap-12 py-2">
              <div>
                <h1 class="text-[0.82rem] font-normal">Bitcoin / USD</h1>
                <h1 class="text-[0.8rem] max-sm:text-[0.75rem] text-gray-400">
                  Asset rate: {{ bitcoinPrice }}
                </h1>
              </div>
              <div class="text-[0.8rem] text-right">
                <h3 class="font-normal">+$0.00</h3>
                <h3 class="text-gray-400">$2.00</h3>
              </div>
            </div>
            <button class="text-center border-l border-borderColor pl-3 py-2">
              <h3 class="text-[0.83rem]">Close</h3>
              <h3 class="text-[0.77rem] text-blue-600">$0.45</h3>
            </button>
          </div>
        </div>
      </section>
      <section class="font-light hidden">
        <div>
          <h1
            class="py-2 text-[0.83rem] px-4 border-b border-borderColor text-gray-200"
          >
            30 May 2025
          </h1>
          <div class="flex gap-3 items-center px-2">
            <div class="py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[15px] h-[15px] stroke-green-500"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.1"
                  d="m17 14l-5-5l-5 5"
                />
              </svg>
            </div>
            <div class="flex gap-12 py-2 w-full justify-between">
              <div>
                <h1 class="text-[0.82rem] font-normal">Bitcoin / USD</h1>
                <h1 class="text-[0.8rem] text-gray-400">18:42:12</h1>
              </div>
              <div class="text-[0.8rem] text-right">
                <h3 class="font-normal">+$1.76</h3>
                <h3 class="text-gray-400">$1.00</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bitcoinPrice: null,
      intervalId: null,
    };
  },
  methods: {
    async fetchBitcoinPrice() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await res.json();
        this.bitcoinPrice = Number(data.bitcoin.usd).toLocaleString();
        console.log(this.bitcoinPrice);
      } catch (err) {
        console.error("Failed to fetch Bitcoin price:", err);
      }
    },
  },
  mounted() {
    this.fetchBitcoinPrice(); // Initial fetch
    this.intervalId = setInterval(this.fetchBitcoinPrice, 60000); // Every 1 minute
  },
  beforeDestroy() {
    clearInterval(this.intervalId); // Cleanup
  },
};
</script>

<style></style>
