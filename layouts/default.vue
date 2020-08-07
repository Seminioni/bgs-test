<template>
  <v-app
    dark
    :class="{
      'user-is-authorized': $store.state.authUser
    }"
  >
    <v-main>
      <v-container class="container-main fill-height">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
  * {
     cursor: url('~assets/images/mouse.png'), auto;
  }

  .user-is-authorized .v-application--wrap {
    color: white;
    background-image: url('~assets/images/sidorovich-shablon.jpg');
    background-size: cover;
  }
</style>
