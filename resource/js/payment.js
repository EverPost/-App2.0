!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(26);r.init()},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e,t){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=t?t.substr(1).match(n):window.location.search.substr(1).match(n);return null===r?null:unescape(r[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),c=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={message:e.message,autoHide:e.autoHide},n.autoHide=function(){n.state.autoHide&&!function(){var e=setTimeout(function(){clearTimeout(e),n.setState({message:""})},2500)}()},n}return o(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({message:e.message})}},{key:"componentDidMount",value:function(){this.autoHide()}},{key:"shouldComponentUpdate",value:function(e,t){return e.message!==this.props.message||t.message!==this.state.message}},{key:"componentDidUpdate",value:function(){this.autoHide()}},{key:"render",value:function(){return React.createElement("p",{className:"message"},this.state.message)}}]),t}(i.Component);c.defaultProps={message:""},t["default"]=c},,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;var c=n(1),s=r(c),l=n(2),f=r(l),p=n(4),d=r(p),m=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.getStatus=function(){var t="";switch(e.props.status){case 0:t=e.props.expirationDate+"到期";break;case 1:t="已使用";break;case 2:t="已过期"}return t},e}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props;return s["default"].createElement("section",null,s["default"].createElement("b",null,e.money),s["default"].createElement("p",null,e.name),s["default"].createElement("p",null,s["default"].createElement("span",null,"单笔投资≥"+e.condition+"元"),s["default"].createElement("em",null,this.getStatus())))}}]),t}(s["default"].Component),h=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data||[],status:0},n.getClassName=function(){var e="";switch(n.state.status){case 0:e=" available";break;case 1:case 2:e=" unavailable";break;default:e=""}return e},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;this.props.url&&$.ajax({url:this.props.url,success:function(t){if(200===t.code)e.setState({data:t.data});else{var n=document.querySelector(".warning");n&&!function(){f["default"].render(s["default"].createElement(d["default"],{message:t.message}),n);var e=setTimeout(function(){clearTimeout(e),window.location.href="/signin"},1e3)}()}}})}},{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this,t=[],n=this.state.data;return n.length?n.map(function(n,r){t.push(s["default"].createElement(m,{ref:"list"+(r+1),money:n.money,name:n.name,condition:n.conditions,expirationDate:n.expirationDate.split(" ")[0],status:n.status,id:n.id,callback:e.props.callback,key:r}))}):t[0]=s["default"].createElement("div",{className:"default"}),s["default"].createElement("div",{className:"content "+this.props.type+this.getClassName()},t)}}]),t}(s["default"].Component);t.Content=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=(n(1),n(4)),s=(r(c),n(3)),l=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={matched:0},e.handleCheck=function(){var t=e.props;return t.store.warning.component.setState({message:e.state.matched?"":t.placeholder+"输入错误"}),e.state.matched},e.handleEvent=function(t){e.setState({matched:s.isMatch(e.props.className.split(" ")[1],t.target.value)},e.handleCheck)},e}return u(t,e),i(t,[{key:"render",value:function(){return React.createElement("input",{name:this.props.name,type:this.props.type,className:this.props.className,placeholder:this.props.placeholder,maxLength:this.props.maxLength,onChange:this.handleEvent,onBlur:this.handleEvent})}}]),t}(React.Component);t["default"]=l},,function(e,t){e.exports=ReactRouter},,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),c=n(12),s=function(e){function t(){return r(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props;return React.createElement(c.Link,{className:e.className,to:e.url},React.createElement("span",null,e.placeholder),React.createElement("em",null,e.choice))}}]),t}(i.Component);t["default"]=s},,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var c=n(1),s=r(c),l=n(2),f=n(12),p=n(35),d=n(3),m=n(9),h=n(10),y=r(h),v=n(15),g=r(v),b=n(4),w=r(b),O=p.createStore(function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];if(e[t.type])for(var n in t)e[t.type][n]=t[n];else e[t.type]=t;return e}),E=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.handleClick=function(){O.dispatch({type:"bill",bankNumber:e.props.value,id:e.props.id})},e}return u(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement(f.Link,{className:this.props.className,to:"/form",onClick:this.handleClick},s["default"].createElement("span",null,this.props.name),s["default"].createElement("em",null,this.props.value))}}]),t}(s["default"].Component),k=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={data:[]},e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax({url:"/api/getuserbank",success:function(t){200===t.code?e.setState({data:t.data}):!function(){O.getState().warning.component.setState({message:t.message});var e=setTimeout(function(){clearTimeout(e),window.location.href="/signin"},1e3)}()}})}},{key:"render",value:function(){var e=[],t=this.state.data;return t.map(function(t,n){e.push(s["default"].createElement(E,{className:t.imgCss,name:t.bankName,value:t.cardNO,id:t.id,key:n}))}),s["default"].createElement("div",{className:"main"},s["default"].createElement("div",{className:"bank"},e),s["default"].createElement("i",{ref:"btnAdd",className:"add"},"点击添加银行卡"))}}]),t}(s["default"].Component),x=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.handleProtocol=function(){O.getState().warning.component.setState({message:"请务必同意《喜蓝互联网金融平台支付协议》!",autoHide:1})},e.handleClick=function(){console.log(O.getState())},e}return u(t,e),i(t,[{key:"render",value:function(){var e=[],t=this.props.setting;return t.map(function(t,n){e.push(s["default"].createElement(g["default"],{ref:t.ref,className:t.className,placeholder:t.placeholder,url:t.url,key:n,choice:O.getState().bill?O.getState().bill[t.choice]:""}))}),s["default"].createElement("div",{className:"main form"},e,s["default"].createElement(y["default"],{ref:"captcha",name:"captcha",type:"text",className:"shortInput captcha",placeholder:"验证码",maxLength:"5",store:O.getState()}),s["default"].createElement("input",{ref:"btnCaptcha",className:"shortBtn",type:"button",value:"获取"}),s["default"].createElement("input",{ref:"ckb",className:"ckb",id:"ckb",type:"checkbox",checked:"checked",readOnly:"readOnly",onClick:this.handleProtocol}),s["default"].createElement("label",{htmlFor:"ckb"},s["default"].createElement("span",null,"我同意"),s["default"].createElement("b",{ref:"btnProtocol"},"《喜蓝互联网金融平台支付协议》")),s["default"].createElement("input",{ref:"btnSubmit",className:"longBtn",type:"button",value:"确认",onClick:this.handleClick}))}}]),t}(s["default"].Component);x.defaultProps={setting:[{ref:"bonus",className:"select payBonus",placeholder:"选择理财红包",choice:"bonusMoney",url:"/bonus"},{ref:"interest",className:"select payInterest",placeholder:"选择加息券",choice:"interestRate",url:"/interest"},{ref:"bank",className:"select bank",placeholder:"选择银行卡",choice:"bankNumber",url:"/bank"}]};var S=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"main"},s["default"].createElement(m.Content,{url:"/api/getbonus/0",type:"bonus",status:"0"}))}}]),t}(s["default"].Component),j=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"main"},s["default"].createElement(m.Content,{url:"/api/getbonus/0",type:"interest",status:"0"}))}}]),t}(s["default"].Component),P=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"componentDidMount",value:function(){O.dispatch({type:"warning",component:this.refs.warning}),O.dispatch({type:"bill",money:Math.min(d.QueryString("money",this.props.location.search))})}},{key:"render",value:function(){return s["default"].createElement("div",{className:"page"},s["default"].createElement("div",{className:"warning"},s["default"].createElement(w["default"],{ref:"warning"})),this.props.children)}}]),t}(s["default"].Component),_=function(){d.setRem(),document.body.style.opacity=1,l.render(s["default"].createElement(f.Router,null,s["default"].createElement(f.Route,{path:"/",component:P},s["default"].createElement(f.Route,{path:"form",component:x}),s["default"].createElement(f.Route,{path:"bonus",component:S}),s["default"].createElement(f.Route,{path:"interest",component:j}),s["default"].createElement(f.Route,{path:"bank",component:k}))),document.body)};t.init=_},,,,,,,,,function(e,t){e.exports=Redux}]);