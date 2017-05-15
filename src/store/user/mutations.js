import * as mu from "./mutations-types";


export default {
    [mu.REGISTER_USER](state, user) {
        for (var i in user) {
            state.user[i] = user[i];
        }
        state.time = new Date();
    },
    [mu.RESET](state) {
        let orgin_state = {
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
        state = orgin_state;
    }
}