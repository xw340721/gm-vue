import fetct from "../config/fetch"



let getUser = ()=>fetct("GET",'',{
	action:"login.getUser"
})

let login = (user)=>fetct("POST",'',{
	action:"login.login",
	username:user.user,
	password:user.password,
	code:user.code
})

export {
	getUser,
	login
}