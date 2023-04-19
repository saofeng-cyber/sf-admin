import { encrypt, decrypt } from "./crypto";

export const createStorage = (options?: { crypto: boolean }) => {
    const { crypto } = Object.assign({ crypto: true }, options);
    function setItem<T>(key: string, value: T) {
        const json = crypto ? encrypt(value) : JSON.stringify(value);
        window.localStorage.setItem(key, json);
    }

    function getItem(key: string) {
        const json = window.localStorage.getItem(key);
        console.log(json);
        if (json) {
            let storageData: any | null = null;
            try {
                storageData = crypto ? decrypt(json) : JSON.parse(json);
            } catch {
                // Prevent failure
            }
            if (storageData) {
                return storageData;
            }
            return null;
        }
    }

    function removeItem(key: string) {
        window.localStorage.removeItem(key);
    }

    function clear() {
        window.localStorage.clear();
    }

    return {
        getItem,
        setItem,
        removeItem,
        clear,
    };
};
export const ls = createStorage();

export const ss = createStorage({ crypto: false });
