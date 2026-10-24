<template> <!-- 每个组件的模板只能包含一个根template-->
    <div class="wrapper">
        <!--引入头部导航栏，Vue自带也有header，所以要生命自定义的，这也是命名为vHeader原因-->
        <v-header/>
        <v-sidebar/>

         <h1>hello, I am home page </h1>

        <!-- 子路由 -->
        <!-- <router-view></router-view> -->
    </div>
</template>


<script>

    import vHeader from '../components/Header'  //引入顶部导航栏组件：Header
    import vSidebar from '../components/Sidebar'  //引入侧边导航栏组件：Sidebar

    export default{
        name:'Home',
        components:{
            vHeader,
            vSidebar,
        }
    }
</script>

