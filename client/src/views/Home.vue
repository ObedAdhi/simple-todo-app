<template>
  <div class="home container">
    <h1>Welcome to simple todo app</h1>
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
  methods: {
  },
  created () {
    this.$store.dispatch('getAllTasks')
  }
}
</script>
