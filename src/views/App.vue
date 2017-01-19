<template>
<div id="app">
    <img src="./assets/logo.png">
    <div>
        <vue-button content="123" :type="'success'" :loading="true" :iconRight="'bath'" :disabled="true" @click.native="action($event)"></vue-button>
    </div>
</div>
</template>

<script>
/*eslint-disable*/
import 'font-awesome/css/font-awesome.css';
/*eslint-enable*/

export default {
    name: 'app',
    data() {
        return {};
    },
    methods: {
        action() {
            // console.log(e.target);
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
