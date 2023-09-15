<script src="./index.component.ts"></script>

<template>
    <div class="tree">
        <div class="tree__item" @click="handleItemClick">
            <p class="item__title">
                {{ title }}
            </p>

            <fa-icon 
                v-if="children.length" 
                icon="fa-solid fa-chevron-down" 
                class="item__icon"
                :rotation="isOpen ? 180 : 0"
                @click="handleTooggleCollapse"
            />
        </div>
        <Transition>
            <div v-if="children.length && isOpen" class="tree__children">
                <TreeComponent v-for="child of children" :content="child" />
            </div>
        </Transition>
    </div>
</template>

<style src="./index.style.css" scoped></style>