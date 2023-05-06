<template>
    <div>
        <grid>
            <h1 class="text-success text-center">Card --- Card --- Card</h1>

            <div class="d-flex justify-content-center row " v-for="imagen, index in url" :key="imagen">

                <div class="card m-1 p-1" style="width:14rem;">

                    <h3 class="text-primary text-center ">{{ nombre[index] }}</h3>
                    <img class="my-4" :src=imagen>

                    <div class="d-flex justify-content-center ">
                        <a class="me-3" :href=imagen @click.prevent="descargar" target="_blanck">Descargar</a>
                        <a class="me-3" :href=imagen @click="descargar">Visitar</a>
                    </div>
                </div>
            </div>
        </grid>
    </div>
</template>

<script>
import grid from './grid.vue'

export default {
    components: {
        grid
    },
    data: () => ({
        url: [
            "https://idmphsmkuxkn.compat.objectstorage.us-ashburn-1.oraclecloud.com/cdn-bucket/uploads/2023/03/d881a1397e0673b0fa8fced00b30949a5f55d3b3-1536x950.jpg",
            "https://cdn.com.do/wp-content/uploads/2022/05/cuales-son-las-mejores-aplicaciones-para-editar-fotos-en-el-celular-627e7a71b5a35.jpg",
            "https://cdn.com.do/wp-content/uploads/2021/07/1c19c309-hqdefault.jpg"
        ],
        nombre: ['Nave', 'Snaped', 'Noticia']
    }),
    methods: {
        descargar() {

        }
    }
}

</script>