<template>
<div id="app">
    <img src="./assets/logo.png">
    <div>
        <vue-button data-role="btn">123</vue-button>
    </div>
</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {};
    },
    methods: {
        action(e) {
            console.log(e);
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
