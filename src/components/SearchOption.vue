<template>
    <label
        class="m-1.5 block min-w-[4.875rem] rounded-2xl border border-blue-500 px-3.5 py-1 text-center text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white"
    >
        <input :type="inputType" :name="inputName" :value="inputValue" class="sr-only" />
        {{ inputText }}
    </label>
</template>

<script>
export default {
    props: {
        inputType: {
            type: String,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        inputValue: {
            type: String,
            required: true
        },
        inputText: {
            type: String,
            required: true
        }
    }
}
</script>
