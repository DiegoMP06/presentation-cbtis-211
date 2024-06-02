<script setup lang="ts">
    defineProps<{
        url: string;
    }>()
</script>

<template>
    <a 
        :href="url" 
        class="text-white font-bold hover:text-slate-100 transition-colors" 
    >
        <slot></slot>
    </a>
</template>