///正常加载组件模式
import Vue from 'vue'
import Routers from 'vue-router'
import Parent from '@/components/Parent'
import HelloWorld from '@/components/HelloWorld' 
import Qiang from '@/components/qiang'

Vue.use(Routers);

const rs= new Routers({
       mode: 'history',        //正常路径格式
       routes:[
          {
          meta: true,           //是否需要登录
          path: '/',          // 默认页面重定向到主页
          redirect: '/parent'
          },
          {
              path:'/parent',         // path 不区分大小写
              name:'parent',          // 父路由  name不区分大小写  
              component:Parent, 
              children:[              //嵌套子路由  二级路由  
                 {
                    path: '/qiang',            //链接路径
                    name: 'qiang',             //路由名称，
                    component: Qiang           //组件名称
                  },                 
                  {
                      path: '/helloworld',             //链接路径
                      name: 'helloworld',              //路由名称，
                      component: HelloWorld            //组件名称
                    }
              ]
          },
          {
            path: '*',  //404页
            component: () => import('@/components/404') //懒加载模式 较常用
        }

       ],
       scrollBehavior(){
          return {x:0,y:50}
       } 
})
 rs.beforeEach(function(to,from,next){
      if(to.name === "qiang"){
        alert("准备进入强")
        next()
      }   
      if(from.name ==="qiang"){
          next()
      }
      
}) 
export default rs