<script src="./index.component.ts" />

<template>
    <form class="login-form" @submit="handleOnSubmit">
        <FormProvider :state-manager="manager">
            <FormInput name="email" />
        </FormProvider>

        <button type='submit' class="py-2 px-5 rounded-lg bg-slate-500 text-white mt-3">Войти</button>
    </form>
</template>