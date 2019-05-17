<template>
    <div class="media comment">
        <img :src="comment.comment.image" class="mr-3 rounded-circle" alt="...">
        <div class="media-body">
            <h5 class="mt-0"> {{comment.comment.name}} </h5>
            <small class="text-muted"> 3 Hours Age</small>
            <p>
                {{ comment.comment.comment }}
            </p>
            <div v-if="getLogStatus">
                <button class="btn btn-sm post" @click.prevent="setUserLike(comment.comment.id)">
                    <i :class="[getCurrentUser.likes.find(x=> x.commentId === comment.comment.id) ? 'fas fa-thumbs-up' : 'fa fa-thumbs-o-up']"></i>
                    Like {{ comment.comment.likeCount }}
                </button>
                <button class="btn btn-sm post" @click.prevent="showReply=true">
                    <i class="fa fa-comment-alt"></i> Comment
                </button>
            </div>

            <div class="media mt-3" v-for="reply in comment.replies">
                <a class="mr-3" href="#">
                    <img :src="reply.image" class="mr-3 rounded-circle" alt="...">
                </a>
                <div class="media-body">
                    <h5 class="mt-0"> {{ reply.name }} </h5>
                    <small class="text-muted"> 3 Hours Age</small>
                    <p>
                        {{ reply.comment }}
                    </p>
                    <div v-if="getLogStatus">
                        <button class="btn btn-sm post" @click.prevent="setUserLike(reply.id)">
                            <i :class="[getCurrentUser.likes.find(x=> x.commentId === reply.id) ? 'fas fa-thumbs-up' : 'fa fa-thumbs-o-up']"></i>
                            Like
                        </button>
                        <button class="btn btn-sm post" @click.prevent="showReply=true">
                            <i class="fas fa-comment-alt"></i> Comment
                        </button>
                    </div>
                </div>
            </div>
            <reply-comment v-if="getLogStatus && showReply" :comment="comment.comment"></reply-comment>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapGetters} from "vuex";
    import Reply from "./Reply";

    export default {
        computed: {
            ...mapGetters(['getLogStatus', 'getCurrentUser'])
        },
        props: {
            comment: Object,
        },
        data() {
            return {
                showReply: false
            }
        },
        methods: {
            ...mapMutations(['setUserLike']),
        },
        components: {
            "reply-comment": Reply
        }
    }
</script>

<style scoped>

</style>
