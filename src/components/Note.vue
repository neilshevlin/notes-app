<template lang="html">
  <v-app>
    <v-text-field
      class='headline mx-12 mt-12'
      placeholder='Title'
      v-model='input.title'
    ></v-text-field>

    <v-textarea
      class='body-1 mx-12'
      v-model='input.text'
      auto-grow
      placeholder='Your Notes'
      ></v-textarea>

    <v-btn text @click="updateNote(input)">Save Note</v-btn>

  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
export default {
  components: {

  },
  data: () => ({
    input: {
      title: '',
      text: '',
    },
    active: 0,

  }),
  computed: {
    ...mapGetters([
      'getTitle',
      'getText',
      'getActiveNote',
      'getNotesList',
    ])
  },
  mounted: function (){
    this.$nextTick(function () {
      var a = this.getActiveNote;
      this.input.title = this.getNotesList[a].title;
      this.input.text = this.getNotesList[a].text;
    })
  },
  methods: {
    ...mapMutations([
      'updateTitle',
      'updateText',
      'updateNote',
    ])
  }
}
</script>

<style lang="css" scoped>
.myInput{
  color: white;
}
</style>
