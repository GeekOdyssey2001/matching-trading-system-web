<template> <!-- 每个组件的模板只能包含一个根template-->
  <div class="header">
    <!--折叠按钮-->
    <div class ="collapse-btn" @click="collapseChange">
        <el-icon v-if="!collapse"><Fold /></el-icon>
        <el-icon v-else><Expand /></el-icon>
    </div>

    <!--LOGO-->
    <div class = "logo"> Jackie证券交易系统</div>

    <!--右侧下拉列表：用户信息+下拉菜单-->
    <div class = "header-right">
        <div class = "header-user-con">
            <el-dropdown class="user-name" trigger="click">
                <span class = "el-dropdown-link">
                    {{username}}
                    <!--小箭头-->
                    <el-icon><CaretBottom /></el-icon>
                </span>

                <!--下拉菜单内容-->
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
  </div>
</template>


<script>
    import { Fold, Expand, CaretBottom } from '@element-plus/icons-vue'

    export default{
        name: "Header",
        components: { Fold, Expand, CaretBottom },
        props: {
            collapse: { type: Boolean, default: false },
        },
        emits: ['toggle-collapse'],
        //定义变量
        data(){
            return{
                username:'guest',
            }
        },
        methods:{
            collapseChange(){
                this.$emit('toggle-collapse');
            }
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }

    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }

    .header .logo {
        float: left;
        width: 250px;
        line-height: 70px;
    }

    .header-right {
        float: right;
        padding-right: 50px;
    }

    .header-user-con {
        display: flex;
        height: 70px;
        align-items: center;
    }

    .btn-bell .el-icon-bell {
        color: #fff;
    }

    .user-name {
        margin-left: 10px;
    }

    .user-avator {
        margin-left: 20px;
    }

    .user-avator img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .el-dropdown-link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: #fff;
        cursor: pointer;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
</style>
