<template>
    <div>
        <button
            class="w-10 h-10 grid place-items-center border border-gray-100/15 rounded-md"
            @click="toggleColorMode"
        >
            {{ colorModeIcon }}
        </button>
    </div>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
    colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};

const colorModeIcon = computed(() => {
    return colorMode.preference === "light" ? "🌙" : "🌞";
});
</script>
