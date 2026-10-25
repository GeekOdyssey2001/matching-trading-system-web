<template>
    <div>
        <!--信息提示-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <el-icon><CreditCard /></el-icon>银证转账
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-card shadow="hover" class="container">
            <el-row style="padding: 0 15%;">
                <el-form label-width="80px" class="transfer-form">
                    <!--转账方式-->
                    <el-form-item label="转账方式"> 
                        <el-select v-model="type" style="width:100%"> <!--下拉列表-->
                            <el-option v-for="item in form.type"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"/> <!--数组变量存放下拉列表内容-->
                        </el-select>
                    </el-form-item>
                    <!--银行-->
                    <el-form-item label="选择银行"> 
                        <el-select v-model="bank" style="width:100%"> <!--key下拉选项索引，label下拉选项内容，value选中下拉选项时把value值传递到绑定的值中也就是v-model-->
                            <el-option v-for="item in form.bank"
                            :key="item.id"  
                            :label="item.name"
                            :value="item.name"/> <!--数组变量存放下拉列表内容-->
                        </el-select>
                    </el-form-item>
                    <!--银行密码-->
                    <el-form-item label="银行密码">
                        <el-input type="password" v-model="form.password"/>
                    </el-form-item>
                    <!--选择币种-->
                    <el-form-item label="选择币种"> 
                        <el-select v-model="moneyType" style="width:100%"> <!--key下拉选项索引，label下拉选项内容，value选中下拉选项时把value值传递到绑定的值中也就是v-model-->
                            <el-option v-for="item in form.moneyType"
                            :key="item.id"  
                            :label="item.name"
                            :value="item.id"/> <!--数组变量存放下拉列表内容-->
                        </el-select>
                    </el-form-item>
                    <!--金额-->
                    <el-form-item label="金额">
                        <el-input  v-model="form.money"/> 
                    </el-form-item>
                    <!--确定按钮-->
                    <el-form-item class="transfer-form-actions">
                        <el-button size="small" type="primary"> 转账</el-button>
                    </el-form-item>

                </el-form>
            </el-row>
        </el-card>
    </div>
</template>


<script>
    import { CreditCard } from '@element-plus/icons-vue'

    export default {
        name: "Transfer",
        components: { CreditCard },
        data() {
            return{
                form:{
                    type:[
                        {id:1,name:'银行转证券（转入）'},
                        {id:0,name:'证券转银行（转出）'},
                        ],
                    bank:[
                        {id:1,name:'招商银行'},
                        {id:0,name:'建设银行'},
                    ],
                    password:'',
                    money:0,
                    moneyType:[
                        {id:1,name:'美元'},
                        {id:0,name:'人民币'},
                    ]
                },
                type:0,
                bank:'招商银行',
                moneyType:0,
            }
        },
    }
</script>

<style scoped>
.transfer-form {
    width: 100%;
}

.transfer-form-actions :deep(.el-form-item__content) {
    justify-content: flex-end;
}
</style>
