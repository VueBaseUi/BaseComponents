<template>
<button class="base-btn" :class="[ style , state ]" :disabled="disabled" :type="native">
    <slot>
        <i class="base-btnIcon-left" :class="icon" v-if="icon"></i>
        <span>{{ content }}</span>
        <i class="base-btnIcon-right" :class="iconRight" v-if="iconRight"></i>
    </slot>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        native: String,
        size: String,
        content: null, // 按钮文本
        icon: String, // 文本左侧 按钮图标样式名
        iconRight: String, // 文本右侧 按钮图标样式名
        disabled: Boolean, // 按钮状态 是否禁用
        loading: Boolean
    },
    computed: {
        style() {
            return {
                [`base-btn--${this.type}`]: this.type,
                [`base-btn--${this.size}`]: this.size
            };
        },
        state() {
            return {
                'is-loading': this.loading,
                'is-disabled': this.disabled
            };
        }
    }
};
</script>

<style lang="scss">
//
@import "../../styles/button.scss";
//
</style>
