(this.webpackJsonppersonalsite=this.webpackJsonppersonalsite||[]).push([[0],{55:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a,c=t(0),r=t.n(c),i=t(19),s=t.n(i),o=(t(55),t(7)),j=t(20),l=t(8),b=t(21),m=t(87),d=t(89),h=t(5);!function(e){e.home="/",e.resume="/resume"}(a||(a={}));var u,O,x,p,f,g,v,w,y,k,S,F,R,I,M="https://docs.google.com/gview?url=https://github.com/gsimon2/Resume/raw/main/Resume.pdf&embedded=true",E=t(90),H=t(91),B="3.5rem",C="0.0625rem",D="3.5625rem",J="80rem",L="450px",N=t(2),U=l.a.header(u||(u=Object(o.a)(["\n    height: ",";\n\n    >div {\n        background-color: #181d27;\n    }\n"])),B),z=l.a.div(O||(O=Object(o.a)(["\n    height: ",";\n    background-color: #3f51b5 ;\n"])),C),A=function(){var e=Object(h.e)(),n=Object(c.useState)(e.pathname.replace("/","")),t=Object(b.a)(n,2),r=t[0],i=t[1];return c.useEffect((function(){i(e.pathname.replace("/",""))}),[e.pathname]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(U,{className:"App-header",children:Object(N.jsxs)(m.a,{value:r,showLabels:!0,children:[Object(N.jsx)(d.a,{component:j.b,label:"Home",value:"",icon:Object(N.jsx)(E.a,{}),to:a.home}),Object(N.jsx)(d.a,{component:j.b,label:"Resume",value:"resume",icon:Object(N.jsx)(H.a,{}),to:a.resume})]})}),Object(N.jsx)(z,{})]})},G=t(92),W=t.p+"static/media/glen-mt.74ceae32.jpg",q=t(95),K=l.a.div(x||(x=Object(o.a)(["\n    max-width: ",";\n    margin: 1rem auto 0;\n"])),J),P=function(){var e=Object(c.useState)(!0),n=Object(b.a)(e,2),t=n[0],a=n[1];return Object(N.jsx)(N.Fragment,{children:t?Object(N.jsx)(K,{children:Object(N.jsx)(q.a,{severity:"info",onClose:function(){return a(!1)},children:"Site is under development - More to come soon! = D"})}):null})},Q=l.a.div(p||(p=Object(o.a)(["\n    width: 100%;\n    height: ",";\n    max-width: ",";\n    margin: auto;\n    padding: 2rem 1rem;\n    min-width: ",";\n    box-sizing: border-box;\n"])),"calc(100vh - ".concat(D,")"),J,L),T=l.a.img(f||(f=Object(o.a)(["\n    border-radius: 20%;\n    object-fit: contain;\n    justify-self: center;\n"]))),V=Object(l.a)(T)(g||(g=Object(o.a)(["\n    max-width: 22rem;\n    max-height: 100%;\n"]))),X=Object(l.a)(T)(v||(v=Object(o.a)(["\n    max-width: 100%;\n    max-height: 35rem;\n"]))),Y=l.a.div(w||(w=Object(o.a)(["\n    display: grid;\n    grid-template-columns: minmax(5rem, 1fr) 1fr;\n"]))),Z=l.a.div(y||(y=Object(o.a)(["\n    display: grid;\n    grid-template-rows: minmax(5rem, 1fr) 1fr;\n"]))),$=l.a.span(k||(k=Object(o.a)(["\n    margin: 4rem 1rem 0 4rem;\n    word-break: break-word;\n"]))),_=function(){var e=Object(G.a)("(min-width:650px)"),n=e?Y:Z,t=e?X:V;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(P,{}),Object(N.jsx)(Q,{children:Object(N.jsxs)(n,{children:[Object(N.jsx)(t,{src:W}),Object(N.jsx)($,{children:"Hi I'm Glen! Eventually I will talk about myself here"})]})})]})},ee=t(93),ne=l.a.iframe(S||(S=Object(o.a)(["\n    height: 100%;\n"]))),te=l.a.div(F||(F=Object(o.a)(["\n    width: 100%;\n    position: absolute;\n    height: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])),"calc(100vh - ".concat(D,")")),ae=function(){var e=Object(c.useState)(!0),n=Object(b.a)(e,2),t=n[0],a=n[1];return Object(N.jsxs)(N.Fragment,{children:[t&&Object(N.jsx)(te,{children:Object(N.jsx)(ee.a,{})}),Object(N.jsx)(ne,{title:"ResumeWrapper",src:M,onLoad:function(){return a(!1)}})]})},ce=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(h.a,{path:a.resume,component:ae}),Object(N.jsx)(h.a,{exact:!0,path:a.home,component:_})]})},re=t(44),ie=t(94),se=l.a.div(R||(R=Object(o.a)(["\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  background-color: #282e3a;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n  color: lightgray;\n"]))),oe=l.a.div(I||(I=Object(o.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"])));var je=function(){var e=Object(G.a)("(prefers-color-scheme: dark)"),n=r.a.useMemo((function(){return Object(re.a)({palette:{type:e?"dark":"light"}})}),[e]);return Object(N.jsx)(ie.a,{theme:n,children:Object(N.jsx)(j.a,{children:Object(N.jsx)(se,{children:Object(N.jsxs)(oe,{children:[Object(N.jsx)(A,{}),Object(N.jsx)(ce,{})]})})})})};s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(je,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.7d5feb1f.chunk.js.map