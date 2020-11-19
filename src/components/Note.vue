<template lang="html">
  <v-app>
    <v-text-field
      class='headline mx-12 mt-12'
      placeholder='Title'
      v-model='title'
    ></v-text-field>
    <v-textarea
      class='body-1 mx-12'
      v-model='text'
      auto-grow
      placeholder='Your Notes'
      ></v-textarea>
    <v-btn text >Save Note</v-btn>

  </v-app>
</template>

<script>


export default {
  components: {

  },
  data: () => ({
    title: '',
    text: '',

  })
}
</script>

<style lang="css" scoped>
.myInput{
  color: white;
}
</style>
