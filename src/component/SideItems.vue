<template>
    <div>

       <el-menu-item  :item-forbidden="true" item-src="/index" index="1">首页</el-menu-item>
       <template v-for="(menu, index) in menus" >
            <template v-if="menu.child" >
                <el-submenu  :index="menu.id" slot="title"> 
                    <template slot="title"><i>{{menu.name}}</i></template>
                    <el-submenu  v-for="(submenu, subindex) in menu.child" :index="submenu.id" :key="submenu.id">
                        <template slot="title">
                            <i>{{submenu.name}}</i>
                        </template>
                        <el-menu-item :item-src="sub2menu.action"  v-for="(sub2menu, sub2index) in submenu.child" :index="sub2menu.id" :key="sub2menu.id">
                            {{sub2menu.name}}
                        </el-menu-item>
                    </el-submenu>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :item-forbidden="true" item-src="/index" index="index">{{menu.name}}</el-menu-item>
            </template>
       </template>    
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
        },
        methods:{
            handleClose:function(index){
                console.log(index);
            }
        }
	}
</script>

<style scope>


</style>
