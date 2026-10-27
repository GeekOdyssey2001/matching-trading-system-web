<template>
    <div class="orderForm">
        <el-form label-width="80px">
            <!--股票信息自动提示框-->
            <el-form-item> <!--父子组件传递变量-->
                <h3 class="order-form-title" :style="direction ===0 ?
                 { color: '#F56C6C' } : { color: '#67C23A' } ">
                 {{direction===0 ? '买入':'卖出'}}股票
                </h3>
            </el-form-item>

            <!--证券代码-->
            <el-form-item label="证券代码">
                <code-input @codeinput-selected="updateSelectedCode"/>
            </el-form-item>

            <!--证券名称-->
            <el-form-item label="证券名称">
                <el-input readonly v-model="name"/> <!--ele UI中和html一样readonly表示只读-->
            </el-form-item>

            <!--可买 可卖数量-->
            <el-form-item :label="'可' + (direction===0?'买':'卖') + '(股)'">
                <el-input readonly v-model="affordCount"/>
            </el-form-item>

            <!--价格-->
            <el-form-item label="价格"> <!--只能输入数字-->
                <el-input-number v-model="price"
                controls-position="right"
                :step="0.01"
                :min="0.01"/>
            </el-form-item>

            <!--量-->
            <el-form-item :label="'可' + (direction===0?'买入':'卖出') + '(股)'">
                <el-input-number 
                v-model="volume"
                controls-position="right"
                :max="affordCount"
                :min="0"/>
            </el-form-item>

            <!--按钮-->
            <el-form-item class="order-form-actions">
                <el-button :type="direction===0 ?'danger': 'success'">
                    {{direction===0?'买入':'卖出'}}
                </el-button>
            </el-form-item>
        </el-form>
    </div>
    
    
</template>


<script>
    import CodeInput from './CodeInput'
    export default {
        name: "OrderWidget",
        data(){
            return{
                code:'',
                name: '',
                affordCount:undefined,
                price:undefined,
                volume:undefined,

            }
        },
        components:{
            CodeInput,
        },
        methods:{
            updateSelectedCode(item){
                this.code = item.code;
                this.name = item.name;
                this.price = undefined;
                this.volume = undefined;
            }
        },
        props:{
            direction:{
                type:Number,required:true
            },
        },
    }

</script>

<style lang="scss">
    .orderForm {
        .order-form-title {
            width: 100%;
            text-align: center;
        }

        .order-form-actions .el-form-item__content {
            justify-content: flex-end;
        }

        input {
            text-align: center;
        }

        .el-input-number {
            width: 100%;
        }
    }
</style>
