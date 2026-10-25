<template> <!-- 每个组件的模板只能包含一个根template-->
    <div class="wrapper">
        <!--引入头部导航栏，Vue自带也有header，所以要生命自定义的，这也是命名为vHeader原因-->
        <v-header :collapse="collapse" @toggle-collapse="collapse = !collapse"/>
        <v-sidebar :collapse="collapse"/>

         <h1>hello, I am home page </h1>

        <!-- 子路由 -->
        <!-- <router-view></router-view> -->

        <!-- 主页面业务 -->
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
             </div>
        </div>



    </div>
</template>


<script>

    import vHeader from '../components/Header'  //引入顶部导航栏组件：Header
    import vSidebar from '../components/Sidebar'  //引入侧边导航栏组件：Sidebar

    export default{
        name:'Home',
        data(){
            return { collapse: false };
        },
        components:{
            vHeader,
            vSidebar,
        }
    }
</script>

