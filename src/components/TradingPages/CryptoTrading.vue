<template>
  <div>
    <the-header></the-header>
    <section>
      <menu
        class="flex justify-center items-center flex-col py-[6rem] gap-3 bg-primary"
      >
        <div>
          <h1 class="text-[5rem] text-center max-sm:text-[2.3rem] font-bold">
            Crypto Trading
          </h1>
        </div>
        <div>
          <h3>
            <router-link to="/">Home</router-link> /
            <span class="font-bold">Crypto Trading</span>
          </h3>
        </div>
      </menu>
      <article
        class="flex flex-col gap-6 px-[8rem] max-sm:px-[2rem] py-14 text-[0.9rem]"
      >
        <h1 class="text-2xl font-extrabold text-center">Crypto Trading</h1>
        <p>
          <span class="font-extrabold">Eliteoptions</span>
          is excited to announce the launch of our new cryptocurrency trading
          platform. Now you can start trading Bitcoin, Ethereum and many more
          cryptocurrencies quickly, easily and safely from wherever you are — in
          just seconds. You get great margin trading leverage and short sell
          options with fast deposits and withdrawals. Our support team is
          available 24/7/365 to help get you trading on our CySEC-regulated
          platform with a trading volume of US $11 billion monthly.
        </p>
        <div>
          <h3 class="font-extrabold">What is a crypto currency?</h3>
          <p>
            A cryptocurrency like bitcoin is a virtual currency traded
            peer-to-peer on a blockchain, independent of centralized authorities
            like banks and governments. Cryptocurrencies are entirely virtual,
            so they are not backed by physical commodities and have no intrinsic
            value.
          </p>
        </div>
        <div>
          <h3 class="font-extrabold">How Do Cryptocurrencies Work?</h3>
          <p>
            Primarily, cryptocurrencies rely on blockchain technology to
            complete a transaction via an intricate P2P network. Once a transfer
            request is entered into the network, it is validated by the network
            and added to a pool of other transactions to create a block of data
            for the ledger, which is then entered into the existing blockchain.
            Once the block is successfully added to the chain, the transaction
            is approved and completed.
          </p>
        </div>
        <div>
          <h3 class="font-extrabold">
            Are There Investment Opportunities with Cryptocurrencies?
          </h3>
          <p>
            Absolutely. Cryptocurrencies have become established investment
            commodities among major financial institutions and have even been
            adopted by countries such as Australia and Japan. As with any
            investment though, there are risks linked to market movements, high
            volatility and economics.
          </p>
        </div>
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
