<template>
    <div class="container justify-content-center mt-3">
        <h3> Create Post </h3>
        <form class="mt-5">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" placeholder="Title" v-model.trim="title">
                </div>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="inpEmail" placeholder="Image Url" v-model="image">
                </div>
                <div class="mt-1 form-group col-md-12">
                    <textarea class="form-control" id="validationTextarea" placeholder="Description"
                              v-model="description"></textarea>
                    <div class="invalid-feedback">
                        Please enter a message in the textarea.
                    </div>
                </div>
                <div class="mt-1 for-group col-md-12">
                    <textarea class="form-control" placeholder="Body"
                              v-model="body"></textarea>
                    <div class="invalid-feedback">
                        Please enter a message in the textarea.
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputState">Category </label>
                    <select id="inputState" class="form-control" v-model="category">
                        <option selected>Choose Category</option>
                        <option v-for="cat in categories" v-bind:value="cat.id">
                            {{ cat.catname }}
                        </option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label>Select Tag</label>
                    <input type="text" v-model="chip" class="form-control" placeholder="Type and enter your tag"
                           :disabled="disableChip"
                           @keypress.enter.prevent="setChip">
                </div>
                <div class="form-group col-md-12">
                    <div class="chip" v-for="i in chips" @click.prevent="deleteChip(i)">
                        {{ i }}
                    </div>
                </div>
            </div>
            <div class="form-row mt-3 align-content-center">
                <div class="col-12">
                    <button class="btn btn-primary rounded-pill btnCustom" @click.prevent="savePost">
                        <span style="padding: 10px"> Submit </span>
                    </button>
                </div>
            </div>
            <div class="alert alert-success" role="alert" v-if="showSuccess">
                A simple success alert—check it out!
            </div>
        </form>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        computed: {
            ...mapGetters(['categories'])
        },
        data() {
            return {
                chips: [],
                chip: '',
                title: '',
                description: '',
                image: '',
                body: '',
                category: '',
                disableChip: false,
                showSuccess: false,
            }
        },
        methods: {
            ...mapMutations(['createPost']),
            savePost() {
                this.createPost({
                    tagList: this.chips,
                    title: this.title,
                    body: this.body,
                    description: this.description,
                    image: this.image,
                    category: this.category,
                });
                this.showSuccess = true;
                setTimeout(()=> {
                    this.showSuccess = false;
                }, 3000);
            },
            setChip(event) {
                this.chips.push(this.chip);
                this.chip = '';
                if (this.chips.length === 4) {
                    this.disableChip = true;
                }
            },
            deleteChip(index) {
                this.chips.splice(index, 1);
                this.disableChip = false;
            }
        }
    }
</script>

<style scoped>
    .chip {
        display: inline-block;
        padding: 0 25px;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        border-radius: 25px;
        background-color: #f1f1f1;
    }
</style>
