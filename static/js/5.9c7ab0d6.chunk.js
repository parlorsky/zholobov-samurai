(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{136:function(a,e,t){a.exports={dialogs:"Dialogs_dialogs__3-A6i",h1:"Dialogs_h1__2TwMh",dialogItems:"Dialogs_dialogItems__agi_P",dialog:"Dialogs_dialog__1x9jK",active:"Dialogs_active__3yH0I",messages:"Dialogs_messages__39595",inputButton:"Dialogs_inputButton__TQCBB",inputWindow:"Dialogs_inputWindow__3z1iJ",inputImg:"Dialogs_inputImg__13Vev",chat:"Dialogs_chat__TXGkc",avatar:"Dialogs_avatar__2xgLP"}},137:function(a,e,t){"use strict";t.d(e,"a",(function(){return d}));var n=t(59),s=t(60),i=t(62),r=t(61),c=t(0),u=t.n(c),l=t(5),o=t(38),m=t(11),g=function(a){return{isAuth:a.auth.isAuth}},d=function(a){var e=function(e){Object(i.a)(c,e);var t=Object(r.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(a,this.props):u.a.createElement(l.a,{to:"/login"})}}]),c}(u.a.Component);return Object(o.b)(g,{setAuthUserData:m.f})(e)}},142:function(a,e,t){},155:function(a,e,t){"use strict";t.r(e);var n=t(0),s=t.n(n),i=t(136),r=t.n(i),c=t(18),u=function(a){var e="/dialogs/"+a.id;return s.a.createElement("div",{className:r.a.dialog},s.a.createElement("img",{src:a.avatar,className:r.a.avatar}),s.a.createElement(c.b,{to:e,activeClassName:r.a.active},s.a.createElement("span",null,a.name)))},l=(t(142),function(a){return s.a.createElement("div",{className:a.id},a.message)}),o=t(3),m=t.n(o),g=t(10),d=t(39),p=function(a){return s.a.createElement("div",null,s.a.createElement(d.c,{initialValues:{messageText:""},onSubmit:function(){var e=Object(g.a)(m.a.mark((function e(t,n){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=n.resetForm,""!=t.messageText&&(i=t.messageText,a.addMessage(i),s({}));case 2:case"end":return e.stop()}var i}),e)})));return function(a,t){return e.apply(this,arguments)}}()},s.a.createElement(d.b,null,s.a.createElement(d.a,{id:"messageText",name:"messageText",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",type:"text",className:r.a.inputWindow}),s.a.createElement("button",{type:"submit",className:r.a.inputButton},s.a.createElement("img",{src:"https://rusprom.group/_nuxt/img/52f64b4.png",alt:"Submit",className:r.a.inputImg})))))},_=function(a){var e=a.DialogsPage.dialogs.map((function(a){return s.a.createElement(u,{name:a.name,id:a.id,avatar:a.avatar})})),t=a.DialogsPage.messages.map((function(a){return s.a.createElement(l,{message:a.message,id:a.id})}));return s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("h1",{className:r.a.h1},"Dialogs"),s.a.createElement("div",{className:r.a.dialogsItems},e),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",{className:r.a.chat},t),s.a.createElement(p,{addMessage:a.addMessage})))},v=t(97),f=t(38),h=t(137),E=t(27);e.default=Object(E.d)(h.a,Object(f.b)((function(a){return{DialogsPage:a.dialogsPage,isAuth:a.auth.isAuth}}),(function(a){return{addMessage:function(e){a(Object(v.a)(e))}}})))(_)}}]);
//# sourceMappingURL=5.9c7ab0d6.chunk.js.map