<script>
import SearchBar from './components/SearchBar.vue'
import ItemCard from './components/ItemCard.vue';
import { store } from './store';

export default {
  components: {
    SearchBar,
    ItemCard
  },
  data() {
    return {
      store
    }
  },
  created() {
    console.log("Applicazione inizializzata", this.store);
  }
}
</script>

<template>
  <SearchBar />

  <!-- Provate a sostituire nella vostra l'html di sotto con dei componenti -->
  <!-- <ItemList title="Movies" :items="store.movies"></ItemList>
  <ItemList title="Series" :items="store.series"></ItemList> -->

  <section id="movieWrapper">
    <h2>Movies</h2>
    <div id="movies">
      <ItemCard v-for="movie in store.movies" :item="movie"></ItemCard>
    </div>
  </section>

  <section id="seriesWrapper">
    <h2>Series</h2>
    <div id="series">
      <ItemCard v-for="serie in store.series" :item="serie"></ItemCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use './styles/partials/_mixins.scss' as *;

#movies,
#series {
  @include flex(row, center, center, wrap);
}
</style>