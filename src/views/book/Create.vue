<template>
      <div id="main">
    <h1>Create book</h1>
    <form id="registerForm" @submit="createBook">
      <div class="form-group">
        <input
          type="text"
          :value="bookCred.title"
          @input="updateTitle"
          class="form-control"
          placeholder="Enter title"
          autofocus
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          :value="bookCred.genre"
          @input="updateGenre"
          class="form-control"
          placeholder="Enter genre"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          :value="bookCred.story"
          @input="updateStory"
          class="form-control"
          placeholder="Enter story"
        />
      </div>
      <button
        type="button"
        class="btn btn-primary btn-block"
        v-on:click="bookAuth"
      >
        Create
      </button>
      <center><p id="error"></p></center>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["bookCred"])
  },
  methods: {
    ...mapActions(["createBook"]),
    updateTitle(e) {
      this.$store.commit("UPDATE_TITLE", e.target.value);
    },
    updateGenre(e) {
      this.$store.commit("UPDATE_GENRE", e.target.value);
    },
    updateStory(e) {
      this.$store.commit("UPDATE_STORY", e.target.value);
    },
    bookAuth() {
      this.$store
        .dispatch("createBook")
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(() => {
          document.getElementById("error").innerHTML = "Title already in use";
        });
    }
  },
  mounted () {
      this.$store.dispatch("emptyBookCred");
  }
};
</script>