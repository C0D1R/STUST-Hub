export const useCourseFilterStore = defineStore("courseFilter", () => {
    const courseFilterParams = ref({})

    const initFilterParams = (formFields) => {
        formFields.value.forEach((field) => {
            if (field.type === 'radio') {
                const checkedOption = field.options.find((option) => option.checked)
                courseFilterParams.value[field.name] = checkedOption.value
            } else if (field.type === 'checkbox' | field.id === 'time') {
                courseFilterParams.value[field.name] = field.options
                    .filter((option) => option.checked)
                    .map((option) => option.value)
            }
        })

        return courseFilterParams
    }

    const onFilterOptionsChange = (e) => {
        const { type, name, value, checked } = e.target;
    
        if (type === "radio") {
            courseFilterParams.value[name] = value;
        } else if (type === "checkbox") {
            if (checked) {
                courseFilterParams.value[name].push(value);
            } else {
                courseFilterParams.value[name] = courseFilterParams.value[name].filter(
                    (val) => val !== value
                );
            }
        }
    }

    return {
        courseFilterParams,
        initFilterParams,
        onFilterOptionsChange
    }
});