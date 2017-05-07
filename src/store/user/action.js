import * as type from "./action-type";
import * as server from "../../server/getData"
import * as mu from "./mutations-types";
import * as error from "../error/mutations-types";


export default {
	async RegisterUser({commit, state}){
		// console.log(commit, state)
	},
	async [type.SUBMITLOGIN]({commit, state}, user){
		//触发clean
		commit(error.CLEANERROR);
		let data = await server.login(user);
		if (data.status) {
			commit(mu.REGISTER_USER, data.data);
		}else{
			commit(error.LOGINERR, data);
		}
	}
	
}