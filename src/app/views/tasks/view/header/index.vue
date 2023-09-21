<script src="./index.component.ts"></script>

<template>
    <header class="header">
        <h2 class="header__title">{{ prefix }}: {{ title }}</h2>

        <div class="header__toolbar">
            <SearchCompnent />
            <ViewToggle />
        </div>
    </header>
</template>

<style src="./index.styles.css" scoped></style>