<template>
    <section id="showcase" class="pa-0 ma-0">
        <v-carousel :show-arrows="false" interval="3000" :cycle="true" hide-delimiters reverse>
            <v-carousel-item :src="bgImage0">

                <!--SHEET-->
                <v-sheet height="100%" class="d-flex flex-column justify-center" color="rgba(0,0,0,0)">
                    <v-expand-transition>
                        <h2 v-if="x" class="pacifico-font showcase-text pl-lg-5">
                            Coffee in Town...
                        </h2>
                    </v-expand-transition>
                </v-sheet>
            </v-carousel-item>
            <!-- <v-carousel-item :src="bgImage2">
                <v-sheet height="100%" class="d-flex flex-column justify-center" color="rgba(0,0,0,0)">
                    <v-expand-transition>
                        <h2 v-if="x" class="pacifico-font showcase-text pl-lg-5">
                            Coffee in Town...
                        </h2>
                    </v-expand-transition>
                </v-sheet>
            </v-carousel-item> -->
        </v-carousel>
    </section>
</template>
<script>
export default {
    data(){
        return{
            x:true,
            //IMAGES
            bgImage0: require('@/assets/images/bg (0)-min.jpg'),
        }
    },
    mounted(){
        setInterval(() => {
            this.x = !this.x
        },3000)
    }
}
</script>
<style scoped>
    @media only screen and (min-width: 768px){
        .showcase-text{
            font-size: 3em;
        }
    }

    @media only screen and (max-width: 768px){
        .showcase-text{
            font-size: 1.5em;
        }
    }
</style>