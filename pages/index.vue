<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-form v-if="!$store.state.authUser" v-model="valid" @submit.prevent="login">
        <v-container>
          <p>
            <i>To login, use <b>demo</b> as name and <b>demo</b> as
              password.</i>
          </p>
          <p v-if="formError" class="error">
            {{ formError }}
          </p>
          <v-row>
            <v-col
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="formName"
                :rules="nameRules"
                label="Username"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="formPassword"
                label="Password"
                required
              />
            </v-col>
            <button type="submit">
              Login
            </button>
          </v-row>
        </v-container>
      </v-form>
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
