<template>
  <div id="app">
    <h2>APP_blank_Page</h2>
    <el-button v-on:click="goHome">进入parent页面</el-button>
    <el-button type="primary">APP主要按钮</el-button>
    <el-button type="text">APP文字按钮</el-button><br/> 
     <router-link to="/qiang">用qiang组件替代parent组件</router-link> 
    <div style="border: 3px solid pink;height:500px;width:100%;overflow:auto">
     <router-view></router-view>
    </div>
    <p>以下是import进来的2个组件</p>
     <HelloWorld msg="Welcome to ZHANG147 Vue.js App"/> 
     <Qiang/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Qiang from './components/qiang.vue'
export default {
  name: 'App',
  data(){
   return {msg:0} 
  },
  components: {//子组件
    HelloWorld,
     Qiang
       },  

  methods: {
        goHome(){
            // console.log(this.$router);
            this.$router.push('/parent');
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
