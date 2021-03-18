<template>
  <div class="home container">
    <div class="row justify-content-between">
      <div class="col-2">
        <button class="btn-primary">Add New Task</button>
      </div>
      <div class="col-2">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Sort-by
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" href="#">Due date</a></li>
            <li><a class="dropdown-item" href="#">Priority</a></li>
            <li><a class="dropdown-item" href="#">Description</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <table class="table mt-5">
      <thead>
        <tr>
          <th style="width: 200px" scope="col">Title</th>
          <th scope="col">Description</th>
          <th style="width: 110px" scope="col">Due Date</th>
          <th style="width: 110px" scope="col">Priority</th>
          <th style="width: 110px" scope="col">Status</th>
          <th style="width: 300px" colspan="3" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <TaskItem/>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskItem from '@/components/TaskItem.vue'

export default {
  name: 'Home',
  components: {
    TaskItem
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
