import Vue from 'vue';
import Router from 'vue-router';
// import Intro from './components/Intro.vue';
const Intro = r => require.ensure([], () => r(require('./components/Intro.vue')));
const Movie = r => require.ensure([], () => r(require('./components/Movie.vue')));
const MovieTrailer = r => require.ensure([], () => r(require('./components/MovieTrailer.vue')));

// import Movie from './components/Movie.vue';
// import MovieTrailer from './components/MovieTrailer.vue';

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