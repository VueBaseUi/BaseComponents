<template>
<div :class="[`${classPR}-btn--group`]">
    <slot></slot>
</div>
</template>

<script>
import options from '../../mixins/options'; // 插件配置项

export default {
    mixins: [options]
};
</script>
