import { reactive } from 'vue'

export const store = reactive({
    searchText: "",

    movies: [],
    series: [],
    apiURL: "https://api.themoviedb.org/3/search/",
    apiKey: 'e99307154c6dfb0b4750f6603256716d'
});