<template>
  <div>
    <!-- Header -->
    <header
      class="flex z-50 gap-6 justify-between items-center py-2 px-3 sticky top-0 text-[#f5f5f5] bg-primaryDark2 border-b border-borderColor"
    >
      <the-side-bar></the-side-bar>
      <div class="flex gap-7">
        <div class="py-2 text-center rounded-lg">
          <h1 class="text-[#FFA25C] text-[0.86rem]">$1000.00</h1>
        </div>
        <div class="flex items-center px-6 bg-[#2977BE] rounded-lg">
          <h1 class="text-[0.86rem]">Finances</h1>
        </div>
      </div>

      <div class="cursor-pointer" @click="showRightSidebar = true">
        <!-- Right Menu Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-[18px] h-[18px] stroke-iconColor"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </header>

    <!-- Right Sidebar -->
    <transition name="slide-right">
      <div
        v-if="showRightSidebar"
        class="fixed top-0 right-0 w-[80%] h-full bg-primaryDark2 text-white z-50 p-1 shadow-lg"
      >
        <button
          @click="showRightSidebar = false"
          class="absolute right-4 top-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[20px] w-[20px]"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#f7f7f7"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m7 7l10 10M7 17L17 7"
              stroke-width="1.1"
            />
          </svg>
        </button>

        <recent-deals @close="showRightSidebar = false"></recent-deals>
      </div>
    </transition>
  </div>
</template>

<script>
import RecentDeals from "./views/RecentDeals.vue";
export default {
  components: {
    RecentDeals,
  },
  data() {
    return {
      showLeftSidebar: false,
      showRightSidebar: false,
    };
  },
  methods: {
    nextPage() {
      setTimeout(() => {
        this.$router.push("/deposit");
      }, 1000);
      this.showLeftSidebar = !this.showLeftSidebar;
    },
  },
};
</script>

<style scoped>
/* Left Sidebar Animation */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-left-leave,
.slide-left-enter-to {
  transform: translateX(0);
}

/* Right Sidebar Animation */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-right-leave,
.slide-right-enter-to {
  transform: translateX(0);
}
</style>
