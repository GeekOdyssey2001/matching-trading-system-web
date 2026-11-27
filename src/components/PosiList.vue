<template>
    <div>
        <!--可用资金-->
        <el-row class="balance-row">
            <el-col :span="5">可用资金:{{balance}}</el-col>
        </el-row>
        <!--持仓列表 表格-->
        <el-table
            :data="pagedTableData"
            border
            :cell-style="cellStyle"
        >
            <!--表格要显示哪些列-->
            <el-table-column prop="code" label="代码" align="center" 
            sortable :sort-orders="['ascending','descending']"
            :formatter="codeFormatter"/>
            <el-table-column prop="name" label="名称" align="center"/>
            <el-table-column prop="count" label="股票数量" align="center" />
            <el-table-column prop="cost" label="总投入"
            :formatter="moneyFormatter"/>
            <el-table-column label="成本" align="center"
            :formatter="costFormatter"/>  <!--计算属性，不存在于数据源中，通过计算得到-->
        </el-table>

        <!--分页控件 刷新按钮-->
        <div class="pagination">
            <el-button round type="primary" size="small"
                style="margin-top: 2px; float:right"
                background
                 @click="queryRefresh">
            <el-icon><Refresh /></el-icon>
            <span>刷新</span>
            </el-button>

            <!--ele自带的分页控件-->
            <el-pagination
                layout="total,prev,pager,next"
                v-model:current-page="query.currentPage"
                :page-size="query.pageSize"
                :total="dataTotalCount"
            />
         </div>


    </div>

</template>


<script>
    import { Refresh } from '@element-plus/icons-vue'
    import {constants} from '../api/constants'
    import {codeFormat,moneyFormat} from '../api/formatter'
    import {queryPosi,queryBalance} from '../api/orderApi'

    export default {
        name: 'PosiList',
        //created + computed + watch 一般作为组合一起使用
        //初始化构造函数，让一进入页面就能加载posiData和balanceData数据，更加人性化
        created(){
            this.tableData = this.posiData;
            this.balance = this.balanceData;
        },
        components: { Refresh },
        //对数据的监听是通过computed和watch
        computed: {
            pagedTableData() {
                const start = (this.query.currentPage - 1) * this.query.pageSize;
                return this.tableData.slice(start, start + this.query.pageSize);
            },
            posiData(){
                return this.$store.state.posiData;
            },
            balanceData(){
                return moneyFormat(this.$store.state.balance);
            },
        },
        //当vuex中的变量发生变化，posiData和posiData这两个计算属性就会发生变化
        //posiData和posiDat两个属性发生变化，watch中的函数就会执行
        watch:{
            posiData: function(val){
                this.tableData = val;
                this.dataTotalCount = val.length;
            },
            balanceData: function(val){
                this.balance = val;
            }
        },

        data(){
            return {
            tableData:[

            ],
            balance: 0,
            dataTotalCount:4, //总记录数
            query:{
                currentPage:1, //当前页码
                pageSize:2, //每页的记录数
            },
            };
        },
        methods:{
            cellStyle(){
                return { padding: '2px' };
            },
            queryRefresh(){
                queryPosi();
                queryBalance();
            },
            costFormatter(row,column){
                return (row.cost / constants.MULTI_FACTOR
                /row.count).toFixed(2);
            },
            moneyFormatter(row,column){
                return moneyFormat(row.cost);
            },
            codeFormatter(row,column){
                return codeFormat(row.code);
            },
        }
    }

</script>

<style scoped>
.balance-row {
    text-align: left;
}

</style>
