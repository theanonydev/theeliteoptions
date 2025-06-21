<template>
  <div class="bg-secondary">
    <the-header></the-header>
    <section>
      <menu
        class="flex justify-center items-center flex-col py-[6rem] gap-3 bg-primary"
      >
        <div>
          <h1 class="text-[5rem] font-bold max-sm:text-[2.3rem]">About us</h1>
        </div>
        <div>
          <h3>
            <router-link to="/">Home</router-link> /
            <span class="font-bold">About us</span>
          </h3>
        </div>
      </menu>
      <main
        class="grid grid-cols-2 py-20 w-[80%] max-sm:grid-cols-1 mx-auto gap-5"
      >
        <div class="fugu-about-section">
          <div class="container">
            <div class="row">
              <div class="col-xl-7 col-lg-6">
                <div class="fugu-about-thumb">
                  <img
                    class="wow fadeInLeft"
                    data-wow-delay=".10s"
                    src="assets/images/all-img/about/about-thumb1.png"
                    alt=""
                    style="visibility: visible"
                  />
                  <div class="fugu-about-thumb2">
                    <img
                      class="wow fadeInUpX"
                      data-wow-delay=".30s"
                      src="assets/images/all-img/about/about-thumb2.png"
                      alt=""
                      style="visibility: visible"
                    />
                  </div>
                </div>
              </div>
              <div
                class="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center"
              >
                <div class="fugu-default-content flex flex-col gap-4 p-2">
                  <h2 class="font-bold text-[1.2rem] text-center">
                    The story behind our company's beginnings and our mission
                  </h2>
                  <p>
                    Founded in 2012 by a group of professionals who are artfully
                    combining the technical expertise required to Copy
                    Professional Traders (If you can’t trade on your own). Forex
                    Trading, Crypto Currency Trading and Stock Trading with a
                    dedicated corporate team, state of the art headquarters and
                    a passion for helping those with a strong desire to improve
                    their lives.
                  </p>
                  <p>
                    Our team is committed to achieve exceptional results, being
                    one step ahead. We created a trading platform for the
                    long-term, setting up the standard to change the fortune of
                    future generations to come! We are uniting all key aspects
                    of running an efficient cryptocurrency mining operation.
                    From building highly efficient data centers to providing a
                    streamlined mining system for our users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
    <crypto-news-list></crypto-news-list>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
