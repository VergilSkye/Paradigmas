<template>
  <v-toolbar fixed class="orange" dark>
    <v-toolbar-title name="titulo" class="mr-4">Zoomania</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'MainPage'})">Página principal</v-btn>
      <v-btn
        flat dark
        v-if="$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'AnimalsPage'})">
        Animais
      </v-btn>
      <v-btn
        flat dark
        v-if="$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'LocalsPage'})">
        Recintos
      </v-btn>
      <v-btn
        flat dark
        @click="navigateTo({name: 'UsersPage'})">
        Funcionários
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
          flat dark
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo({name: 'login'})">
          Entrar
        </v-btn>
        <v-btn
          flat dark
          v-if="$store.state.isUserLoggedIn"
          @click="logout">
          Sair
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'MainPage'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .v-toolbar-title {
  font-family: 'Amatic SC';
} */
</style>
