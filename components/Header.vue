<template>
    <header class="bg-gray-800 border-b border-gray-100/15 mb-4">
        <div
            class="relative flex items-center justify-between gap-x-4 p-2 max-w-screen-2xl mx-auto"
        >
            <div class="flex flex-row-reverse gap-x-2">
                <h1>
                    <NuxtLink to="/" class="link">STUST HUB</NuxtLink>
                </h1>

                <button
                    @click="toggleMenu"
                    class="w-10 h-10 grid place-items-center border border-gray-100/15 rounded-md lg:hidden"
                >
                    <span class="sr-only">打開選單</span>
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <nav
                v-show="isMenuOpen"
                class="z-10 fixed inset-0 bg-gray-800 px-2 lg:static lg:!block"
            >
                <div
                    class="flex flex-row-reverse gap-x-2 py-2 justify-end lg:hidden"
                >
                    <NuxtLink to="/" class="link">STUST HUB</NuxtLink>

                    <button
                        @click="closeMenu"
                        class="w-10 h-10 grid place-items-center border border-gray-100/15 rounded-md"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
                <ul class="lg:flex" @click="handleNavClick">
                    <li
                        v-for="link in links"
                        :key="link.to"
                        class="border-t last-of-type:border-b border-gray-100/15 lg:border-0 lg:last-of-type:border-b-0"
                    >
                        <NuxtLink
                            :to="link.to"
                            class="grid place-items-center px-4 py-3"
                        >
                            {{ link.text }}
                        </NuxtLink>
                    </li>
                </ul>

                <!-- <ColorModeToggle /> -->
            </nav>

            <!-- <div
                v-show="isMenuOpen"
                @click="closeMenu"
                class="z-10 fixed inset-0 bg-black/50"
            /> -->
        </div>
    </header>
</template>

<script setup>
const courseSemesterStore = useCourseSemesterStore();
const { year, sem } = storeToRefs(courseSemesterStore);

const baseCourseUrl = computed(() => `/course/${year.value}/${sem.value}`);
const links = computed(() => {
    return [
        { text: "選課資訊", to: `${baseCourseUrl.value}/selection-info` },
        { text: "搜尋課程", to: `${baseCourseUrl.value}/search` },
        { text: "班級探索", to: `${baseCourseUrl.value}/class` },
        { text: "教師探索", to: `${baseCourseUrl.value}/instructor` },
        { text: "語言探索", to: `${baseCourseUrl.value}/language` },
        { text: "地點探索", to: `${baseCourseUrl.value}/location` },
        { text: "時間探索", to: `${baseCourseUrl.value}/schedule` },

        { text: "關於作者", to: "/about" },
    ];
});

const isMenuOpen = ref(false);
const scrollPosition = ref(0);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    updateBodyStyle(isMenuOpen.value);
};
const closeMenu = () => {
    isMenuOpen.value = false;
    updateBodyStyle(isMenuOpen.value);
};

const menuOpenClass = ["!overflow-y-scroll", "fixed", "bottom-0", "inset-x-0"];
const updateBodyStyle = (isOpen) => {
    if (isOpen) {
        scrollPosition.value = window.scrollY;

        document.body.style.overflow = "hidden";
        document.body.style.top = `-${scrollPosition.value}px`;
        document.body.classList.add(...menuOpenClass);
    } else {
        document.body.style.overflow = "";
        document.body.style.top = "";
        document.body.classList.remove(...menuOpenClass);

        nextTick(() => window.scrollTo(0, scrollPosition.value));
    }
};

onUnmounted(() => updateBodyStyle(false));

const handleNavClick = (event) => {
    if (event.target.tagName === "A") {
        closeMenu();
    }
};
</script>

<style scoped>
.link {
    @apply grid place-items-center min-h-10 px-4 border border-gray-100/15 rounded-md;
}
</style>
