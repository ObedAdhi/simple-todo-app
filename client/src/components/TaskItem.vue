<template>
    <tr style="align" >
      <td>{{ task.title }}</td>
      <td>{{ task.description }}</td>
      <td>{{ task.due_date }}</td>
      <td>{{ priorityText(task.priority) }}</td>
      <td>{{ task.status }}</td>
      <td style="width: 140px" class="m-0 p-1"><button class="btn-primary">Change Status</button></td>
      <td style="width: 50px" class="m-0 p-1"><button class="btn-primary">Edit</button></td>
      <td style="width: 50px" class="m-0 p-1"><button class="btn-danger">Delete</button></td>
    </tr>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task'],
  methods: {
    priorityText (input) {
      switch (input) {
        case 1:
          return 'Low'
        case 2:
          return 'Normal'
        case 3:
          return 'High'
        default:
          return 'wrong value'
      }
    }
  }
}
</script>

<style>

</style>
