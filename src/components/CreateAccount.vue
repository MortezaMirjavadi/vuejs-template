<template>
    <div class="container justify-content-center mt-3">
        <h3> Create Account </h3>
        <form class="mt-5">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" placeholder="Username" v-model="username">
                </div>
                <div class="form-group col-md-6">
                    <input type="email" class="form-control" id="inpEmail" placeholder="Email" v-model="email">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <div class="form-group col-md-6">
                    <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirmPassword">
                </div>
            </div>
            <div class="form-row mt-3 align-content-center">
                <div class="col-12">
                    <button class="btn btn-primary rounded-pill btnCustom"
                            @click.prevent="checkPasswordMatch">
                        <span style="padding: 10px"> Submit </span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapMutations } from "vuex";

    export default {
        data() {
            return {
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            ...mapMutations([
                'addUser'
            ]),
            checkPasswordMatch() {
                if (this.password !== this.confirmPassword) {
                    alert('error mismatch password');
                }
                else {
                    this.addUser({
                        userName: this.username,
                        email: this.email,
                        password: this.password,
                        confirmPassword: this.confirmPassword
                    });
                    this.username = '';
                    this.email = '';
                    this.password = '';
                    this.confirmPassword = '';
                }
            }
        }

    }
</script>

<style scoped>

</style>
