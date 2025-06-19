<template>
  <div class="relative flex justify-center">
    <div
      class="fixed translate-y-[-20px] top-10 z-[999] flex items-center text-white opacity-0 text-sm font-bold px-4 py-3 rounded-md transform transition-all duration-1000 mb-1"
      :class="computedClass"
    >
      <div v-html="typeOfAlert.icon"></div>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "showAlert", "type"],
  data() {
    return {
      alerts: {
        success: {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
          color: "bg-green-500",
        },
        error: {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
          color: "bg-red-500",
        },
      },
    };
  },
  computed: {
    typeOfAlert() {
      if (this.type === "success") {
        return this.alerts.success;
      } else {
        return this.alerts.error;
      }
    },
    computedClass() {
      return `${this.typeOfAlert.color} ${this.showAlert ? "show" : null}`;
    },
  },
};
</script>

<style scoped>
.show {
  opacity: 1;
  transform: translateY(20px);
}
</style>
