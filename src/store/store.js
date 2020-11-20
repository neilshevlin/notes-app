import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'This is a title',
    text: 'This is some text',
    activeNote: 0,
    notesList: [],//note
  },
  mutations: {
    updateTitle: (state, payload) => {
      state.title = payload;
    },
    updateText: (state, payload) => {
      state.text = payload;
    },
    updateNote: (state, payload) => {
      state.notesList.push(payload)//takes an object and pushes object to array
      //Working properly, wanting an array of objects
    },
    setActiveNote: (state, payload) => {
      state.activeNote = payload;//takes index to set active note
      
    }

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
      return state.notesList; //returns an array of objects
    },
    getActiveNote: state => {
      return state.activeNote;
    },
  },
})
