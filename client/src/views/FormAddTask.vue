<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-center">
      <form @submit.prevent="addProduct" class="form-control p-4" style="width: 350px; height: 560px;">

        <h2 class="mb-3" style="text-align: center;">Add New Task</h2>
        <div class="form-floating mb-3">
          <input v-model="title" type="text" class="form-control" id="floatingInput">
          <label for="floatingInput">Title</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="description" type="text" class="form-control" id="floatingInput2">
          <label for="floatingInput2">Description</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="due_date" type="date" class="form-control" id="floatingInput4">
          <label for="floatingInput4">Due Date</label>
        </div>
        <div class="form-floating mb-3">
          <!-- <input v-model="priority" type="number" class="form-control" id="floatingInput3"> -->
          <select v-model="priority" class="form-select" aria-label="Default select example" id="floatingInput3">
            <option value="1">Low</option>
            <option value="2">Normal</option>
            <option value="3">High</option>
          </select>
          <label for="floatingInput3">Priority</label>

        </div>
        <div class="form-floating mb-3">
          <!-- <input v-model="status" type="number" class="form-control" id="floatingInput4"> -->
          <select v-model="status" class="form-select" aria-label="Default select example" id="floatingInput4">
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>

          </select>
          <label for="floatingInput4">Status</label>
        </div>

        <button class="btn btn-primary col-12 mx-auto mb-2" style="text-align: center;">Add This Task</button>
        <button class="btn btn-danger col-12 mx-auto" style="text-align: center;">Cancel</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAddTask',
  data () {
    return {
      title: '',
      description: '',
      due_date: '',
      priority: '',
      status: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        title: this.title,
        description: this.description,
        due_date: this.due_date,
        priority: this.priority,
        status: this.status
      }
      this.$store.dispatch('createTask', payload)
    }
  }
}
</script>

<style>
</style>
