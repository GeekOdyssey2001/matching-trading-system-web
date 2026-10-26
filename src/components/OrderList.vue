<template>
    <div>
        <!--委托列表-->
        <el-table
            :data="pagedTableData"
            border
            :cell-style="cellStyle"
        >
            <!--委托时间 股票代码 名称 委托价格 委托数量 方向 状态-->
            <el-table-column prop="time" label="委托时间" align="center"
            sortable :sort-orders="['ascending','descending']"/>
            <el-table-column prop="code" label="股票代码" align="center"/>
            <el-table-column prop="name" label="名称" align="center" />
            <el-table-column prop="price" label="委托价格" align="center" />
            <el-table-column prop="ocount" label="委托数量" align="center" />
            <el-table-column prop="direction" label="方向" align="center" />
            <el-table-column prop="status" label="状态" align="center" />
            <!--撤单按钮 -->    
        </el-table>

        <!--分页控件 刷新按钮-->
        <div class="pagination">
            <el-button round type="primary" size="small"
                style="margin-top: 2px; float:right"
                background
                 @click="">
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

        <!-- -->
    </div>

</template>


<script>
    import { Refresh } from '@element-plus/icons-vue'

    export default{
        name:"OrderList",
        components: { Refresh },
        computed: {
            pagedTableData() {
                const start = (this.query.currentPage - 1) * this.query.pageSize;
                return this.tableData.slice(start, start + this.query.pageSize);
            },
        },
        methods: {
            cellStyle() {
                return { padding: '2px' };
            },
        },
        data(){
            return{
                tableData:[
                    {
                        time:'09:50:00',
                        code:'000001',
                        name:'平安银行',
                        price:100,
                        ocount:10,
                        direction:'买入',
                        status:1
                    },
                    {
                        time:'09:40:00',
                        code:'000001',
                        name:'平安银行',
                        price:100,
                        ocount:10,
                        direction:'买入',
                        status:3
                    },
                    {
                        time:'09:30:00',
                        code:'000001',
                        name:'平安银行',
                        price:100,
                        ocount:10,
                        direction:'买入',
                        status:3
                    },
                ],
                balance:10,
                dataTotalCount:3,//总记录数
                query:{
                currentPage:1,//当前页码
                pageSize:2,//每页的记录数
                },
            }
        }
    }
</script>

<style scoped>

</style>
