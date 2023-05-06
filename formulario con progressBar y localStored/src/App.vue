<script>

import Header from './components/comp1.vue'

export default {

    components: { Header },

    data: () => ({
        name: '', edad: '', email: '', urgente: false, todo: [], style: '', x: 0
    }),
    methods: {
        enviar() {
            this.todo.push({
                nombre: this.name,
                edad: this.edad,
                correo: this.email,
                urgente: this.urgente,
            })

            this.x = 0
            for (let i of this.todo) {
                if (i.urgente == true) {
                    this.x++
                }
            }

            this.style = `width:${this.x}%;`

            localStorage.setItem('user', JSON.stringify(this.todo))

        },
        cambiarEstado(id) {
            this.todo[id].urgente = !this.todo[id].urgente

            this.x = 0
            for (let i of this.todo) {
                if (i.urgente == true) {
                    this.x++
                }
            }

            localStorage.setItem('user', JSON.stringify(this.todo))

            this.style = `width:${this.x}%;`


        }
    },
    computed: {
        calcular() {
            return this.todo.length
        },

    },
    mounted() {
        if (localStorage.getItem('user') == null) {
            localStorage.setItem('user', JSON.stringify(this.todo))
        }

        this.todo = localStorage.getItem('user')
        this.todo = JSON.parse(this.todo)

        this.x = 0
        for (let i of this.todo) {
            if (i.urgente == true) {

                this.x++
            }
        }

        this.style = `width:${this.x}%;`
    }

}
</script>

<template>
    <div class="text-center container">
        <h2>Progreso: {{ x }}%</h2>
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" :style="style" aria-valuemin="0" aria-valuemax="100">
            </div>
        </div>
        <Header class="" />
        <form class="row w-25">
            <label class="me-3" for="name">nombre</label>
            <input class="my-3" v-model="name" type="text" placeholder="nombre" id="name" required>
            <label class="me-3" for="edad" required="">edad</label>
            <input class="my-3" v-model="edad" type="number" placeholder="edad" min="15" max="99" required>
            <label class="me-3" for="correo">correo</label>
            <input class="my-3" v-model="email" type="correo" placeholder="correo" required>
            <div class="my-3">
                <label class="me-3" for="">Urgente</label>
                <input v-model="urgente" type="checkbox">
            </div>
            <button class="btn btn-primary w-50" @click.prevent="enviar" type="submit">enviar</button>
        </form>
        <pre>
            nombre: {{ name }}
            edad: {{ edad }}
            correo: {{ email }}
            urgente: {{ urgente }}
        </pre>
    </div>
    <div>
        <h1>Total De Usuarios: {{ calcular }}</h1>
        <hr>
        <table class="table table-dark text-muted ">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Correro</th>
                    <th>Urgente</th>
                </tr>
            </thead>
            <tbody v-for=" todo, index  in  todo " :key="todo">
                <tr class="text-white">
                    <td>{{ index + 1 }}</td>
                    <td>{{ todo.nombre }}</td>
                    <td>{{ todo.edad }}</td>
                    <td>{{ todo.correo }}</td>
                    <td class="text-center" @click="cambiarEstado(index)"
                        :class="todo.urgente ? 'bg-success' : 'bg-danger'">
                        {{ todo.urgente ? 'Si' : 'No' }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style></style>
