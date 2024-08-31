export const useLocalforage = () => {
    const { $localforage } = useNuxtApp();
    const isClient = import.meta.client;

    const setItem = async (key, value) => {
        if (!isClient) return;

        try {
            await $localforage.setItem(key, value);
        } catch (err) {
            console.error('Error setting item in localforage:', err)
        }
    }

    const getItem = async (key) => {
        if (!isClient) return;

        try {
            const value = await $localforage.getItem(key);
            return value;
        } catch (err) {
            console.error('Error getting item from localforage:', err)
            return null;
        }
    }

    const removeItem = async (key) => {
        if (!isClient) return;

        try {
            await $localforage.removeItem(key);
        } catch (err) {
            console.error('Error removing item from localforage:', err)
        }
    }

    return {
        setItem,
        getItem,
        removeItem
    }
}