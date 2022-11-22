<script setup>
</script>
  
  <template>
    <div id="login-box" class="flex-element">
        <b>Welcome to PostIt</b><br><br>
        <router-link to="/signup">Create Account</router-link>
        <p>or<br>Please log in</p><br>
        <form method="POST">
            <input type="email" class="login-input" placeholder="Email" required><br>
            <input type="password" class="login-input" placeholder="Password" required><br>
            <input type="submit" value="Log in" class="button login-input"><br>
            <a href="#">Forget password</a><br>
        </form>
    </div>
  </template>
  
  <script>

  </script>
  
  <style>
    @import '../style/login.css';
  </style>
  