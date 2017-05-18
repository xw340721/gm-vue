import App from "@/App"
import VueRouter from "vue-router"
import Vue from "vue"
import { getUser } from "../server/getData"
let index = r => require.ensure([], () => r(require("../page/index/index")), "index")
let login = r => require.ensure([], () => r(require("../page/login/login")), "login")


Vue.use(VueRouter)


const routes = [{
    path: "/",
    component: App,
    children: [{
            path: "",
            redirect: "/index"
        },
        {
            path: "/index",
            name: "index",
            component: index,
            children: [

            ]
        },
        {
            path: "/login",
            name: "login",
            component: login
        }
    ]
}]


const router = new VueRouter({
    routes,
    mode: 'hash',
    strict: process.env.NODE_ENV !== 'production'
})


//hook
router.beforeEach(function(to, from, next) {
    if (to.path != "/login") {
        let data = getUser()
        data.then(function(data) {
            if (data.status === 0) {
                next({
                    path: "/login"
                })
            }
        }, function(err) {
            console.log(err);
            next({
                path: "/login",
                query: {
                    error: "请求失败"
                }
            })
        })
    }
    next()
})


export default router