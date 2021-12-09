<template>
    <div class="disc p-3 text-center">
        <div class="p-3">
            <img class="img-fluid mb-3" :src="discs.poster" :alt="disc.name" />
            <p class="title text-uppercase fw-bold">{{ disc.title }}</p>
            <p class="author lead mb-0">{ disc.author }</p>
            <p class="year">{{ disc.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Disc",
    props: {
        disc: String,
    },
};
</script>

<style lang="scss" scoped>
.disc {
    flex-basis: calc(100% / 5);

    .author,
    .year {
        color: #7d7977;
    }
}

div {
    background-color: #2e3a46;
    height: 100%;
}
</style>