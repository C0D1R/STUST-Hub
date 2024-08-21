<template>
    <section
        :class="[
            'bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full',
            courseField.key === 'exams' ? 'sm:col-auto' : '',
            courseField.key === 'textbook' ? 'sm:col-auto' : '',
        ]"
    >
        <h2 class="text-lg font-bold">{{ courseField.caption }}</h2>

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
            <div class="grid grid-cols-1 gap-y-2">
                <div
                    v-for="teachingAndAssessment in course.teachingAndAssessment"
                    class="px-2 border border-gray-100/15 rounded-md"
                >
                    <p class="border-b py-1 border-gray-100/15">
                        {{ teachingAndAssessment.objective }}
                    </p>
                    <div class="grid grid-cols-3 gap-x-4 py-1 items-center">
                        <p
                            v-for="method in teachingAndAssessment.teachingMethods"
                        >
                            {{ method }}
                        </p>
                        <div class="col-span-2">
                            <div
                                v-for="item in teachingAndAssessment.assessmentMethods"
                                class="grid grid-cols-2 py-1 border-b border-gray-100/15 first-of-type:pt-0 last-of-type:pb-0 last-of-type:border-none"
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
                    class="grid grid-cols-4 py-1 border-b border-gray-100/15 last-of-type:border-b-0"
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
                    class="grid grid-cols-4 py-1 border-b border-gray-100/15 last-of-type:border-b-0"
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
