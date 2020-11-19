import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'This is a title',
    text: 'This is some text',
    notesList: [],
  },
  mutations: {
    updateTitle: (state, payload) => {
      state.title = payload;
    },
    updateText: (state, payload) => {
      state.text = payload;
    },
    updateNote: (state, payload) => {
      state.title = payload.title;
      state.text = payload.text;
    },
    addNote: (state, payload) => {
      state.notesList.push(payload);

    },
  },
  actions: {

  },
  getters: {
    getTitle: state => {
      return state.title;
    },
    getText: state => {
      return state.text;
    },
    getNotesList: state => {
      return state.notesList;
    }
  },
})
