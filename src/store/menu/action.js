import * as type from "./action-type"
import * as server from "../../server/getData"


export default {
    async [type.GETMENUS]({ commit, state }) {
        let menus = await server.GetMenus()
        let menus_tree = {}
        if (menus.status) {
            let index = menus.data.index;
            let list = menus.data.list;
            state.links = recursive(index[0], index, list)

        }
    }
}

// 递归查找index
function recursive(index, list, menus) {
    let menus_tree = {};
    index.forEach(function(value, key) {
        menus_tree[key] = menus[value];
        if (list[value] != undefined) {
            menus_tree[key]['child'] = recursive(list[value], list, menus)
        }
    });
    return menus_tree;
}