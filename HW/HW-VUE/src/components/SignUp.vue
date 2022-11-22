<script setup>
</script>
  
  <template>
    <div id="signup-box" class="flex-element">
        <form method="POST" >
            <label for="formEmail">Email:</label>
            <input type="email" id="formEmail" class="login-input" placeholder="Email" v-model.trim="v$.email.$model"><br>
            <p v-for="error of v$.email.$errors" :key="error.$uid" class="error_message"> {{ error.$message }} </p>
            <label for="formPassword">Password:</label>
            <input type="password" id="formPassword" class="login-input" placeholder="Password" v-model.trim="v$.password.$model" @input="v$.$touch()"><br>
            <p v-for="error of v$.password.$errors" :key="error.$uid" class="error_message"> {{ error.$message }} </p>
            <router-link to="/"><input type="submit" :disabled="v$.password.$invalid || v$.email.$invalid" value="Signup" class="button login-input"></router-link>
        </form>
    </div>
  </template>

  
  
  <script>
      import { useVuelidate } from '@vuelidate/core'
      import { required, email, helpers, minLength, maxLength } from '@vuelidate/validators'

      export default {
        setup () {
          return { v$: useVuelidate() }
        },
        data() {
          return {
            email: '',
            password: '',
          }
        },
        validations: {
          email: {
            required,
            email

          },
          password: {
            required,
            minLength: helpers.withMessage(
              ({
                $params,
              }) => `Must be at least of length ${$params.min}.`, minLength(8)
            ),
            
            maxLength: helpers.withMessage(
              ({
                $params,
              }) => `Must have a maximum length of ${$params.max}.`, maxLength(14)
            ),
            containsUppercase: helpers.withMessage(
              ({
                $params,
              }) => `Must contain atleast one uppercase character.`, function(value) {
                return /[A-Z]/.test(value);
              },
            ),
            containsLowercase: helpers.withMessage(
              ({
                $params,
              }) => `Must contain atleast two lowercase character.`, function(value) {
                return /[a-z].*[a-z]/.test(value);
              },
            ),
            containsNumber: helpers.withMessage(
              ({
                $params,
              }) => `Must contain atleast one numeric character.`, function(value) {
                return /[0-9]/.test(value);
              },
            ),
            containsLine: helpers.withMessage(
              ({
                $params,
              }) => `Must contain atleast one "_" character.`, function(value) {
                return /[_]/.test(value);
              },
            ),
            startsUppercase: helpers.withMessage(
              ({
                $params,
              }) => `Must start with an uppercase character.`, function(value) {
                return /[A-Z]/.test(value.charAt(0));
              },
            ),
          },
        }
      }
  </script>
  
  <style>
    @import '../style/login.css';
  </style>