<template>
    <el-menu id="nav" theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
            GM后台管理系统
        </el-menu-item>
        <el-submenu :style="{position:'absolute',right:'30px'}" index="2">
            <template slot="title">系统</template>
            <el-menu-item index="2-1">登陆日志</el-menu-item>
            <el-menu-item index="2-2">帮助文档</el-menu-item>
            <el-menu-item index="2-3">修改密码</el-menu-item>
            <el-menu-item index="2-3">退出系统</el-menu-item>
        </el-submenu>
    </el-menu>
</template>


<script>
	export default {
		props:{
			game:{
				type:String,
				default:"./static/images/game_97.png"
			},
			logo:{
				type:String,
				default:"./static/images/newlogo.png"
			},
			slogen:{
				type:String,
				default:"./static/images/newlogo2.png"
			}
		},
		data() {
			return {
				activeIndex: '1',
			};
		},
		methods: {
			handleSelect:function (key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
    }
    #nav{
    }

</style>
