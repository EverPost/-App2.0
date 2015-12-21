!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";var r=n(29);r.init()},1:function(e,t){e.exports=React},2:function(e,t){e.exports=ReactDOM},3:function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e,t){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=t?t.substr(1).match(n):window.location.search.substr(1).match(n);return null===r?null:unescape(r[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},4:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),u=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={message:e.message,autoHide:e.autoHide},n.autoHide=function(){n.state.autoHide&&!function(){var e=setTimeout(function(){clearTimeout(e),n.setState({message:""})},2500)}()},n}return o(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({message:e.message})}},{key:"componentDidMount",value:function(){this.autoHide()}},{key:"shouldComponentUpdate",value:function(e,t){return e.message!==this.props.message||t.message!==this.state.message}},{key:"componentDidUpdate",value:function(){this.autoHide()}},{key:"render",value:function(){return React.createElement("p",{className:"message"},this.state.message)}}]),t}(c.Component);u.defaultProps={message:""},t["default"]=u},5:function(e,t){e.exports=Redux},7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),s=n(2),l=(r(s),n(4)),f=(r(l),function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.option.currentIndex,index:e.option.index,href:e.option.href,text:e.option.text},n}return i(t,e),c(t,[{key:"render",value:function(){var e=this.state;return React.createElement("a",{className:e.currentIndex===e.index?"current":"",href:e.href},React.createElement("i",null),React.createElement("span",null,e.text))}}]),t}(u.Component)),p=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,text:e.option.text},n}return i(t,e),c(t,[{key:"render",value:function(){var e=this.state;return React.createElement("a",{href:e.href},React.createElement("i",null),React.createElement("span",null,e.text))}}]),t}(u.Component),m=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,name:e.option.name,value:e.option.value},n}return i(t,e),c(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({href:e.option.href,name:e.option.name,value:e.option.value})}},{key:"render",value:function(){var e=this.state;return React.createElement("a",{href:e.href},React.createElement("h1",null,e.name),React.createElement("h2",null,e.value))}}]),t}(u.Component),h=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.currentIndex,menu:function(){var t=void 0;switch(e.type){case 1:t=e.menu1;break;case 2:t=e.menu2;break;case 3:t=e.menu3;break;case 4:t=e.menu4}return t}()},n.getListType=function(e,t){var r=void 0;switch(n.props.type){case 1:r=React.createElement(f,{option:{currentIndex:n.state.currentIndex,index:t,href:e.href,text:e.text},key:t});break;case 2:r=React.createElement(p,{option:{href:e.href,text:e.text},key:t});break;case 3:case 4:r=React.createElement(m,{option:{href:e.href,name:e.name,value:e.value},key:t})}return r},n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;(3===this.props.type||4===this.props.type)&&$.ajax({type:"post",url:"/api/getinvest",success:function(t){if(200===t.code)e.setState({menu:{className:e.state.menu.className,option:3===e.props.type?[{href:"/asset",name:"我的资产",value:(t.money+t.investment||0).toFixed(2)},{href:"",name:"预期收益",value:(t.investment||0).toFixed(2)},{href:"/profit?status=1",name:"历史收益",value:(t.allInvestment||0).toFixed(2)}]:[{href:"/asset",name:"我的资产",value:(t.money+t.investment||0).toFixed(2)},{href:"",name:"预期收益",value:(t.investment||0).toFixed(2)}]}});else{var n=e.props.store;n.warning&&n.warning.component.setState({message:t.message}),405!==t.code&&!function(){var e=setTimeout(function(){clearTimeout(e),window.location.href="/signin"},1e3)}()}}})}},{key:"render",value:function(){var e=this,t=[],n=this.state.menu;return n.option.map(function(n,r){t.push(e.getListType(n,r))}),React.createElement("menu",{className:n.className},t)}}]),t}(u.Component);h.defaultProps={menu1:{className:"footer",option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}]},menu2:{className:"menu_3col_anchor",option:[{href:"/bonus",text:"推荐送红包"},{href:"/activity",text:"活动中心"},{href:"/score?sign=1",text:"马上签到"}]},menu3:{className:"menu_3col_infoAnchor",option:[{href:"/asset",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"},{href:"/profit?status=1",name:"历史收益",value:"0.00"}]},menu4:{className:"menu_2col_infoAnchor",option:[{href:"/asset",name:"我的资产",value:"0.00"},{href:"",name:"预期收益",value:"0.00"}]}},t["default"]=h},29:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var u=n(1),s=n(2),l=r(s),f=n(5),p=n(3),m=n(7),h=r(m),d=n(4),v=r(d),y=f.createStore(function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];if(e[t.type])for(var n in t)e[t.type][n]=t[n];else e[t.type]=t;return e}),g=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props.data,t="";return e.discount&&(t=React.createElement("p",null,React.createElement("i",null),React.createElement("span",null,e.discount))),React.createElement("div",{className:"part1"},React.createElement("h1",null,React.createElement("strong",null,(100*e.primeRate).toFixed(1)),React.createElement("em",null,"％"),React.createElement("span",null,"预计年化收益"),React.createElement("b",null,"起息日:T+1")),React.createElement("ul",null,React.createElement("li",null,React.createElement("p",null,e.days+"天"),React.createElement("p",null,"项目期限")),React.createElement("li",null,React.createElement("p",null,e.unitPrice*e.minUnitCount+"元"),React.createElement("p",null,"起投金额")),React.createElement("li",null,React.createElement("p",null,e.lumpSum+"元"),React.createElement("p",null,"项目总额"))),t)}}]),t}(u.Component),b=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.checkMarkup=function(e){return{__html:e}},e}return i(t,e),c(t,[{key:"render",value:function(){var e=[],t=this.props.data;for(var n in t)t[n]&&e.push(React.createElement("div",{className:"detail"},React.createElement("h1",null,n),React.createElement("pre",null,React.createElement("p",{dangerouslySetInnerHTML:this.checkMarkup(t[n])}))));return React.createElement("div",{className:"page"},e)}}]),t}(u.Component),w=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=[],t=[],n=this.props.data;return this.props.setting.map(function(e,n){t.push(React.createElement("li",{key:n},e))}),n.map(function(t,n){e.push(React.createElement("ul",{key:n},React.createElement("li",null,t.name),React.createElement("li",null,t.money),React.createElement("li",null,t.buyTime)))}),React.createElement("div",{className:"page"},React.createElement("ul",null,t),e)}}]),t}(u.Component);w.defaultProps={setting:["购买人","购买金额","购买时间"]};var O=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.props.id,t=this.props.index,n=this.props.data,r=document.body;t&&(l["default"].findDOMNode(this).onclick=function(){Object.keys(n).length?l["default"].render(React.createElement(b,{data:n}),r):$.ajax({url:"/api/getbidder/"+e,success:function(e){l["default"].render(React.createElement(w,{data:e.data}),r)}})})}},{key:"render",value:function(){var e=this.props;return React.createElement("p",null,React.createElement("span",null,e.name),React.createElement("em",null,e.value))}}]),t}(u.Component),E=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.adaptor=function(e,t){for(var n={},r=0,a=e.length;a>r;r++)n[e[r].name]=t[e[r].value];return n},e}return i(t,e),c(t,[{key:"render",value:function(){var e=this,t=[],n=this.props.setting,r=this.props.data;return n.map(function(n,a){t.push(React.createElement(O,{id:r.id,index:a,name:n.name,value:n.value,data:e.adaptor(n.detail,r),key:a}))}),React.createElement("div",{className:"part2"},t)}}]),t}(u.Component);E.defaultProps={setting:[{name:"还款方式",value:"自动还款",detail:[]},{name:"产品描述",value:"利率高",detail:[{name:"资金用途",value:"fundUse"},{name:"抵押物说明",value:"collateral"},{name:"还款来源",value:"source"}]},{name:"资金保障",value:"风险低",detail:[{name:"担保方式",value:"guarantee"},{name:"担保方介绍",value:"guaranteeIntroduce"},{name:"资金安全",value:"fundSafe"}]},{name:"申购情况",value:"已申购订单",detail:[]}]};var x=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={money:0,interest:0},e.matchNum=function(t,n,r){var a=e.props.data,o=t.value=Math.floor(t.value),i=n>o||o>r;return i?e.showWarning(n,r):e.showWarning(),t.value=o=o>=n?o>r?r:o:n,e.setState({money:o,interest:o*a.primeRate/365*a.days}),i},e.showWarning=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];y.getState().warning.component.setState({message:t.length?"该产品可投金额区间为"+t[0]+"元至"+t[1]+"元!":""})},e}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.data,n=t.minUnitCount*t.unitPrice,r=t.balance,a=this.refs,o=a.minus,i=a.plus,c=a.num,u=a.buy;c.onkeyup=function(){e.matchNum(c,n,r)},o.onclick=function(){c.value=parseInt(c.value)-500,e.matchNum(c,n,r)},i.onclick=function(){c.value=parseInt(c.value)+500,e.matchNum(c,n,r)},u.onclick=function(t){e.matchNum(c,n,r)&&t.preventDefault()}}},{key:"render",value:function(){var e=this.props.data;return React.createElement("div",{className:"part3"},React.createElement("div",null,React.createElement("p",null,e.balance+"元"),React.createElement("p",null,"可投金额")),React.createElement("div",null,React.createElement("p",null,this.state.interest.toFixed(2)+"元"),React.createElement("p",null,"预期收益")),React.createElement("form",null,React.createElement("span",{ref:"minus"},"－"),React.createElement("input",{name:"invest",ref:"num",className:"num",type:"text",defaultValue:"0"}),React.createElement("span",{ref:"plus"},"＋"),React.createElement("p",{className:"term"},"募集时间:"+e.beginTime.split(" ")[0]+"至"+e.stopBuyTime.split(" ")[0]),React.createElement("a",{ref:"buy",className:"longBtn btnBuy",href:"/payment#/form?money="+this.state.money},"立即购买")))}}]),t}(u.Component),R=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data},n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){y.dispatch({type:"warning",component:this.refs.warning})}},{key:"render",value:function(){var e=this.state.data.product,t=this.state.data.details;return e.discount=t.discount,React.createElement("div",{className:"page"},React.createElement("div",{className:"warning"},React.createElement(v["default"],{ref:"warning"})),React.createElement(g,{data:e}),React.createElement(E,{data:t}),React.createElement(x,{data:e}))}}]),t}(u.Component),k=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={index:n.props.index,data:n.props.data},n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;l["default"].findDOMNode(this).onclick=function(){var t=e.state.data;document.title=t.name,p.QueryString("index")||window.history.pushState({},t.name,"?index="+e.state.index),$.ajax({url:"/api/getproduct/"+t.id,success:function(e){l["default"].render(React.createElement(R,{data:e.data}),document.body)}})}}},{key:"render",value:function(){var e=this.state.data;return React.createElement("section",null,React.createElement("h1",null,React.createElement("strong",null,e.name),React.createElement("em",null,"项目规模:"+e.lumpSum+"元")),React.createElement("div",{className:"main"},React.createElement("div",{className:"column1"},React.createElement("p",null,"年化率"),React.createElement("p",null,React.createElement("strong",null,(100*e.primeRate).toFixed(1)),React.createElement("em",null,"％"))),React.createElement("div",{className:"column2"},React.createElement("p",null,"期限"),React.createElement("p",null,React.createElement("strong",null,e.days),React.createElement("em",null,"天"))),React.createElement("a",null,"立即购买")))}}]),t}(u.Component),j=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data.data},n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){p.QueryString("index")&&l["default"].findDOMNode(this.refs["product"+p.QueryString("index")]).click()}},{key:"render",value:function(){var e=[],t=this.state.data;return t.map(function(t,n){e.push(React.createElement(k,{index:n+1,data:t,ref:"product"+(n+1),key:n}))}),React.createElement("div",{className:"page"},e,React.createElement(h["default"],{type:1,currentIndex:1}))}}]),t}(u.Component),S=function P(){p.PageData.setData("/api/getproduct",function(e){l["default"].render(React.createElement(j,{data:e}),document.body)}).render(P)};t.init=S}});