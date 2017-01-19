import components from './list';
import '../styles/index.scss';

const version = '0.0.1';

const options = {
    prefix: 'vue', // 引用 vue 组件的 标签前缀 eg:<vue-button></vue-button>
    prefixClass: 'base', // css 样式 前缀
    prefixIcon: 'fa' // icon 前缀
};

const install = (Vue, opts) => {
    Object.assign(options, opts); // 合并 默认设置 和 用户设置

    // 注册组件
    Object.keys(components).forEach((key) => {
        Vue.component(`${options.prefix}${key}`, components[key]);
    });

    // TODO 允许用户自定义 class 前缀、icon 前缀
    // const $Vue = Vue;
    //
    // $Vue.prototype.$Prefix = {
    //     class: options.prefixClass,
    //     icon: options.prefixIcon
    // };
};

export default {
    version,
    install
};
