<template>
    <div>
        <ul
            class="grid grid-cols-1 gap-2 mb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            <li v-for="link in links">
                <CourseCategoryLink
                    :to="link.to"
                    :text="link.text"
                    :description="link.description"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
const route = useRoute();

useSeoMeta({
    title: `語言探索 | STUST HUB`,
    ogTitle: `語言探索 | STUST HUB`,
    description: `立即查看 STUST HUB 提供的語言探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期所有課程所使用到的語言。`,
    ogDescription: `立即查看 STUST HUB 提供的語言探索頁面！在這裡，您可以快速找到南台科技大學 ${route.params.year} 學年第 ${route.params.sem} 學期所有課程所使用到的語言。`,
});

const languages = ref([
    "華語",
    "英語",
    "◎全程外語教學",
    "台語",
    "其他",
    "日語",
    "西班牙語",
]);

const links = computed(() =>
    languages.value.map((language) => ({
        text: language,
        description: `查看採用${language}授課的相關課程`,
        to: `${route.path}/${language}`,
    }))
);
</script>
