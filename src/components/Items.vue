<template>
    <div>
        <div class="card-columns">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded cursor-pointer"
                 style="height: 433px;"
                 v-for="article in articles">
                <img :src="article.image" class="card-img-top">
                <div class="card-body text-left">
                    <h6 class="card-title"> {{ article.title }} </h6>
                    <small class="card-subtitle mb-2 text-muted"> {{ article.updatedAt }} </small>
                    <p class="card-text">
                        {{article.description}}
                    </p>

                </div>
            </div>
        </div>
        <items-pagination></items-pagination>
    </div>
</template>

<script>
    import PaginationCustom from "./PaginationCustom";
    import {mapGetters} from "vuex" ;

    export default {
        computed: {
            ...mapGetters([
                'articles'
            ])
        },
        methods: {},
        components: {
            "items-pagination": PaginationCustom,
        }

    }
</script>

<style scoped>

    .cursor-pointer {
        cursor: pointer;
    }

    .card-columns {
        column-count: 2;
    }

</style>
