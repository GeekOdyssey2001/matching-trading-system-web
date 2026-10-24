<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-menu"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
            :collapse="collapse"
            :default-active="onRoutes"
        >
            <template v-for="item in items" :key="item.index">
                <template v-if="item.subs"><!--有子节点就是有下拉菜单的item-->
                    <!--子菜单-->
                    <el-sub-menu :index="item.index" :key="item.index">
                        <!--提示项-->
                        <template #title>
                            <el-icon><component :is="item.icon" /></el-icon> <!--图标-->
                            <span>{{item.title}}</span> <!--文字-->
                        </template>

                        <template v-for="subItem in item.subs" :key="subItem.index">
                            <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                 <template #title> {{ subItem.title }} </template>
                                    <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                        {{ threeItem.title }}
                                    </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>

                <template v-else> <!--没有子节点，就是普通item-->
                    <el-menu-item :index="item.index" :key="item.index">
                        <el-icon><component :is="item.icon" /></el-icon> <!--图标-->
                        <template #title>{{item.title}}</template> <!--文字-->
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
     </div>
</template>


<script>
    import { PieChart, List, Sell, Search, CreditCard, Setting } from '@element-plus/icons-vue'

    export default{
        name:"Sidebar",
        components: { PieChart, List, Sell, Search, CreditCard, Setting },
        data(){
            return{
                collapse:false,
                items: [
                    {
                        icon:'PieChart',
                        index:'dashboard',
                        title:'资金股份'
                    },
                    {
                        icon:'List',
                        index:'buy',
                        title:'买入'
                    },
                    {
                        icon:'Sell',
                        index:'sell',
                        title:'卖入'
                    },
                    {
                        icon:'Search',
                        index:'3',
                        title:'查询',
                        subs: [
                            {
                                index: 'orderquery',
                                title: '当日委托'
                            },
                            {
                                index: 'tradequery',
                                title: '当日成交'
                            },
                            {
                                index: 'hisorderquery',
                                title: '历史委托'
                            },
                            {
                                index: 'histradequery',
                                title: '历史成交'
                            },
                        ]
                    },
                    {
                        icon: 'CreditCard',
                        index: '4',
                        title: '银证业务',
                        subs: [
                            {
                                index: 'transfer',
                                title: '银证转账'
                            },
                            {
                                index: 'transferquery',
                                title: '转账查询'
                            },

                        ]
                    },
                    {
                        icon: 'Setting',
                        index: 'pwdsetting',
                        title: '修改密码',
                    },
                ]
            };
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','')
            },
        }
    }

</script>

<style lang="scss" >
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;


        .el-menu-item {
            min-width: 150px;
        }

        li {
            text-align: left;
            .el-tooltip {
                width: auto ! important;
            }
        }

        /*下拉导航菜单多出1px*/
        .el-menu {
            border-right-width: 0;
        }

        .el-menu--collapse{
            width: auto ! important;
        }
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 150px;
    }

    .sidebar > ul {
        height: 100%;
    }




</style>