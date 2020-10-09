<template>
  <div id="app">
    <h1 class="app__title">Прогноз продвижения</h1>
    <p class="app__description">
      Мы пользуемся только официальными инструментами рекламы, рекомендуемыми
      самим YouTube, поэтому все приведенные нами просмотры, лайки и комментарии
      будут настоящими, а подписчики живыми и заинтересованными в тематике
      Вашего канала
    </p>
    <div class="app__fieldset">
      <label for="appLabel" class="app__label">
        Введите сумму, чтобы увидеть прогноз по подписчикам и просмотрам
      </label>
      <p class="app__field">
        <input
          id="appLabel"
          class="app__input"
          type="number"
          v-model="sum"
          autofocus
        />
        <span class="app__currency">руб.</span>
      </p>
    </div>
    <div class="app__output">
      <p class="app__result">
        <output class="app__count">+{{ countViews }}</output>
        <span class="app__caption"> просмотров</span>
      </p>
      <p class="app__result">
        <output class="app__count">+{{ countSubscribers }}</output>
        <span class="app__caption"> подписчиков</span>
      </p>
    </div>
    <figure class="app__chart">
      <figcaption>Подписчики</figcaption>
      <Chart v-bind:countSubscribers="countSubscribers" />
    </figure>
    <p class="app__advice">
      Прогноз подписчиков зависит от Вашего контента. Сделайте его интересным и
      старайтесь не снижайть планку
    </p>
  </div>
</template>

<script>
import Chart from "@/components/Chart";

export default {
  name: "App",
  data() {
    return {
      sum: 0,
    };
  },
  components: {
    Chart
  },
  computed: {
    countViews() {
      return parseInt(this.sum / 1.21, 10);
    },
    countSubscribers() {
      return parseInt(this.sum / 3.41, 10);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
@import "@/style.scss";
</style>
