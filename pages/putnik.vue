<template>
  <v-layout column>
    <v-flex class="text-left">
      <div>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
              <h2>Короче, {{ $store.state.authUser.name }}!</h2>

              <img width="100px" :src="$store.state.authUser.image">

              <p>
                Короче, {{ $store.state.authUser.name }}, я это закодил как ты и просил, используя Nuxt.js, Vue.js, Vuetify.
              </p>
              <p>В благородство с тобой играть я не буду: задашь мне на тех.собесе простые вопросы – и мы в расчете.</p>
              <p>Заодно посмотрим, сработаемся мы с тобой или нет.</p>
              <p>
                А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот Абрамов сдался,
                но я в чужие дела не лезу, хочешь убить, значит есть за что…
              </p>

              <p>
                Если что мой <a href="https://github.com/seminioni">гитхаб</a> ты знаешь.
              </p>

              <v-btn
                class="mt-5"
                @click="logout"
              >
                Логаут
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { logout } from '@/modules/logout.js'

export default {
  middleware: ['auth'],

  methods: {
    async logout () {
      await logout.bind(this)()
      this.$router.push('/')
    }
  }
}
</script>

<style>
  img {
    margin: 10px 0;
  }
</style>
