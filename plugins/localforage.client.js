import localforage from "localforage";

export default defineNuxtPlugin(() => {
    localforage.config({
        name: 'course',
        storeName: 'course_list'
    });

    return {
        provide: {
            localforage
        }
    }
});