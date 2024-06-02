<script setup lang="ts">
    import LinkMenuMobile from './LinkMenuMobile.vue';
    defineProps<{
        active: boolean;
        animation: boolean;
    }>()

    const emit = defineEmits<{
        toggle: [];
    }>();

    const handleClickCloseMenu = (e: MouseEvent) => {
        if((e.target as HTMLDivElement).id === 'close-menu') {
            emit('toggle');
        }
    }
</script>

<template>
    <div 
        id="close-menu"
        class="fixed inset-0 z-50 bg-white-0.6 flex justify-end transition-all"
        :class="[animation ? 'opacity-100' : 'opacity-0']"
        @click="handleClickCloseMenu"
    >
        <aside 
            class="w-2/3 bg-cyan-950 h-screen overflow-y-auto px-4 py-10 transition-all"
            :class="[active ? 'translate-x-0' : '-translate-x-96']"
        >
            <div class="flex justify-center">
                <slot name="logo" />
            </div>

            <nav class="mt-6 flex flex-col">
                <LinkMenuMobile url="/">
                    Inicio
                </LinkMenuMobile>
        
                <LinkMenuMobile url="/specialties">
                    Oferta Educativa
                </LinkMenuMobile>
        
                <LinkMenuMobile url="/gallery">
                    Galeria
                </LinkMenuMobile>
        
                <LinkMenuMobile url="https://www.instagram.com/cbtis211_/">
                    Instagram
                </LinkMenuMobile>
        
                <LinkMenuMobile url="https://www.facebook.com/profile.php?id=100072509195272">
                    Facebook
                </LinkMenuMobile>
            </nav>
        </aside>
    </div>
</template>