<template>
    <div class="BlogSingle text-left">
        <h1> {{ singlePost.title }} </h1>
        <small> By: {{ singlePost.author.username }}, Date: {{ singlePost.createdAt }}</small>
        <!--style="width: 765px; height: 400px;"-->
        <img class="mt-3 img-responsive" :src="singlePost.image">
        <p class="mt-3">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
            for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
            Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.</p>
        <p class="mt-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
        </p>

        <div class="media mt-3 ml-4">
            <div class="media-body" itemprop="articleSection">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the
                    release of Letraset sheets containing.
                </p>
            </div>
        </div>
        <p class="mt-3">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
            for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
            Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.</p>

        <div class="post">
            <li class="media">
                <img src="https://picsum.photos/id/250/180/180" class="align-self-center mr-3">
                <div class="media-body">
                    <h5 class="mt-0"> {{ singlePost.author.username }} </h5>
                    <small class="text-muted"> Post Editor</small>
                    <p class="mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>
                </div>
            </li>
        </div>


        <blog-comment :postid="singlePost.id"></blog-comment>

    </div>
</template>

<script>
    import Comment from "./Comment";
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters([
                'singlePost'
            ])
        },
        components: {
            'blog-comment': Comment
        }

    }
</script>

<style scoped>

    .BlogSingle {
        padding: 20px;
    }

    div[itemprop="articleSection"] > p:first-of-type {
        margin-bottom: 1em;
        margin-top: 1.9em;
        border-left: 4px solid rgb(194, 103, 210);
        padding-left: .8em;
        text-align: justify;
    }

    @media screen and (min-width: 1180px) {
        .img-responsive {
            width: 765px;
            height: 400px;
            /*width: 100%;*/
        }
    }

    @media screen and (max-width: 1180px) {
        .img-responsive {
            width: 500px;
            height: 300px;
            /*width: 90%;*/
        }
    }

</style>
