<template>
    <label
        :class="styles.container"
        :style="styles.getRowStyle(optionRowPosition)"
    >
        <input
            :type="optionType"
            :name="optionName"
            :value="optionValue"
            :checked="optionIsChecked"
            class="sr-only"
        />
        {{ optionContext }}
    </label>
</template>

<script setup>
defineProps({
    optionName: {
        type: String,
        require: true,
    },
    optionType: {
        type: String,
        require: true,
    },
    optionValue: {
        type: String,
        require: true,
    },
    optionContext: {
        type: String,
        require: true,
    },
    optionIsChecked: {
        type: Boolean,
        require: true,
    },
    optionRowPosition: {
        type: String,
        require: false,
    },
});

const styles = computed(() => ({
    container: [
        "m-2 block min-w-[4.875rem] rounded-lg border border-blue-500 px-3.5 py-1.5 text-center text-blue-500",
        "hover:cursor-pointer",
        "has-[:checked]:bg-blue-500 has-[:checked]:text-white",
        "max-lg:!row-start-auto",
    ],
    getRowStyle: (row) => (row ? { gridRowStart: row } : undefined),
}));
</script>
