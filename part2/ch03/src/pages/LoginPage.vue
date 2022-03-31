<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      console.log(this.email)
      console.log(this.password)
      if (this.email === 'thlee991@gmail.com' && this.password === '123456') {
        localStorage.setItem('token', '1234567890') //브라우저에 localStorage에 토큰하고 이메일을 넣게 해준다.
        localStorage.setItem('email', this.email)
        alert('login success')
        this.$router.push('/') //$router
      } else {
        alert('Wrong email or password')
      }
    }
  }
}
</script>