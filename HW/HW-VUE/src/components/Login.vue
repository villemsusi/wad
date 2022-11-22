<script setup>
</script>
  
  <template>
    <div id="outer-area">
      <div id="login-box" class="flex-element">
        <b>Welcome to PostIt</b><br><br>
        <router-link to="/signup">Create Account</router-link>
        <p>or<br>Please log in</p><br>
        <form method="POST">
          <input type="email" class="login-input" placeholder="Email" required><br>
          <input type="password" class="login-input" placeholder="Password" required><br>
          <router-link to="/"><input type="submit" value="Login" class="button login-input"></router-link><br>
          <a href="#">Forget password</a><br>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  </script>
  
  <style>
    @import '../style/login.css';
  </style>
  