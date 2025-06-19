<template class="">
  <div class="bg-[#151424] h-full">
    <section class="flex items-center justify-center h-[50%]">
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
          >
            Trade
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
