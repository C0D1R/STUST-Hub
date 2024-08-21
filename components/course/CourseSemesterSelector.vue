<template>
    <div class="relative">
        <button
            @click="toggleMenu"
            class="px-4 py-1.5 border border-blue-500 rounded-md text-blue-500"
        >
            {{ selectedSemester.text }}
        </button>
        <div
            v-show="isMenuOpen"
            @click="closeMenu"
            class="fixed inset-0 bg-black/50"
        />
        <section
            v-show="isMenuOpen"
            @click="handleOptionClick"
            :class="[
                'max-w-screen-md fixed inset-x-0 mx-3 bg-gray-800 border dark:border-gray-100/15 rounded-lg grid grid-cols-1 px-4 pt-2 pb-4 gap-y-2',
                'sm:grid-cols-3 sm:gap-x-2 sm:mx-5',
                'md:mx-auto',
            ]"
        >
            <h3
                class="text-center font-bold text-black/60 col-span-full dark:text-white"
            >
                學期
            </h3>
            <button
                v-for="option in semesterOptions"
                :key="option.value"
                :value="option.value"
                class="px-4 py-1.5 border border-blue-500 text-blue-500 rounded-md"
            >
                {{ option.text }}
            </button>
        </section>
    </div>
</template>

<script setup>
const semesterOptions = [
    { value: "113-1", text: "113 年上學期" },
    { value: "112-2", text: "112 年下學期" },
    { value: "112-1", text: "112 年上學期" },
    { value: "111-2", text: "111 年下學期" },
    { value: "111-1", text: "111 年上學期" },
];

const courseSemesterStore = useCourseSemesterStore();
const { semester } = storeToRefs(courseSemesterStore);

const selectedSemester = computed(() => {
    return (
        semesterOptions.find((option) => option.value === semester.value) ||
        semesterOptions[0]
    );
});

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const closeMenu = () => (isMenuOpen.value = false);

const route = useRoute();
const router = useRouter();

const changeSemester = (option) => {
    courseSemesterStore.setSemester(option.value);
    closeMenu();

    const [year, semester] = option.value.split("-");
    const currentPath = route.path.split("/");
    const pageType = currentPath[4];
    router.push(`/course/${year}/${semester}/${pageType}`);
};

const handleOptionClick = (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON" && target.value) {
        const option = semesterOptions.find(
            (option) => option.value === target.value
        );
        if (option) {
            changeSemester(option);
        }
    }
};

const handleEscKey = (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
};

watch(isMenuOpen, (newValue) => {
    if (newValue) {
        document.addEventListener("keydown", handleEscKey);
    } else {
        document.removeEventListener("keydown", handleEscKey);
    }
});

onUnmounted(() => {
    document.removeEventListener("keydown", handleEscKey);
});
</script>
