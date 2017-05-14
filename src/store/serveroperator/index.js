/**
 *
 * Created by Administrator on 2017/5/6.
 */
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

let state = {
	mix_server: [],
	servers: [],
	operator: [],
	choose_server: undefined,
	choose_operator: undefined,
	choose_mix_server: undefined
};


export default {
	actions,
	state,
	mutations,
	getters,
}