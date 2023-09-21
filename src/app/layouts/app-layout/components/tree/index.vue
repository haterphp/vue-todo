<script src="./index.component.ts"></script>

<template>
    <div class="tree">
        <div class="tree__item" :class="{ 'active' : isActive }" @click="handleItemClick">
            <fa-icon 
                v-if="children.length" 
                icon="fa-solid fa-caret-down" 
                class="item__icon"
                :rotation="isOpen ? 180 : 0"
            />
            
            <fa-icon
                v-if="iconByType.length"
                :icon="iconByType"
                class="item__icon"
            />

            <p class="item__title">
                {{ title }}
            </p>
        </div>
        <Transition>
            <div v-if="children.length && isOpen" class="tree__children">
                <TreeComponent v-for="child of children" :content="child" />
            </div>
        </Transition>
    </div>
</template>

<style src="./index.style.css" scoped></style>