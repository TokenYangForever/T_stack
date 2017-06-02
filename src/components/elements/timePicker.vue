<template>
  <div class="tel-timepicker" v-clickoutside="handleClickoutside">
    <div class="tel-tp-value" @click='openItems'>{{timeVal}}<i v-if='closeAble' class="tel-icon-close" @click='clearTime' v-show='!showTimeItems'></i></div>
    <div class="tel-scrollbarView">
      <div class="tel-timeselect-item" 
      v-for="(item, index) in timeItems" 
      :class="{enable: item.status == 'enable'}"
      :key = 'index'
      @click='chooseItem(item)' 
      v-show='showTimeItems'>
          {{item.time}}
      </div>
    </div>
  </div>
</template>

<script>
import Clickoutside from '@/util/clickout';
export default {
  name: 'timepicker',
  directives: { Clickoutside },
  props: {
    placeholder: {
      type: String,
      default: '请选择时间'
    },
    pickerOption: {
      type: Object,
      required: true
    },
    maxtime: {
      type: String,
      default: ''
    },
    mintime: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      timeVal: this.placeholder,
      timeItems: this.initTimeItems(),
      showTimeItems: false
    }
  },
  mounted () {
  },
  methods: {
    handleClickoutside () {
      this.showTimeItems = false
    },
    initTimeItems () {
      let timeItems = [];
      let opts = this.pickerOption;
      let startmins = this.changetoNum(opts.start);
      let enablemins = this.changetoNum(this.mintime);
      let enablemax = this.changetoNum(this.maxtime);
      let endmins = this.changetoNum(opts.end);
      while (startmins <= endmins) {
        if (startmins <= enablemins || startmins >= enablemax) {
          timeItems.push({time: this.changetoTimestr(startmins), status: 'enable'});
        } else {
          timeItems.push({time: this.changetoTimestr(startmins), status: 'normal'});
        }
        startmins += opts.step
      }
      return timeItems
    },
    changetoNum (timestr) {
      let times = timestr.split(':')
      return Number(times[0]) * 60 + Number(times[1]);
    },
    changetoTimestr (mins) {
      let hours = Math.floor(mins / 60);
      let mints = mins % 60;
      if (hours < 10) {
        hours = '0' + hours
      }
      if (mints < 10) {
        mints = '0' + mints
      }
      return hours + ':' + mints
    },
    chooseItem (item) {
      if (item.status === 'enable') {
        return
      }
      this.showTimeItems = false;
      this.timeVal = item.time;
      this.$emit('select', item.time)
    },
    openItems () {
      this.showTimeItems = !this.showTimeItems;
    },
    clearTime (event) {
      event.stopPropagation();
      this.timeVal = this.placeholder;
    }
  },
  computed: {
    closeAble () {
      return this.timeVal !== this.placeholder
    }
  },
  watch: {
    maxtime () {
      this.timeItems = this.initTimeItems()
    },
    mintime () {
      this.timeItems = this.initTimeItems()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='@/css/timePicker.css'>

</style>
