<template>
    <div :class="styles.form" @change="onFilterOptionsChange">
        <section
            v-for="field in formFields"
            :key="field.id"
            :class="styles.section"
        >
            <h3 :class="styles.caption">{{ field.caption }}</h3>
            <div :class="styles.getOptionContainer(field)">
                <template v-if="isRegularField(field)">
                    <CourseFilterOption
                        v-for="option in field.options"
                        :key="option.id"
                        :option-type="field.type"
                        :option-name="field.name"
                        :option-value="option.value"
                        :option-context="option.context"
                        :option-is-checked="option.checked"
                        :option-row-position="option.row"
                    />
                </template>
                <template v-else>
                    <CourseFilterTimeOptions
                        :class="styles.timeFilter"
                        :time-field="field"
                    />
                </template>
            </div>
        </section>
    </div>
</template>

<script setup>
const { formFields } = useCourseFilterForm();
const { initFilterParams, onFilterOptionsChange } = useCourseFilterStore();

initFilterParams(formFields);

const isRegularField = (field) => field.id !== "time";

const styles = computed(() => ({
    form: [
        "mb-4 rounded-2xl border",
        "dark:border-gray-100/15 dark:bg-gray-800",
    ],
    section: [
        "mx-3 border-b ",
        "dark:border-gray-100/15",
        "last:border-b-0",
        "lg:grid lg:grid-cols-[12%,auto] lg:items-center lg:py-1",
    ],
    caption: [
        "pb-1 pt-2 text-center font-bold text-black/60",
        "dark:text-white",
    ],
    getOptionContainer: (field) => {
        // if (field.id === "time") {
        //     return [
        //         "pb-2",
        //         "md:grid md:grid-cols-[repeat(auto-fill,5.625rem)] md:justify-center",
        //         "lg:justify-normal lg:pb-0 lg:pl-2",
        //     ];
        // }
        // return [
        //     "grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2",
        //     "lg:justify-normal lg:pb-0",
        // ];

        return [
            "grid grid-cols-[repeat(auto-fill,5.625rem)] justify-center pb-2",
            "lg:justify-normal lg:pb-0",
        ];
    },
    timeFilter: ["col-span-full row-span-full"],
}));
</script>
