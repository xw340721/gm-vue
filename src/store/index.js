import Vue from "vue"
import Vuex from "vuex"
import userModel from "./user/"
import errorModel from "./error/"
import menuModel from "./menu/"


Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		userModel,
		errorModel,
		menuModel,
	}
})