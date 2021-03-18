<template>
  <form @submit.prevent="register" class="form-control p-4" style="width: 350px; height: 450px;">
    <h1 class="mb-5" style="text-align: center;">Register</h1>
    <div class="form-floating mb-3">
      <input v-model="email" type="email" class="form-control" id="floatingInputE" placeholder="name@example.com">
      <label for="floatingInputE">Email</label>
    </div>
    <div class="form-floating mb-5">
      <input v-model="password" type="password" class="form-control " id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <button type="submit" class="btn btn-primary col-12 mx-auto" style="text-align: center;">Register</button>
  </form>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>

</style>
