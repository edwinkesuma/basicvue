<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{dark: theme === 'dark'}">
            <slot></slot>
            <slot name="link"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['greeting2', 'theme',],
        methods:{
            closeModal(){
                this.$emit('close')
            }
        }
    }
</script>

<style>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal.dark{
        background: darkgrey;
        color: white;
    }
</style>