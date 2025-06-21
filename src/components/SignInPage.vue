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
          <h1 class="text-[5rem] font-bold">Sign in</h1>
        </div>
        <div>
          <h3>Home / <span class="font-bold">Sign in</span></h3>
        </div>
      </menu>
      <form
        @submit.prevent="login"
        class="flex justify-center border border-[#e1e1e1] bg-[#FAFAFA] w-[50%] max-sm:w-full mx-auto my-[6rem] p-6 rounded-lg"
      >
        <div class="bg-white w-full rounded-lg p-10">
          <h1 class="text-center mb-5 text-xl font-bold">Sign in</h1>
          <div class="flex gap-7 flex-col">
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
            <div class="flex gap-3 flex-col mt-7">
              <label for="password" class="font-bold">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
                placeholder="Enter your account password"
              />
            </div>
            <p class="text-center text-[0.88rem] text-blue-600">
              Forget Password?
            </p>
            <p class="text-center text-[0.88rem]">
              Don't have an account?
              <router-link to="/signup" class="text-blue-600">
                Sign up</router-link
              >
            </p>
            <button
              class="w-fit px-20 py-4 rounded-md font-bold bg-btnColor text-black hover:bg-black hover:text-white transition-colors duration-150 ease-in"
            >
              Sign in
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
import { auth } from "@/firebase";
import { signInUser } from "@/firebase";

export default {
  data() {
    return {
      email: null,
      password: null,
      isLoading: false,
      alert: {
        type: "",
        message: "",
      },
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      signInUser(auth, this.email, this.password)
        .then((user) => {
          // Signed up
          console.log(user);
          this.$store.dispatch("login");

          this.showAlert("success", "success");

          setTimeout(() => {
            this.$router.replace("/app");
          }, 1000);

          // ...
        })
        .catch((error) => {
          console.log(error.message);
          this.showAlert("error", "Invalid email/password");
          // ..
        });
    },
    showAlert(type, message) {
      this.isLoading = false;
      this.alert.type = type;
      this.alert.message = message;
      setTimeout(() => {
        this.alert.message = "";
      }, 1000);
    },
  },
};
</script>
