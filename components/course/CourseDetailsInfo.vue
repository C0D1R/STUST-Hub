<template>
    <section
        :class="[
            'bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center',
            'sm:flex-col sm:items-start sm:gap-y-2',
            courseField.key === 'schedule' ? 'sm:col-span-full' : '',
            courseField.key === 'classes' ? 'sm:col-span-full' : '',
            courseField.key === 'instructors' ? 'sm:col-span-full' : '',
            courseField.key === 'languages' ? 'sm:col-span-2' : '',
        ]"
    >
        <h2 class="text-lg font-bold text-nowrap">
            {{ courseField.caption }}
        </h2>

        <template
            v-if="
                courseField.key === 'instructors' ||
                courseField.key === 'classes'
            "
        >
            <div
                :class="[
                    // 'sm:flex sm:flex-wrap sm:gap-x-3 sm:gap-y-2',
                    'sm:grid sm:gap-2 sm:text-center',
                    'w-full grid grid-cols-1 gap-2 text-center',

                    courseField.key === 'instructors' ? 'sm:grid-cols-3' : '',
                    courseField.key === 'classes' ? 'sm:grid-cols-3' : '',
                ]"
            >
                <NuxtLink
                    v-for="item in course[courseField.key]"
                    :to="
                        courseField.key === 'instructors'
                            ? routes.instructor(item)
                            : routes.class(item)
                    "
                >
                    <p class="bg-gray-700 py-2 px-2 rounded-md">
                        {{ item }}
                    </p>
                </NuxtLink>
            </div>
        </template>

        <template v-else-if="courseField.key === 'schedule'">
            <div class="w-full flex flex-col gap-y-2">
                <p
                    v-for="schedule in course[courseField.key]"
                    class="grid grid-cols-2 text-center sm:grid-cols-3"
                >
                    <NuxtLink
                        :to="routes.weekday(schedule.day)"
                        :class="[
                            'bg-gray-700 py-2 px-2',
                            'rounded-tl-md border-r border-gray-100/15',
                            'sm:rounded-l-md sm:border-r-0 sm:px-4',
                        ]"
                    >
                        {{ schedule.day }}
                    </NuxtLink>
                    <NuxtLink
                        :to="routes.period(schedule.period)"
                        :class="[
                            'bg-gray-700 py-2 px-2',
                            'rounded-tr-md',
                            'sm:rounded-none sm:border-x sm:border-gray-100/15 sm:px-4',
                        ]"
                    >
                        {{ schedule.period }}
                    </NuxtLink>
                    <NuxtLink
                        :to="routes.location(schedule.location)"
                        :class="[
                            'bg-gray-700 py-2 px-2 col-span-2',
                            'rounded-b-md border-t border-gray-100/15',
                            'grid place-items-center',

                            'sm:px-4 sm:col-auto sm:border-t-0 sm:rounded-b-none sm:rounded-r-md',
                        ]"
                    >
                        {{ schedule.location }}
                    </NuxtLink>
                </p>
            </div>
        </template>

        <template v-else-if="courseField.key === 'languages'">
            <div
                :class="[
                    'sm:flex sm:flex-wrap',
                    'w-full grid grid-cols-1 gap-2 text-center',
                ]"
            >
                <NuxtLink
                    v-for="item in course[courseField.key]"
                    :to="routes.language(item)"
                >
                    <p class="bg-gray-700 py-2 px-2 rounded-md sm:px-4">
                        {{ item }}
                    </p>
                </NuxtLink>
            </div>
        </template>

        <template v-else-if="courseField.key === 'certificationsSupport'">
            <div :class="['sm:flex sm:flex-wrap sm:gap-2']">
                <p v-for="item in course[courseField.key]">
                    {{ item }}
                </p>
            </div>
        </template>

        <template v-else-if="courseField.key === 'hours'">
            <div
                class="w-full grid grid-rows-2 items-center border border-gray-100/15 rounded-md text-center"
            >
                <section
                    v-for="hours in courseField.sub"
                    :class="[
                        'grid grid-cols-2 py-1 border-b border-gray-100/15 last-of-type:border-b-0',
                    ]"
                >
                    <h3>
                        {{ hours.caption }}
                    </h3>
                    <p>
                        {{ course[courseField.key][hours.key] }}
                    </p>
                </section>
            </div>
        </template>

        <template v-else>
            <p class="">{{ course[courseField.key] }}</p>
        </template>
    </section>
</template>

<script setup>
defineProps({
    courseField: {
        type: Object,
        require: true,
    },
    course: {
        type: Object,
        require: true,
    },
});

const { routes } = useCourseRoutes();
</script>
