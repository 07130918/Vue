<template>
    <div style="width: 700px; margin: auto; padding-top: 50px;">
        <nav>
            <router-link to="/index" class="link" active-class="link--active" exact>
                Index ->
            </router-link>
            <router-link to="/home" class="link" active-class="link--active" exact>
                Home ->
            </router-link>
            <router-link to="/users" class="link" active-class="link--active" exact>
                Users ->
            </router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.link {
    margin-right: 20px;
}
.link--active {
    font-size: 24px;
}
</style>
