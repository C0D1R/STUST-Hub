<template>
    <div class="min-h-screen min-w-screen flex flex-col">
        <Header />

        <main
            class="flex-grow w-full px-3 sm:px-5 max-w-screen-xl xl:px-0 xl:mx-auto"
        >
            <slot></slot>
        </main>

        <Footer />
    </div>
</template>
