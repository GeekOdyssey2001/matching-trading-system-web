<template>
    <!--信息提示-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <span class="query-title">
                        <el-icon><Search /></el-icon>
                        <span>委托</span>
                    </span>
                </el-breadcrumb-item>
                <el-breadcrumb-item>买入</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-card shadow="hover" class="container">
            <el-row>
                <!--委托组件-->
                <el-col :span="12">
                    <order-widget :direction="0"/>
                <!--订单薄组件 -->
                </el-col>
                <el-col :span="12">

                </el-col>
            </el-row>
            <!--资金持仓组件 -->
            <posi-list/>
        </el-card>


</template>


<script>

    import PosiList from '../components/PosiList.vue'
    import OrderWidget from '../components/OrderWidget.vue'
    export default {
        name: "Buy",
        components:{
            PosiList,
            OrderWidget,
        }
    }

</script>

<style scoped>

</style>