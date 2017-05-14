import {CHANGEUSERGAME, REGISTER_USER} from "./mutations-types";


export default {
	[REGISTER_USER](state, user){
		for (var i in user) {
			state.user[i] = user[i];
		}
		state.time = new Date();
	}
}