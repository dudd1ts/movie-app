import Vue from 'vue';
import Router from 'vue-router';
import Intro from './components/Intro.vue';
import Movie from './components/Movie.vue';
import MovieTrailer from './components/MovieTrailer.vue';

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