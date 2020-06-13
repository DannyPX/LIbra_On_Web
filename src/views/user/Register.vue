<template>
  <div id="main">
    <h1>Register</h1>
    <form id="registerForm" @submit="createAccount">
      <div class="form-group">
        <input
          type="text"
          :value="credentials.name"
          @input="updateName"
          class="form-control"
          placeholder="Enter name"
          autofocus
        />
      </div>
      <div class="form-group">
        <input
          type="bio"
          :value="credentials.bio"
          @input="updateBio"
          class="form-control"
          placeholder="Enter bio - Optional"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          :value="credentials.email"
          @input="updateEmail"
          class="form-control"
          placeholder="Enter email"
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
        v-on:click="registerAuth"
      >
        Register
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
    ...mapActions(["createAccount"]),
    updateEmail(e) {
      this.$store.commit("UPDATE_EMAIL", e.target.value);
    },
    updatePassword(e) {
      this.$store.commit("UPDATE_PASSWORD", e.target.value);
    },
    updateName(e) {
      this.$store.commit("UPDATE_NAME", e.target.value);
    },
    updateBio(e) {
      this.$store.commit("UPDATE_BIO", e.target.value);
    },
    registerAuth() {
      this.$store
        .dispatch("createAccount")
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch(() => {
          document.getElementById("error").innerHTML = "Email already used";
        });
    }
  }
};
</script>
