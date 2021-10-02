export const tokyoNumber = {
    data() {
        return {
            title: "welcome to Tokyo",
            subTitle: "Tokyo is a great city",
            number: 0
        }
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        },
        addExclamation(value) {
            return value + "!!!"
        }
    }
}
