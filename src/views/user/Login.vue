<template>
  <div id="main">
    <h1>Login</h1>
    <form id="loginForm" @submit="loginAccount">
      <div class="form-group">
        <input
          type="email"
          :value="credentials.email"
          @input="updateEmail"
          class="form-control"
          placeholder="Enter email"
          autofocus
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          :value="credentials.password"
          @input="updatePassword"
          class="form-control"
          placeholder="Enter password"
        />
      </div>
      <button
        type="button"
        class="btn btn-primary btn-block"
        v-on:click="loginAuth"
      >
        Login
      </button>
      <center><p id="error"></p></center>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["credentials"])
  },
  methods: {
    ...mapActions(["loginAccount"]),
    updateEmail(e) {
      this.$store.commit("UPDATE_EMAIL", e.target.value);
    },
    updatePassword(e) {
      this.$store.commit("UPDATE_PASSWORD", e.target.value);
    },
    loginAuth() {
      this.$store
        .dispatch("loginAccount")
        .then(() => {
          this.$router.push({ name: "Home" });
          this.$store.dispatch("setWithAuth");
        })
        .catch(() => {
          document.getElementById("error").innerHTML = "Wrong credentials";
        });
    }
  }
};
</script>
