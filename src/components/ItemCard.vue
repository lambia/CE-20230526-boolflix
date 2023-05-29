<script>
export default {
    name: "ItemCard",
    props: {
        item: Object
    },
    data() {
        return {
            availableFlag: ["it", "en"],
            stelle: []
        }
    },
    computed: {
        vote() {
            return Math.round(this.item.vote_average / 2);
        }
    },
    methods: {
        getFlagImage(percorsoBandiera) {
            return new URL(percorsoBandiera, import.meta.url).href;
        },
        getVisibilitaStella(numStella) {
            console.log("Visibilità stella " + numStella);
            console.log("Voto film: " + this.vote);

            if (numStella <= this.vote) {
                return true;
            } else {
                return false;
            }
        }
        // getTitle(item) {
        //     if (item.title) {
        //         return item.title;
        //     } else {
        //         return item.name;
        //     }
        // },
        // getOriginalTitle(item) {
        //     if (item.original_title) {
        //         return item.original_title;
        //     } else {
        //         return item.original_name;
        //     }
        // }
    },
    mounted() {
        //Solo d'esempio discorsivo ma DON'T TRY THIS AT HOME
        // for (let i = 0; i < this.vote; i++) {
        //     this.stelle.push("*");
        // }
    }
}
</script>

<template>
    <div class="card">
        <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`"
            :alt="`Copertina ${item.title ? item.title : item.name}`" />
        <img v-else src="https://www.altavod.com/assets/images/poster-placeholder.png"
            :alt="`Copertina ${item.title ? item.title : item.name}`" />
        <h3>{{ item.title ? item.title : item.name }}</h3>
        <h4>{{ item.original_title ? item.original_title : item.original_name }}</h4>
        <img v-if="availableFlag.includes(item.original_language)" class="flag"
            :src="getFlagImage(`../assets/flags/${item.original_language}.svg`)" />
        <p class="textFlag" v-else>{{ item.original_language }}</p>
        <p>{{ vote }}</p>

        <!-- <span v-if="getVisibilitaStella(1)">X</span>
        <span v-if="getVisibilitaStella(2)">X</span>
        <span v-if="getVisibilitaStella(3)">X</span>
        <span v-if="getVisibilitaStella(4)">X</span>
        <span v-if="getVisibilitaStella(5)">X</span> -->

        <!-- <span v-for="stella in stelle">X</span> -->

        <span v-for="elemento in vote">X</span>
    </div>
</template>

<style lang="scss" scoped>
.card {
    margin: 1rem;
    padding: 1rem;
    background: crimson;
    color: white;
}

.flag {
    width: 2rem;
    height: 2rem;
    display: block;
}

.textFlag {
    height: 2rem;
}
</style>