<template>
  <div class="home container mt-5">
    <h1>Welcome to simple todo app</h1>
    <br>
    <p>You can list all your task in this simple web app</p>
    <p>Please Login or Register to start</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  computed: {
    allTasks () {
      return this.$store.state.allTasks
    }
  },
  created () {
    this.$store.dispatch('getAllTasks')
  }
}
</script>
