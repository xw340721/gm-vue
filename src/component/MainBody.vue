<template>
    <el-col :span="5">
        <el-menu default-active="1-1" @item-click="itemCLick" @open="handleOpen"
                 @close="handleClose">
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
			//
		},
		data() {
			return {
				value4: "",
			};
		},
		methods: {
			itemCLick(self){
				var item = {
					key: self.$el.getAttribute('item-key'),
					value: {
						label: self.$el.innerText,
						src: self.$el.getAttribute("item-src"),
					}
				};
				this.$store.commit(ADDITEM, item);
			},
			handleOpen(key, keyPath) {
				console.log("open", key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log("close", key, keyPath);
			},
			handleSelect: function (key, keyPath) {
				console.log(key, keyPath);
			},

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