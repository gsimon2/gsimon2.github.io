(this.webpackJsonppersonalsite=this.webpackJsonppersonalsite||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var r,a,c,i=n(0),o=n.n(i),s=n(12),d=n.n(s),l=(n(88),n(5)),j=n(31),u=n(6),h=n(21),b=n(130),m=n(131),g=n(11);!function(e){e.light="light",e.dark="dark"}(r||(r={})),function(e){e.home="/",e.resume="/resume",e.projects="/projects"}(a||(a={})),function(e){e[e.github=0]="github",e[e.foundry=1]="foundry"}(c||(c={}));var p,O,x,f,y,v,k,w,C,F,T,B,S,P,D,I,R,M,z,E,H,L,N,U,A="https://docs.google.com/gview?url=https://github.com/gsimon2/Resume/raw/main/Resume.pdf&embedded=true",G="themeType",J=n(132),V=n(133),W=n(134),q="3.5rem",K="0.0625rem",Q="3.5625rem",X="80rem",Y={shared:{accentColor:"#3f51b5"},dark:{primaryBackground:"#282e3a",secondaryBackground:"#181d27",textColor:"lightgray"},light:{primaryBackground:"#dedddd",secondaryBackground:"#e8f4fd",textColor:"black"}},Z=n(25),$=n(129),_=n(128),ee=n(75),te=n.n(ee),ne=n(142),re=n(126),ae=n(51),ce={theme:function(){var e=window.matchMedia("(prefers-color-scheme: light)").matches,t=(window.matchMedia("(prefers-color-scheme: dark)").matches,function(){try{var e=document.cookie.split(";").filter((function(e){return e.trim().startsWith("".concat(G,"="))}));return(null===e||void 0===e?void 0:e.length)?e[0].split("=")[1].trim():null}catch(t){return console.error("Failed to get theme cookie: ",t),null}}());return t?t===r.dark?r.dark:r.light:e?r.light:r.dark}()},ie=Object(ae.b)({name:"userPreferences",initialState:ce,reducers:{updateTheme:function(e,t){!function(e){try{document.cookie="".concat(G,"=").concat(e)}catch(t){console.error("Fail to set theme cookie: ",t)}}(t.payload),e.theme=t.payload}}}),oe=ie.actions.updateTheme,se=ie.reducer,de=n(73),le=n.n(de),je=n(74),ue=n.n(je),he=n(2),be=u.a.div(p||(p=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),me=function(){var e=Object(Z.c)((function(e){return e.userPreferences.theme})),t=Object(Z.b)();return Object(he.jsxs)(be,{children:[Object(he.jsx)("span",{children:"Theme"}),Object(he.jsxs)(ne.a,{value:e,exclusive:!0,onChange:function(e,n){t(oe(n))},"aria-label":"Theme Selection",children:[Object(he.jsx)(re.a,{value:r.dark,"aria-label":"Dark Theme",title:"Dark Theme",children:Object(he.jsx)(le.a,{})}),Object(he.jsx)(re.a,{value:r.light,"aria-label":"Light Theme",title:"Light Theme",children:Object(he.jsx)(ue.a,{})})]})]})},ge=n(127),pe=u.a.div(O||(O=Object(l.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding-right: 0.5rem;\n    height: 100%;\n"]))),Oe=u.a.div(x||(x=Object(l.a)(["   \n    width: 12.5rem;\n    padding: 0.5rem;\n    box-sizing: border-box;\n"]))),xe=function(){var e=o.a.useState(null),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(ge.a)("(min-width:650px)"),c=Boolean(n),i=c?"settings-popover":void 0;return Object(he.jsxs)(pe,{children:[Object(he.jsx)(_.a,{"aria-describedby":i,variant:"contained",color:"primary",onClick:function(e){r(e.currentTarget)},startIcon:Object(he.jsx)(te.a,{}),title:"Settings",children:a&&"Settings"}),Object(he.jsx)($.a,{id:i,open:c,anchorEl:n,onClose:function(){r(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(he.jsx)(Oe,{children:Object(he.jsx)(me,{})})})]})},fe=u.a.header(f||(f=Object(l.a)(["\n    display: flex;\n    height: ",";\n    background-color: ",";\n\n    >div {\n        background-color: ",";\n    }\n"])),q,(function(e){return e.themeType===r.dark?Y.dark.secondaryBackground:Y.light.secondaryBackground}),(function(e){return e.themeType===r.dark?Y.dark.secondaryBackground:Y.light.secondaryBackground})),ye=u.a.div(y||(y=Object(l.a)(["\n    height: ",";\n    background-color: ",";\n"])),K,Y.shared.accentColor),ve=u.a.div(v||(v=Object(l.a)(["\n    width: 10rem;\n    margin-right: auto;\n"]))),ke=u.a.div(k||(k=Object(l.a)(["\n    width: 10rem;\n    margin-left: auto;\n"]))),we=function(){var e=Object(g.e)(),t=Object(Z.c)((function(e){return e.userPreferences.theme})),n=Object(i.useState)(e.pathname),r=Object(h.a)(n,2),c=r[0],o=r[1];return i.useEffect((function(){o(e.pathname)}),[e.pathname]),Object(he.jsxs)(he.Fragment,{children:[Object(he.jsxs)(fe,{className:"App-header",themeType:t,children:[Object(he.jsx)(ve,{}),Object(he.jsxs)(b.a,{value:c,showLabels:!0,children:[Object(he.jsx)(m.a,{component:j.b,label:"Home",value:a.home,icon:Object(he.jsx)(J.a,{}),to:a.home}),Object(he.jsx)(m.a,{component:j.b,label:"Projects",value:a.projects,icon:Object(he.jsx)(V.a,{}),to:a.projects}),Object(he.jsx)(m.a,{component:j.b,label:"Resume",value:a.resume,icon:Object(he.jsx)(W.a,{}),to:a.resume})]}),Object(he.jsx)(ke,{children:Object(he.jsx)(xe,{})})]}),Object(he.jsx)(ye,{})]})},Ce=n(105),Fe=n.p+"static/media/glen-mt.74ceae32.jpg",Te=u.a.div(w||(w=Object(l.a)(["\n    width: 100%;\n    height: ",";\n    max-width: ",";\n    margin: auto;\n    padding: 2rem 1rem;\n    box-sizing: border-box;\n"])),"calc(100vh - ".concat(Q,")"),X),Be=u.a.img(C||(C=Object(l.a)(["\n    border-radius: 20%;\n    object-fit: contain;\n    justify-self: center;\n"]))),Se=Object(u.a)(Be)(F||(F=Object(l.a)(["\n    min-width: 0;\n    max-width: 22rem;\n    max-height: 100%;\n"]))),Pe=Object(u.a)(Be)(T||(T=Object(l.a)(["\n    max-width: 100%;\n    max-height: 35rem;\n"]))),De=u.a.div(B||(B=Object(l.a)(["\n    display: grid;\n    grid-template-columns: minmax(5rem, 1fr) 1fr;\n"]))),Ie=u.a.div(S||(S=Object(l.a)(["\n    display: grid;\n    grid-template-rows: minmax(5rem, 1fr) 1fr;\n"]))),Re=u.a.span(P||(P=Object(l.a)(["\n    margin: ",";\n    word-break: break-word;\n"])),(function(e){return e.isDesktopView?"4rem 1rem 0 4rem":"2rem auto"})),Me=function(){var e=Object(ge.a)("(min-width:650px)"),t=e?De:Ie,n=e?Pe:Se;return Object(he.jsx)(he.Fragment,{children:Object(he.jsx)(Te,{children:Object(he.jsxs)(t,{children:[Object(he.jsx)(Ce.a,{in:!0,children:Object(he.jsx)(n,{src:Fe})}),Object(he.jsx)(Ce.a,{in:!0,children:Object(he.jsx)(Re,{isDesktopView:e,children:"Hi I'm Glen! Eventually I will talk about myself here"})})]})})})},ze=n(135),Ee=u.a.iframe(D||(D=Object(l.a)(["\n    height: 100%;\n"]))),He=u.a.div(I||(I=Object(l.a)(["\n    width: 100%;\n    position: absolute;\n    height: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])),"calc(100vh - ".concat(Q,")")),Le=function(){var e=Object(i.useState)(!0),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(he.jsxs)(he.Fragment,{children:[n&&Object(he.jsx)(He,{children:Object(he.jsx)(ze.a,{})}),Object(he.jsx)(Ee,{title:"ResumeWrapper",src:A,onLoad:function(){return r(!1)}})]})},Ne=n(58),Ue=n(136),Ae=n(76),Ge=n(137),Je=n(138),Ve=n(139),We=n(104),qe=n(77),Ke=n.n(qe),Qe=n(78),Xe=n.n(Qe),Ye=u.a.div(R||(R=Object(l.a)(["\n    display: flex;\n    justify-content: flex-end;\n    margin: 0 -0.5rem -1rem 0;\n"]))),Ze=u.a.div(M||(M=Object(l.a)(["\n    padding: 0.25rem;\n"]))),$e=function(e){var t=e.tags;return Object(he.jsxs)(Ye,{children:[t.includes(c.github)&&Object(he.jsx)(Ze,{title:"Has Github Repo",children:Object(he.jsx)(Ke.a,{})}),t.includes(c.foundry)&&Object(he.jsx)(Ze,{title:"Foundry Project",children:Object(he.jsx)(Xe.a,{})})]})},_e=u.a.div(z||(z=Object(l.a)(["\n    padding: 1rem;\n    box-sizing: border-box;\n"]))),et=Object(Ue.a)({media:{height:140}}),tt=u.a.div(E||(E=Object(l.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400;\n    background-color: ",";\n    color: ",";\n    border: 2px solid;\n    border-color: ",";\n    box-shadow: ",";\n    padding: ",";\n    border-radius: 1rem;\n"])),(function(e){return e.theme.palette.type===r.dark?Y.dark.secondaryBackground:Y.light.secondaryBackground}),(function(e){return e.theme.palette.type===r.dark?Y.dark.textColor:Y.light.textColor}),(function(e){return e.theme.palette.type===r.dark?Y.dark.textColor:Y.light.textColor}),(function(e){return e.theme.shadows[5]}),(function(e){return e.theme.spacing(2,4,3)})),nt=function(e){var t=e.name,n=e.img,r=e.description,a=e.tags,c=Object(i.useState)(!1),o=Object(h.a)(c,2),s=o[0],d=o[1],l=Object(Ae.a)(),j=et();return Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(Ce.a,{in:!0,children:Object(he.jsx)(_e,{children:Object(he.jsxs)(Ge.a,{variant:"outlined",onClick:function(){return d(!0)},children:[n&&Object(he.jsx)(Je.a,{className:j.media,image:n,title:t}),Object(he.jsxs)(Ve.a,{children:[Object(he.jsx)("span",{children:t}),(null===a||void 0===a?void 0:a.length)&&Object(he.jsx)($e,{tags:a})]})]})})}),Object(he.jsx)(We.a,{open:s,onClose:function(){return d(!1)},children:Object(he.jsxs)(tt,{theme:l,children:[Object(he.jsx)("h2",{id:"project-details-modal-title",children:"".concat(t," Details")}),Object(he.jsx)("p",{id:"project-details-modal-description",children:r})]})})]})},rt=[{name:"Dramatic Rolls",img:"https://github.com/gsimon2/dramatic-rolls/blob/main/natty20.gif?raw=true",description:"Fill out description here",tags:[c.github,c.foundry]},{name:"Playlist Drag and Drop",img:"https://github.com/gsimon2/playlist-drag-and-drop/blob/main/playlist-drag-and-drop-demo.gif?raw=true",description:"Fill out description here",tags:[c.github,c.foundry]},{name:"Pf2e Inspire Courage",img:"https://github.com/gsimon2/pf2e-inspire-courage/blob/main/demo.gif?raw=true",description:"Fill out description here",tags:[c.github,c.foundry]},{name:"Hide Player UI",description:"Fill out description here",tags:[c.github,c.foundry]},{name:"Close Player Art",img:"https://github.com/gsimon2/close-player-art/blob/main/close-art.gif?raw=true",description:"Fill out description here",tags:[c.github,c.foundry]}],at=u.a.div(H||(H=Object(l.a)(["\n    display: grid;\n    grid-template-columns: ",";\n"])),(function(e){return"repeat(".concat(e.numColumns,", 1fr)")})),ct=function(){var e=Object(ge.a)("(max-width:500px)"),t=Object(ge.a)("(max-width:750px)"),n=Object(ge.a)("(max-width:1000px)");return Object(he.jsx)(Te,{children:Object(he.jsx)(at,{numColumns:e?1:t?2:n?3:4,children:rt.map((function(e,t){return Object(i.createElement)(nt,Object(Ne.a)(Object(Ne.a)({},e),{},{key:"card".concat(t)}))}))})})},it=n(141),ot=u.a.div(L||(L=Object(l.a)(["\n    max-width: ",";\n    margin: 1rem auto 0;\n"])),X),st=function(){var e=Object(i.useState)(!0),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(he.jsx)(he.Fragment,{children:n?Object(he.jsx)(ot,{children:Object(he.jsx)(it.a,{severity:"info",onClose:function(){return r(!1)},children:"Site is under development - More to come soon! = D"})}):null})},dt=function(){return Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(st,{}),Object(he.jsx)(g.a,{path:a.resume,component:Le}),Object(he.jsx)(g.a,{path:a.projects,component:ct}),Object(he.jsx)(g.a,{exact:!0,path:a.home,component:Me})]})},lt=n(79),jt=n(140),ut=u.a.div(N||(N=Object(l.a)(["\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n  color: ",";\n"])),(function(e){return e.themeType===r.dark?Y.dark.primaryBackground:Y.light.primaryBackground}),(function(e){return e.themeType===r.dark?Y.dark.textColor:Y.light.textColor})),ht=u.a.div(U||(U=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"])));var bt=function(){var e=Object(Z.c)((function(e){return e.userPreferences.theme})),t=o.a.useMemo((function(){return Object(lt.a)({palette:{type:e===r.dark?"dark":"light"}})}),[e]);return Object(he.jsx)(jt.a,{theme:t,children:Object(he.jsx)(j.a,{children:Object(he.jsx)(ut,{themeType:e,children:Object(he.jsxs)(ht,{children:[Object(he.jsx)(we,{}),Object(he.jsx)(dt,{})]})})})})},mt=Object(ae.a)({reducer:{userPreferences:se}});d.a.render(Object(he.jsx)(o.a.StrictMode,{children:Object(he.jsx)(Z.a,{store:mt,children:Object(he.jsx)(bt,{})})}),document.getElementById("root"))},88:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.edc85419.chunk.js.map