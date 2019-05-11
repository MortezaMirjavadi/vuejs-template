<template>
    <div id="app">
        <router-view name="header"></router-view>
        <router-view name="main-content"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import MainContent from "./components/MainContent";

    window.$ = window.jQuery = require("jquery");
    window.Popper = require("popper.js").default;

    export default {
        components: {
            "app-header": Header,
            "app-footer": Footer,
            "main-content": MainContent
        }
    };
</script>

<style>
    @import "~bootstrap/dist/css/bootstrap.css";

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
