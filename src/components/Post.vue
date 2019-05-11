<template>
    <div class="post mt-2" @click="displayPost">
        <li class="media">
            <!--<img src="https://picsum.photos/id/835/72/72" class="align-self-center mr-3">-->
            <img :src="post.image" style="width: 72px; height:72px" class="align-self-center mr-3">
            <div class="media-body">
                <b> {{ post.title }} </b>
                <p>
                    <!--<small class="text-muted">Last updated 3 mins ago</small>-->
                    <small class="text-muted">
                        {{ post.createdAt }}
                    </small>
                </p>
            </div>
        </li>
    </div>
</template>

<script>
    export default {
        props: {
            displayPost: Function,
            post: Object
        }
    }
</script>

<style scoped>
    .post:hover {
        background-color: #e6deff;
    }


</style>
