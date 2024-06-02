<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import LinkMainNav from "./LinkMainNav.vue";
    import MainHeader from "./MainHeader.vue";
    import MenuMobile from "./MenuMobile.vue";
    import useMenuMobile from "../composables/useMenuMobile";

    const nav = ref<null|HTMLDivElement>(null);
    const showNav = ref(false);
    const {
        active,
        animation,
        toggle,
    } = useMenuMobile();

    onMounted(() => {
        nav.value?.focus();

        window.addEventListener('scroll', handleScrollNavShow)
    });

    const handleScrollNavShow = () => {
        const bottom  = nav.value?.getBoundingClientRect().bottom ?? 0;

        if(bottom <= 0) {
            showNav.value = true;
        } else {
            showNav.value = false
        }
    }
</script>

<template>
    <section ref="nav" class="bg-cyan-950 border-b-8 border-zinc-800">
        <div class="container px-4 mx-auto">
            <nav class="flex flex-col md:flex-row">
                <LinkMainNav url="/">
                    Inicio
                </LinkMainNav>
        
                <LinkMainNav url="/specialties">
                    Oferta Educativa
                </LinkMainNav>
        
                <LinkMainNav url="/gallery">
                    Galeria
                </LinkMainNav>
        
                <LinkMainNav url="https://www.instagram.com/cbtis211_/">
                    Instagram
                </LinkMainNav>
        
                <LinkMainNav url="https://www.facebook.com/profile.php?id=100072509195272">
                    Facebook
                </LinkMainNav>
            </nav>
        </div>
    </section>
    
    <MainHeader
        v-if="showNav"
        :showNav="showNav"
        @toggle="toggle"
    >
        <template v-slot:logo>
            <slot name="logo" />
        </template>
    </MainHeader>

    <MenuMobile 
        v-if="active"
        :animation="animation"
        :active="active"
        @toggle="toggle"
    >
        <template v-slot:logo>
            <slot name="logo" />
        </template>
    </MenuMobile>
</template>