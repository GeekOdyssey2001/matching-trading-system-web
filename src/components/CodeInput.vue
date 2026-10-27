<template>
    <!--
        state:用户选择的内容
        fetch-suggestions:通过给出queryString,callback来填充提示框内容
        trigger-on-focus：是否获取到焦点之后立即触发搜索
        debounce：查询触发阈值，用户输入间隔大于某个值再开始搜索
        select:自动提示框的消息（用户选中的item）
        -->

    <!--trigger-on-focus焦点转移到输入框是否立刻触发搜索-->
    <!--debounce防抖动，这里当用户停顿超过100毫秒就去后台查，否则不查-->
    <!--@select表示el-autocomplete这个组件发出来的消息-->
    <el-autocomplete
        style="width: 100%"
        size="small"
        placeholder="代码/简称"
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        :trigger-on-focus="false"
        :debounce=100
        @select="updateInput"
    />

          



</template>


<script>
    export default {
        name:"CodeInput",
        emits: ['codeinput-selected'],
        data(){
            return{
                state:'',
            }
        },
        methods:{
            //参数:queryString 输入框的值 callback回调来完成
            querySearchAsync(queryString,callback){
                let list=[
                    {
                        code:1,
                        name:'平安银行',
                        value:'000001-平安银行'
                    },
                    {
                        code:600000,
                        name:'浦发银行',
                        value:'600000-浦发银行'
                    },
                ];
                //通知自动提示框显示哪几项
                callback(list);
            },
            updateInput(item){
                //code[int]
                //this.code = item.code; 1
                //1 --> 000001 --> 000001
                this.state = ('000000' + item.code).slice(-6);
                //
                this.$emit("codeinput-selected", item)
            }
        }
    }

</script>

<style lang="scss">
    .wide-dropdown{
        width: 600px !important;
    }

</style>