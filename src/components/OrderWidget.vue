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
                @change="handlePrice"
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
                <el-button :type="direction===0 ?'danger': 'success'" 
                @click="onOrder">
                    {{direction===0?'买入':'卖出'}}
                </el-button>
            </el-form-item>
        </el-form>
    </div>
    
    
</template>


<script>
    import CodeInput from './CodeInput'
    import {sendOrder} from '../api/orderApi'
    import {constants} from '../api/constants'
    import * as moment from 'moment'


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
            handleOrderRes(code,msg,data){
                if(code == 0){
                    this.$message.success("委托送往交易所");
                }else{
                    this.$message.error("委托失败" + msg);
                }

            },
            //价格变动，处理可买的股票数量
            handlePrice(){
                if(this.direction === constants.SELL){
                    let posiArr = this.$store.state.posiData;
                    for(let i=0,len=posiArr.length; i<len;i++){
                        if(posiArr[i].code == this.code){
                            this.affordCount = posiArr[i].count;
                        }
                    }
                }else{
                    // 总资金/委托价格，向下取整
                    this.affordCount = parseInt(
                        (this.$store.state.balance/constants.MULTI_FACTOR)
                        / this.price
                    )
                }
            }
            updateSelectedCode(item){
                this.code = item.code;
                this.name = item.name;
                this.price = undefined;
                this.volume = undefined;
            },
            onOrder(){
                sendOrder({
                    uid: sessionStorage.getItem("uid"),
                    type: constants.NEW_ORDER,
                    timestamp: moment.now(),
                    code: this.code,
                    direction: this.direction,
                    price: this.price * constants.MULTI_FACTOR,
                    volume: this.volume,
                    orderType: constants.LIMIT
                },this.handleOrderRes) //handleOrderRes回调函数
            },
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
