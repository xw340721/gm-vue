import {
	LOGINERR,
	CLEANERROR,
} from "./mutations-types";


export default {
	[LOGINERR](state, error){
		state.msg  = error.data;
		state.code = error.status;
		state.time = new Date();
	},
	[CLEANERROR](state){
		state.msg = "";
		state.code = undefined;
		state.time = "";
	}
}