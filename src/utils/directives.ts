import type { App, DirectiveBinding } from "vue";
const permission = {
    mounted: (el: HTMLElement, binding: DirectiveBinding<any>) => {
        el.innerHTML = binding.value;
    },
};

const injectNote = {
    mounted: (el: HTMLElement, binding: DirectiveBinding<any>) => {
        return binding.value * 1000;
    },
};

export const useDirectives = (app: App) => {
    app.directive("permission", permission.mounted);
    app.directive("injectNote", injectNote.mounted);
};
