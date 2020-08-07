<template>
  <v-container>
    <v-form v-if="!$store.state.authUser" class="login-form" @submit.prevent="login">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            lg="12"
          >
            <v-col
              cols="12"
              lg="12"
            >
              <h2>
                <p><i>Stalker</i>, твой логин и пароль</p>
                <p>для входа в Зону — <strong>stalker</strong>!</p>
              </h2>
            </v-col>

            <v-col
              cols="12"
              lg="12"
            >
              <v-text-field
                v-model="formName"
                outlined
                single-line
                background-color="#fff"
                label="Username"
                required
              />
            </v-col>

            <v-col
              cols="12"
              lg="12"
            >
              <v-text-field
                v-model="formPassword"
                color="#fff"
                outlined
                single-line
                type="password"
                class="text-field"
                background-color="#fff"
                label="Password"
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="8"
            >
              <v-btn @click="login">
                Логин
              </v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-form
      v-else
      @submit.prevent="logout"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            lg="12"
          >
            <v-btn @click="logout">
              Логаут
            </v-btn>
            <v-btn>
              <NuxtLink v-if="$store.state.authUser" to="/putnik">
                В профиль
              </NuxtLink>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import { logout } from '@/modules/logout.js'
import { login } from '@/modules/login.js'

export default {
  data () {
    return {
      formError: null,
      formName: '',
      formPassword: ''
    }
  },
  methods: {
    logout () {
      logout.bind(this)()
    },

    async login () {
      await login.bind(this)()
      this.$router.push('/putnik')
    }
  }
}
</script>

<style>
  .v-application--wrap {
    background-color: black;
  }

  .login-form {
    z-index: 1;
    position: relative;
    max-width: 367px;
    border: 1px solid gray;
    border-radius: 13px;
    background-image: url('~assets/images/form-bg.jpg');
    background-size: cover;
  }

  .login-form {
    color: white;
  }

  .login-form h2 {
    line-height: 1.1;
    font-weight: normal;
  }

  .login-form h2 strong {
    color: yellow;
    /* text-decoration: underline; */
  }

  .login-form h2 p {
    background-color:black;
    margin-bottom: 0;
  }

  .login-form h2 p + p {
    margin-top: 2px;
  }

  .text-field {
    color: white;
  }

  .error {
    margin-top: 15px;
  }
</style>
