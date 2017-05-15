<template>
    <el-row id="login" align="middle">
        <el-col :offset="6" :span="12">
            <el-form >
                <el-row>
                    <el-input :class="{error:validate.userErr}" type="text" @blur="checkUser" v-model="login.user"
                              auto-complete="off" placeholder="用户"></el-input>
                    <div :class="{error:validate.userErr}" class="tips">用户名不能为空!</div>
                </el-row>

                <el-row>
                    <el-input @blur="checkPassword" type="password" v-model="login.password" auto-complete="off"
                              placeholder="密码"></el-input>
                    <div :class="{error:validate.passwordErr}" class="tips">密码不能为空!</div>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <img :src="codeImage" v-bind:style="{width:'85%'}" v-on:click="changeEntryImg"/>
                    </el-col>
                    <el-col :span="18">
                        <el-input v-model.number="login.code"></el-input>

                    </el-col>
                </el-row>

                <!--</el-form-item>-->
                <el-form-item class="submit-group">
                    <el-col :offset="6" :span="10">
                        <el-button type="primary" @click="submitLogin">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>
	import {mapActions} from 'vuex'
	import{codeImageUrl} from '../../config/env'
	import{SUBMITLOGIN} from "../../store/user/action-type"
	export default {
		data() {
			return {
				login: {
					user: '',
					password: '',
					code: ''
				},
				codeImage: codeImageUrl,
				validate: {
					userErr: false,
					passwordErr: false,
				},
			};
		},
		computed:{

        },
		methods: {

			submitLogin(){
				let _this = this;
				for (let k in this.validate) {
					if (this.validate[k] == true) {
						this.$message({
							message: '请按照要求填写表单',
							type: 'warning'
                        })
						return
					}
				}
                let loginResult = this.$store.dispatch(SUBMITLOGIN, this.login);

				//同步状态
				loginResult.then(function () {
					//check
					let errorModel = _this.$store.state.errorModel;
					if (errorModel.code === 0) {
						_this.$message({
							message: errorModel.msg
						});
						_this.changeEntryImg();
						return;
					}
					_this.$router.push("/index");
				});

			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			changeEntryImg(){
				this.codeImage = codeImageUrl+"/?" + Math.random();
			},
			checkUser(){
				this.validate.userErr = this.login.user === "";
			},
			checkPassword(){
				this.validate.passwordErr = this.login.password === "";
			},
		}
	}
</script>

<style scoped>
    #login {
        height: auto !important;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .el-row {
        padding-bottom: 5px;
    }

    .tips {
        opacity: 0;
        padding-top: 5px;
        color: #ff4949;
        transition: opacity 1s;
        text-indent: 10px;
        font-size: 90%;
    }

    .tips.error {
        opacity: 1;
    }

    .submit-group {
        padding-top: 20px;
    }
</style>