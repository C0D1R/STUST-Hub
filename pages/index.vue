<template>
    <div>
        <p
            class="flex flex-wrap gap-x-4 gap-y-2 py-8 justify-center mb-4 sm:gap-x-6"
        >
            <span class="text-5xl font-bold text-center">STUST HUB</span>
            <span class="flex gap-x-2 justify-center items-center">
                <!-- grid grid-cols-2 gap-x-2 -->
                是由
                <span
                    class="text-xl font-bold p-2 bg-gray-800 rounded-lg sm:px-3 md:px-4"
                >
                    學生
                </span>
                自製的
                <span
                    class="text-xl font-bold p-2 bg-gray-800 rounded-lg sm:px-3 md:px-4"
                >
                    非官方工具
                </span>
            </span>
        </p>
        <!-- <p>也可以一覽校園裡的所有社團</p> -->
        <CourseStatsSummary />
    </div>
</template>
