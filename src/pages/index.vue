<script lang="ts" setup>
const submit = () => {
    // TODO Add submit handler
    console.log('Submit main');
};
</script>

<template>
    <div class="container">
        <FormKit
            :actions="false"
            type="form"
            @submit="submit"
            #default="{value}"
        >
            <div>Content!</div>
        </FormKit>
    </div>
</template>
