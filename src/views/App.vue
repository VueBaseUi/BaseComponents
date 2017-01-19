<template>
<div id="app">
    <img src="./assets/logo.png">
    <div>
        <vue-button :loading="true" :disabled="true" data-role="btn" :type="'success'" native="reset" @click.native="action($event)">123</vue-button>
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
            console.log(e.target);
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
