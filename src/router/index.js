import App from "../App"

var hello = r=>require.ensure([],()=>r(require("../page/index/index")),"index")


export default [{
  path:"/",
  component:App,
  children:[
    {
      path:"",
      redirect: "/hello"
    },
    {
      path:"/hello",
      component:hello
    }
  ]
}]
  
