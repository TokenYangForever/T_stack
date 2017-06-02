<template>
  <div class="timepickerDemo">
    <tel-timepicker
    :pickerOption = "{
      start:'08:30',
      end:'18:30',
      step: 15,
      model: 'type1'
    }"
    @select = 'selectItem'
    ></tel-timepicker>
    <div class="twoselect">
      <h3>同时选择起始和结束的时间</h3>
      
      <tel-timepicker
      placeholder = '起始时间'
      :maxtime = maxtime
      :pickerOption = "{
        start:'08:30',
        end:'18:30',
        step: 15,
        model: 'type1'
      }"
      @select = 'setMin'
      ></tel-timepicker>

      <tel-timepicker
      placeholder = '结束时间'
      :mintime = mintime
      :pickerOption = "{
        start:'08:30',
        end:'18:30',
        step: 15,
        model: 'type1'
      }"
      @select = 'setMax'
      ></tel-timepicker>
    </div>
  </div>
</template>

<script>
import timepicker from '@/components/elements/timePicker'
export default {
  name: 'timepDemo',
  data () {
    return {
      maxtime: '',
      mintime: ''
    }
  },

  methods: {
    closeMethod () {
      alert('you close the message')
    },
    selectItem (val) {
      console.log('选择时间为：' + val);
    },
    setMin (val) {
      this.mintime = val
    },
    setMax (val) {
      this.maxtime = val
    }
  },

  components: {
    'tel-timepicker': timepicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tel-timepicker{
  text-align: left;
  width: 120px;
  height: 27px;
  padding-left: 2px;
  border:1px solid black;
}

.twoselect{
  margin-top: 100px;
}

.twoselect .tel-timepicker{
  display: inline-block;
  margin-left: 10px
}

</style>
