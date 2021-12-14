<template>
    <div style="width: 700px; margin: auto; padding-top: 50px;">
        <router-view name="header"></router-view>
        <nav>
            <router-link to="/index" class="link" active-class="link--active" exact>
                Index ->
            </router-link>
            <router-link to="/pset" class="link" active-class="link--active" exact>
                Pset ->
            </router-link>
            <router-link to="/home" class="link" active-class="link--active" exact>
                Home ->
            </router-link>
            <router-link to="/users/1" class="link" active-class="link--active" exact>
                Users ->
            </router-link>
        </nav>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style scoped>
.link {
    margin-right: 20px;
}
.link--active {
    font-size: 24px;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
</style>
