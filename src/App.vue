<template>
  <div id="app">
    <section class="container hero is-primary">
      <router-view></router-view>

      <div class="hero-foot">
        <div class="columns is-mobile">
          <div v-for="movieChoice in movieChoices" class="column">
            <router-link :to="`/${movieChoice.id}`"
                         tag="li"
                         class="movie-choice">
              <i :class="[{ 'fa fa-check-circle favorite-check':  movieChoice.favorite }]"></i>
              <img :src="movieChoice.smallImgSrc" class="desktop"/>
              <p class="mobile">{{ movieChoice.subtitle }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {movies} from './data';

  export default {
    name: 'app',
    data() {
      return {
        movieChoices: movies
      }
    },
  }
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
