<template>
  <div class="bg-secondary">
    <the-header></the-header>
    <section>
      <menu
        class="flex justify-center items-center flex-col py-[6rem] gap-3 bg-primary"
      >
        <div>
          <h1 class="text-[5rem] font-bold max-sm:text-[2.3rem]">
            Get in touch
          </h1>
        </div>
        <div>
          <h3>
            <router-link to="/">Home</router-link> /
            <span class="font-bold">Get in touch</span>
          </h3>
        </div>
      </menu>
      <main
        class="grid grid-cols-2 py-20 w-[80%] max-sm:grid-cols-1 mx-auto gap-5"
      >
        <div class="w-[90%] max-sm:w-full flex flex-col gap-6">
          <h1
            class="font-bold text-5xl max-sm:text-center max-sm:text-3xl leading-[3rem]"
          >
            Have any questions? We will talk to you sincerely anytime
          </h1>
          <p class="leading-[2rem] text-[0.9rem]">
            If you have any questions about subscription or usage, please fill
            out the form and our team will get back to you within 24 hours.
          </p>
        </div>
        <form class="bg-white rounded-md p-14 max-sm:p-5 flex flex-col gap-5">
          <div class="flex gap-3 flex-col">
            <label for="email" class="font-bold">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div class="flex gap-3 flex-col">
            <label for="email" class="font-bold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div class="flex gap-3 flex-col">
            <label for="subject" class="font-bold">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
              placeholder="Mail subject"
            />
          </div>
          <div class="flex gap-3 flex-col">
            <label for="subject" class="font-bold">Write your message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message here"
              class="border border-#e1e1e1 rounded-lg p-4 focus:border-btnColor active:border-btnColor outline-none"
            ></textarea>
          </div>
          <button
            class="bg-btnColor text-black py-3 px-6 rounded-md w-fit font-extrabold"
          >
            Send message
          </button>
        </form>
      </main>
    </section>
    <crypto-news-list></crypto-news-list>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = "3f99eb2968d380f6bcd02502632f90030e052ff6";
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments) };o._=[];
        s=d.getElementsByTagName('script')[0];
        c=d.createElement('script');c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c,s);
      })(document);
    `;
    document.body.appendChild(script);
  },
};
</script>

<style scoped></style>
