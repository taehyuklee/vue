<template>
  <div class="profile">
    <h1>Profile</h1>
    <div>{{ email }}</div>
    <button @click="logout">log out</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: localStorage.getItem('email')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      this.$router.push('/')
    }
  }
}
</script>