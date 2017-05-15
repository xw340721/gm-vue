<template>
    <div>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item item-src="/index/test" item-key="test" index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        {{menus}}
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
	export default {
        created:function(){
           
        },
		data(){
			return {}
		},
        computed:{
           ...mapGetters({
                menus:"getMenus"
           })
        }
	}
</script>

<style scope>


</style>
