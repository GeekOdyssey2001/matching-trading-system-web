<template>
    <!--订单薄窗口-->
    <section class="order-book-panel">
        <!--行情时间-->
        <div class="quote-time">
            <h4 style="color:#909399">
                行情时间:{{hqtime}}
            </h4>
        </div>

        <!--五档行情-->
        <div class="order-book-levels">
            <!--卖-->
            <div class="orderBook">
                <el-row v-for= "item in sell" :key="item.name">
                    <!-- 档位名称 -->
                    <el-col :span="6">{{item.name}}</el-col>
                    <!-- 价格-->
                    <el-col :span="6">{{ filterempty(item.price) }}</el-col>
                    <!-- 长度 -->
                    <el-col :span="6">
                        <div class="volumeratio">
                            <div v-if="item.volume !== -1" class="sell" 
                                v-bind:style="{width: item.width + '%'}"/>
                        </div>
                    </el-col>
                    <!-- 量 -->
                    <el-col :span="6">
                        {{ filterempty(item.volume) }}
                    </el-col>
                </el-row>
            </div>
            <!--买-->
            <div class="orderBook">
                <el-row v-for= "item in buy" :key="item.name">
                    <!-- 档位名称 -->
                    <el-col :span="6">{{item.name}}</el-col>
                    <!-- 价格-->
                    <el-col :span="6">{{ filterempty(item.price) }}</el-col>
                    <!-- 长度 -->
                    <el-col :span="6">
                        <div class="volumeratio">
                            <div v-if="item.volume !== -1" class="buy" 
                                v-bind:style="{width: item.width + '%'}"/>
                        </div>
                    </el-col>
                    <!-- 量 -->
                    <el-col :span="6">
                        {{ filterempty(item.volume) }}
                    </el-col>
                </el-row>
            </div>
        </div>
    </section>
    
    

</template>


<script>
    export default{
        name: "OrderBook",
        methods:{
            filterempty(value){
                if(value===-1){
                    return '-';
                }else{
                    return value;
                }
            }
        },
        data(){
            return{
                hqtime:'--:--:--',
                sell:[
                        {
                            name:"卖五",
                            price:1,
                            volume:-1,
                            width:1,
                        },
                        {
                            name:"卖四",
                            price:2,
                            volume:-1,
                            width:1,
                        },
                        {
                            name:"卖三",
                            price:3,
                            volume:-1,
                            width:1,
                        },
                        {
                            name:"卖二",
                            price:4,
                            volume:1,
                            width:1,
                        },
                        {
                            name:"卖一",
                            price:5,
                            volume:1,
                            width:1,
                        },
                    ],
                buy:[
                        {
                            name:"买一",
                            price:1,
                            volume:1,
                            width:1,
                        },
                        {
                            name:"买二",
                            price:2,
                            volume:1,
                            width:1,
                        },
                        {
                            name:"买三",
                            price:3,
                            volume:-1,
                            width:1,
                        },
                        {
                            name:"买四",
                            price:4,
                            volume:-1,
                            width:10,
                        },
                        {
                            name:"买五",
                            price:5,
                            volume:-1,
                            width:50,
                        },
                ],
            }
        }
    }

</script>

<style lang="scss" scoped>
.order-book-panel {
    padding: 0 5%;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
}

.quote-time {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 32px;
    margin-bottom: 18px;
}

.order-book-levels {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.orderBook {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #909399;
    text-align: center;

    .el-col {
        height: 35px;
        line-height: 35px;
        white-space: nowrap;
    }

    .volumeratio {
        display: flex;
        align-items: center;
        height: 35px;
        overflow: hidden;

        .sell,
        .buy {
            height: 10px;
        }

        .sell {
            background: #67C23A;
        }

        .buy {
            background: #F56C6C;
        }
    }
}
</style>
