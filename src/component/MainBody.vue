<template>
    <el-col :span="3">
        <el-menu default-active="1-1" @item-click="itemCLick" :unique-opened="true">
            <game-select></game-select>
            <side-items></side-items>
        </el-menu>
    </el-col>
</template>

<script>
	import ElRow from "../../node_modules/element-ui/packages/row/src/row";
	import {ADDITEM} from "../store/menu/mutations-types";
	import GameSelect from "./GameSelect";
	import SideItems from "./SideItems";
	export default {
		components: {ElRow, GameSelect, SideItems},
		created: function () {
			
		},
		data() {
			return {
			};
		},
		methods: {
			itemCLick(self){
				let src = self.$el.getAttribute("item-src").toLowerCase();
				if(!self.$el.hasAttribute("item-forbidden")){
					var item = {
						value: {
							label: self.$el.innerText,
							src: src,
						}
					};
					this.$store.commit(ADDITEM, item);
					return 
				}
				this.$router.push(src);
			}

		}
	}
</script>

<style scoped lang="scss">
    .game-item-img {
        height: 100%;
        vertical-align: middle;
    }

    .game-item-label {
        vertical-align: middle;
        display: inline-block;
        line-height: 64px;
        height: 64px;
        font-size: 20px;
        text-indent: 10px;
    }
</style>