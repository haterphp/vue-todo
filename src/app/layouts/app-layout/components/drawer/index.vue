<script src="./index.component.ts"></script>

<template>
    <div>
        <div class="drawer__header">
            <h2 class="header__title">Моё пространство</h2>
        </div>
        <div class="drawer__chapters">
            <div class="chapter">
                <div class="chapter__header">
                    <h3 class="chapter__title">Проекты</h3>
                    <button v-button="{ color: 'secondary', size: 'small' }">+</button>
                </div>
                <div class="chapter__content">
                    <div class="chapter__item">
                        Ipst Projects
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./index.style.css" scoped></style>