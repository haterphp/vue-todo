<script src="./index.component.ts"/>

<template>
    <div class="layout_auth">
        <div class="container">
            <h2 class="container__logo"><span>#Todo</span>List</h2>
            
            <h1 class="container__text">Вход в систему</h1>

            <router-view class="container__form" name="form" />

            <router-view class="container__links" name="links" />
        </div>
    </div>
</template>

<style src="./index.styles.css" />