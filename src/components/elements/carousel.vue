<template>
  <div class="tel-carousel"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
   <div class = "tel-carousel-ul" :style="{height:height + 'px',width:width + 'px'}">
    <div class="tel-carousel-arrleft" @click="subIndex" v-show="hover || isMobile">
      <i class="tel-icon-circle-left"></i>
    </div>
    <div class="tel-carousel-arrright" @click="addIndex" v-show="hover || isMobile">
      <i class="tel-icon-circle-right"></i>
    </div>
    <slot></slot>
   </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    height: String,
    width: String,
    isMobile: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      items: [],
      activeIndex: 0,
      hover: false,
      addTimer: {}
    }
  },

  watch: {
    activeIndex () {
      this.items.forEach((item, index) => {
        item.setTranslate(index, this.activeIndex);
      });
    }
  },

  methods: {
    subIndex () {
      this.activeIndex = this.activeIndex === 0 ? this.items.length - 1 : this.activeIndex - 1
    },

    addIndex () {
      this.activeIndex = this.activeIndex === this.items.length - 1 ? 0 : this.activeIndex + 1
    },

    handleMouseEnter () {
      if (!this.isMobile) {
        this.hover = true;
      }
      this.pauseTimer();
    },

    handleMouseLeave () {
      if (!this.isMobile) {
        this.hover = false;
      }
      this.startTimer();
    },

    startTimer () {
      const _this = this
      this.addTimer = setTimeout(function () {
        _this.addIndex()
        _this.startTimer()
      }, 2000)
    },

    pauseTimer () {
      clearTimeout(this.addTimer)
    },

    handleClick () {
      this.pauseTimer()
    }
  },

  mounted () {
    this.items = this.$children
    this.items.forEach((item, index) => {
      item.setTranslate(index, this.activeIndex);
    });
    this.startTimer()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='@/css/carousel.css'>

</style>
