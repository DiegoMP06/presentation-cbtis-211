<script setup lang="ts">
    defineProps<{
        url: string;
    }>()
</script>

<template>
    <a 
        :href="url"
        class="px-4 py-2 hover:bg-cyan-900 text-white font-bold transition-colors"
    >
        <slot />
    </a>
</template>