import type { App, DirectiveBinding } from "vue";
const permission = {
    mounted: (el: HTMLElement, binding: DirectiveBinding<any>) => {
        el.innerHTML = binding.value;
    },
};

export const useDirectives = (app: App) => {
    app.directive("permission", permission.mounted);
};
