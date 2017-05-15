import * as type from "./action-type";
import * as server from "../../server/getData";
import * as mu from "./mutations-types";
import * as er_mu from "../error/mutations-types";
import * as so_mu from "../serveroperator/mutations-types";
import * as menu_ac from "../menu/action-type"

export default {

    async [type.SUBMITLOGIN]({ commit, state, dispatch }, user) {
        //触发clean
        commit(er_mu.CLEANERROR);
        let data = await server.login(user);
        if (data.status) {
            commit(mu.REGISTER_USER, data.data);
        } else {
            commit(er_mu.LOGINERR, data);
        }

        dispatch(menu_ac.GETMENUS);

    },
    async [type.CHANGEUSERGAME]({ commit, state }, { gameId, type }) {


        //选游戏 清除之前状态
        commit(so_mu.SAVECHOOSEMIXSERVER, "")
        commit(so_mu.SAVECHOOSERSERVER, "")
        commit(so_mu.SAVECHOOSEOPERATOR, "")

        //触发clean
        commit(er_mu.CLEANERROR);

        //发送更改游戏请求
        let response = await server.SetSelectGame(gameId);
        if (response.status) {
            //改变状态
            state.user.game_id = response.data.id;
            state.user.game_type = response.data.type

            //获取mixServer
            let mixServer = await server.GetMixServer(gameId);
            commit(so_mu.SETMIXSERVER, mixServer.data.list);

            //获取server
            let serverData = await server.GetServer(gameId);
            commit(so_mu.SETSERVER, serverData.data.list);

            //获取operator
            let operator = await server.GetOperator(gameId);
            commit(so_mu.SETOPERATOR, operator.data.list);
            return
        }
        commit(er_mu.SELECTGAMEer_mu, response.data);
    },
    async [type.LOGOUT]({ commit, state }) {
        let response = await server.Logout()
        commit(mu.RESET)
        commit(so_mu.RESET)
        commit(er_mu.RESET)
    }

}