<template>
    <div class="posts">
        <ul class="list-unstyled text-left">
            <app-post :displayPost="displayPost" v-for="post in latestPosts" :post="post">

            </app-post>
        </ul>
    </div>
</template>

<script>
    import Post from "./Post";
    import {mapActions, mapGetters} from "vuex";

    export default {
        props: {
            displayPost: Function
        },
        computed: {
            ...mapGetters([
                'latestPosts'
            ])
        },
        components: {
            "app-post": Post
        }
    }
</script>

<style scoped>

    .posts {
        margin-top: 20px;
        cursor: pointer;
    }

</style>
