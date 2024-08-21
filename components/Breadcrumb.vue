<template>
    <nav aria-label="Breadcrumb">
        <ol>
            <li v-for="crumb in breadcrumbs" :key="crumb.to">
                <NuxtLink :to="crumb.to">{{ crumb.text }}</NuxtLink>
            </li>
        </ol>
    </nav>
</template>

<script setup>
const route = useRoute();
const breadcrumbs = computed(() => {
    const pathArray = route.path.split("/").filter(Boolean);
    return [
        { text: "首頁", to: "/" },
        ...pathArray.map((path, index) => {
            const fullPath = "/" + pathArray.slice(0, index + 1).join("/");
            const matchedRoute = route.matched.find((r) => r.path === fullPath);

            return {
                text:
                    matchedRoute?.meta?.breadcrumb ||
                    path.charAt(0).toUpperCase() + path.slice(1),
                to: index === pathArray.length - 1 ? null : fullPath,
            };
        }),
    ].filter((crumb) => crumb.text);
});
</script>
