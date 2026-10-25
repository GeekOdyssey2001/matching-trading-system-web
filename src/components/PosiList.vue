<template>
    <div>
        <!--可用资金-->
        <el-row>
            <el-col :span="5">可用资金:{{balance}}</el-col>
        </el-row>
        <!--持仓列表 表格-->
        <el-table
            :data="tableData"
            border
        >
            <!--表格要显示哪些列-->
            <el-table-column prop="code" label="代码"/>
            <el-table-column prop="name" label="名称"/>
            <el-table-column prop="count" label="股票数量" />
            <el-table-column prop="cost" label="总投入"/>
            <el-table-column label="成本"/>  <!--计算属性，不存在于数据源中，通过计算得到-->
        </el-table>

        <!--分页控件 刷新按钮-->
        <div class="pagination">
            <el-button round type="primary" size="mini"
                style="margin-top: 2px; float:right"
                icon="el-icon-refresh"
                 @click="">
            刷新
            </el-button>

            <!--ele自带的分页控件-->
            <el-pagination
                layout="total,prev,pager,next"
                :current-page="query.currentPage"
                :page-size="query.pageSize"
                :total="dataTotalCount"
            />
         </div>


    </div>

</template>


<script>

    export default {
        name: 'PosiList',
        data(){
            return {
            tableData:[
                {code:'600025',name:'华能水电',count:100,cost:20},
                {code:'600000',name:'浦发银行',count:100,cost:20},
                {code:'000001',name:'平安银行',count:100,cost:20},
                {code:'600886',name:'国投电力',count:100,cost:20},
            ],
            balance:10,
            dataTotalCount:4,//总记录数
            query:{
                currentPage:1,//当前页码
                pageSize:2,//每页的记录数
            },
            };
        },
    }

</script>

<style scoped>

</style>
