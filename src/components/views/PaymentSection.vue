<template>
  <section class="w-full flex flex-col h-screen bg-[#151424]">
    <div
      class="w-full bg-primaryDark2 flex justify-between py-4 px-6 items-center"
    >
      <div class="cursor-pointer" @click="goBack">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-[15px] h-[15px]"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z"
            stroke-width="0.5"
            stroke="#fff"
          />
        </svg>
      </div>
      <h1 class="text-textLight1 text-lg w-full text-center">Deposit</h1>
    </div>

    <component :is="activeTab" @goToTab="switchPage"></component>
  </section>
</template>

<script>
import MakeDeposit from "./MakeDeposit.vue";
import ConfirmDeposit from "./ConfirmDeposit.vue";
export default {
  components: {
    MakeDeposit,
    ConfirmDeposit,
  },
  data() {
    return {
      activeTab: "make-deposit",
    };
  },

  methods: {
    switchPage(newPage) {
      this.activeTab = newPage;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
