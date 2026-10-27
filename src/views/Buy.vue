<template>
    <div>
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
                </el-col>

                <!--订单薄组件 -->
                <el-col :span="12">
                    <order-book/>
                </el-col>
            </el-row>
            <!--资金持仓组件 -->
            <posi-list/>
        </el-card>


    </div>
</template>


<script>

    import { Search } from '@element-plus/icons-vue'
    import PosiList from '../components/PosiList.vue'
    import OrderWidget from '../components/OrderWidget.vue'
    import OrderBook from '../components/OrderBook.vue'
    export default {
        name: "Buy",
        components:{
            Search,
            PosiList,
            OrderWidget,
            OrderBook,
        }
    }

</script>

<style scoped>
.query-title {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    vertical-align: middle;
}

</style>