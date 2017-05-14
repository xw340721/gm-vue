<template>
    <el-menu id="nav" theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
             @select="handleSelect">
        <el-menu-item index="1">
            GM后台管理系统
        </el-menu-item>
        <select-group :mixserver_items="options" :server_items="options" :server_model="server_model" game_model=""
                      :mix_model="mix_model" class="nav-item middle"></select-group>
        <el-submenu :style="{position:'absolute',right:'30px'}" index="3">

            <template slot="title">系统</template>
            <el-menu-item index="2-1">登陆日志</el-menu-item>
            <el-menu-item index="2-2">帮助文档</el-menu-item>
            <el-menu-item index="2-3">修改密码</el-menu-item>
            <el-menu-item index="2-3">退出系统</el-menu-item>
        </el-submenu>
    </el-menu>
</template>


<script>
	import SelectGroup from "./SelectGroup"
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				mix_model: "",
				server_model: "",

			};
		},
		computed: function () {

		},
		methods: {
			handleSelect: function (key, keyPath) {
				console.log(key, keyPath);
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
