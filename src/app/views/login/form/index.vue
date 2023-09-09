<script src="./index.component.ts" />

<template>
    <form class="login-form" @submit="handleOnSubmit">
        <div class="flex flex-col gap-2">
            <FormProvider :state-manager="manager">
                <FormInput label="Email" name="email" />
                <FormInput type="password" label="Пароль" name="password" />
            </FormProvider>
        </div>

        <button 
            type='submit' 
            class="mt-5 w-full" 
            v-button="{ color: 'primary' }"
        >
            Войти
        </button>
    </form>
</template>