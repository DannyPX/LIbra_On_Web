<template>
  <div id="main">
    <div class="row">
      <div v-for="book in books" :key="book.id" class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{ book.genre }} / {{ book.uploadDate }}</p>
            <a href="#" class="btn btn-primary">Read book</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["books"])
  },
  mounted() {
    this.$store.dispatch("getAllbooks");
  }
}
</script>