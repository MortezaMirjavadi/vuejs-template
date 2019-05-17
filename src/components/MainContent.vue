<template>
    <div class="container maincontent">
        <div class="row justify-content-md-center">

            <div class="col-12 hidden-xs-down">
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header col-12" id="headingOne">
                            <div class="list-group">
                                <button class="list-group-item list-group-item-action" type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Categories
                                </button>
                            </div>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                             data-parent="#accordionExample">
                            <div class="card-body">
                                <post-category></post-category>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <div class="list-group">
                                <button class="list-group-item list-group-item-action" type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Latest Posts
                                </button>
                            </div>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                             data-parent="#accordionExample">
                            <div class="card-body">
                                <app-posts :displayPost="displayPost"></app-posts>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col col-md-9 col-sm-12">
                <category-items v-if="!showPost" :displayPost="displayPost"></category-items>
                <blog-single v-else></blog-single>
            </div>
            <div class="col col-md-3 hidePostsCategory">
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="text-left font-weight-bolder mt-3"> Categories</div>
                <post-category></post-category>

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
                asyncGetArticles: 'asyncGetPosts'
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
            "post-category": Categories,
            "app-posts": Posts,
            "items-pagination": PaginationCustom,
            "blog-single": BlogSingle
        },
        mounted() {
            // this.$store.dispatch('asyncGetPosts');
            // this.$store.dispatch('asyncGetCats');
            this.$store.dispatch('syncGetPosts');

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

    .hidden-xs-down {
        display: none !important;
    }

    .hidePostsCategory {
        display: inline-block;
    }

    @media (max-width: 1000px) {
        .hidden-xs-down {
            display: inline-block !important;
        }

        .hidePostsCategory {
            display: none;
        }
    }

</style>
