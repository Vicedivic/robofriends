(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o);n(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(25);var l=n(2),i=function(e){var t=e.name,n=e.email;e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"",alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},s=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(i,Object.assign({},e,{key:e.id}))})))},u=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},h=function(e){var t=e.children;return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:500}},t)},m=n(13),d=n.n(m),b=n(14),f=n(15),v=n(17),E=n(16),g=n(18),p=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),t}(r.a.Component),w=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],b=i[1];Object(a.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){return o(e.data.filter((function(e){return{id:e.id,name:e.name,email:e.email}})))})).catch((function(e){return console.log(e)}))}),[]);var f=n.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(u,{searchChange:function(e){return b(e.target.value)}}),r.a.createElement(h,null,r.a.createElement(p,null,r.a.createElement(s,{robots:f}))))};c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ced0fe8d.chunk.js.map