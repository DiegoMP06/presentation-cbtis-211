<script setup lang="ts">
    import LinkFooter from '../components/LinkFooter.vue'
</script>

<template>
    <footer class="bg-cyan-950">
        <div class="container mx-auto px-4 py-10">
            <div class="flex justify-between flex-col md:flex-row gap-10">
                <div class="grid gap-10 justify-center">
                    <nav class="flex flex-col md:flex-row gap-4 items-center">
                        <LinkFooter url="/">
                            Inicio
                        </LinkFooter>
        
                        <LinkFooter url="/specialties">
                            Oferta Educativa
                        </LinkFooter>
        
                        <LinkFooter url="/gallery">
                            Galeria
                        </LinkFooter>
        
                        <LinkFooter url="https://www.instagram.com/cbtis211_/">
                            Instagram
                        </LinkFooter>
        
                        <LinkFooter url="https://www.facebook.com/profile.php?id=100072509195272">
                            Facebook
                        </LinkFooter>
                    </nav>

                    <picture class="max-w-sm bg-white rounded-xl p-2">
                        <slot name="logo-sep" />
                    </picture>
                </div>

                <div class="flex flex-row gap-4 items-center justify-center">
                    <picture class="grid place-content-center p-2 w-32 h-32 bg-white rounded-full">
                        <slot name="logo-211" />
                    </picture>

                    <picture class="grid place-content-center p-4 w-32 h-32 bg-white rounded-full">
                        <slot name="logo-dgeti" />
                    </picture>
                </div>
            </div>
        </div>

        <p class="text-white font-black text-center text-lg px-4 py-3 border-t-2 border-t-cyan-900">
            Todos Los Derechos Reservados Diego Meneses &copy; {{ (new Date()).getFullYear() }}
        </p>
    </footer>
</template>