<template>
  <div class="container mt-4">
    <button @click.prevent="toLogin" class="btn btn-dark">Login</button> |
    <button @click.prevent="toRegister" class="btn btn-dark">Register</button>
    <div class="d-flex justify-content-center mt-3">
      <LoginForm v-if="getLoginPageStatus === 'login'" />
      <RegisterForm v-if="getLoginPageStatus === 'register'" />
    </div>
  </div>
</template>

<script>

import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    LoginForm,
    RegisterForm
  },
  methods: {
    toLogin () {
      this.$store.commit('changeLoginPage', 'login')
    },
    toRegister () {
      this.$store.commit('changeLoginPage', 'register')
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  },
  computed: {
    getLoginPageStatus () {
      return this.$store.state.loginPage
    }
  }
}
</script>

<style>

</style>
