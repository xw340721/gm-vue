/**
 *
 * Created by Administrator on 2017/5/6.
 */
import mutations from "./mutations";
import getters from "./getters";
import actions from "./action"

let state = {
    menus: {},
    count: 0,
    links: {}
};


export default {
    state,
    mutations,
    getters,
    actions
}