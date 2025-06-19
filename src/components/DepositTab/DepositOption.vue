<template>
  <section class="w-full flex flex-col h-screen bg-[#151424]">
    <div
      class="w-full bg-primaryDark2 flex justify-between py-4 px-6 items-center"
    >
      <the-side-bar></the-side-bar>
      <h1 class="text-textLight1 text-lg w-full text-center">
        Payment history
      </h1>
    </div>
    <section class="items-center justify-center h-[50%] hidden">
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
    <article class="flex-1 py-6 px-4">
      <router-link to="/amount">
        <div class="flex items-center text-white bg-primaryDark2 rounded-md">
          <div>
            <img src="./cryptopayment.jpg" class="h-[40px] w-[60px]" alt="" />
          </div>
          <div class="pl-5 text-[0.94rem]">
            <p>USDT, TON, Bitcoin, Ethereum</p>
          </div>
        </div></router-link
      >
    </article>
    <div
      class="bg-primaryDark2 border-t border-borderColor flex justify-around py-3"
    >
      <div class="flex flex-col items-center text-iconColor">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[22px] h-[22px] fill-current stroke-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M17.12 9.88a2.997 2.997 0 1 0-4.24 4.24a2.997 2.997 0 1 0 4.24-4.24M7 6v12h16V6zm14 8c-.53 0-1.04.21-1.41.59c-.38.37-.59.88-.59 1.41h-8c0-.53-.21-1.04-.59-1.41c-.37-.38-.88-.59-1.41-.59v-4c.53 0 1.04-.21 1.41-.59c.38-.37.59-.88.59-1.41h8c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59zM5 8H3c-.55 0-1-.45-1-1s.45-1 1-1h2zm0 5H2c-.55 0-1-.45-1-1s.45-1 1-1h3zm0 5H1c-.552 0-1-.45-1-1s.448-1 1-1h4z"
              stroke-width="0.5"
            />
          </svg>
        </div>
        <h2 class="text-[0.82rem]">Deposit</h2>
      </div>
      <div class="flex flex-col items-center text-white">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[22px] h-[22px] fill-current stroke-current"
            viewBox="0 0 16 16"
          >
            <path
              d="M10.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5zM14 6v-.5A1.5 1.5 0 0 0 12.5 4h-9A1.5 1.5 0 0 0 2 5.5V6zM2 7v3.5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5V7z"
              stroke-width="0.5"
            />
          </svg>
        </div>
        <h2 class="text-[0.82rem]">Payment history</h2>
      </div>
      <div class="flex flex-col items-center text-iconColor">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[22px] h-[22px] fill-current stroke-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M22 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7 20v-2a2 2 0 0 1 2 2Zm10 0h-2a2 2 0 0 1 2-2Zm0-4a4 4 0 0 0-4 4h-2a4 4 0 0 0-4-4V8h10Zm4-6h-2V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3V4h18Zm-9 5a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1"
              stroke-width="0.2"
            />
          </svg>
        </div>
        <h2 class="text-[0.82rem]">Withdrawal</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
