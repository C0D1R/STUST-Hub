<template>
    <div class="mb-4">
        <section>
            <h2 class="flex flex-col text-center py-8">
                <span class="text-lg">
                    {{ yearAndSem }}
                </span>
                <span class="text-2xl font-bold">選課時間與流程</span>
            </h2>

            <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                <section
                    v-for="selection in courseSelection.events"
                    class="flex flex-col gap-y-2 p-4 bg-gray-800 border border-gray-100/15 rounded-lg"
                >
                    <h3 class="text-xl font-bold text-center">
                        {{ selection.title }}
                    </h3>
                    <p class="flex justify-center items-center gap-x-2">
                        <span class="flex gap-x-2">
                            <span class="self-end text-sm text-gray-100/55">
                                {{ selection.startTime }}
                            </span>
                            <span class="text-2xl">
                                {{ selection.startDate }}
                            </span>
                        </span>
                        <span class="text-lg">~</span>
                        <span class="flex gap-x-2">
                            <span class="text-2xl">
                                {{ selection.endDate }}
                            </span>
                            <span class="self-end text-sm text-gray-100/55">
                                {{ selection.endTime }}
                            </span>
                        </span>
                    </p>
                    <p class="pt-2 border-t border-gray-100/15">
                        {{ selection.description }}
                    </p>
                </section>
            </div>
        </section>
    </div>
</template>

<script setup>
// const courseSemesterStore = useCourseSemesterStore();
// const { semester } = storeToRefs(courseSemesterStore);

const courseSelection = ref(null);

const yearAndSem = computed(() => {
    const [year, sem] = courseSelection.value.semester.split("-");
    return `${year} 學年 第 ${sem} 學期`;
});

const selectionData = [
    {
        semester: "113-1",
        events: [
            {
                startDate: "08.29",
                startTime: "09:00",
                endDate: "09.03",
                endTime: "23:00",
                title: "第一階段選課",
                description:
                    "在第一階段選課時，是以抽籤為主，同學們只要在選課系統中選擇課程。",
            },
            {
                startDate: "09.04",
                startTime: "",
                endDate: "09.04",
                endTime: "",
                title: "公告結果",
                description: "公告第一階段抽籤選課的結果。",
            },
            {
                startDate: "09.05",
                startTime: "09:00",
                endDate: "09.08",
                endTime: "23:00",
                title: "第二階段選課",
                description:
                    "第二階段選課期間，在學分未達上限 ( 25 學分 ) 的情況下，能夠自由加選與退選。若學分達上限，則需要將已選課程退選，才能對其他課程進行加選。",
            },
            {
                startDate: "09.13",
                startTime: "09:00",
                endDate: "09.16",
                endTime: "23:00",
                title: "加退選",
                description:
                    "此階段大致與第二階段選課的方式相同，在學分未達上限 ( 25 學分 ) 的情況下，能夠在選課系統中自由加退選。若學分達上限，則需要將已選課程退選，才能對其他課程進行加選。在此階段除了自由選課外，還有開放各課程的人工加選。",
            },
            {
                startDate: "11.18",
                startTime: "09:00",
                endDate: "11.29",
                endTime: "23:00",
                title: "課程停修申請",
                description:
                    "在課程停修申請的期間內，可以在選課系統中進行課程的停休申請。",
            },
        ],
    },
];

// courseSelection.value = selectionData.find(
//     (selection) => selection.semester === semester.value
// );
courseSelection.value = selectionData[0];
</script>
