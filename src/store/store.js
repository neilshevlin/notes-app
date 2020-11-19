import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'This is a title',
    text: 'This is some text',
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getTitle: state => {
      return state.title;
    },
    getText: state => {
      return state.text;
    }
  },
})
