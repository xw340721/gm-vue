<template>
    <el-menu id="nav" theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
            GM后台管理系统
        </el-menu-item>
        <select-group  class="nav-item middle"></select-group>
        <el-submenu :style="{position:'absolute',right:'30px'}" index="3">
            <template slot="title">{{userName}}</template>
            <el-menu-item index="2-1">登陆日志</el-menu-item>
            <el-menu-item index="2-2">帮助文档</el-menu-item>
            <el-menu-item index="2-3">修改密码</el-menu-item>
            <el-menu-item @click="logout" index="2-4"> 退出系统 </el-menu-item>
        </el-submenu>
    </el-menu>
</template>


<script>
	import SelectGroup from "./SelectGroup"
	import {LOGOUT} from "../store/user/action-type"
	export default {
		components: {
			SelectGroup
		},
		props: {
			game: {
				type: String,
				default: "./static/images/game_97.png"
			},
			logo: {
				type: String,
				default: "./static/images/newlogo.png"
			},
			slogen: {
				type: String,
				default: "./static/images/newlogo2.png"
			}
		},
		data() {
			return {
				activeIndex: '1',
			};
		},
		computed:{
			userName:function(){
				return this.$store.state.userModel.user.username+"("+this.$store.state.userModel.user.realname+")"
			}

		},
		methods: {
			handleSelect: function (key, keyPath) {
				console.log(key, keyPath);
			},
			logout:function(){
				this.$confirm('确认是否退出登录?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$store.dispatch(LOGOUT).then(()=>{
						this.$router.go("/login")
					})
				}).catch(()=>{

				})
			}
		}
	}
</script>

<style scoped lang="scss">
    img {
        width: 100%;
        height: 100%;
    }

    #nav {
        .nav-item {
            position: absolute;
            &:after {
                content: "";
                display: block;
                clear: both;
            }
        }
        .middle {
            top: 50%;
            left: 300px;
            transform: translateY(-50%);
        }
    }

</style>
