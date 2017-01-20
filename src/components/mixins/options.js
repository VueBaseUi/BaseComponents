/**
 *  这是一个公用的混合 vue 文件，用来转存用户的某些自定义设置
 *  以及定义某些通用的方法
 */
export default {
    data() {
        return {
            classPR: this.$Prefix ? this.$Prefix.class : 'base', // 样式前缀
            iconPR: this.$Prefix ? this.$Prefix.icon : 'fa' // 图标前缀
        };
    }
};
