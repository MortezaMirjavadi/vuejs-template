<template>
    <div class="container maincontent">
        <div class="row justify-content-md-center">
            <div class="col col-md-9">
                <category-items v-if="!showPost" :displayPost="displayPost"></category-items>
                <blog-single v-else></blog-single>
            </div>
            <div class="col col-md-3">
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="text-left font-weight-bolder mt-3"> Categories</div>
                <article-category></article-category>

                <div class="text-left font-weight-bolder mt-3"> Latest Posts</div>
                <app-posts :displayPost="displayPost"></app-posts>

            </div>
        </div>
    </div>
</template>

<script>
    import Items from "./Items";
    import Categories from "./Categories";
    import Posts from "./Posts";
    import PaginationCustom from "./PaginationCustom";
    import BlogSingle from "./BlogSingle";
    import {mapActions, mapMutations} from "vuex";
    import {EventBus} from "../main";

    export default {
        data() {
            return {
                showPost: false,
            }
        },
        methods: {
            ...mapActions({
                asyncGetArticles: 'asyncGetArticles'
            }),
            ...mapMutations({
                selectPost: 'selectPost'
            }),
            displayPost(post) {
                this.selectPost(post);
                this.showPost = true;

            },
            toggleSingleBlogAndItemsHandler(data) {
                this.showPost = data;
            }
        },
        components: {
            "category-items": Items,
            "article-category": Categories,
            "app-posts": Posts,
            "items-pagination": PaginationCustom,
            "blog-single": BlogSingle
        },
        mounted() {
            this.$store.dispatch('asyncGetArticles');
            this.$store.dispatch('asyncGetCats');

            EventBus.$on('toggleSingleBlogAndItems', this.toggleSingleBlogAndItemsHandler);
        },
        destroyed() {
            EventBus.$off('toggleSingleBlogAndItems', this.toggleSingleBlogAndItemsHandler);
        }
    }
</script>

<style scoped>
    .maincontent {
        margin-top: 20px;
    }

    .form-control {
        border-radius: 50px;
    }

    .has-search .form-control {
        padding-left: 2.375rem;
    }

    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: #aaa;
    }

</style>
