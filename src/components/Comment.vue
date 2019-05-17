<template>
    <div class="mb-5">
        <h4 class="comment"> Comments </h4>

        <div v-for="comment in getComments(postid)" :postId="postid">
            <comment-list :comment="comment"></comment-list>
        </div>
        <div v-if="getLogStatus">
            <h4 class="comment"> Write Your Comment </h4>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Name" v-model="name">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="email" class="form-control" id="inputPassword4" placeholder="Email"
                               v-model="email">
                    </div>
                </div>
                <div class="mt-1">
                    <textarea class="form-control" id="validationTextarea" placeholder="Message"
                              v-model="message"></textarea>
                    <div class="invalid-feedback">
                        Please enter a message in the textarea.
                    </div>
                </div>
                <div class="form-row mt-3" style="margin-top: 10px">
                    <div class="col-3">
                        <button class="btn btn-primary rounded-pill btnCustom"
                                @click.prevent="createUserComment({name, email, message, postid})">
                            <span style="padding: 10px"> Submit </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapMutations} from "vuex";
    import CommentList from "./CommentList";

    export default {
        data() {
            return {
                name: '',
                email: '',
                message: ''
            }
        },
        props: {
            postid: String
        },
        computed: {
            ...mapGetters([
                'getLogStatus',
                'getComments'
            ])
        },
        methods: {
            ...mapMutations(['createUserComment']),
        },
        components: {
            'comment-list': CommentList
        }
    }
</script>

<style scoped>

    .comment {
        margin-top: 50px;
    }

    .btnCustom {
        background-color: rgb(51, 41, 169);
    }

    .post:hover {
        background-color: #e6deff;
    }

</style>
