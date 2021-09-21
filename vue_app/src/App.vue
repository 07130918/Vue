<template>
    <div style="width: 700px; margin: auto; padding-top: 50px;">
        <nav>
            <router-link to="/index" class="link">Index -></router-link>
            <router-link to="/home" class="link">Home -></router-link>
            <router-link to="/users" class="link">Users -></router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.link {
    margin-right: 20px;
}
</style>
