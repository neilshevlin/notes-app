<template lang="html">
  <v-app>
    <h1 class='mx-12 mt-12'>Deleted</h1>
            <v-card
            v-for='note in notes'
            class='my-2 mx-12'
            :to='note.direction'
            v-if='notes.length > 0'>
              <v-card-title>{{note.title}}</v-card-title>
              <v-card-subtitle>{{note.preview}}</v-card-subtitle>
            </v-card>
            <p v-if='notes.length === 0' class='mx-12 mt-6'>This is list is empty</p>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    notes: [

    ]
  })
}
</script>

<style lang="css" scoped>
</style>
