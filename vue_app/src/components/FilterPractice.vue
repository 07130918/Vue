<template>
    <div>
        <h2>{{ title | upperCase }}</h2>
        <p>{{ subTitle | upperCase}}</p>
        <p>{{ subTitle | lowerCase | addExclamation}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "welcome to Tokyo",
            subTitle: "Tokyo is a great city"
        }
    },
    // フィルターのローカル登録
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        },
        addExclamation(value) {
            return value + "!!!"
        }
    }
}
</script>
