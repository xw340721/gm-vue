/**
 *
 * Created by Administrator on 2017/5/6.
 */
import mutations from "./mutations";
import getters from "./getters";
import actions from "./action"


export default {
	state:{
		user:{
			created_at: "",
			game_id: undefined,
			game_ids: "",
			group_id: "",
			group_name: "",
			id: "",
			ids: "",
			login_msg_status: "",
			op: "",
			operator_select_id: "",
			realname: "",
			status: "",
			telephone: "",
			username: "",
		},
		time:""
	},
	mutations,
	actions,
	getters
}