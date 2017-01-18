<template>
<button class="base-btn" :disabled="disabled" type="button">
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
        content: null, // 按钮文本
        icon: String, // 文本左侧 按钮图标样式名
        iconRight: String, // 文本右侧 按钮图标样式名
        disabled: Boolean // 按钮状态 是否禁用
    }
};
</script>

<style lang="scss">
//
@import "../../styles/button.scss";
//
</style>
