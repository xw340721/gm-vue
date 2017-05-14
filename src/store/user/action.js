import * as type from "./action-type";
import * as server from "../../server/getData";
import * as mu from "./mutations-types";
import * as error from "../error/mutations-types";
import * as so_mu from "../serveroperator/mutations-types";

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
		} else {
			commit(error.LOGINERR, data);
		}
	},
	async [type.CHANGEUSERGAME]({commit, state}, {gameId, type}){
		
		//change gameid
		state.user.game_id   = gameId;
		state.user.game_type = type;
		
		//获取mixServer
		let mixServer = await server.GetMixServer(gameId);
		commit(so_mu.SETMIXSERVER, mixServer.data.list);
		
		//获取server
		let serverData = await server.GetServer(gameId);
		commit(so_mu.SETSERVER, serverData.data.list);
		
		//获取operator
		let operator = await server.GetOperator(gameId);
		commit(so_mu.SETOPERATOR, operator.data.list);
		
	}
	
}