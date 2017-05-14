import * as type from "./mutations-types";


export default {
	[type.SETMIXSERVER](state, data){
		state.mix_server = data;
	},
	[type.SETOPERATOR](state, data){
		state.operator = data;
	},
	[type.SETSERVER](state, data){
		state.servers = data;
	},
	[type.SAVECHOOSEMIXSERVER](state, data){
		state.choose_mix_server = data;
	},
	[type.SAVECHOOSERSERVER](state, data){
		state.choose_server = data;
	}
}