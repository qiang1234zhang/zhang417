<template>
  <div id="app">
    <h2>APP_blank_Page20220918测试20241205</h2>
    <el-upload 
      accept=".docx"
      action
      :on-change="handleFileChange">上传文件</el-upload>
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
import { saveAs } from 'file-saver';
import { generateDocxFile } from './untils.js';

export default {
  name: 'App',
  data(){
   return {
    msg:0,
    fileData: {
          intro: '国际劳动节，又称五一国际劳动节、劳动节、国际示威游行日，是纪念工人和劳工运动的斗争和成果的日子。国际劳动节是一项由国际劳工运动所推动的节日，全世界劳工和工人阶级在一般会在五朔节（5月1日）举行的庆祝节日，而美国和加拿大在9月第一个星期一举行。是世界上80多个国家的劳动节。',
          activities: [
            {
              name: '阿尔及利亚',
              activity: '在阿尔及利亚，5月1日是公共假日，以庆祝劳动节。'
            },
            {
              name: '安哥拉',
              activity: '5月1日在安哥拉被承认为公共假日，称为劳动节。'
            },
            {
              name: '埃及',
              activity: '在埃及，5月1日被称为劳动节，是一个带薪的公共假期。在传统上，埃及总统会主持正式的五一节庆祝活动。'
            },
            {
              name: '加纳',
              activity: '5月1日是加纳的一个节日，属于庆祝全国所有工人。工会和劳工协会以游行的形式来庆祝劳动节。加纳也会举行阅兵式，通常由工会大会秘书长和各地区的区域秘书致辞。来自不同工作地点的工人通过条幅和衣着表明他们的公司。'
            }
          ]
        }
   }
  },
  components: {//子组件
    HelloWorld,
     Qiang
       },  

  methods: {
        goHome(){
            // console.log(this.$router);
            this.$router.push('/parent');
        },
       async handleFileChange(file) {window.debugger;

           // const file = file.files[0];
            const out = await generateDocxFile(file, this.fileData);
             saveAs(out, `${new Date().getTime()}.docx`);
           window.console.log( out);

            // const file = e.target.files[0];
            // const reader = new FileReader();
            // reader.onload = (e) => {
            //   const template = e.target.result;
            //   const fileData = {
            //     name: '张三',
            //     age: 18,
            //     address: '中国',
            //   };
            //   generateDocxFile(template, fileData).then((blob) => {
            //     saveAs(blob, '生成的文档.docx');
            //   });
            // }
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
