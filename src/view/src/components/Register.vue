<template>
  <v-layout column>
    <v-flex xs12 offset-xs>
      <div class="white elevation-2">
        <v-toolbar flat dense class="orange darken-2" dark>
          <v-toolbar-title>Cadastrar novo usuário</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="tab-tracker-form"
            autocomplete="off">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <br>
          <div class="error" v-html="error" />
          <v-btn class="orange darken-2" dark @click="register" type="submit">Registrar</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthUser from '@/services/AuthUser'
export default {
  // name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthUser.registrar({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .primary--text {
  color: orange;
  caret-color: orange;
} */
.error {
  color: red;
}
</style>
