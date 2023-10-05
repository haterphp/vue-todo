<script src="./index.component.ts"></script>

<template>
    <main class="w-full h-full pl-10">
        <TasksHeader />
        <component :is="ComponentByVariant" class="pt-5" />
    </main>
</template>