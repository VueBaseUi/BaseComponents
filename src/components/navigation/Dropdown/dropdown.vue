<template>
<div :class="`${classPR}-dropdown`" @mouseenter="mouseStateMenu(false)" @mouseleave="mouseStateMenu(true)">
    <slot name="content">此处放置 触发元素，eg: button</slot>
    <ul :class="`${classPR}-dropdown--menu`" v-show="visible" @mouseleave="hide()" @click="menuItemClick($event)">
        <slot></slot>
    </ul>
</div>
</template>

<script>
import options from '../../mixins/options'; // mixins 插件配置项

export default {
    mixins: [options],
    data() {
        return {
            timeout: null, // setTimeout 计时器
            outside: true, // 鼠标是否移出菜单
            visible: false
        };
    },
    props: {
        disabled: Boolean,
        trigger: { // 选择事件的触发方式
            type: String,
            default: 'click'
        }
    },
    methods: {
        // 鼠标 相对于 Dropdown 的位置
        mouseStateMenu(state) {
            this.outside = state;
        },
        // 显示 menu
        show() {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.visible = true;
            }, 200);
        },
        // 隐藏 menu
        hide() {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                if (this.outside) {
                    this.visible = false;
                }
            }, 250);
        },
        // 切换 menu 显示状态
        switchMenu() {
            this.visible = !this.visible;
        },
        initEvent() {
            const $trigger = this.$slots.content[0].elm;

            // 选择事件的触发方式
            if (this.trigger === 'hover') {
                $trigger.addEventListener('mouseenter', this.show);
                $trigger.addEventListener('mouseleave', this.hide);
            } else if (this.trigger === 'click') {
                $trigger.addEventListener('click', this.show);
                $trigger.addEventListener('mouseleave', this.hide);
            }
        },

        /**
         * menuItemClick - 获取用户点击的 DropdownItem 的 val
         *
         * @param  {Object} e 触发的事件 $event
         * @return {$emit}    绑定方法名 v-on:commond
         */
        menuItemClick(e) {
            let el = e.target; // 获取事件 DOM 元素

            while (el.tagName !== 'LI') {
                el = el.parentNode; // 通过 el，获取触发事件的 DropdownItem DOM元素
            }

            // el.dataset.val           <dom data-val="">
            // el.dataset.disabled      <dom data-disabled="">
            if (!el.dataset.disabled) {
                this.$emit('commond', el.dataset.val, el); // 抛出事件
                this.switchMenu();
            }
        }
    },
    mounted() {
        this.initEvent();
    }
};
</script>
