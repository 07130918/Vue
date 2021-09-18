<template>
    <div>
        <select :value="value" @change="$emit('input',$event.target.value)">
            <option v-for="selectedLocation in options" :key="selectedLocation" :selected="selectedLocation === value">
                {{ selectedLocation }}
            </option>
        </select>
        <p>{{value}}</p>
    </div>
</template>

<script>
  export default {
    props: ['options','value'],
  }
</script>
