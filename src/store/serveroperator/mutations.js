import * as type from "./mutations-types";


export default {
    [type.SETMIXSERVER](state, data) {
        if (data.toString() == "[object Object]") {
            let changeData = []
            for (var i in data) {
                changeData.push(data[i]);
            }
            data = changeData
        }
        state.mix_server = data;
    },
    [type.SETOPERATOR](state, data) {
        state.operator = data;
    },
    [type.SETSERVER](state, data) {
        state.servers = data;
    },
    [type.SAVECHOOSEMIXSERVER](state, data) {
        state.choose_mix_server = data;
    },
    [type.SAVECHOOSERSERVER](state, data) {
        state.choose_server = data;
    },
    [type.SAVECHOOSEOPERATOR](state, data) {
        state.choose_operator = data
    },
    [type.RESET](state) {
        let orgin_state = {
            mix_server: [],
            servers: [],
            operator: [],
            choose_server: "",
            choose_operator: "",
            choose_mix_server: ""
        };

        state = orgin_state;
    }
}