<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-divider></v-divider>
      <v-list class='mt-12'>
        <v-list-item
          v-for="i in links"
          :key="i"
          link
          :to='i.direction'
        >
          <v-list-item-content >
            <v-list-item-title>{{ i.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content><router-view /></v-content>

  </v-app>
</template>

<script>



export default {
  name: 'App',
  data: () => ({
    links: [
      {name: 'All Notes', direction: '/notesList'},
      {name: 'Favourites', direction: '/favourites'},
      {name: 'Deleted', direction: '/deleted'},
    ],
  }),
};
</script>
