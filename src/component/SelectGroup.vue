<template>
    <div>
        <el-select @change="mix_server_change" class="nav-item middle" v-model="mix_model" filterable
                   placeholder="---请选择大混服---">
            <el-option
                    v-for="item in mixserver_items"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <el-select @change="server_change" class="nav-item middle" v-model="server_model" filterable
                   placeholder="---请选择服务器---">
            <el-option
                    v-for="item in server_items"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <el-select v-show="showOperator" class="nav-item middle" v-model="operator_model" filterable
                   placeholder="---请选择运营商---">
            <el-option
                    v-for="item in operator_items"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
	import {mapMutations, mapGetters} from  "vuex";
	import {SAVECHOOSEMIXSERVER, SAVECHOOSERSERVER} from "../store/serveroperator/mutations-types";
	export default {
		data(){
			return {
				mix_model: "",
				server_model: "",
				operator_model: "",
				operator_items: []
			};
		},
		computed: {
			showOperator: function () {
				let bool = false;
				if (this.$store.state.userModel.user.game_type === "m") {
					bool = true;
				}
				return bool;
			},
			...mapGetters({
				mixserver_items: 'mix_server',
				server_items: 'servers',
//				operator_items:"operator"
			}),
		},
		methods: {
			...mapMutations({
				mix_server_change: SAVECHOOSEMIXSERVER,
				server_change: SAVECHOOSERSERVER,
			}),
		}
	};
</script>

<style scope>


</style>
