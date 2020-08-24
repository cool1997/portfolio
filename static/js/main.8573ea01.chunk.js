(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{111:function(e,t,n){e.exports=n.p+"static/media/preloader.7869e84b.svg"},112:function(e,t,n){e.exports={preloader:"Preloader_preloader__Kjxcy"}},113:function(e,t,n){},139:function(e,t,n){e.exports=n(247)},15:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return b}));var a=n(45),r=n(60),o=n(27),c=Object(o.b)({name:"todo",initialState:{todoList:JSON.parse(localStorage.getItem("todoList"))||[],sortType:"date",allSortType:["date","done"],isReverseSort:!1},reducers:{sendTodoItem:function(e,t){var n=t.payload.text;e.todoList=[].concat(Object(r.a)(e.todoList),[{text:n,id:+"".concat(Date.now()),completed:!1}])},changeTodoItemText:function(e,t){var n=t.payload,r=n.text,o=n.id;e.todoList=e.todoList.map((function(e){return e.id===o?Object(a.a)(Object(a.a)({},e),{},{text:r}):e}))},toggleCompleted:function(e,t){var n=t.payload.id;e.todoList=e.todoList.map((function(e){return e.id===n?Object(a.a)(Object(a.a)({},e),{},{completed:!e.completed}):e}))},deleteTodoItem:function(e,t){var n=t.payload.id;e.todoList=e.todoList.filter((function(e){return e.id!==n}))},sortBy:function(e,t){var n=t.payload.sort;e.sortType=n},doReverseSort:function(e,t){var n=t.payload.isReverseSort;e.isReverseSort=n}}}),i=c.actions,l=i.sendTodoItem,s=i.changeTodoItemText,u=i.toggleCompleted,d=i.deleteTodoItem,m=i.sortBy,b=i.doReverseSort;t.b=c.reducer},207:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n(8),i=n(4),l=n(56),s=n(33),u=n(78),d=n(106),m=n(107),b=n(15),f=n(34),p=n.n(f),O=function(e){var t=e.input,n=e.meta,a=e.children,o=e.required,c=(Object(s.a)(e,["input","meta","children","required"]),o&&n.touched&&n.error||t.value.length>0&&n.error);return r.a.createElement(r.a.Fragment,null,a,r.a.createElement("span",{error:c||void 0,className:"".concat(p.a.formControl," ").concat(c?p.a.error:"")},c&&r.a.createElement("span",{className:p.a.textError},n.error)))},j={textarea:function(e){var t=Object.assign({},e);return r.a.createElement(O,t,r.a.createElement("textarea",Object.assign({className:p.a.text},t.input,t)))},input:function(e){var t=Object.assign({},e);return r.a.createElement(O,Object.assign({required:"true"},t),r.a.createElement("input",Object.assign({className:p.a.text},t.input,t)))}},v=Object(i.d)(Object(m.a)({form:"newTodoItem",enableReinitialize:!0}),a.memo)((function(e){var t=e.handleSubmit,n=(Object(s.a)(e,["handleSubmit"]),Object(o.c)()),a=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}(30);return r.a.createElement("form",{className:"input-group mb-2",onSubmit:t((function(e){n(Object(b.e)({text:e.todo})),n(Object(u.a)("newTodoItem"))}))},r.a.createElement(d.a,{validate:[a],component:j.input,className:"form-control",type:"text",name:"todo",placeholder:"New todo",autocomplete:"off"}),r.a.createElement("button",{className:"btn btn-outline-success form-control col-2"},"send"))})),E=n(59),g=Object(i.d)(a.memo)((function(e){var t=e.text,n=e.id,c=e.completed,i=Object(o.c)(),l=Object(a.useState)(!0),s=Object(E.a)(l,2),u=s[0],d=s[1],m=Object(a.useRef)(null);Object(a.useEffect)((function(){!u&&m.current.focus()}),[u]);var f=function(e,t){i(Object(b.a)({text:e,id:t}))},p=function(){d(!1),!u&&m.current.focus()},O=function(){d(!u)},j=function(e){i(Object(b.g)({id:e}))},v=function(e){i(Object(b.c)({id:e}))};return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"input-group "},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text ".concat(c?"border-success":"border-warning")},r.a.createElement("input",{checked:c,type:"checkbox",onChange:function(){return j(n)}}))),r.a.createElement("input",{onKeyPress:function(e){return"Enter"===e.key&&O()},ref:m,type:"text",className:"form-control bg-light ".concat(c?"border-success":"border-warning"),value:t,onChange:function(e){return f(e.target.value,n)},disabled:u}),r.a.createElement("button",{className:"btn btn-primary form-control col-2",onClick:function(){u?p():O()}},u?"change":"save"),r.a.createElement("button",{className:"btn btn-danger form-control col-1",onClick:function(){return v(n)}},"\xd7")))})),y=n(60),h=n(12),S=function(e){return e.todo.todoList},N=function(e){return e.todo.sortType},x=function(e){return e.todo.isReverseSort},T=Object(h.a)(S,N,x,(function(e,t,n){var a=Object(y.a)(e);switch(t){case"date":a.sort((function(e,t){return e.id-t.id}));break;case"done":a.sort((function(e,t){return e.completed-t.completed}))}return n?a.reverse():a})),k=Object(i.d)(a.memo)((function(e){Object.assign({},e);var t=Object(o.d)(T);return Object(a.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(t))}),[t]),r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))})))})),C=Object(i.d)(a.memo)((function(e){var t=e.isActive,n=e.onSortedClick,a=e.typeSort;Object(s.a)(e,["isActive","onSortedClick","typeSort"]);return r.a.createElement("button",{className:"btn btn-outline-primary ".concat(t?"active":""),onClick:function(){return n(a)}},a)})),L=Object(i.d)(a.memo)((function(e){var t=Object.assign({},e),n=Object(o.c)(),c=Object(o.d)((function(e){return e.todo})),i=c.allSortType,l=c.sortType,s=c.isReverseSort,u=Object(a.useState)(l),d=Object(E.a)(u,2),m=d[0],f=d[1],p=function(e){n(Object(b.f)({sort:e})),l===e?n(Object(b.d)({isReverseSort:!s})):n(Object(b.d)({isReverseSort:!1}))&&f(e)};return r.a.createElement("section",{className:"btn-group mb-4"},i.map((function(e){return r.a.createElement(C,Object.assign({isActive:m===e,key:"".concat(Date.new).concat(e),typeSort:e,onSortedClick:p},t))})))})),I=Object(i.d)(a.memo)((function(e){Object.assign({},e);return r.a.createElement("section",null,r.a.createElement("h2",{className:"mb-4"},"Todo list"),r.a.createElement(v,null),r.a.createElement(L,null),r.a.createElement(k,null))})),R=n(40),w=Object(i.d)(a.memo)((function(e){Object.assign({},e);return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(R.b,{className:"navbar-brand",to:"/todo"},"Todo list"))))})),_=n(111),z=n.n(_),F=n(112),J=n.n(F),q=function(){return r.a.createElement("section",{className:J.a.preloader},r.a.createElement("img",{src:z.a,alt:"loading"}))},A=n(113),B=n.n(A);t.default=Object(i.d)(a.memo)((function(e){Object.assign({},e);var t=Object(o.c)(),n=Object(o.d)((function(e){return e.app})).initialized;return Object(a.useEffect)((function(){t(Object(l.b)())}),[]),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",{className:"visually-hidden"},"Todo list"),r.a.createElement(w,null)),r.a.createElement("main",{className:"".concat(B.a.app," container pt-4")},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/todo",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(c.a,{path:"/",exact:!0,render:function(){return r.a.createElement(I,null)}}))),r.a.createElement("footer",null)):r.a.createElement(q,null)}))},247:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(54),c=n.n(o),i=n(9),l=n(40),s=n(27),u=n(4),d=n(108),m=n(56),b=n(15),f=Object(u.c)({app:m.a,todo:b.b,form:d.a});var p=Object(s.a)({reducer:f});n(207);!function(){var e=n(246).default;c.a.render(r.a.createElement(l.a,{basename:"https://cool1997.github.io/portfolio/"},r.a.createElement(i.a,{store:p},r.a.createElement(e,null))),document.getElementById("root"))}()},34:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1k-Ht",error:"FormsControls_error__bauyl"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(27),r=Object(a.b)({name:"todos",initialState:{initialized:!1},reducers:{initializedSuccess:function(e,t){e.initialized=!0}}}),o=r.actions.initializedSuccess;t.a=r.reducer}},[[139,1,2]]]);
//# sourceMappingURL=main.8573ea01.chunk.js.map