import fetct from "../config/fetch";


let getUser = () => fetct("GET", '', {
    action: "login.getUser"
})

let login = (user) => fetct("POST", '', {
    action: "login.login",
    username: user.user,
    password: user.password,
    code: user.code
})

let GetGame = () => fetct("GET", '', {
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

export {
    getUser,
    login,
    GetGame,
    GetMixServer,
    GetServer,
    GetOperator,
    SetSelectGame
};