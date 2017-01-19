<template>
<button :class="[`${classPR}-btn`, style, state]" :disabled="loading ||disabled" :type="nativeType">
    <slot>
        <i :class="[`${iconPR} ${iconPR}-spinner ${iconPR}-spin`]" v-if="loading" data-icon="left"></i>
        <i :class="[leftIcon]" v-else-if="iconLeft" data-icon="left"></i>
        <span>{{ content }}</span>
        <i :class="[rightIcon]" v-if="iconRight && !loading" data-icon="right"></i>
    </slot>
</button>
</template>

<script>
import options from '../../mixin/options'; // 插件配置项

export default {
    mixins: [options],
    props: {
        type: {
            type: String,
            default: 'default'
        },
        nativeType: String, // TODO 验证 原生 按钮类型
        size: String, // 按钮尺寸
        content: null, // 按钮显示文本
        iconLeft: String, // 文本左侧 按钮图标样式名
        iconRight: String, // 文本右侧 按钮图标样式名
        disabled: Boolean, // 按钮状态 是否禁用
        loading: Boolean // 按钮状态 是否加载
    },
    computed: {

        /**
         * leftIcon - 按钮左侧图标，当按钮出于 loading 状态时，按钮图标会被覆盖
         *
         * @return {String}  按钮图标样式
         */
        leftIcon() {
            const prefix = this.iconPR; // icon 前缀
            const suffix = this.loading ? 'loading' : this.iconLeft; // icon 后缀

            // button loading 状态下，会用 loading 图标 覆盖其他图标
            return `${prefix} ${prefix}-${suffix}`;
        },

        /**
         * rightIcon - 按钮右侧图标
         *
         * @return {String}  按钮图标样式
         */
        rightIcon() {
            const prefix = this.iconPR; // icon 前缀
            const suffix = this.iconRight; // icon 后缀

            return `${prefix} ${prefix}-${suffix}`;
        },

        /**
         * style - 根据 type，size 生成 按钮样式
         *
         * @return {Object}  按钮样式
         */
        style() {
            const prefix = this.classPR;

            return {
                [`${prefix}-btn--${this.type}`]: this.type,
                [`${prefix}-btn--${this.size}`]: this.size
            };
        },

        /**
         * state - 根据 loading，disabled 生成 按钮状态
         *
         * @return {Object}  按钮状态
         */
        state() {
            return {
                'is-loading': this.loading,
                'is-disabled': this.disabled
            };
        }
    }
};
</script>
