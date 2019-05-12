<template>
    <div class="category list-group mt-3 text-left">
        <button class="list-group-item list-group-item-action cursor-pointer"
            v-for="category in categories">
            {{ category.catname }}
        </button>
        <!--<ul class="list-group list-group-flush border-bottom">-->
        <!--<li class="list-group-item cursor-pointer"-->
        <!--v-for="category in categories">-->

        <!--{{ category.catname }}-->
        <!--</li>-->
        <!--</ul>-->
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters([
                'categories'
            ])
        },

    }
</script>

<style scoped>

    .cursor-pointer {
        cursor: pointer;
    }

    .category:hover {
        background-color: #e6deff;
    }

</style>
