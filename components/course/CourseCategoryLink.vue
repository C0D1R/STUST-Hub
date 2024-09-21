<template>
    <NuxtLink :to="to" class="block bg-gray-800 p-4 rounded-md">
        <h2 class="font-bold text-lg">{{ text }}</h2>
        <p class="text-sm text-gray-100/55">{{ description }}</p>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
</script>
