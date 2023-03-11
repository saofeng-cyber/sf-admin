import { isObject } from "@vueuse/core";
// import { isObject } from "@vueuse/core";
import type { PiniaPluginContext } from "pinia";
export type Storage = "local" | "session";
interface PresistType<S, Store> {
    /**
     * @enable 是否要开启缓存
     */
    enable: boolean;
    /**
     * @key 存储的key值
     */
    key: string;
    option: Partial<{
        storage: Storage;
        include: (keyof S)[];
        exclude: (keyof S)[];
    }>;
    resetToState?: ((store: Store) => void) | boolean;
}
declare module "pinia" {
    export interface DefineStoreOptionsBase<S, Store> {
        presist?: Partial<PresistType<S, Store>>;
    }
}

export const setItem = (key: string, value: any, type: Storage) => {
    (window as any)[type + "Storage"].setItem(key, JSON.stringify(value));
};
export const getItem = (key: string, type: Storage) => {
    return (window as any)[type + "Storage"].getItem(key)
        ? JSON.parse(localStorage.getItem(key) as string)
        : {};
};

export default ({ options, store }: PiniaPluginContext) => {
    const presist = options.presist;
    if (presist && isObject(presist) && presist?.enable) {
        const storageType = presist.option?.storage ?? "local";
        const data = getItem(presist.key || store.$id, storageType);
        store.$subscribe((mutation, state) => {
            setItem(presist.key || store.$id, toRaw(state), storageType);
        });
        if (data && presist.resetToState) {
            store.$patch(data);
        }
    }
};
