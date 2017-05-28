<template>
  <div class="tel-alert" :class="typeClass" v-if="isOpen">
    <div class="tel-alert-title">
      <i v-if='showIcon' :class="[iconClass,'tel-alert-icon']"></i>
      {{title}}
      <i v-if='closeAble' :class="closeClass" @click='close()'>{{closeText}}</i>
    </div>
    <div class="tel-alert-des" v-if="description">
    {{description}}
    </div>
  </div>
</template>

<script>

const TYPE_CLASS_MAP = {
  'success': 'tel-icon-tongue',
  'error': 'tel-icon-cancel-circle',
  'warn': 'tel-icon-notification',
  'info': 'tel-icon-info'
}
export default {
  name: 'hello',
  props: {
    description: {
      type: String,
      default: ''
    },
    closeText: {
      type: String,
      default: ''
    },
    closeAble: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'success'
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: this.open
    }
  },
  mounted () {
  },
  methods: {
    close () {
      this.$emit('closeMsg')
      this.isOpen = false
    }
  },
  computed: {
    typeClass () {
      return `tel-alert-${this.type}`
    },
    iconClass () {
      return TYPE_CLASS_MAP[this.type]
    },
    closeClass () {
      return this.closeText ? 'tel-alert-textclose' : 'tel-icon-close'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='@/css/alert.css'>

</style>
