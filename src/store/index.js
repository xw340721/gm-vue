import Vue from "vue";
import Vuex from "vuex";
import userModel from "./user/";
import errorModel from "./error/";
import menuModel from "./menu/";
import serverOperatorModel from "./serveroperator";


Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		userModel,
		errorModel,
		menuModel,
		serverOperatorModel
	}
})