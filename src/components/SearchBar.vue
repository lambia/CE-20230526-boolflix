<script>
import { store } from '../store'
import axios from 'axios';

export default {
    name: "SearchBar",
    data() {
        return {
            store
        }
    },
    computed: {
        searchTextSanificato() {
            return encodeURIComponent(this.store.searchText);
        }
    },
    methods: {
        avviaRicerca() {
            console.log("Avviata ricerca per: ", this.store.searchText);

            this.getMovies();
            this.getSeries();
        },
        getMovies() {
            const moviesSearchUrl = `${this.store.apiURL}movie?api_key=${this.store.apiKey}&query=${this.searchTextSanificato}`;

            axios.get(moviesSearchUrl).then(r => {
                const risposta = r.data;
                const movies = risposta.results;
                console.log("Risultati chiamata film", r);

                this.store.movies = movies;
            });
        },
        getSeries() {
            const seriesSearchUrl = `${this.store.apiURL}tv?api_key=${this.store.apiKey}&query=${this.searchTextSanificato}`;

            axios.get(seriesSearchUrl).then(r => {
                const risposta = r.data;
                const series = risposta.results;
                console.log("Risultati chiamata serie", r);

                this.store.series = series;
            });
        }
    }
}
</script>

<template>
    <input type="text" v-model="store.searchText" placeholder="Digita qualcosa per cercare" />
    <button @click="avviaRicerca">Cerca</button>
</template>

<style lang="scss" scoped></style>