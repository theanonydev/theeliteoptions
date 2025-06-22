<template>
  <section>
    <home-header></home-header>
    <dialog-model
      :message="alert.message"
      :showAlert="alert.message"
      :type="alert.type"
    ></dialog-model>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div class="w-full max-w-md">
        <!-- Credit Card Display -->
        <div
          class="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl text-white p-6 shadow-lg mb-6 relative"
        >
          <div class="text-lg font-semibold mb-4">Credit Card</div>
          <div class="text-sm tracking-widest mb-2">CARD NUMBER</div>
          <div class="text-xl font-mono mb-4">
            {{ formattedCardNumber || "#### #### #### ####" }}
          </div>
          <div class="flex justify-between text-sm">
            <div>
              <div class="mb-1">CARD HOLDER</div>
              <div class="font-semibold">
                {{ form.fullName || "FULL NAME" }}
              </div>
            </div>
            <div>
              <div class="mb-1">EXPIRES</div>
              <div class="font-semibold">{{ form.expiry || "MM/YY" }}</div>
            </div>
          </div>
          <div class="absolute top-4 right-6 text-2xl">💳</div>
        </div>

        <!-- Payment Form -->
        <form
          @submit.prevent="submitPayment"
          class="bg-white p-6 rounded shadow-md space-y-3"
        >
          <input
            v-model="form.fullName"
            placeholder="Full Name"
            class="input"
            required
          />
          <input
            v-model="form.cardNumber"
            placeholder="Card Number"
            maxlength="19"
            class="input"
            required
          />
          <input
            v-model="form.expiry"
            placeholder="MM/YY"
            maxlength="5"
            class="input"
            required
          />
          <input
            v-model="form.cvv"
            placeholder="CVV"
            maxlength="4"
            class="input"
            required
          />
          <input
            v-model="form.address"
            placeholder="Billing Address"
            class="input"
            required
          />
          <div class="flex space-x-2">
            <input
              v-model="form.city"
              placeholder="City"
              class="input w-1/2"
              required
            />
            <input
              v-model="form.state"
              placeholder="State"
              class="input w-1/2"
              required
            />
          </div>
          <input
            v-model="form.zip"
            placeholder="Zip Code"
            class="input"
            required
          />
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full font-medium"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, push } from "firebase/database";
import { db } from "@/firebase";
import { auth } from "@/firebase";
import HomeHeader from "./HomeHeader.vue";

export default {
  components: { HomeHeader },
  data() {
    return {
      form: {
        fullName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      },
      alert: {
        type: "",
        message: "",
      },
    };
  },
  computed: {
    formattedCardNumber() {
      return this.form.cardNumber
        .replace(/\s?/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
    },
  },
  methods: {
    showAlert(type, message) {
      this.isLoading = false;
      this.alert.type = type;
      this.alert.message = message;
      setTimeout(() => {
        this.alert.message = "";
      }, 1000);
    },
    async submitPayment() {
      const user = auth.currentUser;
      if (!user) {
        alert("Please log in.");
        return;
      }

      try {
        const paymentRef = ref(db, `users/${user.uid}/payments`);
        await push(paymentRef, {
          ...this.form,
          submittedAt: new Date().toISOString(),
        });
        this.showAlert("success", "Payment submitted successfully");
        this.resetForm();
        this.$router.replace("/app");
      } catch (error) {
        console.error("Error submitting payment:", error);
        alert("Submission failed");
      }
    },
    resetForm() {
      this.form = {
        fullName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      };
    },
  },
};
</script>

<style scoped>
.input {
  @apply w-full border border-gray-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring focus:ring-blue-300;
}
</style>
