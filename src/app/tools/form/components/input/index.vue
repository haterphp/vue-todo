<script src="./index.component.ts" ></script>

<template>
    <input 
        :type="$props.type" 
        :name="$props.name"
        :value="value"
        @input="handleOnInput"
        class="px-3 py-2 outline-none border border-slate-500 rounded-lg w-full"
    />
</template>