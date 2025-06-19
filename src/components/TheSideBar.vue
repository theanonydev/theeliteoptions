<template>
  <div>
    <div class="cursor-pointer" @click="showLeftSidebar = true">
      <!-- Left Menu Icon -->
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
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </div>
    <!-- Left Sidebar -->
    <transition name="slide-left">
      <div
        v-if="showLeftSidebar"
        class="fixed top-0 left-0 w-[78%] h-full bg-primaryDark2 text-white z-50 shadow-lg border-r border-borderColor"
      >
        <button
          @click="showLeftSidebar = false"
          class="w-full flex justify-end p-3"
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
        <menu class="h-full relative w-full">
          <div class="flex justify-between px-3 items-center">
            <div class="w-full flex gap-2 items-center">
              <div class="border border-iconColor px-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[30px] h-[60px] stroke-iconColor"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke-width="1">
                    <path
                      stroke-linejoin="round"
                      d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                    />
                    <circle cx="12" cy="7" r="3" />
                  </g>
                </svg>
              </div>
              <div class="flex flex-col gap-[0.1rem]">
                <h2>$1000.00</h2>
                <a class="text-[0.8rem] no-underline">165-011-34</a>
                <h3
                  class="py-1 px-2 text-[0.7rem] rounded-md bg-yellow-500 w-fit text-center"
                >
                  LIVE
                </h3>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[20px] w-[20px] stroke-iconColor"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M40.462 32.173c-2.53-1.967-2.918-2.596-4.611-11.571c-1.438-7.623-4.59-9.993-8.504-11.232c.217-.47.347-.99.347-1.543a3.694 3.694 0 0 0-7.388 0c0 .553.13 1.072.347 1.543c-3.913 1.24-7.066 3.61-8.504 11.232c-1.693 8.975-2.08 9.604-4.61 11.57c-2.614 2.032-2.53 6.71.948 6.71h10.464c.04 2.76 2.281 4.985 5.049 4.985s5.01-2.226 5.049-4.984h10.463c3.479 0 3.563-4.68.95-6.71"
                  stroke-width="3.1"
                />
              </svg>
            </div>
          </div>

          <nav class="w-full flex flex-col mt-7">
            <div
              class="flex gap-3 items-center px-3 py-3 cursor-pointer"
              :class="tradeStyle"
              @click="nextPage('app')"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[16px] h-[16px]"
                  viewBox="0 0 256 256"
                >
                  <g fill="#fff" stroke-width="6.5" stroke="#fff">
                    <path
                      d="M224 64v144H32V48h176a16 16 0 0 1 16 16"
                      opacity="0.2"
                    />
                    <path
                      d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8"
                    />
                  </g>
                </svg>
              </div>
              <p class="text-[0.78rem]">Trade</p>
            </div>
            <div
              class="flex gap-3 items-center px-3 py-3"
              :class="profileStyle"
              @click="nextPage('profile')"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M12 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 12 12.25m0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12 6.25m7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75"
                    stroke-width="0.5"
                    stroke="#fff"
                  />
                </svg>
              </div>
              <p class="text-[0.78rem]">Profile</p>
            </div>
            <div
              class="flex gap-3 items-center px-3 py-3 cursor-auto"
              :class="financeStyle"
              @click="nextPage('deposit')"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[16px] h-[16px]"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  >
                    <path
                      d="M.5 8L4 4.5M.5 12L4 15.5m14.5-11H.5v11h18zm0 3.5L15 4.5m3.5 7.5L15 15.5"
                    />
                    <path d="M20.5 6.5v11h-18" />
                    <path
                      d="M22.5 8.5v11h-18m7-11H8.25l-.75 1l.75 1h2.5l.75 1l-.75 1H7.5m2-4v-1m0 6v-1"
                    />
                  </g>
                </svg>
              </div>
              <p class="text-[0.78rem]">Finance</p>
            </div>
            <div
              class="flex gap-3 items-center px-3 py-3"
              :class="educationStyle"
              @click="nextPage('education')"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[16px] h-[16px]"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fff"
                    d="M14.25 4A6.25 6.25 0 0 0 8 10.25v27.5A6.25 6.25 0 0 0 14.25 44h24.5a1.25 1.25 0 1 0 0-2.5h-24.5a3.75 3.75 0 0 1-3.675-3H37.75A2.25 2.25 0 0 0 40 36.25v-26A6.25 6.25 0 0 0 33.75 4zM14 12.25A2.25 2.25 0 0 1 16.25 10h15.5A2.25 2.25 0 0 1 34 12.25v2.5A2.25 2.25 0 0 1 31.75 17h-15.5A2.25 2.25 0 0 1 14 14.75z"
                    stroke-width="0.1"
                    stroke="#fff"
                  />
                </svg>
              </div>
              <p class="text-[0.78rem]">Education</p>
            </div>
            <div
              class="flex gap-3 items-center px-3 py-3"
              :class="infoStyle"
              @click="nextPage('help')"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[16px] h-[16px]"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.1"
                    color="#fff"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M10 9a2 2 0 1 1 3.683 1.08C13.085 11.01 12 11.896 12 13v.5m-.008 3.5h.009"
                    />
                  </g>
                </svg>
              </div>
              <p class="text-[0.78rem]">Help</p>
            </div>
          </nav>

          <div
            class="absolute bottom-0 left-0 pb-14 pt-2 grid grid-cols-2 gap-6 w-full border-t border-borderColor"
          >
            <div class="flex flex-col items-center gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="#f7f7f7" stroke-width="2.1">
                    <circle cx="12" cy="12" r="3" />
                    <path
                      d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"
                    />
                  </g>
                </svg>
              </div>
              <p class="text-[0.77rem]">Settings</p>
            </div>
            <div class="flex flex-col items-center gap-1" @click="logout">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#f7f7f7"
                    d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h5.903q.214 0 .357.143t.143.357t-.143.357t-.357.143H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h5.904q.214 0 .357.143t.143.357t-.143.357t-.357.143zm12.444-7.5H9.692q-.213 0-.356-.143T9.192 12t.143-.357t.357-.143h8.368l-1.971-1.971q-.141-.14-.15-.338q-.01-.199.15-.364q.159-.165.353-.168q.195-.003.36.162l2.614 2.613q.242.243.242.566t-.243.566l-2.613 2.613q-.146.146-.347.153t-.366-.159q-.16-.165-.157-.357t.162-.35z"
                    stroke-width="0.5"
                    stroke="#f7f7f7"
                  />
                </svg>
              </div>
              <p class="text-[0.77rem]">Logout</p>
            </div>
          </div>
        </menu>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLeftSidebar: false,
      activeTab: "app",
    };
  },
  computed: {
    tradeStyle() {
      return this.activeTab === "app" ? "active" : null;
    },
    financeStyle() {
      return this.activeTab === "deposit" ? "active" : null;
    },
    profileStyle() {
      return this.activeTab === "profile" ? "active" : null;
    },
    educationStyle() {
      return this.activeTab === "education" ? "active" : null;
    },
    infoStyle() {
      return this.activeTab === "help" ? "active" : null;
    },
  },
  methods: {
    nextPage(name) {
      this.activeTab = name;
      setTimeout(() => {
        this.$router.push(`/${name}`);
      }, 500);
      this.showLeftSidebar = !this.showLeftSidebar;
    },
    async logout() {
      await this.$store.dispatch("logoutUser");
      this.$router.push("/");
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

.active {
  border-left: 2px solid;
  border-left-color: rgb(59 130 246);
  background: #151424;
}
</style>
