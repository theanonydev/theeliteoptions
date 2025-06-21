<template>
  <div>
    <the-header></the-header>
    <section>
      <menu
        class="flex justify-center items-center flex-col py-[6rem] gap-3 bg-primary"
      >
        <div>
          <h1 class="text-[5rem] text-center max-sm:text-[2.3rem] font-bold">
            Options Trading
          </h1>
        </div>
        <div>
          <h3>
            <router-link to="/">Home</router-link> /
            <span class="font-bold">Options Trading</span>
          </h3>
        </div>
      </menu>
      <article
        class="flex flex-col gap-6 px-[8rem] max-sm:px-[2rem] py-14 text-[0.9rem]"
      >
        <h1 class="text-2xl font-extrabold text-center">Options Trading</h1>
        <p>
          One of the newest and most popular derivatives currently offered in
          the world of currency trading is the binary option. Binary options are
          simple to trade and limit the risk of the trader’s investment to the
          amount of money paid to purchase the option. Today, more and more
          people are engaging in binary options trading because it deals
          directly with the financial markets and offers high returns. There are
          a number of advantages that binary options trading offers people who
          engage in it. The biggest draw is that it is very simple and offers
          large rewards.
        </p>
        <p>
          Trading in binary options is very simple and easy. The trading process
          itself is a piece of cake. All you have to do is make a prediction on
          whether the asset will go up or nosepe. The next step is to enter the
          amount you want to spend on that trade and hit Send. Now all you have
          to do is track the trade
        </p>
        <p>
          The best thing about binary options trading is that you do not
          necessarily have to bet high. You can start off with low investments
          till you get the hang of it. And even once you are good at it, you can
          continue to bet small. The returns may not be as high as if you bet
          big, but they are sufficient to get you to continue.
        </p>
        <p>
          Because you can engage in binary trading with the least amount of
          money, the risks are also limited. Effectively, the degree of risk is
          for you to decide: you could go in with minimal risk or jump in with a
          big element of risk. One thing that works for you is that you know how
          much you will win or lose based on the amount you are betting or
          investing. This allows you to pick the amount and limit the amount of
          risk you expose yourself to. You take a calculated risk, and that can
          translate to big reward if all goes well.
        </p>
        <p>
          One area where binary options trading differs from the standard
          financial trading is in the amount of time a trade is valid for; the
          expire timeframes are shorter in this form of trading. Adding to this
          short time frame is the stupendously high returns involved with some
          trades; the returns could be as high as 90% if all goes well and luck
          is on your side. So imagine a trade that takes all of 15 minutes and
          gets you a return of 80%-90% – that is financial profit heaven. You
          trade quick, trade safe, and get good returns.
        </p>

        <p>
          The best thing about binary options trading is that the fact of your
          winning is not dependent on prevalent marketing conditions. You can
          win regardless of whether the price of the asset you have put your
          money on is rising or falling. All you need to do is be aware of the
          different strategies that you can adopt. Adopting the right strategies
          can lead to you winning way more than what you ordinarily would have.
          Another way of maximizing wins is to track the financial markets; this
          allows you to be aware of when the prices are climbing skywards so you
          can sell and make your profits.
        </p>
      </article>
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
