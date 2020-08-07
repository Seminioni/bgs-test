<template>
  <v-container>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>

    <NuxtLink v-if="!$store.state.authUser" to="/">
      На главную
    </NuxtLink>

    <NuxtLink
      v-else
      to="/putnik"
    >
      На страницу путника
    </NuxtLink>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'Иди своей дорогой сталкер, ты так и не понял как войти в Зону...'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
  color: white;
}
</style>
