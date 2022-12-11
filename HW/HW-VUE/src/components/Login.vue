<script setup>
</script>
  
  <template>
    <div id="outer-area">
      <div id="login-box" class="flex-element">
        <b>Welcome to PostIt</b><br><br>
        <router-link to="/signup">Create Account</router-link>
        <p>or<br>Please log in</p><br>
        <form method="POST">
          <input type="email" id="formEmail" class="login-input" placeholder="Email" required><br>
          <input type="password" id="formPassword" class="login-input" placeholder="Password" required><br>
          <router-link to="/"><input type="submit" @click="login" value="Login" class="button login-input"></router-link><br>
          <a href="#">Forget password</a><br>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        const email = document.getElementById("formEmail").value.toString();
        const password = document.getElementById("formPassword").value.toString();
        console.log(email)
        console.log(password)
        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({
            "email": email,
            "password": password,
          })
        })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((e) => {
              console.log(e);
            });
      },
    },
    data() {
      return {
        email: '',
        password: '',
      }
    },
  }
  </script>
  
  <style>
    @import '../style/login.css';
  </style>
  