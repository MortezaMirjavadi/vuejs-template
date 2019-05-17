<template>
    <div id="wrapper">
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
            :class="[menuToggle ? 'toggled toggle' : '']">
            <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3"> Admin</div>
            </router-link>
            <hr class="sidebar-divider my-0">
            <li class="nav-item active">
                <router-link class="nav-link" to="/dashboard/statistics">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></router-link>
            </li>
            <hr class="sidebar-divider my-0">
            <li class="nav-item active">
                <router-link class="nav-link" to="/dashboard/create">
                    <i class="fas fa-plus-circle"></i>
                    <span>Register</span></router-link>
            </li>
            <hr class="sidebar-divider my-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Posts</span></a>
            </li>
            <hr class="sidebar-divider my-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Reports</span></a>
            </li>
            <hr class="sidebar-divider my-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Setting</span></a>
            </li>

            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle" @click="toggleMenu"></button>
            </div>
        </ul>

        <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">

                <toolbar-dashboard @toggleMenu="toggleMenu"></toolbar-dashboard>

                <router-view></router-view>

            </div>

            <footer-dashboard></footer-dashboard>

        </div>

    </div>
</template>

<script>

    import FooterDashboard from "../../views/FooterDashboard";
    import Toolbar from "./Toolbar";

    export default {
        data() {
            return {
                menuToggle: false,
            }
        },
        methods: {
            toggleMenu() {
                this.menuToggle = !this.menuToggle;
            }
        },
        components: {
            'footer-dashboard': FooterDashboard,
            'toolbar-dashboard': Toolbar
        }
    }

</script>

<style scoped>

    @import "../../assets/css/sb-admin-2.min.css";

</style>
