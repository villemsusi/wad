<script setup>
</script>
  
  <template>
    <div id="login-box" class="flex-element">
        <b>Welcome to PostIt</b><br><br>
        <a href="#">Create an account</a><br>
        <p>or<br>Please log in</p><br>
        <form method="POST" action="index.html">
            <input type="email" placeholder="Email" required><br>
            <input type="password" placeholder="Password" required><br>
            <input type="submit" value="Log in" class="button"><br>
            <a href="#">Forget password</a><br>
        </form>
    </div>
  </template>
  
  <script>

  </script>
  
  <style>
    @import '../style/login.css';
  </style>
  