<template>
  <transition name="slide">
    <div
      v-if="visible"
      class="fixed flex flex-col h-[calc(100%-4rem)] left-[90px] md:left-[7rem] w-[calc(100%-4rem)] md:w-80 border border-borderColor rounded-lg bg-[#1e293b] text-white z-50 shadow-lg"
    >
      <div class="h-full">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
