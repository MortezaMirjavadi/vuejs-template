<template>
    <div class="header position-sticky fixed-top" ref="headerUnique"
         :style="{height: imageHeight + 'px', opacity: 0.8}">
        <ul class="nav navbar justify-content-center">
            <li class="nav-item mr-5" @click="gotoHome">
                <img src="../assets/logo.png" style="width: 50px; height: 50px;"/>
            </li>
            <li class="nav-item ml-5 showMenu">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item showMenu">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item showMenu">
                <a class="nav-link" href="#">Screen</a>
            </li>
            <li class="nav-item showMenu">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
            </li>
            <li class="nav-item ml-5" id="createAccount" v-if="!getLogStatus">
                <button type="button" class="btn btn-primary" @click="createAccount"> Create Account</button>
            </li>
            <li class="nav-item ml-2">
                <div class="dropdown">
                    <i class="fa fa-user" data-toggle="dropdown" style="color: white;"></i>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item"
                                data-toggle="modal"
                                v-show="!getLogStatus"
                                data-target="#exampleModal"> Login
                        </button>
                        <button class="dropdown-item" v-show="!getLogStatus"> Create Account</button>
                        <button class="dropdown-item" v-show="getLogStatus" @click.prevent="gotoDashboard"> Dashboard</button>
                        <button class="dropdown-item" v-show="getLogStatus" @click.prevent="signout()"> Sign Out
                        </button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"> Signin </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="needs-validation">
                            <div class="form-row">
                                <div class="form-group col-12">
                                    <input type="text" class="form-control" placeholder="Username"
                                           v-model="username"
                                           v-bind:class="{ 'is-invalid': attemptSubmit}">
                                </div>
                                <div class="form-group col-12">
                                    <input type="password" class="form-control" id="inpEmail"
                                           placeholder="Password"
                                           v-model="password"
                                           v-bind:class="{ 'is-invalid': attemptSubmit}"
                                           required>
                                </div>
                            </div>
                            <div class="alert alert-danger" role="alert" v-show="showErrorWrong">
                                Username or password is wrong
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="close"> Close</button>
                        <button type="submit" class="btn btn-danger"
                                @click.prevent="handleMenubar({username,password})"> Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="logoDescription" v-show="titleShow">
            <h1 class="display-7"> Our Blog </h1>
            <p> Home - Blog </p>
        </div>
    </div>
</template>

<script>

    import {EventBus} from "../main";
    import {mapMutations, mapGetters} from "vuex";

    export default {
        data() {
            return {
                imageHeight: 270,
                scrolled: false,
                oldScrollY: window.scrollY,
                titleShow: true,
                username: '',
                password: '',
                attemptSubmit: true,
                showErrorWrong: false
            }
        },
        computed: {
            ...mapGetters(['getLogStatus']),
        },
        methods: {
            ...mapMutations(['checkLogin', 'signout']),
            gotoDashboard() {
                this.$router.push('/dashboard');
            },
            missingName() {
                return this.username === '';
            },
            validateForm() {
                this.attemptSubmit = !this.missingName();
            },
            handleMenubar(item) {
                this.validateForm();
                if (!this.attemptSubmit) return;
                this.checkLogin(item);
                if (this.$store.state.logged) {
                    this.$refs.close.click();
                    this.username = '';
                    this.password = '';
                    this.showErrorWrong = false;
                }
                else {
                    this.showErrorWrong = true;
                }
            },
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
            handleResize(event) {

            },
            emitGlobalClickEvent() {
                EventBus.$emit("toggleSingleBlogAndItems", false);
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
            window.addEventListener("resize", this.handleResize);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener("resize", this.handleResize);
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

    .nav button:hover {
        background-color: transparent;
        border: 1px solid whitesmoke;
    }

    .nav button:focus {
        outline: none;
        box-shadow: none;
    }

    @media screen and (max-width: 730px) {
        #createAccount {
            display: none;
        }
    }

    @media screen and (max-width: 530px) {
        .showMenu {
            display: none;
        }
    }

</style>
