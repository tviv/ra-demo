(this["webpackJsonpra-demo"]=this["webpackJsonpra-demo"]||[]).push([[0],{365:function(e,t,r){},487:function(e,t){},530:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),c=r(14),o=r.n(c),s=(r(365),r(17)),a=r(612),d=r(291),l=Object(d.a)({posters:[{id:1,name:"Poster-23",description:"description of poster 23",comment:"it's good",price:100},{id:2,name:"Poster-67",description:"description of poster 67",comment:"weak",price:130},{id:3,name:"Poster-24",description:"description of poster 24",comment:"hire its author",price:80},{id:4,name:"Poster-98",description:"description of poster 98",comment:"hire its author",price:23},{id:5,name:"Poster-298",description:"description of poster 298",comment:"hire its author",price:340},{id:6,name:"Poster-11",description:"description of poster 11",comment:"hire its author",price:54}],clients:[{id:1,name:"client 1"},{id:2,name:"client 2"},{id:3,name:"client 3"},{id:4,name:"client 4"}]}),u={admin:{userId:"1",userName:"Jhon Smith",permissions:[{actions:"*",resource:"*"}]},reader:{userId:"3",userName:"Izy Rain1",permissions:[{resource:"*",actions:"show"}]},corrector:{userId:"2",userName:"C Corrector",permissions:[{resource:"posters",actions:"*,-delete"},{resource:"posters",fields:"price",actions:"-show"}]},user:{userId:"4",userName:"U User",permissions:[{resource:"posters",actions:"show"},{resource:"posters",records:{id:2},actions:"edit, delete"},{resource:"posters",records:{id:3},actions:"edit"},{resource:"posters",fields:"comments, price",actions:"-show"}]}},j={login:function(e){var t=e.username,r=u[t];return r?(localStorage.setItem("userId",r.userId),localStorage.setItem("userName",r.userName),localStorage.setItem("permissions",JSON.stringify(r.permissions)),Promise.resolve()):Promise.reject()},logout:function(){return b(),Promise.resolve()},checkError:function(){return Promise.resolve()},checkAuth:function(){return localStorage.getItem("userName")&&localStorage.getItem("permissions")?Promise.resolve():(b(),Promise.reject())},getPermissions:function(){var e=localStorage.getItem("permissions");return e?Promise.resolve(JSON.parse(e)):Promise.reject()},getIdentity:function(){var e,t;return Promise.resolve({id:null!==(e=localStorage.getItem("userId"))&&void 0!==e?e:"",fullName:null!==(t=localStorage.getItem("userName"))&&void 0!==t?t:""})}},b=function(){localStorage.removeItem("userId"),localStorage.removeItem("userName"),localStorage.removeItem("permissions")},O=r(6),m=r(586),f=r(585),p=r(100),h=r(109),v=["show","edit"].join(","),g=function(e,t){var r=function(e,t){var r=t.filter((function(t){return t.type===e})),n=r.flatMap((function(e){return e.actions})).filter((function(e,t,r){return r.indexOf(e)===t})),i=Object.fromEntries(new Map(n.map((function(e){return[e,{}]}))));return n.filter((function(e){return v.includes(e)||"*"===e})).forEach((function(e){var t=r.filter((function(t){return t.fields&&t.actions.includes(e)})).flatMap((function(e){return e.fields}));t.length&&(i[e].fields=t)})),n.forEach((function(e){var t=r.filter((function(t){return t.records&&t.actions.includes(e)})).flatMap((function(e){return e.records}));t.length&&(i[e].records=t)})),x(e,i),Object.entries(i).length?Object(h.a)({},e,i):{}},n=t.filter((function(t){return t.resource===e||"*"===t.resource})).map((function(e){return Object.assign(Object.assign({},e),{actions:"string"===typeof e.actions?e.actions.split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e})):e.actions||[]})})).flatMap((function(e){var t=[Object.assign(Object.assign({},e),{type:e.type||"allow",actions:e.actions.filter((function(e){return!e.startsWith("-")}))})],r=e.actions.filter((function(e){return e.startsWith("-")})).map((function(e){return e.substring(1)}));return r.length&&t.push(Object.assign(Object.assign({},e),{type:"deny",actions:r})),t})).map((function(e){return Object.assign(Object.assign({},e),{fields:"string"===typeof e.fields?e.fields.replace("*","").split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e})):e.fields})})).map((function(e){return Object.assign(Object.assign({},e),{records:e.records?Array.isArray(e.records)?e.records:[e.records]:[]})})),i=r("allow",n),c=r("deny",n);return Object.assign(Object.assign({},i),c)},x=function(e,t){var r,n,i,c,o,s,a=t,d=a["*"]&&"allow"===e||!a["*"]&&"deny"===e;(a.edit||d)&&((null===(r=a.show)||void 0===r?void 0:r.fields)&&!(null===(n=a.edit)||void 0===n?void 0:n.fields)&&(a.edit||(a.edit={}),a.edit.fields=a.show.fields),(null===(i=a.show)||void 0===i?void 0:i.records)&&!(null===(c=a.edit)||void 0===c?void 0:c.records)&&(a.edit||(a.edit={}),a.edit.records=a.show.records)),(a.delete||a["*"])&&(null===(o=a.edit)||void 0===o?void 0:o.records)&&!(null===(s=a.delete)||void 0===s?void 0:s.records)&&(a.delete||(a.delete={}),a.delete.records=a.edit.records)},y=r(367),w=[{whereName:"fields",whatName:"field",fn:function(e,t){return null===e||void 0===e?void 0:e.includes(t)}},{whereName:"records",whatName:"record",fn:function(e,t){return null===e||void 0===e?void 0:e.some((function(e){return y(t,e)}))}}],P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=function(t,r){if(!t)return!1;var n=r.hasOwnProperty("scope")?{resource:r.scope,action:"enabled"}:r,i=n.resource;if(!i||!i.length)return!1;var c=t instanceof Map?t.get(i):t.hasOwnProperty("allow")||t.hasOwnProperty("deny")?t:e(i,t),o=function(e){var t="allow"===e,r=[],i=c[e]&&(c[e][n.action]||c[e]["*"]);if(i){var o=i;w.forEach((function(e){t||r.push(!(o[e.whereName]&&!n[e.whatName])&&void 0),r.push(o[e.whereName]&&n[e.whatName]?e.fn(o[e.whereName],n[e.whatName]):void 0)}))}var s=r.filter((function(e){return void 0!==e})).reduce((function(e,r){return void 0===e&&(e=r),t?e&&r:e||r}),void 0);return!!i&&!1!==s};return!o("deny")&&o("allow")};return t}(),S=function(e){var t=Object(f.a)(),r=t.loaded,i=t.permissions,c=Object(p.a)(e);return e&&e.permissions&&(i=e.permissions,r=!0),Object(n.useCallback)((function(e){var t=!e||e.scope||e.resource?e:Object.assign(Object.assign({},e),{resource:c});return!t||(r?P(i,t):void 0)}),[i])},N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},I=function(){return null},E=function(e){var t,r=e.edit,n=e.list,i=e.show,c=e.create,o=N(e,["edit","list","show","create"]),s=S({resource:o.name}),a={list:s({action:"show"})?n:void 0,create:s({action:"create"})?c:void 0,edit:s({action:"edit"})?r:void 0,show:s({action:"show"})?i:void 0};return"registration"===o.intent?Object(O.jsx)(m.a,Object.assign({},a,o),void 0):Object(O.jsx)(m.a,Object.assign({},a,{list:null!==(t=a.list)&&void 0!==t?t:I},o),void 0)},k=function(e){var t=S();return Object(n.useMemo)((function(){return t&&t(e)}),[t,e])},C=r(306),T=r(532),M=r(548),F=r(91),B=r(110),W=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},R=function(e){var t,r,i=e.children,c=W(e,["children"]),o=Object(B.b)(),s=Object(p.a)(c),a=k({record:o,resource:s,action:"delete"});if(0===n.Children.count(i)){var d=Object(F.a)((function(e){return{toolbar:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900]},desktopToolbar:{marginTop:e.spacing(2)},mobileToolbar:{position:"fixed",bottom:0,left:0,right:0,padding:"16px",width:"100%",boxSizing:"border-box",flexShrink:0,zIndex:2},defaultToolbar:{flex:1,display:"flex",justifyContent:"space-between"},spacer:Object(h.a)({},e.breakpoints.down("xs"),{height:"5em"})}}),{name:"RaToolbar"}),l=c.alwaysEnableSaveButton,u=c.basePath,j=(c.className,c.classes,c.handleSubmit),b=c.handleSubmitWithRedirect,m=c.invalid,f=c.pristine,v=c.record,g=c.redirect,x=c.resource,y=c.saving,w=c.submitOnEnter,P=c.undoable,S=c.mutationMode,N=c.validating,I=(c.width,W(c,["alwaysEnableSaveButton","basePath","className","classes","handleSubmit","handleSubmitWithRedirect","invalid","pristine","record","redirect","resource","saving","submitOnEnter","undoable","mutationMode","validating","width"]),d(c)),E=(r=!f&&!N,!("undefined"===typeof(t=l)?r:t));i=Object(O.jsxs)("div",Object.assign({className:I.defaultToolbar},{children:[Object(O.jsx)(T.a,{handleSubmitWithRedirect:b||j,disabled:E,invalid:m,redirect:g,saving:y||N,submitOnEnter:w},void 0),v&&"undefined"!==typeof v.id&&a&&Object(O.jsx)(M.a,{basePath:u,record:v,resource:x,undoable:P,mutationMode:S},void 0)]}),void 0)}return Object(O.jsx)(C.a,Object.assign({},c,{children:i}),void 0)},z=r(624),A=function(e,t,r){return function e(i){if(t(i))return r(i);if(i.props&&i.props.children){var c=n.Children.map(i.props.children,(function(t){return Object(n.isValidElement)(t)?e(t):t}));return Object(n.cloneElement)(i,i.props,c.length>1?c:c.shift())}return i}(e)},J=function(e,t){return A(e,(function(e){return!t(e)}),(function(){}))},U=function(e){var t=e.children,r=e.action,n=S(null===t||void 0===t?void 0:t.props),i=J(t,(function(e){var i,c,o,s=null===(i=e.props)||void 0===i?void 0:i.source,a=s&&{field:s,action:r};return!("EditButton"===(null===(c=null===e||void 0===e?void 0:e.type)||void 0===c?void 0:c.name)&&!(null===(o=t.props)||void 0===o?void 0:o.hasEdit))&&!!n(a)}));return Object(O.jsx)(O.Fragment,{children:i},void 0)},_=r(82),L=r(229),D=r(594),V=r(597),q=function(e){Object(_.a)("Show",["children"],e);var t=Object(L.a)(),r=Object(D.a)(e),n=S(e),i=n({record:r.record,action:"show"});return i?(r.hasEdit=r.hasEdit&&n({record:r.record,action:"edit"}),Object(O.jsx)(V.a,Object.assign({value:r},{children:Object(O.jsx)(U,Object.assign({action:"show"},{children:Object(O.jsx)(z.a,Object.assign({},e,r),void 0)}),void 0)}),void 0)):(!1===i&&t("list",e.basePath),null)},H=r(621),G=r(622),K=r(625),Q=r(601),X=function(e){var t,r;if((null===(r=null===(t=e.children)||void 0===t?void 0:t.type)||void 0===r?void 0:r.name)===Object(O.jsx)(H.a,{children:Object(O.jsx)(O.Fragment,{},void 0)},void 0).type.name){var n=e.children.toolbar||Object(O.jsx)(R,{},void 0),i=Object.assign(Object.assign({},e.children),{props:Object.assign(Object.assign({},e.children.props),{toolbar:n})});e=Object.assign(Object.assign({},e),{children:i})}Object(_.a)("Edit",["children"],e);var c=Object(K.a)(e),o=Object(L.a)(),s=k({resource:c.resource,record:c.record,action:"edit"});return s?Object(O.jsx)(Q.a,Object.assign({value:c},{children:Object(O.jsx)(U,Object.assign({action:"edit"},{children:Object(O.jsx)(G.a,Object.assign({},e,c),void 0)}),void 0)}),void 0):(!1===s&&o("list",e.basePath),null)},Y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},Z=Object(F.a)({toolbar:{justifyContent:"flex-end",display:"flex",marginTop:-1,marginBottom:-1}}),$=function(e){var t=e.children,r=Y(e,["children"]),i=Z();return Object(O.jsx)("div",Object.assign({className:i.toolbar},{children:n.Children.map(t,(function(e){return n.cloneElement(e,r)}))}),void 0)},ee=r(599),te=r(613),re=r(598),ne=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},ie=n.createElement(ee.a).type,ce=function(e){var t=e.children,r=ne(e,["children"]),i=Object(re.a)(r),c=Object(p.a)(),o=Object(B.b)();return i.hasEdit&&k({resource:c,record:o,action:"edit"})?Object(O.jsx)(O.Fragment,{children:n.cloneElement(t,Object.assign({},r))},void 0):null},oe=function(e){var t=A(e.children,(function(e){var t;return"string"!==typeof(null===e||void 0===e?void 0:e.type)&&(null===(t=e.type)||void 0===t?void 0:t.name)===ie.name}),(function(t){return e.hasEdit?Object(O.jsx)(ce,{children:t},void 0):null}));return e=Object.assign(Object.assign({},e),{children:t}),Object(O.jsx)(U,Object.assign({action:"show"},{children:Object(O.jsx)(te.a,Object.assign({},e,{exporter:e.exporter||!1,bulkActionButtons:e.bulkActionButtons||!1}),void 0)}),void 0)},se=r(619),ae=function(e){return Object(O.jsx)(U,Object.assign({action:"edit"},{children:Object(O.jsx)(se.a,Object.assign({},e),void 0)}),void 0)},de=r(330),le=r(226),ue=r(30),je=r(15),be=r(628),Oe=r(600),me=r(629),fe=r(608),pe=r(132),he=r(533),ve=r(329),ge=r(609),xe=r(179),ye=r.n(xe),we=r(67),Pe=r(90),Se=r(607),Ne=r(184),Ie=r(180),Ee=["meta","input"],ke=["theme"],Ce=Object(F.a)((function(e){return{main:{display:"flex",flexDirection:"column",minHeight:"100vh",height:"1px",alignItems:"center",justifyContent:"flex-start",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)"},card:{minWidth:500,marginTop:"6em"},avatar:{margin:"1em",display:"flex",justifyContent:"center"},icon:{backgroundColor:e.palette.secondary.main},hint:{marginTop:"1em",display:"flex",justifyContent:"center",color:e.palette.grey[500]},form:{padding:"0 1em 1em 1em"},input:{marginTop:"1em"},actions:{padding:"0 1em 1em 1em"}}}),{name:"RaLogin"}),Te=function(e){var t=e.meta,r=(t=void 0===t?{touched:!1,error:void 0}:t).touched,n=t.error,i=Object.assign({},e.input),c=Object(le.a)(e,Ee);return Object(O.jsx)(be.a,Object(s.a)(Object(s.a)(Object(s.a)({error:!(!r||!n),helperText:r&&n},i),c),{},{fullWidth:!0}))},Me=Object(ue.f)().Form,Fe=function(e){e.theme,Object(le.a)(e,ke);var t=Object(n.useState)(!1),r=Object(de.a)(t,2),i=r[0],c=r[1],o=Object(we.a)(),s=Ce(),a=Object(Pe.a)(),d=Object(Se.a)(),l=Object(je.h)();return Object(O.jsx)(Me,{onSubmit:function(e){c(!0),d(e,l.state?l.state.nextPathname:"/").catch((function(e){c(!1),a("string"===typeof e?e:"undefined"!==typeof e&&e.message?e.message:"ra.auth.sign_in_error","warning",{_:"string"===typeof e?e:e&&e.message?e.message:void 0})}))},validate:function(e){var t={};return e.username||(t.username=o("ra.validation.required")),t},render:function(e){var t=e.handleSubmit;return Object(O.jsx)("form",{onSubmit:t,noValidate:!0,children:Object(O.jsxs)("div",{className:s.main,children:[Object(O.jsxs)(Oe.a,{className:s.card,children:[Object(O.jsx)("div",{className:s.avatar,children:Object(O.jsx)(me.a,{className:s.icon,children:Object(O.jsx)(ye.a,{})})}),Object(O.jsxs)("div",{className:s.hint,children:["admin   - full rights",Object(O.jsx)("br",{}),"corrector   - can't delete, can't see Users",Object(O.jsx)("br",{}),"reader   - only reading",Object(O.jsx)("br",{}),"user    - only reading, can't see Price in Posters, can't see Users",Object(O.jsx)("br",{})]}),Object(O.jsx)("div",{className:s.form,children:Object(O.jsx)("div",{className:s.input,children:Object(O.jsx)(ue.a,{autoFocus:!0,name:"username",component:Te,label:o("ra.auth.username"),disabled:i})})}),Object(O.jsx)(fe.a,{className:s.actions,children:Object(O.jsxs)(pe.a,{variant:"contained",type:"submit",color:"primary",disabled:i,fullWidth:!0,children:[i&&Object(O.jsx)(he.a,{size:25,thickness:2}),o("ra.auth.sign_in")]})})]}),Object(O.jsx)(Ne.a,{})]})})}})},Be=function(e){return Object(O.jsx)(ge.a,{theme:Object(ve.a)(Ie.a),children:Object(O.jsx)(Fe,Object(s.a)({},e))})},We=r(616),Re=r(615),ze=r(614),Ae=r(623),Je=r(610),Ue=r(611),_e={list:function(e){return Object(O.jsx)(oe,Object(s.a)(Object(s.a)({},e),{},{children:Object(O.jsxs)(ze.a,{rowClick:"show",children:[Object(O.jsx)(Ae.a,{source:"id"}),Object(O.jsx)(Ae.a,{source:"name"}),Object(O.jsx)(Ae.a,{source:"description"}),Object(O.jsx)(Ae.a,{source:"price"}),Object(O.jsx)($,{children:Object(O.jsx)(Je.a,{label:""})})]})}))},create:function(e){return Object(O.jsx)(ae,Object(s.a)(Object(s.a)({},e),{},{children:Object(O.jsxs)(We.a,{children:[Object(O.jsx)(Re.a,{source:"name"}),Object(O.jsx)(Re.a,{source:"description"}),Object(O.jsx)(Re.a,{source:"comment"}),Object(O.jsx)(Re.a,{source:"price"})]})}))},edit:function(e){return Object(O.jsx)(X,Object(s.a)(Object(s.a)({},e),{},{children:Object(O.jsxs)(We.a,{children:[Object(O.jsx)(Re.a,{source:"name"}),Object(O.jsx)(Re.a,{source:"description"}),Object(O.jsx)(Re.a,{source:"comment"}),Object(O.jsx)(Re.a,{source:"price"})]})}))},show:function(e){return Object(O.jsx)(q,Object(s.a)(Object(s.a)({},e),{},{children:Object(O.jsxs)(Ue.a,{children:[Object(O.jsx)(Ae.a,{source:"name"}),Object(O.jsx)(Ae.a,{source:"description"}),Object(O.jsx)(Ae.a,{source:"comment"}),Object(O.jsx)(Ae.a,{source:"price"})]})}))}},Le={list:function(e){return Object(O.jsx)(oe,Object(s.a)(Object(s.a)({},e),{},{children:Object(O.jsxs)(ze.a,{rowClick:"show",children:[Object(O.jsx)(Ae.a,{source:"id"}),Object(O.jsx)(Ae.a,{source:"name"}),Object(O.jsx)($,{children:Object(O.jsx)(Je.a,{})})]})}))},create:function(e){return Object(O.jsx)(ae,Object(s.a)(Object(s.a)({},e),{},{children:Object(O.jsx)(We.a,{children:Object(O.jsx)(Re.a,{source:"name"})})}))},edit:function(e){return Object(O.jsx)(X,Object(s.a)(Object(s.a)({},e),{},{children:Object(O.jsx)(We.a,{children:Object(O.jsx)(Re.a,{source:"name"})})}))},show:function(e){return Object(O.jsx)(q,Object(s.a)(Object(s.a)({},e),{},{children:Object(O.jsx)(Ue.a,{children:Object(O.jsx)(Ae.a,{source:"name"})})}))}},De=function(){return Object(O.jsxs)(a.a,{dataProvider:l,authProvider:j,loginPage:Be,children:[Object(O.jsx)(E,Object(s.a)({name:"posters"},_e)),Object(O.jsx)(E,Object(s.a)({name:"clients"},Le))]})},Ve=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,630)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(De,{})}),document.getElementById("root")),Ve()}},[[530,1,2]]]);
//# sourceMappingURL=main.cfc1588f.chunk.js.map