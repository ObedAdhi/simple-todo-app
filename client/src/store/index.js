import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTasks: [],
    selectedTask: {},
    loginPage: 'login',
    loginStatus: '',
    currentUser: {}
  },
  mutations: {
    changeLoginPage (state, payload) {
      state.loginPage = payload
    },
    changeLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    insertAllTasks (state, payload) {
      state.allTasks = payload
    },
    changeCurrentUser (state, payload) {
      state.currentUser = payload
    },
    saveOneTask (state, payload) {
      state.selectedTask = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: '/login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          user: {
            email, password
          }
        }
      })
        .then(data => {
          localStorage.setItem('access_token', 'access')
          // data.data.access_token
          Swal.fire({
            icon: 'success',
            title: 'Login Success'
          })
          this.commit('changeCurrentUser', data.data)
          this.commit('changeLoginStatus', 'true')
          this.dispatch('getAllTasks')
          router.push('/my-tasks')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'error'
          })
        })
    },
    register (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: '/users',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          user: {
            email, password
          }
        }
      })
        .then(data => {
          localStorage.setItem('access_token', 'access')
          // localStorage.setItem('access_token', data.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Register Success'
          })
          this.commit('changeCurrentUser', data.data)
          this.commit('changeLoginStatus', 'true')
          this.dispatch('getAllTasks')
          router.push('/my-tasks')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error'
          })
        })
    },
    getAllTasks (context) {
      axios
        .get('/tasks')
        .then(({ data }) => {
          context.commit('insertAllTasks', data)
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error'
          })
        })
    },
    createTask (context, payload) {
      const user_id = this.state.currentUser.id
      const { title, description, due_date, priority, status } = payload // eslint-disable-line no-console
      axios({
        method: 'POST',
        url: '/tasks',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          title, description, due_date, priority, status, user_id
        }
      })
        .then(data => {
          Swal.fire({
            icon: 'success',
            title: 'Task Created'
          })
          router.push('/my-tasks')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editTask (context, payload) {
      const user_id = this.state.currentUser.id
      const { id, title, description, due_date, priority, status } = payload
      axios({
        method: 'PUT',
        url: `/tasks/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          title, description, due_date, priority, status, user_id
        }
      })
        .then(data => {
          console.log(data.data)
          Swal.fire({
            icon: 'success',
            title: 'Task updated'
          })
          router.push('/my-tasks')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTask (context, id) {
      axios({
        method: 'DELETE',
        url: `/tasks/${id}`
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Task Deleted'
          })
          this.dispatch('getAllTasks')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error'
          })
        })
    },
    changeStatus (context, payload) {
      const { status, id } = payload
      axios({
        method: 'PATCH',
        url: `/tasks/${id}`,
        data: {
          status
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Status updated'
          })
          this.dispatch('getAllTasks')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error'
          })
        })
    },

    getAllTasksByDueDate (context) {
      axios
        .get('/tasks-by-duedate')
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Sorted by Due dates'
          })
          context.commit('insertAllTasks', data)
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error'
          })
        })
    },
    getAllTasksByPriority (context) {
      axios
        .get('/tasks-by-priority')
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Sorted by Priority'
          })
          context.commit('insertAllTasks', data)
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error'
          })
        })
    },
    getAllTasksByDescription (context) {
      axios
        .get('/tasks-by-description')
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Sorted by Desription'
          })
          context.commit('insertAllTasks', data)
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error'
          })
        })
    },

    filterByPriority (context, payload) {
      console.log(payload)
      axios({
        method: 'GET',
        url: `/filter-by-priority/${payload}`,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(data => {
          console.log(data.data)
          Swal.fire({
            icon: 'success',
            title: 'Filtered'
          })
          context.commit('insertAllTasks', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
