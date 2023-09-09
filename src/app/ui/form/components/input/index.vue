<script src="./index.component.ts" ></script>

<template>
    <div class="input" :class="{ 'focused': isFocused, 'failed': isError }">
        <label v-if="$props.label !== undefined" class="input__label">{{ $props.label }}</label>
        <input 
            :type="$props.type" 
            :name="$props.name"
            :value="value"
            :placeholder="$props.placeholder"
            @input="handleOnInput"
            @focus="handleOnFocus('focus')"
            @blur="handleOnFocus('blur')"
            class="input__field"
        />
        <span v-if="!isError && $props.feedback !== undefined" class="input__feedback">{{ $props.feedback }}</span>
        <span v-else-if="isError" class="input__feedback">{{ errorMessage }}</span>
    </div>
</template>

<style src="./index.styles.css"></style>