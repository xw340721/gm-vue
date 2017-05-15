/**
 *
 * Created by Administrator on 2017/5/6.
 */
import mutations from "./mutations";
import getters from "./getters";
import actions from "./action";



let state = {
    user: {
        created_at: "",
        game_id: undefined,
        game_type: "",
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
    time: ""
}


export default {
    state,
    mutations,
    actions,
    getters
}