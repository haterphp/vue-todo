<script src="./index.component.ts"></script>

<template>
    <div class="page">
        <AppDrawer class="page__drawer" />
        <div class="page__container">
            <router-view />
        </div>
    </div>
</template>

<style src="./index.style.css" scoped></style>