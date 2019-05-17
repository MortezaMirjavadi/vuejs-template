<template>
    <div>
        <div class="card-columns">
            <div class="card shadow-lg p-3 mb-2 bg-white rounded cursor-pointer cardColumn cardSize"
                 @click="displayPost(post)"
                 v-for="post in filteredPost">
                <img :src="post.image" class="card-img-top imageSize text-left" v-if="!show">
                <div class="card-body text-left" v-if="!show">
                    <h6 class="card-title"> {{ post.title }} </h6>
                    <small class="card-subtitle mb-2 text-muted"> {{ post.createdAt }}</small>
                    <p class="card-text">
                        {{post.description}}
                    </p>
                </div>
                <li class="media" v-if="show">
                    <div>
                        <img :src="post.image" style="width: 72px; height:72px" class="align-self-center mr-3">
                        <div>
                            <small class="text-muted"> {{ post.createdAt }}</small>
                        </div>
                    </div>
                    <div class="media-body">
                        <b> {{ post.title }} </b>
                        <p>
                            {{ post.body }}
                        </p>
                    </div>
                </li>
            </div>
        </div>
        <items-pagination></items-pagination>
    </div>
</template>

<script>
    import PaginationCustom from "./PaginationCustom";
    import {mapGetters, mapMutations} from "vuex" ;

    export default {
        data() {
            return {
                show: window.innerWidth < 570,
            }
        },
        props: {
            displayPost: Function
        },
        computed: {
            ...mapGetters([
                'posts',
                'filteredPost'
            ]),
            ...mapMutations([
                'selectPost'
            ])
        },
        methods: {
            handleResize2(event) {
                this.show = window.innerWidth < 570;
            },
        },
        components: {
            "items-pagination": PaginationCustom,
        },
        mounted() {
            window.addEventListener("resize", this.handleResize2);
        },
        destroyed() {
            window.removeEventListener("resize", this.handleResize);
        },
    }
</script>

<style scoped>

    .cursor-pointer {
        cursor: pointer;
    }

    @media screen and (min-width: 1000px) {
        .cardColumn {
            height: 433px;
        }

        .card-columns {
            column-count: 2;
        }
    }

    @media screen and (max-width: 1000px) {
        .cardColumn {
            height: 233px;
        }

        .card-columns {
            column-count: 1;
        }
    }

    @media screen and (max-width: 570px) {
        .imageSize {
            width: 100px;
            height: 100px;
        }

        .cardSize {
            height: 50%;
        }
    }

    @media screen and (min-width: 571px) {
        .cardSize {
            height: 100%;
        }
    }
</style>
