<template>
  <div id="outer">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("logoutAccount");
    this.$store.dispatch("setNoAuth");
    this.$router.push({ name: "Home" });
  }
};
</script>

<style scoped>
.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#outer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  min-width: 85vw;
}
</style>
