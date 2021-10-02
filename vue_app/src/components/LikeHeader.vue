<template>
    <div>
        <slot name="title" :user="user" text="このように任意の属性を作り親コンポーネントに渡せる">
            フォールバックコンテンツ(何もない時に表示されるコンテンツ)
        </slot>
        <slot name="num"></slot>
        <slot name="num"></slot>
        <p>{{ headerText }}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ["headerText"],
        data() {
            return {
                user: {
                    firstName: "Jack",
                    lastName: "Donald"
                }
            }
        }
    }
</script>
