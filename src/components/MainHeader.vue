<script setup lang="ts">
    import LinkMainHeader from './LinkMainHeader.vue';
    import {Bars4Icon} from '@heroicons/vue/24/solid';

    defineProps<{
        showNav: boolean;
    }>()

    defineEmits<{
        toggle: [];
    }>()

</script>

<template>
    <header 
        class="bg-cyan-950 fixed top-0 left-0 right-0 z-40 transition-all py-2"
        :class="[showNav ? 'opacity-100': 'opacity-0']"
    >
        <div class="container mx-auto flex items-center justify-between px-4">
            <slot name="logo" />

            <nav class="hidden md:flex gap-4 items-center">
                <LinkMainHeader url="/">
                    Inicio
                </LinkMainHeader>
        
                <LinkMainHeader url="/specialties">
                    Oferta Educativa
                </LinkMainHeader>
        
                <LinkMainHeader url="/gallery">
                    Galeria
                </LinkMainHeader>
        
                <LinkMainHeader url="https://www.instagram.com/cbtis211_/">
                    Instagram
                </LinkMainHeader>
        
                <LinkMainHeader url="https://www.facebook.com/profile.php?id=100072509195272">
                    Facebook
                </LinkMainHeader>
            </nav>

            <button 
                type="button" 
                class="p-2 rounded hover:bg-cyan-900 md:hidden"
                @click="$emit('toggle')"
            >
                <Bars4Icon class="size-10 text-white" />
            </button>
        </div>
    </header>
</template>