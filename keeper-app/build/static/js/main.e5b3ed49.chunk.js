(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n(17),s=n.n(r),i=n(26),o=n(15),l=n(10),j=n(49),d=n(86),u=n(75),b=n(31),h={user:null};window.localStorage.getItem("user")&&(h.user=window.localStorage.getItem("user"));var O=Object(a.createContext)({user:null,login:function(e){},logout:function(){}});function m(e,t){switch(t.type){case"LOGIN":return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{user:null});default:return e}}function x(e){var t=Object(a.useReducer)(m,h),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(c.jsx)(O.Provider,Object(o.a)({value:{user:r.user,login:function(e){window.localStorage.setItem("user",e),s({type:"LOGIN",payload:e})},logout:function(){window.localStorage.removeItem("user"),s({type:"LOGOUT"})}}},e))}var p=n(41),g=n(84),f=n(167),v=n(13),y=n(12),N=n.n(y);var w=Object(v.g)((function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(a.useContext)(O),o=i.user,h=i.logout;return Object(c.jsx)("header",{children:Object(c.jsxs)(p.a,{bg:"none",expand:"sm",children:[Object(c.jsxs)(p.a.Brand,{children:[Object(c.jsx)("h1",{children:"Keeper "})," "]}),Object(c.jsx)(p.a.Toggle,{"aria-controls":"header"}),o&&Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(p.a.Collapse,{id:"header",children:[Object(c.jsx)(j.a,{inline:!0,children:Object(c.jsxs)(d.a,{className:"search",children:[Object(c.jsx)(u.a,{onFocus:function(){e.history.push("/search")},name:"txtSearch",value:r,onChange:function(t){var n=t.target.value;s((function(){return n}),function(t){""!==t?N.a.post("api/search/",{value:t}).then((function(t){return e.setResult((function(){return t.data}))})).catch((function(t){alert(t),h(),e.history.push("/login")})):e.setResult((function(e){return[]}))}(n))},type:"text",placeholder:"search"}),Object(c.jsxs)(d.a.Append,{children:[" ",Object(c.jsx)(b.a,{variant:"outline",onClick:function(){s((function(e){return""})),e.setResult((function(e){return[]})),e.history.push("/views")},style:{backgroundColor:"#fff"},children:"X"})," "]})]})}),Object(c.jsxs)(g.a,{className:"pl-5 ml-3",title:Object(c.jsx)(f.a,{}),id:"collasible-nav-dropdown",children:[Object(c.jsxs)(g.a.Item,{children:["Hi ",o,"! "]}),Object(c.jsx)(g.a.Item,{className:"text-danger",onClick:h,children:"Logout"})]})]})})]})})}));var C=function(){var e=(new Date).getFullYear();return Object(c.jsxs)("footer",{children:[" ",Object(c.jsxs)("p",{children:["Copyright ",e," "]}),Object(c.jsxs)("p",{children:["Developed by ",Object(c.jsx)("a",{href:"https://webstar-maseko.herokuapp.com/",children:"Webstar Maseko"})]})]})},k=n(82),S=n(40),_=n(46),I=n(98),L=n.n(I),D=n(99),R=n.n(D),T=n(100),F=n.n(T),P=n(56);var B=function(){var e=Object(v.f)().url;return Object(c.jsxs)(p.a,{fixed:!0,expand:"md",className:"pl-0 pt-0 pr-0 ",children:[Object(c.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(p.a.Collapse,{"aria-orientation":"vertical",id:"basic-navbar-nav",children:Object(c.jsxs)(_.a,{variant:"pills","data-spy":"affix",defaultActiveKey:"".concat(e),className:"nav flex-column sticky myClass pt-1",children:[Object(c.jsx)(_.a.Item,{className:"pb-0",children:Object(c.jsxs)(_.a.Link,{href:"".concat(e),children:[Object(c.jsx)("i",{className:"pr-3",children:Object(c.jsx)(L.a,{})})," Notes "]})}),Object(c.jsx)(_.a.Item,{className:"pb-0",children:Object(c.jsxs)(_.a.Link,{as:P.b,to:"".concat(e,"/reminder"),eventKey:"link-1",children:[" ",Object(c.jsxs)("i",{className:"pr-3",children:[" ",Object(c.jsx)(R.a,{})," "]})," Reminders"]})}),Object(c.jsx)(_.a.Item,{className:"pb-0",children:Object(c.jsxs)(_.a.Link,{as:P.b,to:"".concat(e,"/bin"),eventKey:"link-2",children:[Object(c.jsx)("i",{className:"pr-3",children:Object(c.jsx)(F.a,{})})," Bin"]})})]})})]})},z=n(103),A=n.n(z),E=n(166),G=n(101),U=n.n(G),Y=n(102),H=n.n(Y);var K=function(e){var t=Object(a.useState)({title:"",content:"",color:"#ffffff",image:""}),n=Object(l.a)(t,2),r=n[0],s=n[1],j={backgroundColor:r.color};function d(e){var t=e.target,n=t.name,c=t.value;s((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},n,c))})),e.preventDefault()}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-note",style:j,encType:"multipart/form-data",children:[Object(c.jsx)("input",{onChange:d,name:"title",placeholder:"Title",value:r.title}),Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{onChange:d,name:"content",placeholder:"Take a note...",rows:"3",value:r.content,className:""===r.title?"d-none":""}),Object(c.jsxs)("div",{className:"input-color-container",children:[Object(c.jsx)("input",{type:"color",name:"color",onChange:d,value:r.color,id:"create-inp"}),Object(c.jsx)("input",{type:"file",accept:".png, .jpg, .jpeg",name:"image",onChange:function(e){s((function(t){return Object(o.a)(Object(o.a)({},t),{},{image:e.target.files[0]})})),console.log(r.image),e.preventDefault()},id:"img-up"})]}),Object(c.jsxs)("div",{className:""===r.title?"d-none":"cont",children:[Object(c.jsx)("label",{className:"btn","data-toggle":"tooltip",title:"select note background color",htmlFor:"create-inp",children:Object(c.jsx)(U.a,{})}),Object(c.jsx)("label",{className:"btn",htmlFor:"img-up",children:Object(c.jsx)(H.a,{})})]}),Object(c.jsx)("div",{className:""===r.title?"d-none":"disp",children:""!==r.image&&Object(c.jsx)("img",{className:"prev",src:URL.createObjectURL(r.image),alt:""})}),Object(c.jsx)(E.a,{className:""===r.title?"d-none":"",type:"submit",onClick:function(t){t.preventDefault();var n=new FormData;n.append("title",r.title),n.append("content",r.content),n.append("image",r.image),n.append("color",r.color),N.a.post("/api/note",n).then((function(t){e.addNote(r),s({title:"",content:"",color:"#ffffff",image:""})})).catch((function(e){return console.log(e)}))},children:Object(c.jsx)(A.a,{})})]})})},M=n(106),J=n.n(M),V=n(107),W=n.n(V),X=n(104),q=n.n(X),Q=n(61);var Z=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],s=n[1],j=Object(a.useState)({date:"",label:"",_id:e._id}),d=Object(l.a)(j,2),u=d[0],h=d[1];function O(e){var t=e.target,n=t.name,c=t.value;h((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},n,c))}))}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"rem",onClick:function(){return s(!0)},children:Object(c.jsx)(q.a,{})}),Object(c.jsxs)(Q.a,{show:r,onHide:function(){return s(!1)},backdrop:"static",keyboard:!0,children:[Object(c.jsx)(Q.a.Header,{closeButton:!0,children:Object(c.jsx)(Q.a.Title,{children:"Set your reminder"})}),Object(c.jsx)(Q.a.Body,{children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{name:"date",value:u.date,onChange:O,type:"datetime-local"}),Object(c.jsx)("input",{name:"label",value:u.label,onChange:O,placeholder:"text for your reminder"})]})}),Object(c.jsxs)(Q.a.Footer,{children:[Object(c.jsx)(b.a,{variant:"secondary",onClick:function(){return s(!1)},children:"Close"}),Object(c.jsx)(b.a,{variant:"primary",onClick:function(){N.a.post("/api/reminder/",u).then((function(e){alert(e.data),s(!1)})).catch((function(e){return alert(e)}))},children:"Set Reminder"})]})]})]})},$=n(105),ee=n.n($);var te=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],s=n[1],i={backgroundColor:e.color};return Object(c.jsxs)("div",{className:"note",style:i,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[void 0===e.img?null:Object(c.jsx)("img",{src:"./ext-images/".concat(e.img),alt:""}),Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("p",{children:e.content}),"bin"!==e.name&&void 0!==e.remind?Object(c.jsxs)("p",{className:"time btn-outline-secondary",children:[Object(c.jsx)(ee.a,{}),"  ",e.remind.date.substring(0,16).replace("T"," "),", ",e.remind.label," "]}):null,Object(c.jsx)("button",{className:r?void 0:"d-none","data-toggle":"tooltip",title:"Delete note",onClick:function(){return e.onDelete(e._id)},children:Object(c.jsx)(J.a,{})}),"bin"===e.name&&Object(c.jsxs)("button",{className:r?"rest":"d-none","data-toggle":"tooltip",title:"Restore note",onClick:function(){return e.restore(e._id)},children:[" ",Object(c.jsx)(W.a,{})," "]}),"bin"===e.name?null:r?Object(c.jsx)(Z,{_id:e._id}):void 0]})},ne=n(108),ce=n.n(ne);var ae=function(e){function t(){N.a.get("/api/note").then((function(t){"unauthorized"===t.data?(d(),e.history.push("/login")):i(t.data)})).catch((function(t){d(),e.history.push("/login")}))}var n=Object(a.useState)([]),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(a.useContext)(O),j=o.user,d=o.logout;function u(e){N.a.post("/api/note/delete",{_id:e}).then((function(e){t()})).catch((function(e){return alert(e)}))}return!j&&e.history.push("/"),Object(a.useEffect)((function(){t()}),[s]),Object(c.jsxs)("div",{children:[Object(c.jsx)(K,{addNote:function(e){N.a.get("/api/note").then((function(e){return i(e.data)})).catch((function(e){return alert(e)}))}}),s.length>0?s.map((function(e,t){return Object(c.jsx)(te,{_id:e._id,color:e.color,title:e.title,date:e.createdAt,name:"not",remind:e.reminder,img:e.image,content:e.content,onDelete:u},t)})):Object(c.jsxs)("div",{className:"text-center cl vertical-center",children:[Object(c.jsx)("h2",{children:"Notes you add will appear here."}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(ce.a,{fontSize:"large"})]})]})};var re=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(a.useContext)(O),o=i.user,j=i.logout;function d(){N.a.get("/api/reminder").then((function(t){"unauthorized"===t.data?(j(),e.history.push("/login")):s(t.data)})).catch((function(t){alert(t),j(),e.history.push("/login")}))}function u(e){N.a.post("/api/reminder/delete",{_id:e}).then((function(e){return d()})).catch((function(e){return alert(e)}))}return!o&&e.history.push("/login"),Object(a.useEffect)((function(){d()}),[r]),Object(c.jsx)("div",{children:0===r.length?Object(c.jsx)("div",{className:"text-center cl vertical-center",children:Object(c.jsx)("h2",{children:"Your reminders will appear here...."})}):r.map((function(e,t){return Object(c.jsx)(te,{_id:e._id,remind:e.reminder,color:e.color,onDelete:u,content:e.content,title:e.title,remin:e.reminder},t)}))})};var se=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(a.useContext)(O),o=i.user,j=i.logout;function d(){N.a.get("/api/bin").then((function(t){"unauthorized"===t.data?(j(),e.history.push("/login")):s(t.data)})).catch((function(e){return alert(e)}))}function u(e){N.a.post("/api/bin/delete",{_id:e}).then((function(e){d()})).catch((function(e){return console.log(e)}))}function b(e){N.a.post("/api/bin/restore",{_id:e}).then((function(e){return d()})).catch((function(e){return console.log(e)}))}return!o&&e.history.push("/login"),Object(a.useEffect)((function(){d()}),[r]),Object(c.jsx)("div",{children:r.length>0?r.map((function(e,t){return Object(c.jsx)(te,{_id:e._id,title:e.title,date:e.createdAt,name:"bin",color:e.color,img:e.image,restore:b,content:e.content,onDelete:u},t)})):Object(c.jsx)("div",{className:"text-center cl vertical-center",children:Object(c.jsx)("h2",{children:"Deleted notes will appear here"})})})},ie=n(109),oe=n.n(ie);var le=function(){return Object(c.jsxs)(f.a,{children:[" ",Object(c.jsx)(oe.a,{})," "]})},je=n(45);var de=function(e){return Object(c.jsxs)("p",{className:"bg-danger pl-4",children:[" +",e.message," "]})};var ue=function(e){var t=Object(a.useContext)(O),n=Object(a.useState)(!0),r=Object(l.a)(n,2),s=r[0],d=r[1],u=Object(a.useState)(""),h=Object(l.a)(u,2),m=h[0],x=h[1],p=Object(a.useState)(!1),g=Object(l.a)(p,2),f=g[0],v=g[1],y=Object(a.useState)({username:"",password:"",confirmPwd:""}),w=Object(l.a)(y,2),C=w[0],_=w[1];function I(e){var t=e.target,n=t.name,c=t.value;""===c&&x((function(e){return""})),_((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},n,c))}))}return Object(c.jsxs)(k.a,{className:"pt-5",children:[Object(c.jsx)(S.a,{md:4}),Object(c.jsx)(S.a,{md:4,children:Object(c.jsxs)(je.a,{className:"shadow",children:[Object(c.jsx)(je.a.Header,{className:"bg-white",children:Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("div",{className:"ml-auto mr-auto",children:Object(c.jsx)(le,{})}),Object(c.jsx)("br",{}),Object(c.jsx)("h2",{children:s?"Login":"Register"})]})}),Object(c.jsx)("br",{}),""!==m&&Object(c.jsx)(de,{message:m}),Object(c.jsxs)(je.a.Body,{className:"text-center",children:[Object(c.jsxs)(j.a,{children:[Object(c.jsx)(j.a.Control,{onChange:I,placeholder:"Username",name:"username",type:"email"}),Object(c.jsx)("br",{}),Object(c.jsx)(j.a.Control,{onChange:I,placeholder:"Password",name:"password",type:"password"}),Object(c.jsx)("br",{}),!1===s&&Object(c.jsx)(j.a.Control,{onChange:I,name:"confirmPwd",placeholder:"Confirm Password",type:"password"}),Object(c.jsx)("br",{}),Object(c.jsxs)(b.a,{type:"submit",className:"bg-success",disabled:f,onClick:f?null:function(n){n.preventDefault();var c=n.target.innerText;v(!0),"Login"===c?""!==C.username?N.a.post("/api/user/login",C).then((function(n){t.login(n.data),e.history.push("/views")})).catch((function(e){x("username or password is unrecognized"),v(!1)})):(x("username cannot be empty"),v(!1)):C.password===C.confirmPwd?N.a.post("/api/user/register",C).then((function(n){void 0===n.data.name?(t.login(n.data),e.history.push("/views")):(x(n.data.message),v(!1))})):(x("Passwords don't match."),v(!1))},block:!0,children:[" ",f?"loading..":s?"Login":"Register"]})]}),Object(c.jsx)("h5",{children:"OR"}),Object(c.jsxs)(b.a,{type:"submit",disabled:f,onClick:function(e){e.preventDefault(),"Login"===e.target.innerText?d(!0):d(!1)},className:s?"bg-danger":"bg-primary",id:"btnLog",block:!0,children:[" ",s?"Register":"Login"," "]})]})]})}),Object(c.jsx)(S.a,{md:4})]})},be=n(110);var he=function(e){return Object(c.jsxs)(be.a,{children:[Object(c.jsx)(je.a,{className:"home-card",children:Object(c.jsx)(je.a.Img,{src:"".concat("","/assets/images/").concat(e.img)})}),Object(c.jsxs)(je.a,{body:!0,className:"text-left tb text-white home-card",children:[Object(c.jsx)("h4",{children:e.msg}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"/login",className:"btn btn-primary",children:"Get Started"})]})]})},Oe=n(62);var me=function(){return Object(c.jsxs)("div",{className:"home text-center pt-5",children:[Object(c.jsxs)(Oe.a,{className:"pl-5 pr-5 pb-5",children:[Object(c.jsxs)(Oe.a.Item,{children:[Object(c.jsx)(he,{img:"log.jpg",msg:"You need to register or login to access or create notes"}),"  "]}),Object(c.jsxs)(Oe.a.Item,{children:[Object(c.jsx)(he,{img:"note.jpg",msg:"Create your notes. Add custom background color and also upload images along with content. You can set reminders after creating a note."}),"  "]}),Object(c.jsxs)(Oe.a.Item,{children:[Object(c.jsx)(he,{img:"reminder.jpg",msg:"View all your created reminders under one tab. You can permanetly delete notes with reminders from this tab. Notes deleted from reminders won't go into the bin."}),"  "]}),Object(c.jsxs)(Oe.a.Item,{children:[Object(c.jsx)(he,{img:"bin.jpg",msg:"Notes deleted from the notes tab are automatically moved to the bin, here you can permanetly delete notes or restore them."}),"   "]})]}),Object(c.jsx)("br",{})]})};var xe=function(e){var t=Object(a.useContext)(O),n=t.user,r=t.logout;!n&&r();var s=e.results;function i(t){N.a.post("/api/note/delete",{_id:t}).then((function(t){alert("Successfully deleted"),e.history.push("/views")})).catch((function(e){return alert(e)}))}return Object(c.jsxs)("div",{children:[" ",void 0!==s&&s.length>0?s.map((function(e,t){return Object(c.jsx)(te,{_id:e._id,content:e.content,title:e.title,color:e.color,onDelete:i,name:"not",remind:e.reminder,img:e.image},t)})):Object(c.jsx)("div",{className:"text-center cl vertical-center",children:Object(c.jsx)("h2",{children:"Start typing to search..."})})," "]})};var pe=function(){var e,t=Object(a.useContext)(O),n=(t.user,t.logout,Object(a.useState)([])),r=Object(l.a)(n,2),s=r[0],j=r[1];return Object(c.jsxs)(P.a,{children:[Object(c.jsx)(w,{setResult:j}),Object(c.jsx)("div",{className:"main-content",children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{exact:!0,path:"/login",component:ue}),Object(c.jsx)(v.a,{path:"/search",render:function(e){return Object(c.jsx)(xe,Object(o.a)(Object(o.a)({},e),{},{results:s}))}}),Object(c.jsx)(v.a,(e={exact:!0},Object(i.a)(e,"exact",!0),Object(i.a)(e,"path","/"),Object(i.a)(e,"component",me),e)),Object(c.jsx)(v.a,{path:"/views",render:function(e){var t=e.match.path;return Object(c.jsxs)(k.a,{children:[Object(c.jsx)(S.a,{md:3,className:"pl-0 pr-0",children:Object(c.jsx)(B,{})}),Object(c.jsx)(S.a,{md:9,className:"pl-0 pr-0",children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{exact:!0,path:t+"/",component:ae}),Object(c.jsx)(v.a,{exact:!0,path:t+"/reminder",component:re}),Object(c.jsx)(v.a,{exact:!0,path:t+"/bin",component:se})]})})]})}})]})}),Object(c.jsx)(C,{})]})};n(144);s.a.render(Object(c.jsx)(x,{children:Object(c.jsx)(pe,{})}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.e5b3ed49.chunk.js.map