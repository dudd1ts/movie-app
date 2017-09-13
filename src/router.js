import Vue from 'vue';
import Router from 'vue-router';
import Intro from './Intro.vue';
import Movie from './Movie.vue';
import MovieTrailer from './MovieTrailer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Intro,
    },
    {
      path: '/:id',
      component: Movie,
    },
    {
      path: '/:id/trailer',
      component: MovieTrailer,
    }
  ],
});