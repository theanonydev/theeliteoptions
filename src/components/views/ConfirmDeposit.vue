<template>
  <section class="p-4 text-white flex flex-col gap-2">
    <dialog-model
      :message="alert.message"
      :showAlert="alert.message"
      :type="alert.type"
    ></dialog-model>
    <div class="text-[0.86rem]">
      You are going to deposit $100 worth of ( {{ selectedOption.value }})
    </div>

    <div class="relative w-full rounded-md">
      <button
        @click="toggleDropdown"
        class="w-full bg-primaryDark2 text-white px-4 py-2 rounded-md flex justify-between items-center text-[0.86rem]"
      >
        <div class="flex items-center space-x-2">
          <img :src="selectedOption.img" alt="icon" class="w-5 h-5" />
          <span>{{ selectedOption.label }}</span>
        </div>
        <svg
          class="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        v-if="isOpen"
        class="absolute mt-2 w-full bg-primaryDark2 border border-borderColor rounded-md shadow-lg z-10"
      >
        <div
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-gray-100 flex gap-1 items-center cursor-pointer border-b border-borderColor text-[0.87rem]"
        >
          <img :src="option.img" alt="icon" class="w-5 h-5" />
          <span>{{ option.label }}</span>
        </div>
      </div>
    </div>
    <div class="text-[0.86rem]">
      Send exactly $100 worth of {{ selectedOption.value }} to
    </div>
    <div
      class="bg-primaryDark2 text-white px-4 py-2 flex items-center gap-2 rounded-md text-[0.8rem] my-2"
    >
      {{ selectedOption.address }}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-[18px] w-[18px]"
        @click="copyAddress"
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
    <div class="mx-auto">
      <img
        :src="selectedOption.qrCode"
        class="rounded-lg m-auto h-fit w-fit"
        alt="Example"
      />
    </div>

    <div class="text-[0.84rem] text-center flex flex-col gap-3">
      <p>
        Your payment will be completed once it is confirmed by the network.
        Confirmation time can vary and depends on the fee paid.
      </p>
      <p>
        All cryptocurrency transactions are performed on the side of third-party
        crypto providers.
      </p>
    </div>
  </section>
</template>

<script>
import { db } from "@/firebase";
import { ref, get } from "firebase/database";
export default {
  data() {
    return {
      alert: {
        type: "",
        message: "",
      },
      isOpen: false,

      selectedOption: {
        label: "Bitcoin(BTC)",
        value: "Bitcoin(BTC)",
        qrCode: require("@/assets/qrc/btc_qrc.jpg"),
        address: "bc1q87sqcmu5k77vmcmgw46gtv42egs58tv2qhqfmc",
        img: require("@/assets/btc.png"),
      },
      options: [
        {
          label: "Bitcoin(BTC)",
          value: "Bitcoin(BTC)",
          qrCode: require("@/assets/qrc/btc_qrc.jpg"),
          address: "bc1q87sqcmu5k77vmcmgw46gtv42egs58tv2qhqfmc",
          img: require("@/assets/btc.png"),
        },
        {
          label: "USDT(Ethereum) ERC20",
          value: "USDT ERC20",
          qrCode: require("@/assets/qrc/eth_qrc.jpg"),
          address: "0x203c156e56EB458224359F8C153fb1013C45564e",
          img: "https://imgs.search.brave.com/CbnuV0tip9Iy-AfaUnx18Aol-pxluPbRTLXrOjRqNJo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vekVZNzZj/Ylc4S2dCWmdBQTcw/NDBPdTFCLU96OTky/eGFFdnV6NWtUbVRo/TS9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OWpiMjUwL1pXNTBM/V0Z3YVM1amFHRnUv/WjJWdWIzY3VhVzh2/TDNWdy9iRzloWkhN/dmRYTmtkR1Z5L1l6/SXdYelZoWlRJeE5q/RTQvWVdFdWMzWm4.jpeg",
        },
      ],
    };
  },
  methods: {
    showAlert(type, message) {
      this.alert.type = type;
      this.alert.message = message;
      setTimeout(() => {
        this.alert.message = "";
      }, 1000);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    },

    copyAddress() {
      if (this.selectedOption.address) {
        navigator.clipboard
          .writeText(this.selectedOption.address)
          .then(() => {
            this.showAlert("success", "copied!");
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
          });
      }
    },
  },
  async created() {
    const user = this.$store.state.user;
    if (user) {
      const depositRef = ref(
        db,
        `users/${user.uid}/pendingDeposits/${this.depositId}`
      );
      const snapshot = await get(depositRef);
      console.log("User ID:", user.uid);
      console.log("Deposit ID from URL:", this.depositId);
      console.log(
        "Path in Firebase:",
        `users/${user.uid}/pendingDeposits/${this.depositId}`
      );
      if (snapshot.exists()) {
        this.deposit = snapshot.val();

        console.log("Deposit data:", this.deposit);
      } else {
        console.error("Deposit not found");
      }
    } else {
      console.error("User not authenticated");
    }
  },
};
</script>
