<template>
  <div class="alertDemo">
    <tel-alert
      :closeAble = 'true'
      title = "error的标题"
      type = "error"
      closeText = "知道了"
      showIcon
    ></tel-alert>
    <h3>不带关闭按钮</h3>
    <tel-alert
      :closeAble = 'false'
      title = "info的标题"
      type = "info"
      showIcon
    ></tel-alert>
    <tel-alert
      :closeAble = 'true'
      title = "warn的标题"
      type = "warn"
      showIcon
    ></tel-alert>
    <tel-alert
      :closeAble = 'true'
      title = "成功的标题"
      type = "success"
      showIcon
    ></tel-alert>
    <h3>带回调函数</h3>
    <tel-alert
      :closeAble = 'true'
      title = "成功的标题"
      type = "success"
      @closeMsg = "closeMethod"
      showIcon
    ></tel-alert>
    <h3>带辅助性文字介绍</h3>
    <tel-alert
      :closeAble = 'true'
      title = "带辅助性文字介绍"
      description = "这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      type = "success"
      showIcon
    ></tel-alert>
  </div>
</template>

<script>
import telAlert from '@/components/elements/alert'
export default {
  name: 'alertDemo',
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
    'tel-alert': telAlert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.alertDemo h3{
  margin: 10px 0 -5px 0;
  text-align: left;
}
.alertDemo div.tel-alert{
  margin: 10px 0;
}
</style>
