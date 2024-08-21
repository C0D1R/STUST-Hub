<template>
    <div :class="styles.container">
        <div
            v-for="timeGroup in timeField.options"
            :key="timeGroup.id"
            :class="styles.timeGroup"
        >
            <label
                v-for="option in timeGroup.group"
                :key="option.id"
                :class="styles.getOptionLabel"
            >
                <input
                    :name="timeField.name"
                    :type="option.type"
                    :value="option.value"
                    class="sr-only"
                />
                {{ option.context }}
            </label>
        </div>
    </div>
</template>

<script setup>
defineProps({
    timeField: {
        type: Object,
        require: true,
    },
});

const styles = computed(() => ({
    container: [
        "grid grid-col-1 gap-y-3 py-2 px-2",
        "md:grid-cols-8 md:gap-x-2",
        "lg:grid-cols-1 lg:gap-y-2",
    ],
    timeGroup: [
        "grid grid-cols-5 gap-2 first-of-type:hidden",
        "sm:grid-cols-7",
        "md:first-of-type:grid md:grid-cols-1 md:gap-y-2",
        "lg:grid-cols-[repeat(15,minmax(0,3.75rem))] lg:gap-x-2",
    ],
    getOptionLabel: [
        "grid place-items-center rounded-lg border border-blue-500 py-1.5 text-blue-500",
        "hover:cursor-pointer",
        "has-[:checked]:bg-blue-500 has-[:checked]:text-white",
        "first-of-type:col-span-full lg:first-of-type:col-auto",
    ],
}));
</script>
