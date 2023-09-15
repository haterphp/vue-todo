<script src="./index.component.ts"></script>

<template>
    <div class="chapter">
        <div class="chapter__header">
            <h2 class="chapter__title">{{ $props.title }}</h2>
            <slot name="toolbar"></slot>
        </div>
        <div class="chapter__content">
            <slot></slot>    
        </div>
    </div>
</template>

<style src="./index.styles.css" scoped></style>