<template>
  <div id="main">
    <div class="card">
      <h5 class="card-header">My account</h5>
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">{{ account.name }}</p>
        <h5 class="card-title">Email</h5>
        <p class="card-text">{{ account.email }}</p>
        <h5 class="card-title">Bio</h5>
        <p class="card-text">{{ account.bio }}</p>
        <button type="button" class="btn btn-danger" v-on:click="deleteAuth">
          Delete account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["account", "token"])
  },
  methods: {
    deleteAuth() {
      this.$store.dispatch("deleteAccount").then(() => {
        this.$router.push({ name: "Login" });
        this.$store.dispatch("emptyCredentials");
        this.$store.dispatch("setNoAuth");
      });
    }
  },
  mounted() {
    this.$store.dispatch("getAccount");
  }
};
</script>

<style scoped></style>
