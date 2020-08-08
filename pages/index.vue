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

              <p v-if="formError" class="error">
                {{ formError }}
              </p>
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
      try {
        this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },

    async login () {
      try {
        await this.$store.dispatch('login', {
          name: this.formName,
          password: this.formPassword
        })
        this.formName = ''
        this.formPassword = ''
        this.formError = null
        this.$router.push('/putnik')
      } catch (e) {
        this.formError = e.message
      }
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
