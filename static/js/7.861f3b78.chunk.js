(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{101:function(e,n,t){e.exports={selectedPage:"Paginator_selectedPage__1ilMm",pageNumbers:"Paginator_pageNumbers__IC4m8",pageNumber:"Paginator_pageNumber__2lkvm",h1:"Paginator_h1__2WmiC"}},108:function(e,n,t){"use strict";t.r(n);var a=t(18),r=t(19),o=t(21),l=t(20),s=t(0),u=t.n(s),i=t(13),c=t(48);function g(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=t(49),f=t.n(p),m=t(60),h=t(101),v=t.n(h),d=function(e){for(var n=e.totalUsersCount,t=e.pageSize,a=e.activePage,r=e.onPageChange,o=Math.ceil(n/t),l=[],s=1;s<=o;s++)l.push(s);return u.a.createElement("div",null,u.a.createElement("span",{className:v.a.h1}," Users"),u.a.createElement("div",{className:v.a.pageNumbers},l.map((function(e){return u.a.createElement("span",{className:a===e?v.a.selectedPage:v.a.pageNumber,onClick:function(n){r(e)}},e," ")}))))},P=t(61),w=t.n(P),b=t(10),y=function(e){var n=e.user,t=e.followingInProgress,a=e.unfollowThunk,r=e.followThunk;return u.a.createElement("div",{className:f.a.object,key:n.id},u.a.createElement("span",{className:f.a.left},u.a.createElement("div",null,u.a.createElement(b.b,{to:"/profile/"+n.id,className:f.a.avatar},u.a.createElement("img",{src:null!=n.photos.small?n.photos.small:w.a,className:f.a.avatar}))),u.a.createElement("div",{className:f.a.user},n.followed?u.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),className:f.a.button1,onClick:function(){a(n.id)}}," Unfollow "):u.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),className:f.a.button,onClick:function(){r(n.id)}},"Follow "))),u.a.createElement("span",{className:f.a.right},u.a.createElement("div",{className:f.a.name},n.name),u.a.createElement("div",{className:f.a.idNumber},"\u041c\u043e\u0439 \u0430\u0439\u0434\u0438: #",n.id),u.a.createElement("div",{className:f.a.isFriend},n.followed?"\u0442\u044b \u043c\u043e\u0439 \u0434\u0440\u0443\u0433":"\u0442\u044b \u043c\u043d\u0435 \u043d\u0435 \u0434\u0440\u0443\u0433"),u.a.createElement("div",{className:f.a.status}," ",n.status)))},E=function(e){var n=e.activePage,t=e.totalUsersCount,a=e.pageSize,r=e.onPageChange,o=e.users,l=e.isFetching,s=g(e,["activePage","totalUsersCount","pageSize","onPageChange","users","isFetching"]);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:f.a.div},u.a.createElement(d,{totalUsersCount:t,pageSize:a,activePage:n,onPageChange:r}),l?u.a.createElement(m.a,null):u.a.createElement("div",null,o.map((function(e){return u.a.createElement(y,{key:e.id,user:e,followingInProgress:s.followingInProgress,unfollowThunk:s.unfollowThunk,followThunk:s.followThunk})})))))},k=t(8),N=t(17);function C(e,n){return e===n}function F(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var a=n.length,r=0;r<a;r++)if(!e(n[r],t[r]))return!1;return!0}function O(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var S=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var o=0,l=a.pop(),s=O(a),u=e.apply(void 0,[function(){return o++,l.apply(null,arguments)}].concat(t)),i=e((function(){for(var e=[],n=s.length,t=0;t<n;t++)e.push(s[t].apply(null,arguments));return u.apply(null,e)}));return i.resultFunc=l,i.dependencies=s,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,t=null,a=null;return function(){return F(n,t,arguments)||(a=e.apply(null,arguments)),t=arguments,a}}));var U=S((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),j=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=n.call.apply(n,[this].concat(o))).onPageChange=function(n){var t=e.props,a=t.setActivePage,r=t.getUsers,o=t.activePage,l=t.pageSize;a(n),r(o,l)},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.activePage,t=e.pageSize;(0,e.getUsers)(n,t)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(E,{activePage:this.props.activePage,users:this.props.users,toggleFollow:this.props.toggleFollow,onPageChange:this.onPageChange,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,isFetching:this.props.isFetching,API:k.a,followingInProgress:this.props.followingInProgress,unfollowThunk:this.props.unfollowThunk,followThunk:this.props.followThunk}))}}]),t}(u.a.Component);n.default=Object(N.d)(Object(i.b)((function(e){return{users:U(e),pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,activePage:e.usersPage.activePage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{toggleFollow:c.e,setActivePage:c.d,toggleFollowingInProgress:c.f,getUsers:c.c,unfollowThunk:c.g,followThunk:c.b}))(j)}}]);
//# sourceMappingURL=7.861f3b78.chunk.js.map