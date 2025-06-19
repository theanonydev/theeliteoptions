<template>
  <div class="text-white h-screen">
    <div
      class="w-full bg-primaryDark2 flex justify-between py-4 px-6 items-center"
    >
      <the-side-bar></the-side-bar>

      <h1 class="text-textLight1 text-lg w-full text-center">Profile</h1>
    </div>
    <component :is="activeTab"></component>
    <nav
      class="fixed bottom-0 px-5 py-2 border-t border-borderColor w-full bg-primaryDark2"
    >
      <menu class="flex justify-between items-center">
        <div
          class="flex flex-col items-center gap-1 cursor-pointer text-gray-300"
          @click="switchTab('account-info')"
          :class="firstTabStyle"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[21px] h-[21px] flex items-center justify-center stroke-current"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.1"
                d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              />
            </svg>
          </div>
          <p class="text-[0.81rem]">Profile</p>
        </div>
        <div
          class="flex flex-col items-center gap-1 cursor-pointer text-gray-300"
          @click="switchTab('trade-history')"
          :class="secondTabStyle"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[21px] h-[21px] flex items-center justify-center stroke-current fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2.879 3.879C2 4.757 2 6.172 2 9v6c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h8c2.828 0 4.243 0 5.121-.879C22 19.243 22 17.828 22 15V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.879M16 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-7 3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm4 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
                clip-rule="evenodd"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <p class="text-[0.81rem]">Trade history</p>
        </div>
        <div
          class="flex flex-col items-center gap-1 cursor-pointer text-gray-300"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[21px] h-[21px] flex items-center justify-center stroke-current"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="m19.37 4.82l-.22-.22a10.29 10.29 0 1 0 .25.25zm-6.61 5.3v-6.9a8.65 8.65 0 0 1 4.88 2z"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <p class="text-[0.81rem]">Analysis</p>
        </div>
        <div
          class="flex flex-col items-center gap-1 cursor-pointer text-gray-300"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[21px] h-[21px] flex items-center justify-center stroke-current text-current"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.1"
              >
                <path
                  d="M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.128 1.612-.383c6.199-2.373 8.796-8.471 7.606-15.067c-.111-.616-.167-.925-.357-1.136s-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2"
                />
                <path
                  d="M10.337 10.38c-1.08 0-1.62.78-1.74 1.26s-.12 2.22-.048 2.94c.24.9.84 1.272 1.428 1.392c.54.048 2.82.03 3.48.03c.96.018 1.68-.342 1.98-1.422c.06-.36.12-2.34-.03-2.94c-.318-.96-1.11-1.26-1.71-1.26zm-.087-.421c0-.06.008-.406.01-.84c0-.398-.034-.78.156-1.13c.71-1.414 2.75-1.27 3.254.17c.087.237.093.612.09.96c-.003.443.006.84.006.84"
                />
              </g>
            </svg>
          </div>
          <p class="text-[0.81rem]">Security</p>
        </div>
      </menu>
    </nav>
  </div>
</template>

<script>
import AccountInfo from "../ProfileTabs/AccountInfo.vue";
import TradeHistory from "../ProfileTabs/TradeHistory.vue";
export default {
  components: {
    AccountInfo,
    TradeHistory,
  },
  data() {
    return {
      activeTab: "account-info",
    };
  },

  computed: {
    firstTabStyle() {
      return this.activeTab === "account-info" ? "active" : null;
    },
    secondTabStyle() {
      return this.activeTab === "trade-history" ? "active" : null;
    },
  },

  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.active {
  color: white;
}
</style>
