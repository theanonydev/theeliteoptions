<!-- SidebarItem.vue -->
<template>
  <div
    class="flex flex-col items-center cursor-pointer hover:text-blue-400 transition"
  >
    <div class="text-2xl">{{ icon }}</div>
    <div class="text-[10px] mt-1">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: ["icon", "label"],
};
</script>
