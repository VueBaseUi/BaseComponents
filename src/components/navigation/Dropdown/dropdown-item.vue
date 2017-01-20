<template>
<li :class="[`${classPR}-dropdown--item`, { 'is-disabled': disabled }]" :data-val="val" :data-disabled="disabled">
    <slot>{{ content }}</slot>
</li>
</template>

<script>
import options from '../../mixins/options'; // 插件配置项

export default {
    mixins: [options],
    props: {
        disabled: Boolean,
        content: null,
        val: null
    }
};
</script>
