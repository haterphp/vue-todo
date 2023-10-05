<script src="./index.component.ts"></script>

<template>
    <Chapter title="Проекты">
        <template #toolbar>
            <button v-button="{ color: 'secondary', size: 'small' }">
                <fa-icon icon="fa-solid fa-plus" class="text-slate-500" />
            </button>
        </template>
        <Tree :content="treeContent" />
    </Chapter>
</template>