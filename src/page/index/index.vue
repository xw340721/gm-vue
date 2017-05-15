<template>
    <div>
        <head-nav></head-nav>
        <el-row>
            <main-body></main-body>
            <el-col :span="19">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick" @tab-remove="removeTab">
                    <div v-if="count!=0">
                        <el-tab-pane v-for="(item,index) in items" :label="item.label" :name="index" :key="index" :closable="true">
                            <router-view></router-view>
                        </el-tab-pane>
                    </div>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
	import headNav from "@/component/Nav";
	import mainBody from "@/component/MainBody";
	import{REMOVEITEM} from "../../store/menu/mutations-types"
	export default {
		data () {
			return {
				activeName: 'test'
			}
		},
		computed: {
			items: function () {
				return this.$store.state.menuModel.menus
			},
			count: function () {
				return this.$store.state.menuModel.count
			}
		},
        beforeUpdate:function () {
			//todo 存储可能不是很好
	        let keys = Object.keys(this.items);
	        if(keys.length){
		        keys = keys.pop();
		        this.$router.push(this.items[keys]['src'])
	        }
        },
		components: {
			headNav,
			mainBody
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			removeTab(targetName){
				this.$store.commit(REMOVEITEM, targetName)
				if(this.$router.currentRoute.path!="/index"){
					this.$router.back();
				}	
			}
		},

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
