<template>
  <div class="hello">
    <h3>{{msg}}</h3>
    <span v-html="ht"></span><br/>
    <router-link to="/HelloWorld">out-in进入HelloWorld组件</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
     <router-link :to="{name: 'qiang', params:{username:'test123'}}">out-in进入qiang组件并传参</router-link><br/> 
      <!-- 子页面展示部分 -->
     <transition name="fade" mode="out-in">
          <router-view />
     </transition>
  </div>
</template>

<script>
export default {
  name: 'Parent',
  data(){
     return { msg : '本区域是parent组件!',
             ht:"<span>1234567890</span>"} 
  }
}
</script>

<style>
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
/*页面切换动画*/
/*进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除*/
.fade-enter-active {
    transition: opacity .5s;
}
/*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
.fade-enter {
    opacity: 0;
}
/*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
.fade-leave {
    opacity: 1;
}
/*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
.fade-leave-active {
    opacity:0;
    transition: opacity .5s;
}
</style>
