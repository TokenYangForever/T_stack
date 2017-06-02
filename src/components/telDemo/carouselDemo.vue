<template>
  <div class="carouselDemo">
    <h3>默认类型</h3>
    <tel-carousel
      height="360"
      width="450"
      :isMobile = "true"
    >
      <tel-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </tel-carousel-item>
    </tel-carousel>
  </div>
</template>

<script>
import telcarousel from '@/components/elements/carousel'
import telcarouselItem from '@/components/elements/carouselItem'
export default {
  name: 'carouselDemo',
  data () {
    return {
    }
  },

  methods: {
    closeMethod () {
      alert('you close the message')
    }
  },

  components: {
    'tel-carousel': telcarousel,
    'tel-carousel-item': telcarouselItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .tel-carousel-item:nth-child(2n) {
      background-color: #99a9bf;
   }
  
  .tel-carousel-item:nth-child(2n+1) {
     background-color: #d3dce6; 
  }
</style>
