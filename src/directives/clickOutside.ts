import type {Directive} from "vue";

const handlers = new Map<Element, (event: MouseEvent) => void>();

function onClickOutside(event: MouseEvent) {
    handlers.forEach((handler, el) => {
        //@ts-ignore
        if (el !== event.target && !el.contains(event.target)) {
            handler(event);
        }
    });
}

const clickOutsideDirective: Directive = {
    beforeMount(el, binding) {
        const handler = (event: MouseEvent) => {
            if (el !== event.target && !el.contains(event.target)) {
                if (typeof binding.value === 'function') {
                    binding.value(event);
                }
            }
        };
        handlers.set(el, handler);
        document.addEventListener('click', onClickOutside, true);
    },
    unmounted(el) {
        handlers.delete(el);
        if (handlers.size === 0) {
            document.removeEventListener('click', onClickOutside, true);
        }
    }
};

export default clickOutsideDirective;