<template lang="html">
  <v-app>
    <h1 class='mx-12 mt-12'>Your Notes</h1>
    <v-btn class='mx-12' to='/note' text >New Note + </v-btn>
            <v-card
            v-for='note in notes'
            class='my-2 mx-12'
            :to='note.direction'
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
      'getNotesList',//get array of objects with each note
    ])
  },
  methods: {
    ...mapMutations([
      'updateTitle',
      'updateText',
    ]),

  },



}
</script>

<style lang="css" scoped>
</style>
