<script>
export default {
    data: () => ({
        contador: 0,
    }),
    methods: {
        sumar() {
            this.contador++
        },
        restar() {
            this.contador--
        },
        reset() {
            this.contador = 0
        },

    }
}


</script>

<template>
    <div class="container">
        <h1>Contador: {{ contador }}</h1>
        <button class="btn btn-success mx-1" @click="$event => sumar()"> +1</button>
        <button class="btn btn-danger mx-1" @click="$event => restar()"> -1</button>
        <button class="btn btn-warning mx-1" @click="$event => reset()">reset</button>

    </div>
</template>

<style></style>
