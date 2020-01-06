<template>
  <v-container fluid class="pa-0">
    <!--SHOWCASE DIV-->
    <Showcase />

    <!--STEPS-->
    
    <section class="grey lighten-5">
      <h3 class="pacifico-font brown--text ma-2" :style="{'font-size':'1.5em'}">A Quick Capuccino Guide...</h3>
      <v-timeline>
        <v-timeline-item color="brown" v-for="(step,index) in steps" :key="index">
          <v-card flat class="grey lighten-5">
            <v-card-text>
              <v-img width="100" class="mx-auto" :src="kettleIcon"></v-img>
            </v-card-text>
            <v-card-subtitle>
              <p class="mx-auto text-center black--text subtitle-1">{{step.text}}</p>
            </v-card-subtitle>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </section>

    <!--ABOUT-->
    <section class="brown default">
      
      <v-container fluid>
        <v-row>
          <v-col :cols="12">
            <h3 class="pacifico-font white--text ma-2" :style="{'font-size':'1.5em'}">About</h3>
          </v-col>
        </v-row>

        <v-row>
          <v-col :cols="6">
            <p class="white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa atque velit sed consectetur nam laborum corrupti in? Officiis nihil sequi minus, quis voluptatibus veritatis alias! Ad, cupiditate quos. Velit blanditiis culpa dignissimos aliquam sed quos, inventore porro quidem aspernatur magnam nulla voluptate error eius officiis repellat totam libero sunt?
            </p>  
          </v-col>
          <v-col :cols="6">
            <p class="white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa atque velit sed consectetur nam laborum corrupti in? Officiis nihil sequi minus, quis voluptatibus veritatis alias! Ad, cupiditate quos. Velit blanditiis culpa dignissimos aliquam sed quos, inventore porro quidem aspernatur magnam nulla voluptate error eius officiis repellat totam libero sunt?
            </p>
          </v-col>    
        </v-row>
        <v-row v-if="windowWidth > 768">
          <v-col :cols="12">
            <p class="white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa atque velit sed consectetur nam laborum corrupti in? Officiis nihil sequi minus, quis voluptatibus veritatis alias! Ad, cupiditate quos. Velit blanditiis culpa dignissimos aliquam sed quos, inventore porro quidem aspernatur magnam nulla voluptate error eius officiis repellat totam libero sunt?
            </p> 
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!--GALLERY-->
    <section class="default">
      <Slider>
      <div :style="{'height':'100%'}">
        <div :style="{'height':'100%'}" class="d-flex flex-row">
            <v-img :width="windowWidth < 768 ? '100%':'50%'" :src="require('@/assets/images/coffee/espresso-min.jpg')"></v-img>
            <div class="d-flex flex-column" :style="{'width':'50%'}">
              <v-img width="100%" height="50%" :src="require('@/assets/images/coffee/capuccino-min.jpg')"></v-img>
              <v-img width="100%" height="50%" :src="require('@/assets/images/coffee/latte-min.jpg')"></v-img>
            </div>

            <v-img :width="windowWidth < 768 ? '100%':'50%'" :src="require('@/assets/images/coffee/cold-min.jpg')"></v-img>
            <div class="d-flex flex-column" :style="{'width':'50%'}">
              <v-img width="100%" height="50%" :src="require('@/assets/images/coffee/black-min.jpg')"></v-img>
              <v-img width="100%" height="50%" :src="require('@/assets/images/coffee/capuccino-min.jpg')"></v-img>
            </div>
        </div>
      </div>
    </Slider>
    </section>
    
  </v-container>
</template>

<script>
import Showcase from '~/components/Showcase.vue'
import Slider from '~/components/Slider.vue'
import MenuItem from '~/components/MenuItem.vue'

export default {
  components: {
    Showcase,
    Slider
  },
  data(){
    return{
      //icons
      kettleIcon: require('@/assets/icons/kettle.png'),

      //window height
      windowWidth: window.innerHeight,
      winHeight: window.innerHeight,

      //images
      coffeeImages: this.$store.state.data.galleryImages,

      //STEPS
      steps:[
        {
          icon: this.kettleIcon,
          text: "BOIL WATER"
        },
        {
          icon: this.kettleIcon,
          text: "ADD COFFEE GRANULES"
        },
        {
          icon: this.kettleIcon,
          text: "BOIL MILK"
        },
        {
          icon: this.kettleIcon,
          text: "SHAKE THE MILK TO FORM FROTH"
        },
        {
          icon: this.kettleIcon,
          text: "MIX WITH YOUR LIQUID COFFEE"
        },
        {
          icon: this.kettleIcon,
          text: "ENJOY YOUR CAPUCCINO"
        }
      ]
    }
  },

  created(){
    //console.log("->",this.galleryImages)
    window.addEventListener('resize', this.onResize)
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  methods:{
    onResize(){
      this.windowWidth = window.innerWidth
      this.winHeight = Window.innerHeight

      //console.log(this.windowWidth)
      //console.log(this.windowWidth)
    }
  }
  
}
</script>
<style>
  .default{
    height: 80vh;
  }
</style>