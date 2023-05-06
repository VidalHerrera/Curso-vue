<script>
export default {

    data: () => ({
        edad: 6, user: ['enyer', 'angel', 'vidal', 'eliom', 'adream', 'brenda'],
        rojo: "color: red;"
    }),
    methods: {
        sumar() {
            this.edad++
        },
        restar() {
            this.edad--
        },
        reset() {
            this.edad = 0
        }
    },
    mounted() {
    }
}
</script>

<template>
    <div>
        <h1>Directivas</h1>
        <hr>

        <h4 v-text="'Hola Amigo'"></h4>
        <h4>Tu Edad Es : {{ edad }}</h4>

        <h3 class="text-success" v-show="edad >= 18">Eres mayor de edad</h3>
        <h3 class="text-danger" v-show="edad < 18">Eres menor de edad</h3>

        <h3 class="text-danger" v-if="edad < 0"> Edad invalida</h3>
        <h3 class="text-danger" v-if="edad > 80"> Edad invalida</h3>


        <button class="btn btn-primary me-2" @click="$event => sumar()">sumar 1</button>
        <button class="btn btn-danger me-2" @click="$event => restar()">restar 1</button>
        <button class="btn btn-warning me-2" @click="$event => reset()">reset</button>

        <ul class="my-4" v-for="nombre, index in user" :key="nombre">
            <li> {{ nombre }} </li>
        </ul>

        <div :style=rojo>
            !!! es todo por hoy !!!
        </div>



    </div>
</template>

<style>
h1 {
    color: red;
}
</style>
