<template>
    <div class="header position-sticky fixed-top" ref="headerUnique"
         :style="{height: imageHeight + 'px', opacity: 0.8}">
        <ul class="nav navbar justify-content-center">
            <li class="nav-item mr-5" @click="gotoHome">
                <img src="../assets/logo.png" style="width: 50px; height: 50px;"/>
            </li>
            <li class="nav-item ml-5">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Screen</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
            </li>
            <li class="nav-item ml-5">
                <button type="button" class="btn btn-primary" @click="createAccount"> Create Account</button>
            </li>
            <!--<li class="nav-item ml-5">-->
            <!--<div class="dropdown">-->
            <!--<i class="fa fa-heart" data-toggle="dropdown"></i>-->
            <!--<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">-->
            <!--<a class="dropdown-item" href="#">Action</a>-->
            <!--<a class="dropdown-item" href="#">Another action</a>-->
            <!--<a class="dropdown-item" href="#">Something else here</a>-->
            <!--</div>-->
            <!--</div>-->
            <!--</li>-->
        </ul>
        <!--<div class="dropdown">-->

        <!--<i class="fa fa-heart" data-toggle="dropdown"></i>-->
        <!--<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">-->
        <!--<a class="dropdown-item" href="#">Action</a>-->
        <!--<a class="dropdown-item" href="#">Another action</a>-->
        <!--<a class="dropdown-item" href="#">Something else here</a>-->
        <!--</div>-->
        <!--</div>-->

        <div class="logoDescription" v-show="titleShow">
            <h1 class="display-7"> Our Blog </h1>
            <p> Home - Blog </p>
        </div>
    </div>
</template>

<script>

    import {EventBus} from "../main";

    export default {
        data() {
            return {
                imageHeight: 270,
                scrolled: false,
                oldScrollY: window.scrollY,
                titleShow: true,
            }
        },
        methods: {
            createAccount() {
                this.$router.push('/register');
            },
            gotoHome() {
                this.$router.push('/');
                this.emitGlobalClickEvent();
            },
            handleScroll(event) {
                if (window.scrollY >= 350) {
                    this.imageHeight = 80;
                    this.titleShow = false;
                }
                if (window.scrollY < 80) {
                    if (window.scrollY < this.oldScrollY) {
                        this.imageHeight = 270;
                        this.titleShow = true;
                    }
                }
                this.oldScrollY = window.scrollY;
            },
            emitGlobalClickEvent() {
                EventBus.$emit("toggleSingleBlogAndItems", false);
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
    }
</script>

<style scoped>

    .header {
        background-image: linear-gradient(to bottom right, rgb(194, 103, 210), rgb(63, 41, 171));

        display: block;
        position: fixed;
        width: 100%;
        z-index: 99999;
        transition: all ease .5s;
    }

    .logoDescription {
        margin-top: 60px;
        color: white;
    }

    a {
        color: white;
    }

    .btn-primary {
        color: #fff;
        border-radius: 35px;
        background-color: transparent;
        border: 1px solid whitesmoke;
    }

    .btn-primary:not(:disabled):not(.disabled):active,
    .show > .btn-primary.dropdown-toggle {
        color: #fff;
        background-color: rgb(195, 104, 210);
        border: 1px solid whitesmoke;
        outline: none;
    }

    button:hover {
        background-color: transparent;
        border: 1px solid whitesmoke;
    }

    button:focus {
        outline: none;
        box-shadow: none;
    }

</style>
