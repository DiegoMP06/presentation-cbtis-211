<script setup lang="ts">
    defineProps<{
        url: string;
    }>()
</script>

<template>
    <a 
        :href="url"
        class="text-white font-bold text-lg p-2 hover:bg-cyan-900 transition-all md:hover:-translate-y-1 block"
    >
        <slot />
    </a>
</template>