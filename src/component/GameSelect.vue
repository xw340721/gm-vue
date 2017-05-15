<template>
    <el-select @change="changeGame" class="select" id="gameSelect" v-model="game_model" clearable
               placeholder="---请选择游戏---">
        <el-option :style="{ height:'80px' }"
                   v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
            <slot>
                    <span>
                        <img class="game-item-img" :src="item.src"/>
                       <div class="game-item-label"> {{item.label}}</div>
                    </span>
            </slot>
        </el-option>
    </el-select>
</template>

<script>
	import {CHANGEUSERGAME} from "../store/user/action-type";
	import {GetGame} from "../server/getData";
	import {SAVECHOOSEMIXSERVER} from "../store/serveroperator/mutations-types"
	export default {
		created: function () {
			var that = this;

			//game选取
			GetGame().then(function (returns) {
				let gameArrs = returns.data.list;
				gameArrs.forEach(function (value, key) {
					let option   = {};
					option.value = value.id;
					option.label = value.name;
					option.src   = "/static/images/game_" + value.id + ".png";
					option.type  = value.type;
					that.options.push(option)
				})
			})
		},
		data(){
			return {
				game_model: "",
				options: []
			};
		},
		methods: {
			changeGame: function (value) {
				let len  = this.options.length;
				let type = "";
				for (let i = 0; i < len; i++) {
					if (this.options[i].value == value) {
						type = this.options[i].type;
						break;
					}
				}
				this.$store.dispatch(CHANGEUSERGAME, {gameId: value, type}).then(()=>{
					let errors = this.$store.state.errorModel;
					if(!errors.code){
						let h = this.$createElement
						this.$notify.error({
							title: errors.title,
							message: errors.msg
						});
					}
				})
					
			}
		}
	};
</script>

<style scope lang="scss">
    #gameSelect {
        width: 100%;
    }

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

    .select input {
        height: 80px;
    }
</style>
