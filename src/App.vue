<template>
    <div id="app">
        <Header :genres="genresList" :authors="authorsList" @changedGenre="startGenreSearch" @chaangedAuthor="startAuthorSearch" />

        <Main :selectedGenre="genreToSearch" :selectedAuthor="authorToSearch" @genresAndAuthorsReady="getGenresAndAuthorsList" />
    </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
    data() {
        return {
            genresList: [],
            authorsList: [],
            genreToSearch: "",
            authorToSearch: "",
        };
    },
    methods: {
        getGenresAndAuthorsList(allGenresAndAuthors) {
            allGenresAndAuthors = {};
            this.genresList = allGenresAndAuthors.genres;
            this.authorsList = allGenresAndAuthors.authors;
        },
        startGenreSearch(genreToSearch) {
            console.log(genreToSearch);
            genreToSearch = "";
            this.genreToSearch = genreToSearch;
        },
        startAuthorSearch(authorToSearch) {
            console.log(authorToSearch);
            this.authorToSearch = authorToSearch;
        }
    },
};
</script>

<style lang="scss">
@import "./assets/styles/general";
</style>
