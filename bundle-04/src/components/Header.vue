<template>
    <header class="d-flex justify-content-between ps-3 pe-3">
        <div>
            <img src="../assets/img/spotify-logo.png" alt="Spotify" />
        </div>
        <div>
            <select
                v-model="genreFilter"
                @change="$emit('changedGenere', genreFilter)"
                class="form-select mt-3"
            >
                <option value="">Seleziona un genere</option>
                <option
                    v-for="(genre, index) in genres"
                    :key="index"
                    :value="genre"
                >
                    {{ genre }}
                </option>
            </select>
        </div>
        <div>
            <select
                v-model="authorFilter"
                @change="$emit('changedAuthor', authorFilter)"
                class="form-select mt-3"
            >
                <option value="">Seleziona un autore</option>
                <option
                    v-for="(author, index) in authors"
                    :key="index"
                    :value="author"
                >
                    {{ genre }}
                </option>
            </select>

        </div>
    </header>
</template>

<script>
export default {
    name: "Haeder",
    props: {
        genres: Array,
        authors: Array,
    },
    data() {
        return {
            genreFilter: "",
            authorFilter: "",
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
header {
    height: 70px;
    background-color: #2e3a46;
    line-height: 70px;
    img {
        width: 50px;
    }
}
</style>