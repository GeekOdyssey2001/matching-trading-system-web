<template>
    <div>
        <!--搜索条件栏-->
        <div class="handle-box">
            <el-row>
                <!--自动提示框，是非常通用的组件所以需要抽取出来一个通用的组件 -->
                    <el-col :span="4">
                        <code-input @codeinput-selected="updateSelectedCode"/>

                    </el-col>
                <!--日期选择器 -->
                <div style="float:left; margin-left: 10px;">
                    <el-date-picker
                    size="small"
                    type="date"
                    placeholder="选择日期"
                    value-format="YYYYMMDD"
                    v-model="query.startDate"
                    />
                </div>
                <div>
                    <el-date-picker
                    size="small"
                    type="date"
                    placeholder="选择日期"
                    value-format="YYYYMMDD"
                    v-model="query.endDate"
                    />
                </div>

                <!--搜索按钮 -->
                <el-button style="float:left; margin-left: 10px"
                        size="small"
                        type="primary"
                        @click="handleSearch">
                    <el-icon><Search /></el-icon>
                    <span>搜索</span>
                </el-button>

            </el-row>
        </div>

        <!--历史委托查询结果-->
        <!--委托列表-->
        <el-table
            :data="pagedTableData"
            border
            :cell-style="cellStyle"
        >
        <!--委托时间 股票代码 名称 委托价格 委托数量 方向 状态-->
            <el-table-column prop="date" label="委托日期" align="center"
            sortable :sort-orders="['ascending','descending']"/>
            <el-table-column prop="time" label="委托时间" align="center"/>
            <el-table-column prop="code" label="股票代码" align="center"/>
            <el-table-column prop="name" label="名称" align="center" />
            <el-table-column prop="price" label="委托价格" align="center" />
            <el-table-column prop="ocount" label="委托数量" align="center" />
            <el-table-column prop="status" label="状态" align="center" />
        </el-table>

        <!--分页控件-->
        <div class="pagination">
            <el-pagination
                background
                layout="total,prev,pager,next"
                v-model:current-page="query.currentPage"
                :page-size="query.pageSize"
                :total="dataTotalCount"
            />
        </div>



    </div>


</template>


<script>
    import { Search } from '@element-plus/icons-vue'
    import CodeInput from './CodeInput'
    export default{
        name:"HisOrderList",
        components:{
            CodeInput,
            Search,
        },
        computed: {
            pagedTableData() {
                const start = (this.query.currentPage - 1) * this.query.pageSize;
                return this.tableData.slice(start, start + this.query.pageSize);
            },
        },
        data(){
            return{
                tableData: [
                    {
                        date:'20200111',
                        time:'13:00:04',
                        code:600000,
                        name:'浦发银行',
                        price:13,
                        ocount:100,
                        status:1
                    },
                    {
                        date:'20200111',
                        time:'14:00:04',
                        code:'000001',
                        name:'招商银行',
                        price:130,
                        ocount:100,
                        status:1
                    },
                    {
                        date:'20200111',
                        time:'15:00:04',
                        code:600002,
                        name:'建设银行',
                        price:103,
                        ocount:100,
                        status:1
                    },
                    {
                        date:'20200111',
                        time:'10:00:04',
                        code:600005,
                        name:'农业银行',
                        price:11,
                        ocount:100,
                        status:1
                    },





                ],
                query:{
                    currentPage:1, //当前页码
                    pageSize:3, //每页的数据条数
                    code:'',//股票代码
                    startDate:'',//开始日期
                    endDate:'',//结束日期
                },
                dataTotalCount: 4,
            }
        },
        methods:{ //用户自定义函数
            updateSelectedCode(item){
                this.query.code = item.code;
            },
            handleSearch(){

            },
            cellStyle() {
                return { padding: '2px' };
            },
        },
        
    }

</script>

<style scoped>

</style>