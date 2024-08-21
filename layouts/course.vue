<template>
    <div class="min-h-screen min-w-screen flex flex-col">
        <Header />

        <div
            class="flex-grow w-full px-3 sm:px-5 max-w-screen-xl xl:px-0 xl:mx-auto"
        >
            <div class="flex justify-between mb-4 before:content-normal">
                <!-- <Breadcrumb /> -->
                <CourseSemesterSelector />
            </div>

            <main>
                <slot></slot>
            </main>
        </div>

        <Footer />
    </div>
</template>
