(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{123:function(e,t,n){e.exports=n(522)},128:function(e,t,n){},129:function(e,t,n){},498:function(e,t,n){},499:function(e,t,n){},500:function(e,t,n){},522:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),s=(n(128),n(129),n(9)),l=n(122),i=n(49),u=n(116),m=n(12),p=new(function(){function e(){Object(i.a)(this,e),Object(m.c)(this,{socket:null,allChats:[],context:-1,step:0,loading:!1})}return Object(u.a)(e,[{key:"socketConnect",value:function(e){var t=this;this.socket=new WebSocket("ws://localhost:8000/ws/chat/?token="+e),this.socket.onopen=function(e){console.log("websocket connected!")},this.socket.onmessage=function(e){var n=Object(l.a)(t.allChats),a=JSON.parse(e.data);n.push({from:"TinkerBell",msg:a.msg}),t.allChats=n,sessionStorage.setItem("chats",JSON.stringify(t.allChats)),t.loading=!1,t.context!=a.context&&1!=a.context&&2!=a.context||0==a.context?(t.step=1,t.context=a.context):t.step=t.step+1},this.socket.onerror=function(e){console.log(e.messasge)},this.socket.onclose=function(e){console.log("websocket closed!")}}}]),e}()),g=new function e(){Object(i.a)(this,e),Object(m.c)(this,{isLoggedIn:"",username:""})},f=n(117),d=n.n(f);var h=function(){return r.a.createElement(d.a,{params:{particles:{number:{value:140},size:{value:2},color:{value:"black"},move:{speed:.2},line_linked:{color:"#474343",opacity:.1}}}})};n(498);var E=function(){return r.a.createElement("div",{class:"lp"},r.a.createElement(h,null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"left"},r.a.createElement("div",{class:"landing-page-title"},"Stay ahead of the game"),r.a.createElement("div",{class:"landing-page-title page-title2"},"Just like institutional investors"),r.a.createElement("p",{class:"landing-page-p"},"On-Chain Data and Intelligence Platform"),r.a.createElement("div",{class:"viewcharts-buffer"},r.a.createElement("button",null,"View Charts"))))))};n(499);n(500);var v=function(){return r.a.createElement(s.Footer,{size:"mini"},r.a.createElement(s.FooterSection,{type:"left",logo:"nami"},r.a.createElement(s.FooterLinkList,null,r.a.createElement("a",{href:"#"},"Help"),r.a.createElement("a",{href:"#"},"Privacy & Terms"),r.a.createElement("a",{href:"#"},"Copyright \xa9 2020 Jae Hyun Moon All rights reserved"))))},k=n(118),b=n.n(k).a.create({baseURL:"http://localhost:8000/api/",timeout:5e3,headers:{Authorization:"JWT "+sessionStorage.getItem("access_token"),"Content-Type":"application/json",accept:"application/json"}});b.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;if(401===e.response.status&&"Unauthorized"===e.response.statusText){var n=sessionStorage.getItem("refresh_token");return b.post("/token/refresh/",{refresh:n}).then((function(e){return sessionStorage.setItem("access_token",e.data.access),sessionStorage.setItem("refresh_token",e.data.refresh),b.defaults.headers.Authorization="JWT "+e.data.access,t.headers.Authorization="JWT "+e.data.access,b(t)})).catch((function(e){console.log(e)}))}return Promise.reject(e)}));var w=b,O=n(17),j=n.n(O),C=n(50),S=n(22);var y=function(){var e=Object(a.useState)(!1),t=Object(S.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(S.a)(c,2),i=l[0],u=l[1],m=Object(a.useState)(""),p=Object(S.a)(m,2),g=p[0],f=p[1],d=Object(a.useState)(""),h=Object(S.a)(d,2),E=h[0],v=h[1],k=Object(a.useState)(!1),b=Object(S.a)(k,2),O=b[0],y=b[1],I=function(){var e=Object(C.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g===E){e.next=3;break}return y(!0),e.abrupt("return");case 3:return e.prev=3,e.next=6,w.post("/user/create/",{username:i,password:g});case 6:return t=e.sent,o(!1),e.abrupt("return",t);case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0.stack);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{class:"signup"},r.a.createElement(s.Button,{type:"button",onClick:function(){return o(!0)}},"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(s.Dialog,{open:n},r.a.createElement(s.DialogTitle,null,"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(s.DialogContent,null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Enter Username",onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("input",{type:"password",placeholder:"Enter Password",onChange:function(e){return f(e.target.value)},required:!0}),r.a.createElement("input",{type:"password",placeholder:"Retype Password",onChange:function(e){return v(e.target.value)},required:!0}),O?r.a.createElement("div",{class:"error"},"\uc785\ub825\uac12\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"):r.a.createElement("div",null))),r.a.createElement(s.DialogActions,null,r.a.createElement(s.Button,{type:"button",onClick:function(){return I()}},"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(s.Button,{type:"button",onClick:function(){return o(!1)}},"\ub2eb\uae30"))))};var I=function(){var e=Object(a.useState)(!1),t=Object(S.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(S.a)(c,2),i=l[0],u=l[1],m=Object(a.useState)(""),f=Object(S.a)(m,2),d=f[0],h=f[1],E=function(){var e=Object(C.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.post("/token/obtain/",{username:i,password:d});case 3:t=e.sent,w.defaults.headers.Authorization="JWT "+t.data.access,sessionStorage.setItem("access_token",t.data.access),sessionStorage.setItem("refresh_token",t.data.refresh),sessionStorage.setItem("username",i),g.isLoggedIn=!0,g.username=i,p.socketConnect(t.data.access),o(!1),e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(s.Button,{colored:!0,onClick:function(){return o(!0)},raised:!0,ripple:!0},"Log In"),r.a.createElement(s.Dialog,{open:n},r.a.createElement(s.DialogTitle,null,"LogIn"),r.a.createElement(s.DialogContent,null,r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Enter Username",onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("input",{type:"password",placeholder:"Enter Password",onChange:function(e){return h(e.target.value)},required:!0}))),r.a.createElement(s.DialogActions,null,r.a.createElement(y,null),r.a.createElement(s.Button,{type:"button",onClick:function(){return o(!1)}},"\ub2eb\uae30"),r.a.createElement(s.Button,{type:"button",onClick:function(){return E()}},"\ub85c\uadf8\uc778"))))},x=n(120);Object(x.a)((function(){return r.a.createElement("div",null,g.isLoggedIn?r.a.createElement("div",null,r.a.createElement("div",{class:"username_login"},g.username,"\ub2d8 \ud658\uc601\ud569\ub2c8\ub2e4"),r.a.createElement(s.Button,{colored:!0,onClick:function(){return g.isLoggedIn=!1,g.username=null,sessionStorage.clear(),void p.socket.close()},raised:!0,ripple:!0},"\ub85c\uadf8\uc544\uc6c3")):r.a.createElement(I,null))}));var L=function(){return Object(a.useEffect)((function(){return sessionStorage.getItem("access_token")&&sessionStorage.getItem("username")&&(p.socketConnect(sessionStorage.getItem("access_token")),sessionStorage.getItem("chats")&&(p.allChats=JSON.parse(sessionStorage.getItem("chats"))),g.username=sessionStorage.getItem("username"),g.isLoggedIn=!0),function(){console.log("websocket disconnected"),p.socket.close()}}),[]),r.a.createElement("div",null,r.a.createElement(s.Layout,null,r.a.createElement(s.Header,{title:r.a.createElement("div",{class:"logo-name"},"nami")},r.a.createElement(s.Navigation,null,r.a.createElement("a",{href:"#"},"Home"),r.a.createElement("a",{href:"#"},"Chart"),r.a.createElement("a",{href:"#"},"Contact"),r.a.createElement("p",null,r.a.createElement("button",{class:"loginbutton"},"Log in")))),r.a.createElement(s.Drawer,{title:"Title"},r.a.createElement(s.Navigation,null,r.a.createElement("a",{href:"#"},"Link"),r.a.createElement("a",{href:"#"},"Link"),r.a.createElement("a",{href:"#"},"Link"),r.a.createElement("a",{href:"#"},"Link"))),r.a.createElement(s.Content,null,r.a.createElement(E,null),r.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(518),n(519);var J=n(121);c.a.render(r.a.createElement(J.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.85aa368b.chunk.js.map