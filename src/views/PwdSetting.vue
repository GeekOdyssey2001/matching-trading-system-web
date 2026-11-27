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
                        <el-input :type="'password'"  v-model="form.newPasswordCfm"/>
                    </el-form-item>

                    <el-form-item class="password-form-actions">
                        <el-button size="small" type="primary" 
                        @click="onPwdSubmit">确认修改</el-button>
                    </el-form-item>
                </el-form>
            </el-row>

        </el-card>

    
    </div>

</template>


<script>
import { Setting } from '@element-plus/icons-vue'
import encryptMD5 from 'js-md5'
import {pwdUpdate,logout} from '../api/loginApi'


    export default{
        name: "PwdSetting",
        components: { Setting },
        data(){
            return{
                form:{
                    oldPassword:'',
                    newPassword:'',
                    newPasswordCfm:''
                }
            };
        },
        methods:{
            logoutCallback(code,msg,data){
                if(code !==0){
                    this.$message.error(msg);
                }else{
                    //更新成功，强制退出
                    logout();
                }
            },

            onPwdSubmit(){
                if(this.form.newPassword != this.form.newPasswordCfm){
                    this.$message.warning("两次输入的密码不一致，请重新输入");
                    return;
                }
                //实际长度可能增加，密码字符也需要限制
                if(this.form.newPassword.length < 4){
                    this.$message.warning("密码长度太短，请重新输入");
                    return;
                }
                pwdUpdate({
                    uid: sessionStorage.getItem("uid"),
                    oldPwd: encryptMD5(this.form.oldPassword),
                    newPwd: encryptMD5(this.form.newPassword)

                }, this.logoutCallback);
            }
        } 
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
