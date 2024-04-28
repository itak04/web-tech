<template>
  <div id="app">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>
        Username:
        <input v-model="username" type="text" required>
      </label>
      <label>
        Password:
        <input v-model="password" type="password" required>
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // 这里添加你的登录逻辑
      console.log(`Username: ${this.username}, Password: ${this.password}`);
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 1em;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin: 0.5em 0;
}
</style>
