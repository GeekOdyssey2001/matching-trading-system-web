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
                <el-breadcrumb-item>历史委托</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    <el-card shadow="hover" class="container"> 
        <his-order-list/>
    </el-card>
    </div>


</template>


<script>

    import HisOrderList from '../components/HisOrderList.vue'

    export default{
        name:"HisOrderQuery"
        components:{
            HisOrderList
        }
    }

</script>

<style scoped>

</style>