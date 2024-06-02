import { ref } from 'vue'

export default function useMenuMobile() {
    const active = ref(false)
    const animation = ref(false)

    function toggle() {
        if(active.value) {
            animation.value = false;

            setTimeout(() => {
                active.value = false;
                document.body.classList.remove('overflow-hidden');
            }, 300)
        } else {
            active.value = true;
            
            setTimeout(() => {
                animation.value = true;
                document.body.classList.add('overflow-hidden');
            }, 0)
        }
    }

    return {
        active,
        animation,
        toggle,
    }
}