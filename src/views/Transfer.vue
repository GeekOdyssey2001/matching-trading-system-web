<template>
    <div>
        <!--信息提示-->
        <div class=="crumbs">
            <el-breadcrumb-item>
                <i class=""></i>银证转账
            </el-breadcrumb-item>
        </div>

        <el-card shadow="hover" class="container">
            <el-row style="padding: 0 15%;">
                <el-form label-width="80px">
                    <!--转账方式-->
                    <el-form-item label="转账方式"> 
                        <el-select v-model="type"> <!--下拉列表-->
                            <el-option v-for="item in form.type"
                            :key="item.id"
                            :label="item.name"
                            :value="item.name"/> <!--数组变量存放下拉列表内容-->
                        </el-select>
                    </el-form-item>
                    <!--银行-->
                    <!--银行密码-->
                    <!--选择币种-->
                    <!--金额-->
                </el-form>
            </el-row>
        </el-card>
    </div>
</template>


<script>
    export default {
        name: "Transfer",
        data() {
            return{
                form:{
                    type:[
                        {id:1,name:'银行转证券（转入）'},
                        {id:0,name:'银行转证券（转出）'},
                        ],
                    bank:[
                        {id:1,name:'招商银行'},
                        {id:0,name:'建设银行'},
                    ],
                    password:'',
                },
                type:0,
                bank:'招商银行',
            }
        },
    }
</script>

<style scoped>

</style>