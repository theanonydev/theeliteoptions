<template>
  <div class="bg-secondary">
    <the-header></the-header>
    <dialog-model
      :message="alert.message"
      :showAlert="alert.message"
      :type="alert.type"
    ></dialog-model>
    <section>
      <menu
        class="flex justify-center items-center flex-col py-[6rem] gap-3 bg-primary"
      >
        <div>
          <h1 class="text-[5rem] font-bold">Sign up</h1>
        </div>
        <div>
          <h3>Home / <span class="font-bold">Sign up</span></h3>
        </div>
      </menu>
      <form
        @submit.prevent="register"
        class="flex justify-center border border-[#e1e1e1] bg-[#FAFAFA] w-[50%] max-sm:w-full mx-auto my-[6rem] p-6 rounded-lg"
      >
        <div class="bg-white w-full rounded-lg p-10">
          <h1 class="text-center mb-5 text-xl font-bold">Sign up</h1>
          <div class="flex gap-7 flex-col">
            <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-3">
              <div class="flex gap-3 flex-col">
                <label for="username" class="font-bold">Username</label>
                <input
                  type="text"
                  name="username"
                  v-model="username"
                  id="username"
                  class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
                  placeholder="Enter your username"
                />
              </div>
              <div class="flex gap-3 flex-col">
                <label for="fullname" class="font-bold">Fullname</label>
                <input
                  type="text"
                  name="fullname"
                  v-model="fullname"
                  id="fullname"
                  class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
                  placeholder="Enter your fullname"
                />
              </div>
              <div class="flex gap-3 flex-col">
                <label for="email" class="font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="email"
                  class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="flex gap-3 flex-col">
                <label for="password" class="font-bold">Phone number</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  v-model="phoneNumber"
                  class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-3">
              <div class="flex gap-3 flex-col">
                <label for="password" class="font-bold">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                  class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <input type="checkbox" name="terms" id="terms" />
              <label for="terms">
                I accept the
                <span class="text-blue-600">Terms of service</span></label
              >
            </div>

            <p class="text-center text-[0.88rem]">
              Already have an account?
              <router-link to="/signin" class="text-blue-600">
                Sign in</router-link
              >
            </p>
            <button
              class="w-fit px-20 py-4 rounded-md font-bold bg-btnColor text-black hover:bg-black hover:text-white transition-colors duration-150 ease-in"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </section>
    <crypto-news-list></crypto-news-list>
    <the-footer></the-footer>
  </div>
</template>

<script>
import { auth, updateUserProfile } from "@/firebase";

import { db } from "@/firebase";
import { createUser } from "@/firebase";
import { ref, set } from "firebase/database";

export default {
  data() {
    return {
      username: null,
      email: null,
      fullname: null,
      phoneNumber: null,

      password: "",
      isLoading: false,
      alert: {
        type: "",
        message: "",
      },
    };
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
    async register() {
      try {
        this.isLoading = true;
        const userCredentials = await createUser(
          auth,
          this.email,
          this.password
        );
        const user = userCredentials.user;
        console.log(user);

        await updateUserProfile(auth.currentUser, {
          displayName: this.fullname,
        });
        this.showAlert("success", "Account created successfully!");
        await set(ref(db, "users/" + user.uid), {
          email: user.email,
          accountBalance: 0,
          deposit: 0,
          withdrawal: 0,
          Fullname: user.displayName,
          kyc: "pending",
          createdAt: new Date().toISOString(),
        });

        this.$router.replace("/kyc");
      } catch (error) {
        console.error("Error registering user:", error);
        if (this.password.length < 6) {
          this.showAlert("error", "Password should be at least 6 characters");
        } else if (error.code === "auth/email-already-in-use") {
          this.showAlert("error", "Email is already in use");
        } else if (error.code === "auth/invalid-email") {
          this.showAlert("error", "Invalid email address");
        } else if (error.code === "auth/weak-password") {
          this.showAlert("error", "Weak password");
        } else {
          this.showAlert("error", "Registration failed. Please try again.");
        }
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
