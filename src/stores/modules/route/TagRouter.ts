interface TabRouter {
    path: string;
    name: string;
}

export const tagRouter = defineStore("TagRouter", () => {
    const tagRouter = ref<Array<TabRouter>>([]);
    // const doubleCount = computed(() => count.value * 2)
    const addTab = (routerInfo: TabRouter) => {
        const isSome = tagRouter.value.some(
            (item) => item.name === routerInfo.name
        );
        if (!isSome) {
            tagRouter.value.push(routerInfo);
        }
        console.log(tagRouter.value);
    };

    const delRouter = (pathName: string) => {
        const index = tagRouter.value.findIndex(
            (item) => item.path === pathName
        );
        tagRouter.value.splice(index, 1);
        console.log("tagRouter :>> ", index);
    };

    const newTagRouter = computed(() => tagRouter.value);

    return { addTab, delRouter, newTagRouter };
});
