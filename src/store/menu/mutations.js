import {
    ADDITEM,
    REMOVEITEM
} from "./mutations-types";


export default {
    [ADDITEM](state, data) {
        if (!state.menus[data.key]) {
            state.count++;
        }
        state.menus[state.count] = data.value;
    },
    [REMOVEITEM](state, key) {
        if (state.menus[key]) {
            state.count--;
        }
        delete state.menus[key];
    }
}