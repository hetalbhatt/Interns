<template>
    <div class="cSlider" @mousedown="mouseDown" @mouseup="mouseUp" @mouseleave="mouseLeave" @mousemove="mouseMove">  
        <slot>
            
        </slot>    
    </div>
</template>
<script>
export default {
    data(){
        return{
            isDown: true,
            startX: 0,
            scrollLeft: 0,
            slider: null
        }
    },
    methods:{
        mouseDown: function(e) {
            this.isDown = true
            this.startX = e.pageX - this.slider.offsetLeft
            this.scrollLeft = this.slider.scrollLeft
            //console.log("downed")
        },

        mouseLeave: function(e){
            this.isDown = false
        },

        mouseUp: function(e){
            this.isDown = false
            //console.log("upped")
        },

        mouseMove: function(e){
            this.slider = document.querySelector('.cSlider')
            if(!this.isDown)
                return;

            e.preventDefault()
            const x = e.pageX - this.slider.offsetLeft
            const walk = x - this.startX
            this.slider.scrollLeft = this.scrollLeft - walk
        }

    },
    beforeMount(){
        this.slider = document.querySelector('.cSlider')
    },
    mounted(){
        this.slider = document.querySelector('.cSlider')
        setInterval(() => {
            if(this.slider.scrollLeft != window.innerWidth)
                this.slider.scrollLeft += 1
            else
                this.slider.scrollRight += 1
            //console.log(this.slider.scrollLeft)
        },50)
        
    }
}
</script>
<style>
    .cSlider{
        overflow-x: scroll;
        height: 100%;
    }
    
</style>
<style scoped>
    ::-webkit-scrollbar {
        display: none;
    }
</style>