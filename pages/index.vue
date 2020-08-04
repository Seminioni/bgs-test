<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <form v-if="!$store.state.authUser" @submit.prevent="login">
        <p v-if="formError" class="error">
          {{ formError }}
        </p>
        <p>
          <i>To login, use <b>demo</b> as name and <b>demo</b> as
            password.</i>
        </p>
        <p>
          Name: <input v-model="formName" type="text" name="name">
        </p>
        <p>
          Password:
          <input v-model="formPassword" type="password" name="password">
        </p>
        <button type="submit">
          Login
        </button>
      </form>
      <div v-else>
        Hello {{ $store.state.authUser.name }}!
        <img :src="$store.state.authUser.image">
        <pre>
I am the secret content, I am shown only when the user is connected.</pre>
        <p><i>You can also refresh this page, you'll still be connected!</i></p>
        <button @click="logout">
          Logout
        </button>
      </div>
      <p>
        <NuxtLink to="/secret">
          Super secret page
        </NuxtLink>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formName: '',
      formPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          name: this.formName,
          password: this.formPassword
        })
        this.formName = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
