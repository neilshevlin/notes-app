<template lang="html">
  <v-app>
    <h1 class='mx-12 mt-12'>Your Notes</h1>
    <v-btn class='mx-12' to='/note' text @click="addNote(20)">New Note + </v-btn>
            <v-card
            v-for='note in notes'
            class='my-2 mx-12'
            :to='note.direction'
            v-if='notes.length > 0'>
              <v-card-title>{{}}</v-card-title>
              <v-card-subtitle>{{}}</v-card-subtitle>
            </v-card>
            <p v-if='notes.length === 0' class='mx-12 mt-6 body-2'>This list is empty</p>

            <p>{{getTitle}}</p>



  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
export default {
  components: {

  },
  data: () => ({
    notes: [
      // {noteId: 1, title: "title", preview: 'preview', direction: '/note'}
    ],
    boats: [
      {noteId: 1, title: "title", preview: 'preview', direction: '/note'}
    ],
    localTitle: 'Changed',
    localText: 'Local Text',
    sampleNum: 7,

  }),
  computed: {
    ...mapGetters([
      'getTitle',
      'getText',
      'getNotesList',
    ])
  },
  methods: {
    ...mapMutations([
      'updateTitle',
      'updateText',
      'addNote',
    ])
  }


}
</script>

<style lang="css" scoped>
</style>
