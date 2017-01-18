// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import BaseComponents from '../components'; // 插件源文件目录

// import BaseComponents from '../../dist/index';
// import '../../dist/css/index.css';

Vue.use(BaseComponents, {
    prefix: 'vue'
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
});
