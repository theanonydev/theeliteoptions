<template>
  <article class="flex-1 py-6 px-4 text-white">
    <div class="grid grid-cols-2 gap-3">
      <div
        class="flex text-iconColor flex-col bg-primaryDark2 items-center py-2 rounded-md border-2 border-transparent"
        :class="selectedAStyle"
        @click="selectTab('A', '5,000', 30)"
      >
        <p class="font-medium text-[0.92rem] text-white">$5,000</p>
        <p class="text-[0.86rem] font-light text-current">+30% Bonus</p>
      </div>
      <div
        class="flex flex-col items-center bg-primaryDark2 py-2 rounded-md text-iconColor border-2 border-transparent"
        :class="selectedBStyle"
        @click="selectTab('B', '2,000', 35)"
      >
        <p class="font-medium text-[0.92rem] text-white">$2,000</p>
        <p class="text-[0.86rem] font-light text-current">+35% Bonus</p>
      </div>
      <div
        class="flex flex-col items-center bg-primaryDark2 py-2 rounded-md text-iconColor border-2 border-transparent"
        :class="selectedCStyle"
        @click="selectTab('C', '1,000', 30)"
      >
        <p class="font-medium text-[0.92rem] text-white">$1,000</p>
        <p class="text-[0.86rem] font-light text-current">+30% Bonus</p>
      </div>
      <div
        class="flex flex-col items-center bg-primaryDark2 py-2 rounded-md text-iconColor border-2 border-transparent"
        :class="selectedDStyle"
        @click="selectTab('D', '500', 40)"
      >
        <p class="font-medium text-[0.92rem] text-white">$500</p>
        <p class="text-[0.86rem] font-light text-current">+40% Bonus</p>
      </div>
      <div
        class="flex flex-col items-center bg-primaryDark2 py-2 rounded-md text-iconColor border-2 border-transparent"
        :class="selectedEStyle"
        @click="selectTab('E', '200', 50)"
      >
        <p class="font-medium text-[0.92rem] text-white">$200</p>
        <p class="text-[0.86rem] font-light text-current">+$50% Bonus</p>
      </div>
      <div
        class="flex flex-col items-center bg-primaryDark2 py-2 rounded-md text-iconColor border-2 border-transparent"
        :class="selectedFStyle"
        @click="selectTab('F', '100', 60)"
      >
        <p class="font-medium text-[0.92rem] text-white">$100</p>
        <p class="text-[0.86rem] font-light text-current">+$60% Bonus</p>
      </div>
    </div>

    <div class="flex gap-3 w-full mt-6">
      <div class="px-6 w-full bg-[#19182A] py-2 rounded-md">
        <p class="text-[0.8rem] text-gray-400">$ USD</p>
      </div>
      <div class="flex-1">
        <input
          type="number"
          name="amount"
          id="amount"
          v-model="convertNum"
          class="bg-[#28263F] rounded-md h-full focus:border px-4 focus:border-blue-400 focus:ring-red-500 focus:outline-none"
        />
      </div>
    </div>

    <div class="rounded-md pt-4 mt-8 bg-[#1E1C31] flex flex-col gap-2">
      <div class="flex items-center gap-2 px-4">
        <p class="text-[0.85rem]">Deposit Bonus</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[18px] h-[18px]"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M12 16.5q.214 0 .357-.144T12.5 16v-4.5q0-.213-.144-.356T11.999 11t-.356.144t-.143.356V16q0 .213.144.356t.357.144M12 9.577q.262 0 .439-.177t.176-.438t-.177-.439T12 8.346t-.438.177t-.177.439t.177.438t.438.177M12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              stroke-width="0.5"
              stroke="#fff"
            />
          </svg>
        </div>
      </div>
      <div class="rounded-md flex items-center bg-[#292740] w-fit mx-4">
        <div class="py-1 pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[15px] h-[15px]"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14 19.121l8.308 8.166L34 15.723"
              stroke-width="3"
            />
            <path
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M39.203 39.203c-8.396 8.396-22.01 8.396-30.406 0s-8.396-22.01 0-30.406m30.406 0c-8.397-8.396-22.01-8.396-30.406 0m30.406 30.406"
              stroke-width="3"
            />
          </svg>
        </div>
        <p class="text-[0.83rem] py-1 px-2 text-gray-300">
          +{{ amountBonus || "20" }}% Bonus
        </p>
        <p
          class="bg-blue-400 px-2 rounded-r-md text-[0.83rem]"
          v-if="selectedTab"
        >
          ${{ calculatedBonus }}
        </p>
      </div>
      <div class="w-full rounded-b-md px-2 py-3 bg-[#34324F]">
        <p class="text-[0.8rem] text-gray-300">
          Deposit a minimum of $100 to apply this bonus.
        </p>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-6">
      <input type="checkbox" name="terms" id="terms" />
      <p class="text-[0.8rem]">
        I agree to
        <span>Terms & COnditions, Refund policy, Payment info policy</span>
      </p>
    </div>
    <button
      class="w-full rounded-lg py-3 bg-[#5CBFA6] mt-8"
      v-if="selectedAmount"
      @click="goToNextTab"
    >
      <p>Pay ${{ selectedAmount }}</p>
    </button>
  </article>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      selectedTab: "",
      selectedAmount: "",
      amountBonus: "",
      calculatedBonus: "",
    };
  },

  computed: {
    selectedAStyle() {
      return this.selectedTab === "A" ? "selected" : null;
    },
    selectedBStyle() {
      return this.selectedTab === "B" ? "selected" : null;
    },
    selectedCStyle() {
      return this.selectedTab === "C" ? "selected" : null;
    },
    selectedDStyle() {
      return this.selectedTab === "D" ? "selected" : null;
    },
    selectedEStyle() {
      return this.selectedTab === "E" ? "selected" : null;
    },
    selectedFStyle() {
      return this.selectedTab === "F" ? "selected" : null;
    },

    convertNum() {
      return parseInt(this.selectedAmount.replace(/,/g, ""));
    },
  },
  methods: {
    ...mapActions(["addDeposit"]),
    selectTab(tab, amount, bonus) {
      this.selectedTab = tab;
      this.selectedAmount = amount;
      this.amountBonus = bonus;
      const num = parseInt(amount.replace(/,/g, ""));
      this.calculatedBonus = this.calculateBonus(num, bonus);
    },

    calculateBonus(amount, percentage) {
      const raw = (+amount * percentage) / 100;

      const rounded = Math.ceil(raw);
      return rounded.toLocaleString(); // Adds commas
    },

    async goToNextTab() {
      try {
        const depositId = await this.addDeposit({
          amount: Number(this.convertNum),
        });
        if (depositId) {
          this.$emit("goToTab", "confirm-deposit");
        } else {
          console.error("Failed to add deposit");
        }
      } catch (error) {
        console.error("Error submitting deposit:", error);
      }

      // or another tab/component name
    },
  },
};
</script>

<style scoped>
.selected {
  border: 2px solid #5cbfa6;
  color: #5cbfa6;
  background: linear-gradient(
    180deg,
    rgba(84, 197, 168, 0.21) 0%,
    rgba(92, 191, 166, 0.385) 100%
  );
}
</style>
