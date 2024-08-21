<template>
    <span v-if="isHTML" v-html="sanitizedContent"></span>
    <span v-else>{{ content }}</span>
</template>

<script setup>
// import DOMPurify from "dompurify";
const DOMPurify = ref(null);
if (import.meta.client) {
    import("dompurify").then((module) => {
        DOMPurify.value = module.default;
    });
}

const props = defineProps({
    content: {
        type: String,
        required: true,
    },
});

const isHTML = computed(() => {
    if (import.meta.server) {
        // 服務器端的簡單檢查
        return /<[a-z][\s\S]*>/i.test(props.content);
    } else {
        // 客戶端的嚴格檢查
        const doc = new DOMParser().parseFromString(props.content, "text/html");
        return Array.from(doc.body.childNodes).some(
            (node) => node.nodeType === 1
        );
    }
});

const sanitizedContent = computed(() => {
    if (import.meta.server) {
        // 在服務器端，我們只返回原始內容
        return props.content;
    } else if (DOMPurify.value && isHTML.value) {
        // 在客戶端，如果 DOMPurify 已加載且內容是 HTML，則進行淨化
        return DOMPurify.value.sanitize(props.content);
    } else {
        // 如果 DOMPurify 未加載或內容不是 HTML，直接返回內容
        return props.content;
    }
});
</script>
