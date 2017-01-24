<template>
<div id="app">
    <img src="./assets/logo.png">
    <div class="">
        <vue-dropdown @commond='action'>
            <vue-button slot="content">button</vue-button>
            <vue-dropdown-item :val="1"><a href="#1">12</a></vue-dropdown-item>
            <vue-dropdown-item :val="2"><a href="#2">1</a></vue-dropdown-item>
            <vue-dropdown-item :val="3" :disabled="true"><a href="#3"><span>3213</span></a></vue-dropdown-item>
        </vue-dropdown>
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
        action(e) {
            return e;
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
