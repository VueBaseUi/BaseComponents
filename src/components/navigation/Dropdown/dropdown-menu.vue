<template>
<ul :class="`${classPR}-dropdown--menu`">
    <slot></slot>
</ul>
</template>

<script>
import options from '../../mixins/options'; // 插件配置项

export default {
    mixins: [options]
};
</script>
