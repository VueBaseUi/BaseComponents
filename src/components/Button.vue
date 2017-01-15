<template>
<button class="base-btn" :class="btnStyle" :disabled="disabled" @click="clickBtn()" type="button">
    <slot>
        <i class="base-btnIcon-left" :class="icon" v-if="icon"></i>
        <span>{{ content }}</span>
        <i class="base-btnIcon-right" :class="iconRight" v-if="iconRight"></i>
    </slot>
</button>
</template>

<script>
export default {
    name: 'BaseButton', //
    props: {
        btnStyle: null, // 按钮样式 可传 Array，Object，String 等。
        content: null, // 按钮文本
        icon: String, // 文本左侧 按钮图标样式名
        iconRight: String, // 文本右侧 按钮图标样式名
        disabled: Boolean // 按钮状态 是否禁用
    },
    methods: {
        /**
         * clickBtn()
         * 点击按钮所触发的事件，会将 button 的 DOM 元素抛出，传给监听器回调。
         */
        clickBtn() {
            this.$emit('clickBtn', this.$el);
        }
    }
};
</script>

<style lang="scss">
.base-btn {
    border-width: 1px;
    border-style: solid;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
    }
    &:hover {
        //
    }
    &:active {
        //
    }
    &:focus {
        outline: 0;
    }
}

.base-btnIcon-left {
    margin-right: 10px;
}

.base-btnIcon-right {
    margin-left: 10px;
}
</style>
