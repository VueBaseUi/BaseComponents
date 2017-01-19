/**
 *  这是一个公用的混合 vue 文件，用来转存用户的某些自定义设置
 *  以及定义某些通用的方法
 */
export default {
    data() {
        return {
            classPR: this.$Prefix.class, // 样式前缀
            iconPR: this.$Prefix.icon // 图标前缀
        };
    }
};
