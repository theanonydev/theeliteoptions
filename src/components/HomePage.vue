<template>
  <section>
    <the-header class="z-[9999]"></the-header>
    <div class="fugu-hero-section2">
      <div class="">
        <section class="grid grid-cols-2 px-8 max-sm:grid-cols-1 max-sm: gap-5">
          <div class="flex flex-col text-black text-center gap-6">
            <h1 class="text-2xl font-bold">Eliteoptions</h1>
            <h1 class="text-7xl max-sm:text-4xl font-bold">
              The Platform for Stock, Crypto, Forex and Indices Traders
            </h1>
            <h4 class="text-xl">
              We offer a wide-range of digital assets to trade form. We leverage
              on blockchain technology to ensure a secure and seamless trading
              experience.
            </h4>
          </div>
          <div class="fugu-trading-card w-[80%] max-sm:w-full justify-self-end">
            <div class="fugu-trading-card-thumb fugu-trading-card-thumb-1">
              <!-- TradingView Widget BEGIN -->
              <div
                class="cryptohopper-web-widget"
                data-id="8"
                data-theme="dark"
                data-box_design="3"
                data-coins="bitcoin"
                data-realtime="on"
              >
                <div class="cryptoboxes" id="mcw-8" data-realtime="on">
                  <a
                    href="https://www.cryptohopper.com/currencies/detail?currency=BTC"
                    target="_blank"
                    class="mcw-tr mcw-link mcw-box mcw-box-3 mcw-dark-theme mcw-rounded invert-act"
                    ><div class="mcw-box-row">
                      <div class="mcw-box-content mcw-center">
                        <div class="mcw-box-price-wrapper">
                          <span
                            class="mcw-price"
                            data-price="105458.0000000000"
                            data-live-price="bitcoin"
                            data-rate="1.000268"
                            >$ <span>105,486.26</span></span
                          >
                        </div>
                      </div>
                      <div class="mcw-box-content mcw-center">Bitcoin</div>
                    </div>
                    <br />
                    <div
                      class="chart-wrapper"
                      style="width: 100%; height: 100px"
                    >
                      <div
                        class="chartjs-size-monitor"
                        style="
                          position: absolute;
                          inset: 0px;
                          overflow: hidden;
                          pointer-events: none;
                          visibility: hidden;
                          z-index: -1;
                        "
                      >
                        <div
                          class="chartjs-size-monitor-expand"
                          style="
                            position: absolute;
                            left: 0;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            overflow: hidden;
                            pointer-events: none;
                            visibility: hidden;
                            z-index: -1;
                          "
                        >
                          <div
                            style="
                              position: absolute;
                              width: 1000000px;
                              height: 1000000px;
                              left: 0;
                              top: 0;
                            "
                          ></div>
                        </div>
                        <div
                          class="chartjs-size-monitor-shrink"
                          style="
                            position: absolute;
                            left: 0;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            overflow: hidden;
                            pointer-events: none;
                            visibility: hidden;
                            z-index: -1;
                          "
                        >
                          <div
                            style="
                              position: absolute;
                              width: 200%;
                              height: 200%;
                              left: 0;
                              top: 0;
                            "
                          ></div>
                        </div>
                      </div>
                      <canvas
                        width="1098"
                        height="300"
                        data-rate="1.000268"
                        data-fiat="$"
                        data-chart="sparkline"
                        data-color="0,178,200"
                        data-opacity="0.3"
                        data-gradient="0"
                        data-border="3"
                        data-points="105352,105359,104986,105269,105314,105274,105373,105396,105751,106785,106229,106105,105989,106285,105947,105606,105900,105659,105386,105640,105590,105737,105555,105458"
                        style="display: block; height: 100px; width: 366px"
                        class="chartjs-render-monitor"
                      ></canvas>
                    </div>
                    <div
                      class="mcw-box-row chart-offset"
                      style="
                        background: rgba(0, 178, 200, 0.3);
                        color: rgb(0, 178, 200);
                        display: block;
                      "
                    >
                      <div class="mcw-box-content">
                        <div>Marketcap</div>
                        <div>$ 2,096,379,593,981</div>
                      </div>
                      <div class="mcw-box-content">
                        <div>24H Volume</div>
                        <div>$ 24,660,853,259</div>
                      </div>
                      <div class="mcw-box-content">
                        <div>Supply</div>
                        <div>19,874,112 BTC</div>
                      </div>
                    </div></a
                  >
                  <div class="text-center">
                    <a
                      href="https://www.cryptohopper.com/"
                      title="Powered by Cryptohopper"
                      target="_blank"
                      rel="noreferrer noopener"
                      class=""
                      ><img
                        src="https://static.cryptohopper.com/images/logo/logo-dark.svg"
                        alt="Cryptohopper"
                        style="height: 33px; width: auto; margin: -5px 0"
                    /></a>
                  </div>
                </div>
              </div>
              <!-- TradingView Widget END -->
            </div>
          </div>
        </section>
        <section class="flex justify-center gap-5 mt-10">
          <button
            class="font-bold text-black bg-[#32E7B1] rounded-full px-12 py-5 hover:bg-primaryDark hover:text-white transition-colors"
          >
            Get started
          </button>
          <button
            class="font-bold text-black bg-transparent border border-primaryDark rounded-full px-12 py-5 hover:bg-primaryDark hover:text-white transition-colors"
          >
            Sign in
          </button>
        </section>
      </div>
      <section class="w-[85%] mx-auto mt-24">
        <div class="section bg-warning-200">
          <div class="container">
            <!--<div class="fugu-single-thumb wow fadeInUpX" data-wow-delay="0.20s">-->
            <!--    <img src="assets/images/all-img/v2/hero-thumb.png" alt="">-->
            <!--</div>-->
            <div
              class="fugu-single-thumb wow fadeInUpX"
              data-wow-delay="0.20s"
              style="
                visibility: visible;
                animation-delay: 0.2s;
                animation-name: fadeInUpX;
              "
            >
              <div class="col-lg-12">
                <div class="section-title text-center mb-4 pb-2">
                  <h4 class="font-bold text-3xl mb-3">Top Assets</h4>
                  <p class="mx-auto mb-3 text-lg">
                    With Eliteoptions, you can be sure your trading skills are
                    matched with excellent service.
                  </p>
                  <div style="height: 500px">
                    <!-- TradingView Widget BEGIN -->
                    <div
                      class="tradingview-widget-container"
                      style="width: 100%; height: 100%"
                    >
                      <iframe
                        allowtransparency="true"
                        frameborder="0"
                        src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22largeChartUrl%22%3A%22https%3A%2F%2Fcoinstrum.net%2Fwidget%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22eliteoptions.online%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%2C%22page-uri%22%3A%22eliteoptions.online%2F%22%7D"
                        title="crypto mkt-screener TradingView widget"
                        lang="en"
                        style="
                          user-select: none;
                          box-sizing: border-box;
                          display: block;
                          height: 100%;
                          width: 100%;
                        "
                      ></iframe>
                      <!--<div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span class="blue-text">Crypto markets</span></a> by TradingView</div>-->
                    </div>
                    <!-- TradingView Widget END -->
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </div>
      </section>
      <section class="w-[85%] mx-auto mt-24 text-center">
        <h1
          class="my-12 text-5xl font-bold w-[50%] max-sm:w-full max-sm:text-3xl mx-auto"
        >
          Secure trading solutions for your digital assets
        </h1>
        <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
          <div
            class="bg-[#FFFCF2] rounded-lg p-7 flex flex-col gap-4 items-start"
          >
            <div>
              <img
                src="https://eliteoptions.online/assets/images/all-img/v2/icon1.png"
                alt=""
              />
            </div>

            <h1 class="text-lg font-bold">User friendly dashboard</h1>
            <h2 class="text-left">
              Every user controls the data they wish to see as well as the
              dashboard's structure.
            </h2>
          </div>
          <div
            class="bg-[#FFFCF2] rounded-lg p-7 flex flex-col gap-4 items-start"
          >
            <div>
              <img
                src="https://eliteoptions.online/assets/images/all-img/v2/icon2.png"
                alt=""
              />
            </div>

            <h1 class="text-lg font-bold">Secure and fast deposit</h1>
            <h2 class="text-left">
              Choose from our variety of deposit options to fund your account.
            </h2>
          </div>
          <div
            class="bg-[#FFFCF2] rounded-lg p-7 flex flex-col gap-4 items-start"
          >
            <div>
              <img
                src="https://eliteoptions.online/assets/images/all-img/v2/icon3.png"
                alt=""
              />
            </div>

            <h1 class="text-lg font-bold">A wallet you can trust</h1>
            <h2 class="text-left">
              Trade popular digital currencies and keep track of them in one
              place.
            </h2>
          </div>
        </div>
      </section>

      <div class="fugu-text-slider-section">
        <div class="fugu-text-slider-area1">
          <div class="fugu-text-slider1 slick-initialized slick-slider">
            <div
              class="slick-list draggable"
              style="height: 123px; overflow: hidden"
            >
              <div
                class="slick-track"
                style="
                  opacity: 1;
                  width: 2737px;
                  transform: translate3d(-782px, 0px, 0px);
                  transition: transform 10000ms linear;
                "
              >
                <div
                  class="fugu-text-slider-data slick-slide slick-cloned"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="-1"
                  id=""
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide"
                  style="width: 371px"
                  tabindex="0"
                  data-slick-index="0"
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide slick-current slick-active"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="1"
                  aria-hidden="false"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="2"
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide slick-cloned"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="3"
                  id=""
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide slick-cloned"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="4"
                  id=""
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide slick-cloned"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="5"
                  id=""
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fugu-text-slider-area2">
          <div
            class="fugu-text-slider2 slick-initialized slick-slider"
            dir="rtl"
          >
            <div
              class="slick-list draggable"
              style="height: 123px; overflow: hidden"
            >
              <div
                class="slick-track"
                style="
                  opacity: 1;
                  width: 2737px;
                  transform: translate3d(782px, 0px, 0px);
                  transition: transform 10000ms linear;
                "
              >
                <div
                  class="fugu-text-slider-data slick-slide slick-cloned"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="-1"
                  id=""
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide"
                  style="width: 371px"
                  tabindex="0"
                  data-slick-index="0"
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide slick-current slick-active"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="1"
                  aria-hidden="false"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="2"
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide slick-cloned"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="3"
                  id=""
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide slick-cloned"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="4"
                  id=""
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
                <div
                  class="fugu-text-slider-data slick-slide slick-cloned"
                  style="width: 371px"
                  tabindex="-1"
                  data-slick-index="5"
                  id=""
                  aria-hidden="true"
                >
                  <div class="fugu-text-slider-icon">
                    <img src="assets/images/all-img/v2/star.png" alt="" />
                  </div>
                  <h3>TRADE &amp; EARN YOUR DIGITAL ASSETS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </section>
</template>

<script>
import TheFooter from "./TheFooter.vue";
import TheHeader from "./TheHeader.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.fugu-hero-section2 {
  z-index: 0;
  overflow: hidden;
  padding: 98px 0 130px;
  position: relative;
  background-color: #f6f2e8;
}
.fugu-hero-section2:before {
  content: "";
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  background: linear-gradient(
    180deg,
    #724fe5 6.25%,
    #32e7b1 31.77%,
    rgba(255, 255, 255, 0) 55.21%
  );

  width: 150vw;
  left: -25vw;
}
.tradingview-widget-copyright {
  font-size: 13px !important;
  line-height: 32px !important;
  text-align: center !important;
  vertical-align: middle !important;
  /* @mixin sf-pro-display-font; */
  font-family: -apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu,
    sans-serif !important;
  color: #b2b5be !important;
}

.tradingview-widget-copyright .blue-text {
  color: #2962ff !important;
}

.tradingview-widget-copyright a {
  text-decoration: none !important;
  color: #b2b5be !important;
}

.tradingview-widget-copyright a:visited {
  color: #b2b5be !important;
}

.tradingview-widget-copyright a:hover .blue-text {
  color: #1e53e5 !important;
}

.tradingview-widget-copyright a:active .blue-text {
  color: #1848cc !important;
}

.tradingview-widget-copyright a:visited .blue-text {
  color: #2962ff !important;
}
</style>
