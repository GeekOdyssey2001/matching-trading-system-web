
<!-- 资金持仓在很多地方都有使用所以作为公共页面抽离出来 -->
<template> 
    <div>
        <!--信息提示-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <el-icon><PieChart /></el-icon>资金股份
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>

    <!--资金持仓-->
    <el-card class="container">
        <posi-list/>
    </el-card>
</template>


<script>
    import { PieChart } from '@element-plus/icons-vue'
    import PosiList from '../components/PosiList'
    export default {
        name: 'Dashboard',
        components:{
            PieChart,
            PosiList
        }
    }
</script>

<style scoped>

</style>
