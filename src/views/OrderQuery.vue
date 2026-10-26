<template>
    <div>
        <!--信息提示-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <span class="query-title">
                        <el-icon><Search /></el-icon>
                        <span>查询</span>
                    </span>
                </el-breadcrumb-item>
                <el-breadcrumb-item>当日委托</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    <el-card shadow="hover" class="container"> 
        <order-list/>
    </el-card>
    </div>


</template>


<script>
    import { Search } from '@element-plus/icons-vue'
    import OrderList from '../components/OrderList.vue'
    export default{
        name:"OrderQuery",
        components:{
            Search,
            OrderList,
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
