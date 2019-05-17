<template>
    <div class="media">
        <img src="https://picsum.photos/id/400/40/40" class="mr-3 rounded-circle" alt="...">
        <div class="media-body">
            <input type="text" class="form-control rounded-pill" placeholder="Add a comment..." v-model="message">
            <button class="btn btn-primary btn-sm rounded-pill mt-1 btnCustom" @click.prevent="createReplyToComment({comment, message, postId}) && (message='')">
                Reply
            </button>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        data() {
            return {
                message: ''
            }
        },
        props: {
            comment: Object,
            postId: String
        },
        methods: {
            ...mapMutations(['createReplyToComment'])
        }
    }
</script>

<style scoped>

    .btnCustom {
        background-color: rgb(51, 41, 169);
    }

</style>
