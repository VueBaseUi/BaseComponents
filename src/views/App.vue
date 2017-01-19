<template>
<div id="app">
    <img src="./assets/logo.png">
    <div class="">
        <vue-button-group>
            <vue-button content="123" :type="'success'" :iconRight="'bath'" @click.native="action($event)"></vue-button>
            <vue-button content="123" :type="'success'" :iconRight="'bath'" @click.native="action($event)"></vue-button>
            <vue-button content="123" :type="'success'" :iconRight="'bath'" @click.native="action($event)"></vue-button>
            <vue-button content="123" :type="'success'" :iconRight="'bath'" @click.native="action($event)"></vue-button>
        </vue-button-group>
        <div class="base-btn--group">
            <vue-button content="123" :type="'success'" :iconRight="'bath'" @click.native="action($event)"></vue-button>
            <vue-button content="123" :type="'success'" :iconRight="'bath'" @click.native="action($event)"></vue-button>
            <vue-button content="123" :type="'success'" :iconRight="'bath'" @click.native="action($event)"></vue-button>
            <vue-button content="123" :type="'success'" :iconRight="'bath'" @click.native="action($event)"></vue-button>
        </div>
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
    color: #2c3e50;
    margin-top: 60px;
}
</style>
