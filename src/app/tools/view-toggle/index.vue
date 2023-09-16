<script src="./index.component.ts"></script>

<template>
    <div class="toggle">
        <button 
            class="toggle__button" 
            @click="handleClick(Variants.BOARD)" 
            v-button="{ color: variant === Variants.BOARD ? 'primary' : 'secondary' }"
        >
            <fa-icon icon="fa-solid fa-border-all" class="mr-2" />
            Доска
        </button>

        <button 
            class="toggle__button" 
            @click="handleClick(Variants.LIST)" 
            v-button="{ color: variant === Variants.LIST ? 'primary' : 'secondary' }"
        >
            <fa-icon icon="fa-solid fa-bars-staggered" class="mr-2" />
            Список
        </button>
    </div>
</template>

<style src="./index.style.css" scoped></style>