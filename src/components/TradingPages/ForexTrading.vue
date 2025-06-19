<template>
  <div>
    <the-header></the-header>
    <section>
      <menu
        class="flex justify-center items-center flex-col py-[6rem] gap-3 bg-primary"
      >
        <div>
          <h1 class="text-[5rem] text-center max-sm:text-[2.3rem] font-bold">
            Forex Trading
          </h1>
        </div>
        <div>
          <h3>
            <router-link to="/">Home</router-link> /
            <span class="font-bold">Forex Trading</span>
          </h3>
        </div>
      </menu>
      <article
        class="flex flex-col gap-6 px-[8rem] max-sm:px-[2rem] py-14 text-[0.9rem]"
      >
        <h1 class="text-2xl font-extrabold text-center">Forex Trading</h1>
        <p>
          Forex is short for foreign exchange. The forex market is a place where
          currencies are traded. It is the largest and most liquid financial
          market in the world with an average daily turnover of 6.6 trillion
          U.S. dollars as of 2019. The basis of the forex market is the
          fluctuations of exchange rates. Forex traders speculate on the price
          fluctuations of currency pairs, making money on the difference between
          buying and selling prices.
        </p>
        <p>What is Margin?</p>
        <p>
          Margin is the amount of a trader’s funds required to open a new
          position. Margin is estimated based on the size of your trade, which
          is measured in lots. A standard lot is 100,000 units. We also provide
          mini lots (10,000 units), micro lots (1,000 units) and nano lots (100
          units). The greater the lot, the bigger the margin amount. Margin
          allows you to trade with leverage, which, in turn, allows you to place
          trades larger than the amount of your trading capital. Leverage
          influences the margin amount too.
        </p>
        <p>What is leverage?</p>
        <p>
          Leverage is the ability to trade positions larger than the amount of
          capital you possess. This mechanism allows traders to use extra funds
          from a broker in order to increase the size of their trades. For
          example, 1:100 leverage means that a trader who has deposited $1,000
          into his or her account can trade with $100,000. Although leverage
          lets traders increase their trade size and, consequently, potential
          gains, it magnifies their potential losses putting their capital at
          risk.
        </p>
        <p>When is the forex market open?</p>
        <p>
          Due to different time zones, the international forex market is open 24
          hours a day — from 5 p.m. Eastern Standard Time (EST) on Sunday to 4
          p.m. EST on Friday, except holidays. Markets first open in
          Australasia, then in Europe and afterwards in North America. So, when
          the market closes in Australia, traders can have access to markets in
          other regions. The 24-hour availability of the forex market is what
          makes it so attractive to millions of traders.
        </p>
      </article>
    </section>
    <crypto-news-list></crypto-news-list>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
