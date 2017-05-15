import * as mu from "./mutations-types";


export default {
    [mu.LOGINERR](state, error) {
        state.msg = error.data;
        state.code = error.status;
        state.time = new Date();
    },
    [mu.CLEANERROR](state) {
        state.msg = "";
        state.code = 1;
        state.time = "";
    },
    [mu.SELECTGAMEERROR](state, data) {
        state.title = "错误"
        state.msg = data;
        state.code = 0;
        state.time = new Date();
    },
    [mu.RESET](state) {
        let orgin_state = {
            title: "",
            msg: "",
            time: "",
            code: 1
        };
        state = orgin_state;
    }
}