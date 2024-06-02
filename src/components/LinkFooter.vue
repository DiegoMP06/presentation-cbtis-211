<script setup lang="ts">
    defineProps<{
        url: string;
    }>()
</script>

<template>
    <a 
        :href="url" 
        class="text-white font-bold " 
    >
        <slot></slot>
    </a>
</template>