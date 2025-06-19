<!-- Sidebar.vue -->
<template>
  <aside
    class="w-fit text-white fixed left-2 flex-col items-center space-y-6 z-50 md:flex"
  >
    <div class="cursor-pointer hidden" @click="toggleSideBar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-[30px] w-[30px]"
        viewBox="0 0 24 24"
      >
        <g fill="#ffff" stroke-width="0.5" stroke="#ffff">
          <path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6z" />
          <path
            fill-rule="evenodd"
            d="M11 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6zm-2.293 7.707a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L7.414 12z"
            clip-rule="evenodd"
          />
        </g>
      </svg>
    </div>
    <div
      class="grid grid-cols-1 justify-between border border-borderColor rounded-lg bg-primaryDark2"
      :class="{ hidden: showSideBar }"
    >
      <div
        class="flex flex-col gap-2 border-b border-borderColor py-2 items-center cursor-pointer"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M23 23v466h466v-18H41v-82.184l85.854-57.234l70.023 70.022l65.133-260.536L387.28 203.7l67.79-107.97l19.317 11.858l6.102-71.1l-60.644 37.616l19.884 12.207l-59.01 93.99l-130.732-65.366l-62.865 251.462l-57.98-57.978L41 367.184V23z"
                stroke-width="13"
                stroke="#767676"
              />
            </svg>
          </div>
        </div>
        <div class="text-[0.81rem] mt-1">Trade</div>
      </div>
      <div
        class="flex flex-col items-center gap-2 cursor-pointer border-b border-borderColor py-2 border-l-2 border-l-[#2977BE]"
        @click="$router.push('/app/deposit')"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 32 32"
            >
              <path
                d="M2 28h28v2H2zm25-17a1 1 0 0 0 1-1V7a1 1 0 0 0-.66-.94l-11-4a1 1 0 0 0-.68 0l-11 4A1 1 0 0 0 4 7v3a1 1 0 0 0 1 1h1v13H4v2h24v-2h-2V11zM6 7.7l10-3.64L26 7.7V9H6zM18 24h-4V11h4zM8 11h4v13H8zm16 13h-4V11h4z"
                stroke-width="0.1"
                stroke="#767676"
              />
            </svg>
          </div>
        </div>
        <div class="text-[0.81rem] mt-1">Deposit</div>
      </div>
      <div
        class="flex flex-col items-center gap-2 cursor-pointer border-b border-borderColor py-2"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 512 512"
            >
              <path
                d="m305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574l-22.055 14.87l-1.847 26.571l-25.81 6.425l-10.803 24.314l-26.46-2.795l-18.475 19.087L256 285.403l-23.902 11.677l-18.475-19.15l-26.46 2.795l-10.803-24.313l-25.81-6.363l-1.847-26.534l-22.118-14.92l7.348-25.573l-15.594-21.544l15.644-21.52l-7.398-25.523l22.068-14.87L150.5 73.03l25.86-6.362l10.803-24.313l26.46 2.794L232.098 26L256 37.677L279.902 26l18.475 19.149l26.46-2.794l10.803 24.313l25.81 6.425l1.847 26.534l22.055 14.87l-7.347 25.574l15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242a72.355 72.355 0 0 0 72.242-72.242m-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283a52.395 52.395 0 0 0-52.282-52.245z"
                stroke-width="13"
                stroke="#767676"
              />
            </svg>
          </div>
        </div>
        <div class="text-[0.81rem] mt-1 px-1">Achievements</div>
      </div>
      <div
        class="flex flex-col items-center gap-2 cursor-pointer border-b border-borderColor py-2"
        @click="$router.push('/app/profile')"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 24 24"
            >
              <g
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-width="0.5"
                stroke="#767676"
              >
                <path
                  d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
                <path
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"
                />
              </g>
            </svg>
          </div>
        </div>
        <div class="text-[0.81rem] mt-1 px-1">Profile</div>
      </div>
      <div
        class="flex flex-col items-center gap-2 cursor-pointer border-b border-borderColor py-2"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M10 2H3c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m0 11H3c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1M21 2h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1"
                stroke-width="0.5"
                stroke="#767676"
              />
            </svg>
          </div>
        </div>
        <div class="text-[0.81rem] mt-1">Apps</div>
      </div>
      <div
        class="flex flex-col items-center gap-2 cursor-pointer border-b border-borderColor py-2"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m15.116 11.371l2.518-1.446q.212-.121.212-.343t-.212-.353l-2.519-1.446q-.18-.106-.4-.106t-.407.106l-2.52 1.446q-.211.121-.211.343t.211.353l2.52 1.446q.18.106.4.106t.407-.106m0 2.871l1.789-1.019q.181-.1.293-.29q.11-.191.11-.412v-1.294l-2.191 1.28q-.182.126-.405.126q-.222 0-.403-.125l-2.193-1.281v1.294q0 .22.111.411t.293.291l1.789 1.02q.18.105.4.105t.408-.106M21 6.616v10.769q0 .666-.475 1.14t-1.14.475H14.95q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h4.435q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442T19.385 6H4.615q-.269 0-.442.173T4 6.616v.476q0 .213-.144.357t-.357.143t-.356-.143T3 7.092v-.476q0-.667.475-1.141T4.615 5h14.77q.666 0 1.14.475T21 6.615M7.804 19q-.204 0-.35-.141q-.146-.142-.183-.35q-.16-1.498-1.24-2.55q-1.079-1.051-2.597-1.23q-.203-.025-.319-.182T3 14.191q0-.212.16-.356q.16-.143.361-.112q1.908.185 3.244 1.523Q8.1 16.584 8.27 18.492q.031.208-.11.358q-.14.15-.357.15m3.773 0q-.233 0-.366-.179q-.134-.179-.165-.43q-.234-3.028-2.372-5.147t-5.183-2.31q-.208-.011-.35-.161q-.141-.15-.141-.35q0-.214.157-.36q.156-.146.377-.134q3.468.19 5.899 2.625t2.633 5.902q.011.232-.133.388t-.356.156m-7.79 0q-.331 0-.559-.229T3 18.211t.229-.56t.56-.228t.56.229t.228.56t-.229.56t-.56.228"
                stroke-width="0.5"
                stroke="#767676"
              />
            </svg>
          </div>
        </div>
        <div class="text-[0.81rem] mt-1">Education</div>
      </div>
      <div
        class="flex flex-col items-center gap-2 cursor-pointer border-b border-borderColor py-2"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m0 13a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"
                stroke-width="0.5"
                stroke="#767676"
              />
            </svg>
          </div>
        </div>
        <div class="text-[0.81rem] mt-1">Help</div>
      </div>
      <div
        class="flex flex-col items-center gap-2 cursor-pointer border-b border-borderColor py-2"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                stroke-width="0.5"
                stroke="#767676"
              />
            </svg>
          </div>
        </div>
        <div class="text-[0.81rem] mt-1">Invite and Earn</div>
      </div>
      <div
        class="flex flex-col items-center gap-2 cursor-pointer border-b border-borderColor py-5"
      >
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] stroke-iconColor"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-2 cursor-pointer py-5">
        <div class="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[22px] w-[22px] fill-iconColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2"
                opacity="0.6"
                stroke-width="0.5"
                stroke="#767676"
              />
              <path
                d="M8 8c0-1.538 0-2.657.141-3.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5h.141C8 18.657 8 17.538 8 16z"
                opacity="0.4"
                stroke-width="0.5"
                stroke="#767676"
              />
              <path
                fill-rule="evenodd"
                d="M4.47 11.47a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H14a.75.75 0 0 0 0-1.5H6.81l.72-.72a.75.75 0 1 0-1.06-1.06z"
                clip-rule="evenodd"
                stroke-width="0.5"
                stroke="#767676"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      showSideBar: false,
    };
  },
  methods: {
    openPanel(panel) {
      this.$emit("open-panel", panel);
    },

    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
  },
};
</script>
