(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),u=n(6),i=n(2),s=n(7),o=n.n(s),m=n(8),d=n(3),p=n(9),f=n.n(p),g=n(1);function b(){var e=Object(d.a)(["\n    padding: 20px 10px;\n  "]);return b=function(){return e},e}var E=g.b.div(b());function x(){var e=Object(d.a)(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid blacks;\n  border-radius: 3px;\n"]);return x=function(){return e},e}var h=g.b.button(x()),v={endpoints:{validatePassword:"http://localhost:4000/api/validate-password",newPassword:"http://localhost:4000/api/new-password"}};function w(){var e=Object(d.a)(["\n    padding: 20px 10px;\n    border-radius: 5px;\n    border: 1px solid;\n    text-align: center;\n    width: 100%;\n  "]);return w=function(){return e},e}var j=function(e){var t=e.hint,n=e.onValidationCompleted,c=g.b.input(w()),l=Object(a.useRef)(),s=Object(a.useState)(""),d=Object(u.a)(s,2),p=d[0],b=d[1];return Object(a.useEffect)(function(){l.current.focus()},[p]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){function a(){return(a=Object(m.a)(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(v.endpoints.validatePassword,{hint:t,answer:p});case 2:if((a=e.sent).data){e.next=5;break}return e.abrupt("return");case 5:n(a.data);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}e.preventDefault(),function(){a.apply(this,arguments)}()}},r.a.createElement(i.c,null,r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4"}),r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4"},r.a.createElement(c,{ref:l,type:"text",value:p,onChange:function(e){return b(e.target.value.toUpperCase())}})),r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4"})),r.a.createElement(E,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4"}),r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4",style:{textAlign:"center"}},r.a.createElement(h,null,"Submit")),r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4"}))))};function O(){var e=Object(d.a)(["\n    height: 2px;\n    background-color: black;\n  "]);return O=function(){return e},e}var y=g.b.div(O());function k(){var e=Object(d.a)(["\n    border: 2px dashed;\n    padding: 20px 10px;\n    font-size: 20px;\n    text-align: center;\n    letter-spacing: 0.7em;\n    font-weight: bold;\n  "]);return k=function(){return e},e}var S=function(e){var t=e.onFetchCompleted,n=e.defaultHint,c=g.b.div(k());c.displayName="Hint";var l=Object(a.useState)({loading:!1}),i=Object(u.a)(l,2),s=i[0],d=i[1],p=Object(a.useState)({hint:n}),b=Object(u.a)(p,2),E=b[0],x=b[1];return Object(a.useEffect)(function(){function e(){return(e=Object(m.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(v.endpoints.newPassword);case 2:if((n=e.sent).data){e.next=5;break}return e.abrupt("return");case 5:x(n.data),d({loading:!1}),t(n.data);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}d({loading:!0}),function(){e.apply(this,arguments)}()},[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null,s.loading?"Fetching":E.hint))};function C(){var e=Object(d.a)(["\n    letter-spacing: normal;\n    margin: 10px;\n    border-radius: 12px;\n    border: 1px solid;\n    font-size: 20px;\n    text-align: center;\n    letter-spacing: 0.7em;\n    font-weight: bold;\n  "]);return C=function(){return e},e}function F(){var e=Object(d.a)(["\n  margin: 1px;\n  background-color: ",";\n  color: white;\n"]);return F=function(){return e},e}var P=g.b.span(F(),function(e){return e.primary?"blue":"green"});P.displayName="HighlightedSpan";var z=function(e){var t=e.text,n=e.highlightChars,a=e.correct,c=g.b.div(C());return c.displayName="Attempt",a?r.a.createElement(c,null,function(e){return r.a.createElement(P,{primary:!0},r.a.createElement("strong",null,e))}(t)):r.a.createElement(c,null,function(e,t){return e.split("").map(function(e,n){return t.includes(e)?r.a.createElement(P,{key:n},r.a.createElement("strong",null,e)):e})}(t,n))};function A(){var e=Object(d.a)(["\n    overflow: auto;\n    height: 160px;\n  "]);return A=function(){return e},e}var H=function(e){var t=e.attempts,n=g.b.div(A());return r.a.createElement(r.a.Fragment,null,r.a.createElement(n,null,t?t.map(function(e,t){return r.a.createElement(z,{key:t,correct:e.correct,highlightChars:e.highlight,text:e.answer})}):""))};var N=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)({}),s=Object(u.a)(l,2),o=s[0],m=s[1],d=Object(a.useState)({}),p=Object(u.a)(d,2),f=p[0],g=p[1];return Object(a.useEffect)(function(){f.answer&&c(function(e){return e.concat(f)})},[f]),r.a.createElement(i.b,{fluid:"true"},r.a.createElement(i.c,null,r.a.createElement(i.a,{lg:"2",md:"2",xs:"2",sm:"2"}),r.a.createElement(i.a,{lg:"8",md:"8",xs:"8",sm:"8",style:{textAlign:"center"}},r.a.createElement("h1",null,"Guess The Password!")),r.a.createElement(i.a,{lg:"2",md:"2",xs:"2",sm:"2"})),r.a.createElement(i.c,null,r.a.createElement(i.a,{lg:"1",md:"1",xs:"1",sm:"1"}),r.a.createElement(i.a,{lg:"10",md:"10",xs:"10",sm:"10"},r.a.createElement(y,null)),r.a.createElement(i.a,{lg:"1",md:"1",xs:"1",sm:"11"})),r.a.createElement(E,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{lg:"2",md:"2",xs:"2",sm:"2"}),r.a.createElement(i.a,{lg:"8",md:"8",xs:"8",sm:"8"},r.a.createElement(S,{onFetchCompleted:m})),r.a.createElement(i.a,{lg:"2",md:"2",xs:"2",sm:"2"})),r.a.createElement(E,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4"}),r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4"},r.a.createElement(H,{attempts:n})),r.a.createElement(i.a,{lg:"4",md:"4",xs:"4",sm:"4"})),r.a.createElement(E,null),r.a.createElement(j,{hint:o.hint,onValidationCompleted:g}))};l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.349131bc.chunk.js.map