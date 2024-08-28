<template>
    <section
        :class="[
            'bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full',
            courseField.key === 'exams' ? 'sm:col-auto' : '',
            courseField.key === 'textbook' ? 'sm:col-auto' : '',
        ]"
    >
        <h2 class="text-lg font-bold">
            {{ courseField.caption }}
        </h2>

        <template v-if="courseField.key === 'certificationsSupport'">
            <ol>
                <li
                    v-for="(certification, index) in course[courseField.key]"
                    class="flex gap-x-2"
                >
                    <span>{{ index + 1 }}.</span>
                    <span>{{ certification }}</span>
                </li>
            </ol>
        </template>

        <template v-else-if="courseField.key === 'teachingAndAssessment'">
            <div
                class="grid grid-cols-1 gap-y-2 text-center sm:gap-y-0 sm:border sm:border-gray-100/15 sm:rounded-md"
            >
                <div
                    v-for="teachingAndAssessment in course.teachingAndAssessment"
                    :class="[
                        'border border-gray-100/15 rounded-md',
                        'sm:grid sm:grid-cols-2 sm:border-t-0 sm:border-x-0 sm:last-of-type:border-b-0 sm:rounded-none',
                    ]"
                >
                    <p
                        class="grid items-center border-b p-2 border-gray-100/15 sm:border-b-0 sm:text-left"
                    >
                        {{ teachingAndAssessment.objective }}
                    </p>
                    <div class="grid grid-cols-3">
                        <p
                            v-for="method in teachingAndAssessment.teachingMethods"
                            class="grid items-center p-2 border-r border-gray-100/15 sm:border-r-0"
                        >
                            {{ method }}
                        </p>
                        <div class="col-span-2">
                            <div
                                v-for="item in teachingAndAssessment.assessmentMethods"
                                class="grid grid-cols-2 p-2 gap-x-2 border-b border-gray-100/15 last-of-type:border-b-0 sm:border-b-0"
                            >
                                <p>{{ item.method }}</p>
                                <p>{{ item.type }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else-if="courseField.key === 'syllabus'">
            <p v-for="syllabus in courseField.sub">
                <SafeHtml :content="course[courseField.key][syllabus.key]" />
            </p>
        </template>

        <template v-else-if="courseField.key === 'exams'">
            <div class="grid grid-rows-3">
                <section
                    v-for="exams in courseField.sub"
                    class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0"
                >
                    <h3>{{ exams.caption }}</h3>
                    <p class="col-span-3">
                        {{ course[courseField.key][exams.key] }}
                    </p>
                </section>
            </div>
        </template>

        <template v-else-if="courseField.key === 'textbook'">
            <div class="">
                <section
                    v-for="exams in courseField.sub"
                    class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0"
                >
                    <h3>{{ exams.caption }}</h3>
                    <p class="col-span-3">
                        {{ course[courseField.key][exams.key] }}
                    </p>
                </section>
            </div>
        </template>

        <template v-else>
            <p>
                <SafeHtml :content="course[courseField.key]" />
            </p>
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
</script>
