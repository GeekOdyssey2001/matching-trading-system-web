<template>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <el-icon><Setting /></el-icon> 修改密码
            </el-breadcrumb-item>
        </el-breadcrumb>

        <el-card shadow="hover" class="container">
            <el-row class="password-form-row">
                <el-form :model="form" label-width="80px" class="password-form"> <!--变量和输入框的绑定-->
                    <el-form-item label="旧密码">
                        <el-input :type="'password'" v-model="form.oldPassword"/>
                    </el-form-item>

                    <el-form-item label="新密码">
                        <el-input :type="'password'"  v-model="form.newPassword"/>
                    </el-form-item>

                    <el-form-item label="确认密码">
                        <el-input :type="'password'"  v-model="form.newPasswordcfm"/>
                    </el-form-item>

                    <el-form-item class="password-form-actions">
                        <el-button size="small" type="primary">确认修改</el-button>
                    </el-form-item>
                </el-form>
            </el-row>

        </el-card>

    
    </div>

</template>


<script>
import { Setting } from '@element-plus/icons-vue'

    export default{
        name: "PwdSetting",
        components: { Setting },
        data(){
            return{
                form:{
                    oldPassword:'',
                    newPassword:'',
                    newPasswordcfm:''
                }
            };
        },
    }
</script>

<style scoped>
.password-form-row {
    padding: 0 15%;
}

.password-form {
    width: 100%;
}

.password-form-actions :deep(.el-form-item__content) {
    justify-content: flex-end;
}

@media (max-width: 768px) {
    .password-form-row {
        padding: 0;
    }
}
</style>
