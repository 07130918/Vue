<template>
    <div style="width: 700px; margin: auto; padding-top: 50px;">
        <nav>
            <router-link to="/index">Index -></router-link>
            <router-link to="/home">Home -></router-link>
            <router-link to="/users">Users -></router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>
