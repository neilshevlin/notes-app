<template lang="html">
  <v-app>
    <h1 class='mx-12 mt-12'>Your Notes</h1>
    <v-btn class='mx-12' @click='setActiveNote(notes.length+1); toNote()' text >New Note + </v-btn>
            <v-card
            v-for='(note, index) in notes'
            class='my-2 mx-12'
            @click='setActiveNote(index); toNote()'
            v-if='notes.length > 0'>
              <v-card-title>{{note.title}}</v-card-title>
              <v-card-subtitle>{{note.text}}</v-card-subtitle>
            </v-card>
            <p v-if='notes.length === 0' class='mx-12 mt-6 body-2'>This list is empty</p>

  </v-app>
</template>

<script>

import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';
export default {
  components: {

  },
  data: () => ({
    notes: [],
    localTitle: 'Changed',
    localText: 'Local Text',
    sampleNum: 7,
  }),
  mounted: function (){
    this.$nextTick(function () {
      this.notes = this.getNotesList;
    })
  },
  computed: {
    ...mapGetters([
      'getTitle',
      'getText',
      'getNotesList',
      'getActiveNote',
    ])
  },
  methods: {
    ...mapMutations([
      'updateTitle',
      'updateText',
      'setActiveNote',
    ]),
    toNote() {
      this.$router.push('note');
    }

  },



}
</script>

<style lang="css" scoped>
</style>
