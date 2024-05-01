<template>
    <label
        class="flex items-center justify-center rounded-lg border border-blue-500 text-blue-500 hover:cursor-pointer has-[:checked]:bg-blue-500 has-[:checked]:text-white"
    >
        <input
            :type="inputType"
            :name="inputName"
            :value="inputValue"
            :ref="inputRef"
            class="sr-only"
        />
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
        inputRef: {
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
