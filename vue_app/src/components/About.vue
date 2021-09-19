<template>
    <div>
        <p v-originalName:[argument].shadow="{width: '10px', color: 'blue'}">This is About.vue</p>
        <input type="text" placeholder="keep alive!!!">
    </div>
</template>

<script>
export default {
    // keep-aliveによって生まれる新たなライフサイクル
    deactivated() {
        console.log("About: deactivated")
    },
    activated() {
        console.log("About: activated")
    },
    data() {
        return {
            argument: 'dotted'
        }
    },
    // カスタムディレクティブのローカル登録
    directives: {
        originalName(el, binding) {
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            binding.arg === 'dotted' ? 'dotted' : 'solid'
            el.style.borderStyle = binding.arg;

            if (binding.modifiers.round) {
                el.style.borderRadius = "0.5rem"
            }
            if (binding.modifiers.shadow) {
                el.style.boxShadow = "0 2px 5px rgb(0, 0, 0)"
            }
        }
    }
}
</script>
