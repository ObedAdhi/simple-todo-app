<template>
  <nav class="navbar navbar-expand-lg navbar-dark ps-5" style="background-color: black;">
    <div class="container-fluid">
      <a class="navbar-brand" >Simple Todo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" >Home</router-link>
          </li>
        </ul>

        <router-link v-if="loginStatus == 'true'"
          to="/my-tasks" class="btn btn-light btn-sm mt-1 me-3" style="font-weight: bold;">My Tasks</router-link>
        <button
          v-if="loginStatus == 'true'"
          @click.prevent="logout"
          class="btn btn-dark btn-sm mt-1 me-3"
          style="background-color: red; font-weight: bold;">Logout</button>
        <button
          v-if="loginStatus == 'false' "
          @click.prevent="login"
          class="btn btn-dark btn-sm mt-1 me-3"
          style="background-color: grey; font-weight: bold;">Login</button>
      </div>
    </div>
  </nav>
</template>

<script>

import Swal from 'sweetalert2'

export default {
  name: 'Navbar',
  methods: {
    login () {
      this.$router.push('login')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('changeLoginStatus', 'false')
      Swal.fire({
        icon: 'success',
        title: 'Logout Success'
      })
      this.$router.push('/')
    },
    checkLogin () {
      if (!localStorage.getItem('access_token')) {
        this.$store.commit('changeLoginStatus', 'false')
      } else {
        this.$store.commit('changeLoginStatus', 'true')
      }
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>

</style>
