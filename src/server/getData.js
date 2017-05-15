import fetct from "../config/fetch";


let getUser = () => fetct("POST", '', {
    action: "login.getUser"
})

let login = (user) => fetct("POST", '', {
    action: "login.login",
    username: user.user,
    password: user.password,
    code: user.code
})


let Logout = () => fetct("POST", '', {
    action: "login.logout",
})

let GetGame = () => fetct("POST", '', {
    action: "game.getList"
})

let GetMixServer = (gameId) => fetct("POST", '', {
    action: "opgame.getOpgameListByAdmin",
    size: 0,
    page_game: gameId
});

let GetServer = (gameId) => fetct("POST", '', {
    action: "server.getServerList",
    size: 0,
    page_game: gameId
});

let GetOperator = (gameId) => fetct("POST", '', {
    action: "operator.getList",
    size: 0,
    page_game: gameId
});


let SetSelectGame = (gameId) => fetct("POST", '', {
    action: "admin.selectGame",
    game_id: gameId
})


let GetMenus = () => fetct("POST", '', {
    action: "main.getMenuList"
})

export {
    getUser,
    login,
    GetGame,
    GetMixServer,
    GetServer,
    GetOperator,
    SetSelectGame,
    Logout,
    GetMenus
};