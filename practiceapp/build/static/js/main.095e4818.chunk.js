(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),r=a.n(c),o=(a(24),a(6)),s=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(o.b,{to:"/",className:"brand-logo left"},"Login Page"),l.a.createElement("ul",{id:"nav-mobile",className:"right"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/login"},"Login")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/signup"},"Signup")))))},i=(a(29),a(1)),u=function(){return l.a.createElement("h1",null,"Home")},m=a(9),h=a(7),p=a.n(h),d=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),u=s[0],h=s[1],d=Object(i.e)();return l.a.createElement("div",null,l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"Profile Searcher"),l.a.createElement("input",{type:"text",placeholder:"email",value:a,onChange:function(e){c(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:u,onChange:function(e){h(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){!a||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)?fetch("http://localhost:4000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:u})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?p.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),p.a.toast({html:"login successful",classes:"#00897b teal darken-1"}),d.push("/"))})).catch((function(e){console.log(e)})):p.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})}},"Login"),l.a.createElement("h5",null,l.a.createElement(o.b,{to:"/signup"},"Dont have an account ?")),l.a.createElement("h6",null,l.a.createElement(o.b,{to:"/reset"},"Forgot password ?"))))},g=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),u=s[0],h=s[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),f=g[0],E=g[1],v=Object(i.e)();return l.a.createElement("div",null,l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"Profile Searcher"),l.a.createElement("input",{type:"text",placeholder:"name",value:a,onChange:function(e){c(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"email",value:u,onChange:function(e){h(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:f,onChange:function(e){E(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){!u||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(u)?fetch("http://localhost:4000/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:u,password:f})}).then((function(e){return e.json()})).then((function(e){e.error?p.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(p.a.toast({html:e.message,classes:"#00897b teal darken-1"}),v.push("/login"))})).catch((function(e){console.log(e)})):p.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})}},"SIGNUP"),l.a.createElement("h5",null,l.a.createElement(o.b,{to:"/login"},"Already have an account ?"))))};var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(s,null),l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(u,null)),l.a.createElement(i.a,{path:"/login"},l.a.createElement(d,null)),l.a.createElement(i.a,{path:"/signup"},l.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.095e4818.chunk.js.map