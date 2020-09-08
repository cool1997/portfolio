(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){e.exports=a.p+"static/media/preloader.88596d71.svg"},123:function(e,t,a){e.exports={preloader:"Preloader_preloader__3uOPd"}},149:function(e,t,a){e.exports=a(258)},16:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"g",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"f",(function(){return m})),a.d(t,"d",(function(){return b}));var n=a(49),c=a(63),o=a(31),r=Object(o.b)({name:"todo",initialState:{todoList:JSON.parse(localStorage.getItem("todoList"))||[],sortType:"date",allSortType:["date","done"],isReverseSort:!1},reducers:{sendTodoItem:function(e,t){var a={text:t.payload.text,id:+"".concat(Date.now()),completed:!1};e.todoList=[].concat(Object(c.a)(e.todoList),[a])},changeTodoItemText:function(e,t){var a=t.payload,c=a.text,o=a.id;e.todoList=e.todoList.map((function(e){return e.id===o?Object(n.a)(Object(n.a)({},e),{},{text:c}):e}))},toggleCompleted:function(e,t){var a=t.payload.id;e.todoList=e.todoList.map((function(e){return e.id===a?Object(n.a)(Object(n.a)({},e),{},{completed:!e.completed}):e}))},deleteTodoItem:function(e,t){var a=t.payload.id;e.todoList=e.todoList.filter((function(e){return e.id!==a}))},sortBy:function(e,t){var a=t.payload.sort;e.sortType=a},doReverseSort:function(e,t){var a=t.payload.isReverseSort;e.isReverseSort=a}}}),i=r.actions,l=i.sendTodoItem,s=i.changeTodoItemText,u=i.toggleCompleted,d=i.deleteTodoItem,m=i.sortBy,b=i.doReverseSort;t.b=r.reducer},18:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__1Vmo0",list:"Navbar_list__1Uqju",item:"Navbar_item__3JVtF",link:"Navbar_link__3_hBE",active:"Navbar_active__33JtP"}},217:function(e,t,a){},218:function(e,t,a){},22:function(e,t,a){e.exports={TodoItem:"TodoItem_TodoItem__1U3eW",check:"TodoItem_check__2CTMX",success:"TodoItem_success__2SJGs",todoBody:"TodoItem_todoBody__T5owV",btn:"TodoItem_btn__xAiIa",change:"TodoItem_change__4qCH5",delete:"TodoItem_delete__31ZoF"}},257:function(e,t,a){"use strict";a.r(t);var n=a(27),c=a(0),o=a.n(c),r=a(9),i=a(8),l=a(2),s=a(60),u=a(15),d=a(83),m=a(116),b=a(117),f=a(16),p=a(64),_=a.n(p),v=Object(l.d)(c.memo)((function(e){var t=e.toggleActivate;Object(u.a)(e,["toggleActivate"]);return o.a.createElement("button",{className:"".concat(_.a.BtnAddTodo),onClick:t},o.a.createElement("span",{className:"".concat(_.a.iconAdd)}),o.a.createElement("span",{className:"".concat(_.a.btnBody)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"))})),g=a(38),E=a.n(g),O=function(e){var t=e.input,a=e.meta,n=e.children,c=e.required,r=(Object(u.a)(e,["input","meta","children","required"]),c&&a.touched&&a.error||t.value.length>0&&a.error);return o.a.createElement(o.a.Fragment,null,n,o.a.createElement("span",{error:r||void 0,className:"".concat(E.a.formControl," ").concat(r?E.a.error:"")},r&&o.a.createElement("span",{className:E.a.textError},a.error)))},j={textarea:function(e){var t=Object.assign({},e);return o.a.createElement(O,t,o.a.createElement("textarea",Object.assign({className:E.a.text},t.input,t)))},input:function(e){var t=Object.assign({},e);return o.a.createElement(O,Object.assign({required:"true"},t),o.a.createElement("input",Object.assign({className:E.a.text},t.input,t)))}},N=a(65),T=a.n(N),h=Object(l.d)(Object(b.a)({form:"newTodoItem",enableReinitialize:!0}),c.memo)((function(e){var t=e.handleSubmit,a=e.initialize,i=(Object(u.a)(e,["handleSubmit","initialize"]),Object(r.c)()),l=Object(c.useRef)(null),s=Object(c.useState)(!0),b=Object(n.a)(s,2),p=b[0],_=b[1],g=Object(c.useState)(""),E=Object(n.a)(g,2),O=E[0],N=E[1];Object(c.useEffect)((function(){a({todo:O})}),[O]);var h={onSubmit:function(e){i(Object(f.e)({text:e.todo})),i(Object(d.a)("newTodoItem")),N(""),l.current.innerText=""},toggleActivate:function(){_((function(e){return!e}))},changeField:function(e){N(e.target.innerText)}},x=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}(2e3);return p?o.a.createElement("form",{className:"".concat(T.a.NewTodoItem),onSubmit:t(h.onSubmit)},o.a.createElement("div",{onSelect:function(e){return h.changeField(e)},className:"".concat(T.a.field),contentEditable:"true",ref:l}),o.a.createElement(m.a,{className:"visually-hidden",validate:[x],component:j.input,type:"text",name:"todo",placeholder:"New todo",autoComplete:"off"}),o.a.createElement("button",{className:"".concat(T.a.btnSend)},"send")):o.a.createElement(v,{toggleActivate:h.toggleActivate})})),x=a(22),y=a.n(x),S=Object(l.d)(c.memo)((function(e){var t=e.text,a=e.id,i=e.completed,l=Object(r.c)(),s=Object(c.useState)(!0),u=Object(n.a)(s,2),d=u[0],m=u[1],b=Object(c.useRef)(null);Object(c.useEffect)((function(){!d&&b.current.focus()}),[d]);var p=function(e,t){l(Object(f.a)({text:e,id:t}))},_=function(){m(!1),!d&&b.current.focus()},v=function(){m(!d)},g=function(e){l(Object(f.g)({id:e}))},E=function(e){l(Object(f.c)({id:e}))};return o.a.createElement("li",{className:"".concat(y.a.TodoItem)},o.a.createElement("label",{className:"".concat(y.a.check," ").concat(i?y.a.success:""," ").concat(i?"border-success":"border-warning")},o.a.createElement("input",{checked:i,type:"checkbox",onChange:function(){return g(a)}})),o.a.createElement("input",{onKeyPress:function(e){return"Enter"===e.key&&v()},ref:b,type:"text",className:"".concat(y.a.todoBody," ").concat(i?"border-success":"border-warning"),value:t,onChange:function(e){return p(e.target.value,a)},disabled:d}),o.a.createElement("button",{className:"".concat(y.a.btn," ").concat(y.a.change),onClick:function(){d?_():v()}},d?"change":"save"),o.a.createElement("button",{className:"".concat(y.a.btn," ").concat(y.a.delete),onClick:function(){return E(a)}},"\xd7"))})),I=a(63),k=a(12),C=function(e){return e.todo.todoList},A=function(e){return e.todo.sortType},w=function(e){return e.todo.isReverseSort},B=Object(k.a)(C,A,w,(function(e,t,a){var n=Object(I.a)(e);switch(t){case"date":n.sort((function(e,t){return e.id-t.id}));break;case"done":n.sort((function(e,t){return e.completed-t.completed}))}return a?n.reverse():n})),L=a(121),R=a.n(L),z=Object(l.d)(c.memo)((function(e){Object.assign({},e);var t=Object(r.d)(B);return Object(c.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(t))}),[t]),o.a.createElement("ul",{className:"".concat(R.a.TodoList)},t.map((function(e){return o.a.createElement(S,Object.assign({key:e.id},e))})))})),J=a(87),F=a.n(J),q=Object(l.d)(c.memo)((function(e){Object.assign({},e);return o.a.createElement("section",{className:"".concat(F.a.Inbox)},o.a.createElement("h2",{className:"".concat(F.a.title)},"\u0412\u0445\u043e\u0434\u044f\u0449\u0438\u0435"),o.a.createElement(z,null),o.a.createElement(h,null))})),P=Object(l.d)(c.memo)((function(e){var t=e.type,a=(Object(u.a)(e,["type"]),Object(r.c)()),n=Object(r.d)((function(e){return e.todo})),c=n.sortType,i=n.isReverseSort;return o.a.createElement("button",{className:"btn btn-outline-primary ".concat(t===c?"active":""),onClick:function(){return e=t,a(Object(f.f)({sort:e})),void a(c===e?Object(f.d)({isReverseSort:!i}):Object(f.d)({isReverseSort:!1}));var e}},t)})),Y=Object(l.d)(c.memo)((function(e){var t=Object.assign({},e),a=Object(r.d)((function(e){return e.todo})).allSortType;return o.a.createElement("section",{className:"btn-group mb-4"},a.map((function(e){return o.a.createElement(P,Object.assign({key:e,type:e},t))})))})),D=a(88),V=a.n(D),M=Object(l.d)(c.memo)((function(e){Object.assign({},e);return o.a.createElement("section",{className:"".concat(V.a.Today)},o.a.createElement("h2",{className:"".concat(V.a.title," mb-4")},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"),o.a.createElement(h,null),o.a.createElement(Y,null),o.a.createElement(z,null))})),G=a(89),K=a.n(G),U=Object(l.d)(c.memo)((function(e){Object.assign({},e);return o.a.createElement("section",{className:"".concat(K.a.Calendar)},o.a.createElement("h2",{className:"".concat(K.a.title," mb-4")},"\u041f\u0440\u0435\u0434\u0441\u0442\u043e\u044f\u0449\u0435\u0435"),o.a.createElement(h,null),o.a.createElement(Y,null),o.a.createElement(z,null))})),Z=a(32),H=a(18),Q=a.n(H),W=Object(l.d)(c.memo)((function(e){var t=Object.assign({},e);return o.a.createElement("nav",{className:"".concat(t.className," ").concat(Q.a.Navbar)},o.a.createElement("ul",{className:"".concat(Q.a.list)},o.a.createElement("li",{className:"".concat(Q.a.item)},o.a.createElement(Z.b,{className:"".concat(Q.a.link),activeClassName:Q.a.active,to:"/inbox"},"\u0412\u0445\u043e\u0434\u044f\u0449\u0438\u0435")),o.a.createElement("li",{className:"".concat(Q.a.item)},o.a.createElement(Z.b,{className:"".concat(Q.a.link),activeClassName:Q.a.active,to:"/today"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f")),o.a.createElement("li",{className:"".concat(Q.a.item)},o.a.createElement(Z.b,{className:"".concat(Q.a.link),activeClassName:Q.a.active,to:"/calendar"},"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"))))})),X=a(122),$=a.n(X),ee=a(123),te=a.n(ee),ae=function(){return o.a.createElement("section",{className:te.a.preloader},o.a.createElement("img",{src:$.a,alt:"loading"}))},ne=a(92),ce=a.n(ne),oe=Object(l.d)(c.memo)((function(e){var t=e.isDarkTheme,a=e.toggle;Object(u.a)(e,["isDarkTheme","toggle"]);return o.a.createElement("button",{className:"\n                ".concat(ce.a.ToggleTheme," \n                ").concat(t?ce.a.darkTheme:""," \n                btn"),onClick:a})})),re=a(93),ie=a.n(re),le=Object(l.d)(c.memo)((function(e){var t=e.isActiveNavbar,a=e.toggle;Object(u.a)(e,["isActiveNavbar","toggle"]);return o.a.createElement("button",{className:"\n                ".concat(ie.a.ToggleNavbar,"\n                ").concat(t?ie.a.active:"","\n                btn    \n            "),onClick:a})})),se=a(48),ue=a.n(se);t.default=Object(l.d)(c.memo)((function(e){Object.assign({},e);var t=Object(c.useState)(!1),a=Object(n.a)(t,2),l=a[0],u=a[1],d=Object(c.useState)(!0),m=Object(n.a)(d,2),b=m[0],f=m[1],p=Object(r.c)(),_=Object(r.d)((function(e){return e.app})).initialized;Object(c.useEffect)((function(){p(Object(s.b)())}),[p]);var v=function(e){e((function(e){return!e}))};return _?o.a.createElement("div",{className:"".concat(l?"darkTheme":""," ").concat(ue.a.App)},o.a.createElement("header",{className:"".concat(ue.a.header)},o.a.createElement("h1",{className:"visually-hidden"},"Todo list"),o.a.createElement(le,{isActiveNavbar:b,toggle:function(){return v(f)}}),o.a.createElement(oe,{isDarkTheme:l,toggle:function(){return v(u)}})),b&&o.a.createElement(W,{className:ue.a.nav}),o.a.createElement("main",{className:"".concat(ue.a.main)},o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/inbox",render:function(){return o.a.createElement(q,null)}}),o.a.createElement(i.a,{path:"/today",render:function(){return o.a.createElement(M,null)}}),o.a.createElement(i.a,{path:"/calendar",render:function(){return o.a.createElement(U,null)}}),o.a.createElement(i.a,{path:"/",exact:!0,render:function(){return o.a.createElement(q,null)}})))):o.a.createElement(ae,null)}))},258:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(58),r=a.n(o),i=a(9),l=a(32),s=a(31),u=a(2),d=a(118),m=a(60),b=a(16),f=Object(u.c)({app:m.a,todo:b.b,form:d.a});var p=Object(s.a)({reducer:f});a(217),a(218);!function(){var e=a(257).default;r.a.render(c.a.createElement(l.a,{basename:"https://cool1997.github.io/portfolio/"},c.a.createElement(i.a,{store:p},c.a.createElement(e,null))),document.getElementById("root"))}()},38:function(e,t,a){e.exports={formControl:"FormsControls_formControl__14eVv",error:"FormsControls_error__1A1JB"}},48:function(e,t,a){e.exports={App:"App_App__r-SBe",nav:"App_nav__2Rq4-",header:"App_header__3zq2z",main:"App_main__1pf0Z"}},60:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(31),c=Object(n.b)({name:"todos",initialState:{initialized:!1},reducers:{initializedSuccess:function(e,t){e.initialized=!0}}}),o=c.actions.initializedSuccess;t.a=c.reducer},64:function(e,t,a){e.exports={BtnAddTodo:"BtnAddTodo_BtnAddTodo__2arYY",iconAdd:"BtnAddTodo_iconAdd__1dN0J"}},65:function(e,t,a){e.exports={NewTodoItem:"NewTodoItem_NewTodoItem__1g-96",field:"NewTodoItem_field__1Egj6",btnSend:"NewTodoItem_btnSend__18xog"}},87:function(e,t,a){e.exports={Inbox:"Inbox_Inbox__Tacsb",title:"Inbox_title__3ffS3"}},88:function(e,t,a){e.exports={Today:"Today_Today__3iJbF",title:"Today_title__2MsIt"}},89:function(e,t,a){e.exports={Calendar:"Calendar_Calendar__3YmlG",title:"Calendar_title__1eYe-"}},92:function(e,t,a){e.exports={ToggleTheme:"ToggleTheme_ToggleTheme__p55IS",darkTheme:"ToggleTheme_darkTheme__1PpTQ"}},93:function(e,t,a){e.exports={ToggleNavbar:"ToggleNavbar_ToggleNavbar__2aNEC",active:"ToggleNavbar_active__3KYv0"}}},[[149,1,2]]]);
//# sourceMappingURL=main.16706942.chunk.js.map