<template>
  <section class="p-4 bg-primaryDark2 h-full">
    <div class="flex justify-between items-center">
      <div class="flex gap-2 items-center">
        <div class="w-fit rounded-full p-6 border border-borderColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[24px] h-[24px] flex items-center justify-center stroke-white"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.1"
              d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
            />
          </svg>
        </div>
        <div>
          <p class="text-[0.86rem] font-medium text-gray-200">
            Hello, {{ user.displayName }}
          </p>
          <div class="flex items-center gap-2">
            <a class="text-[0.88rem] font-medium">145-3445-222</a>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[16px] w-[16px]"
                viewBox="0 0 512 512"
              >
                <rect
                  width="336"
                  height="336"
                  x="128"
                  y="128"
                  fill="none"
                  stroke="#fff"
                  stroke-linejoin="round"
                  stroke-width="31"
                  rx="57"
                  ry="57"
                />
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="31"
                  d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="p-2 rounded-lg border-2 border-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[16px] h-[16px] stroke-blue-600"
            viewBox="0 0 32 32"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.2"
              d="m30 7l-5-5L5 22l-2 7l7-2Zm-9-1l5 5ZM5 22l5 5Z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <p class="font-light text-[0.9rem] py-2">Account information</p>
      <div class="bg-[#28263F] border border-borderColor rounded-lg">
        <div
          class="flex justify-between items-center border-b border-borderColor px-5 py-3"
        >
          <div class="flex gap-3 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[21px] h-[21px] flex items-center justify-center stroke-white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.1"
                  d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                />
              </svg>
            </div>
            <div>
              <p class="text-[0.85rem]">Profile ID</p>
              <p class="text-[0.89rem] font-medium">145-3445-222</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[16px] w-[16px]"
              viewBox="0 0 512 512"
            >
              <rect
                width="336"
                height="336"
                x="128"
                y="128"
                fill="none"
                stroke="#fff"
                stroke-linejoin="round"
                stroke-width="31"
                rx="57"
                ry="57"
              />
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="31"
                d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
              />
            </svg>
          </div>
        </div>
        <div
          class="flex justify-between items-center border-b border-borderColor px-5 py-3"
        >
          <div class="flex gap-3 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[21px] h-[21px] flex items-center justify-center stroke-white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                  stroke-width="0.5"
                  stroke="#fff"
                />
              </svg>
            </div>
            <div>
              <p class="text-[0.85rem]">Email</p>
              <a
                class="text-[0.89rem] font-medium no-underline"
                style="text-decoration: none"
              >
                {{ user.email }}
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center px-5 py-3">
          <div class="flex gap-3 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[21px] h-[21px] flex items-center justify-center stroke-white"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="#fff"
                  d="m1845 1024l124 155q18 23 28 50t10 57t-9 57t-26 49t-41 38t-52 24l-191 53q2 51 5 103t4 104q0 36-13 67t-37 54t-55 37t-68 14q-31 0-61-11l-185-70l-109 165q-24 37-62 57t-83 21q-44 0-82-20t-63-58l-109-165l-185 70q-30 11-61 11q-36 0-67-13t-55-37t-37-55t-14-67q0-52 3-104t6-103l-191-53q-29-8-52-24t-40-38t-26-49t-10-57q0-29 10-56t28-51l124-155L79 869q-38-47-38-107q0-30 9-57t26-49t40-38t53-24l191-53q-2-51-5-103t-4-104q0-36 13-67t37-54t55-37t68-14q31 0 61 11l185 70L879 78q24-37 62-57t83-21q44 0 82 20t63 58l109 165l185-70q30-11 61-11q36 0 67 13t55 37t37 55t14 67q0 52-3 104t-6 103l191 53q28 8 52 24t40 38t26 49t10 57q0 60-38 107zm-949 369l569-568l-114-114l-455 456l-199-200l-114 114z"
                  stroke-width="51"
                  stroke="#fff"
                />
              </svg>
            </div>
            <div>
              <p class="text-[0.85rem]">Verified</p>
              <p class="text-[0.89rem] font-medium">Yes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
