<template>
  <div class="myTasks container mt-4">
    <div class="row justify-content-between">
      <div class="col-2">
        <button class="btn-primary"
                @click.prevent="toAddForm">Add New Task</button>
      </div>
      <div class="col-2">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Sort-by
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" @click.prevent="sortByDueDate">Due date</a></li>
            <li><a class="dropdown-item" @click.prevent="sortByPriority">Priority</a></li>
            <li><a class="dropdown-item" @click.prevent="sortByDescription">Description</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by priority
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item" @click.prevent="filterPriority(3)">High</a></li>
            <li><a class="dropdown-item" @click.prevent="filterPriority(2)">Normal</a></li>
            <li><a class="dropdown-item" @click.prevent="filterPriority(1)">Low</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <table class="table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th style="width: 110px" scope="col">Due Date</th>
          <th style="width: 110px" scope="col">Priority</th>
          <th style="width: 110px" scope="col">Status</th>
          <th style="width: 300px" colspan="3" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <TaskItem
          v-for="task in allTasks"
          :key="task.id"
          :task="task"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskItem from '@/components/TaskItem.vue'

export default {
  name: 'MyTasks',
  components: {
    TaskItem
  },
  computed: {
    allTasks () {
      return this.$store.state.allTasks
    }
  },
  methods: {
    toAddForm () {
      this.$router.push('add')
    },
    sortByDueDate () {
      this.$store.dispatch('getAllTasksByDueDate')
    },
    sortByPriority () {
      this.$store.dispatch('getAllTasksByPriority')
    },
    sortByDescription () {
      this.$store.dispatch('getAllTasksByDescription')
    },
    filterPriority (priority) {
      this.$store.dispatch('filterByPriority', priority)
    }

  },
  created () {
    this.$store.dispatch('getAllTasks')
  }
}
</script>
