(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(9);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},101:function(e,t,n){e.exports={loginBox:"loginForm_loginBox__m8nCh",userBox:"loginForm_userBox__2EyKX"}},116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),o=n(100),c=n(42),i=n(43),s=n(45),u=n(44),p=n(13),m=n(30),b=n(101),h=n.n(b),O={email:"",password:""},g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state=Object(o.a)({},O),e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(l.a)({},n,a))},e.clickButton=function(){e.props.onLoginUser(Object(o.a)({},e.state)),e.setState(Object(o.a)({},O))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return r.a.createElement("div",null,r.a.createElement("div",{className:h.a.loginBox},r.a.createElement("h2",null,"Login"),r.a.createElement("form",null,r.a.createElement("div",{className:h.a.userBox},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",required:"",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:h.a.userBox},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange})),r.a.createElement("a",{onClick:this.clickButton},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"Submit"))))}}]),n}(a.Component),f=Object(p.b)(null,{onLoginUser:m.a.loginUser})(g);t.default=function(){return r.a.createElement(f,null)}}}]);
//# sourceMappingURL=5.1e566462.chunk.js.map