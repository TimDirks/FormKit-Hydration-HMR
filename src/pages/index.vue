<script lang="ts" setup>
//
</script>

<template>
    <div class="container">
        <div class="card">
            <FormKit
                type="form"
                #default="{value}"
            >
                <h1>Please fill in your details below</h1>

                <InputFields />

                <pre>{{ value }}</pre>
            </FormKit>
        </div>
    </div>
</template>

<style>
body {
    background-color: #f2f2f2;
    margin: 0;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10rem 0;
}

.card {
    background-color: #fff;
    border-radius: 1rem;
    padding: 1rem 2rem;
}

pre {
    background-color: #eceded;
    padding: 0.5rem;
    border-radius: 0.5rem;
}
</style>
