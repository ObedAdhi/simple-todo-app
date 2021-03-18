import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTasks: [],
    loginPage: 'login',
    loginStatus: ''
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
          // localStorage.setItem('access_token', data.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Login Success'
          })
          this.commit('changeLoginStatus', 'true')
          this.dispatch('getAllTasks')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error'
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
          // localStorage.setItem('access_token', data.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Register Success'
          })
          this.commit('changeLoginStatus', 'true')
          this.dispatch('getAllTasks')
          router.push('/')
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
    }
  }
})
