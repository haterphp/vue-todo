<script src="./index.component.ts"></script>

<template>
    <Chapter title="Проекты">
        <template #toolbar>
            <button v-button="{ color: 'secondary', size: 'small' }">+</button>
        </template>
        <Tree :content="treeContent" />
    </Chapter>
</template>