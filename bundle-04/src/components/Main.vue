<template>
    <main class="container mt-5">
        <div class="d-flex flex-wrap">
            <Disc
                v-for="(discItem, index) in filteredDiscs"
                :key="index"
                :disc="discItem"
            />
        </div>
    </main>
</template>

<script>
import axios from "axios";
import Disc from "./Disc";

export default {
    name: "Main",
    components: {
        Disc,
    },
    props: {
        selectedGenre: String,
        selectedAuthor: String,
    },
    computed: {
        filteredDiscs() {
            if (this.selectedGenre === "" && this.selectedAuthor === "") {
                return this.discs;
            }

            return this.discs.filter(
                (item) =>   ( (item.genre === this.selectedGenre) || (this.selectedGenre === "") ) && 
                            ( (item.author === this.selectedAuthor) || (this.selectedAuthor === "") )
            );
        },
    },
    data() {
        return {
            discs: [],
            genres: [],
            authors: [],
        };
    },
    created() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((res) => {
                let discs = {};
                this.discs = res.data.response;

                this.discs.forEach((disc) => {
                    if (!this.discs.includes(disc.genre)) {
                        this.genres.push(disc.genre);
                    }

                    if (!this.authors.includes(discs.author)) {
                        this.authors.push(disc.author);
                    }
                });

                this.$emit("genresAndAuthorsReady", {
                    genres: this.genres,
                    authors: this.authors                    
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>