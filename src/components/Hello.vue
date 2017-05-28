<template>
  <div class="hello">
    <div>仿照element ui的组件库</div>
    <h2>网站快速成型工具</h2>
    <div class="typeWord">
    {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      contentArr: ['为了维护世界和平', '为了让你少加班', '第三句随便说说']
    }
  },

  mounted () {
    var contentArr = this.contentArr
    var i = 0
    var j = 0
    var content = contentArr[0]
    var flag = 'add'
    var _this = this
    var addtimer
    var subtimer
    var addtimerFun = function () {
      addtimer = setInterval(function () {
        if (i < content.length && flag === 'add') {
          _this.msg += content[i]
          i++
        } else {
          clearInterval(addtimer)
          flag = 'sub'
          setTimeout(function () {
            subtimerFun()
          }, 1800)
        }
      }, 300)
    }
    var subtimerFun = function () {
      subtimer = setInterval(function () {
        if (flag === 'sub' && i > 0) {
          i--
          _this.msg = _this.msg.substring(0, i)
        } else {
          flag = 'add'
          j++
          j = j === contentArr.length ? 0 : j
          content = contentArr[j]
          clearInterval(subtimer)
          setTimeout(function () {
            addtimerFun()
          }, 1600)
        }
      }, 200)
    }
    // clearInterval(this.newtimer)
    addtimerFun()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.typeWord {
  font-size: 20px;
  line-height: 20px;
}

.typeWord:after {
  content: "";
  width: 3px;
  height: 20px;
  vertical-align: -3px;
  margin-left: -4px;
  background-color: black;
  display: inline-block;
  -webkit-animation: blink .5s infinite alternate;
  animation: blink .5s infinite alternate;
}

@keyframes blink
{
  from {opacity: 1;}
  to {opacity: 0;}
}
 
@-webkit-keyframes blink /* Safari 与 Chrome */
{
  from {opacity: 1;}
  to {opacity: 0;}
}

</style>
