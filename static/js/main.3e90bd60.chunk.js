(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(1),c=a.n(s),n=a(8),i=a.n(n),r=(a(13),a(2)),l=a(3),o=a(4),u=a(6),h=a(5),j=a(0),v=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:this.props.clas,onClick:function(){return t.props.onClick()}})}}]),a}(c.a.Component),d=v,b=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={data:new Date},s.tick=s.tick.bind(Object(o.a)(s)),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState({data:new Date})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"flex",children:this.state.data.toLocaleString()})}}]),a}(c.a.Component),O=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={val:0,clas:"cart",clas1:"cart"},s.Clic=s.Clic.bind(Object(o.a)(s)),s}return Object(l.a)(a,[{key:"Clic",value:function(){var t=this;"not cart"!==this.state.clas&&"not cart"!==this.state.clas1&&(Math.random()>.5?(this.setState({clas1:"cart"}),this.setState({clas:"cart"}),this.setState({clas:"done cart"}),this.setState({val:this.state.val+1}),setTimeout((function(){return t.setState({clas:"cart"})}),1e3)):this.setState({clas:"not cart"}))}},{key:"Clic1",value:function(){var t=this;"not cart"!==this.state.clas&&"not cart"!==this.state.clas1&&(Math.random()>.5?(this.setState({clas:"cart"}),this.setState({clas1:"cart"}),this.setState({clas1:"done cart"}),this.setState({val:this.state.val+1}),setTimeout((function(){return t.setState({clas1:"cart"})}),1e3)):this.setState({clas1:"not cart"}))}},{key:"Reset",value:function(){this.setState({clas:"cart"}),this.setState({clas1:"cart"}),this.setState({val:0})}},{key:"render",value:function(){var t,e,a=this;return"not cart"!==this.state.clas&&"not cart"!==this.state.clas1&&3!==this.state.val||(t=Object(j.jsx)("div",{className:"lost",children:3!==this.state.val?"\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438!":"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!!"}),e=Object(j.jsx)("button",{className:"return",onClick:function(){return a.Reset()},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})),Object(j.jsxs)("div",{className:"wrap",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{className:"num",children:"\u0421\u044b\u0433\u0440\u0430\u0435\u043c \u0434\u043e 3\u0445"}),Object(j.jsxs)("div",{className:"num",children:["\u0423\u0433\u0430\u0434\u0430\u043d\u043d\u043e: ",this.state.val]})]}),t,Object(j.jsxs)("div",{className:"pole",children:[Object(j.jsx)(d,{clas:this.state.clas,cart:"1",onClick:function(){return a.Clic()}}),Object(j.jsx)(d,{clas:this.state.clas1,cart:"2",onClick:function(){return a.Clic1()}})]}),e]})}}]),a}(c.a.Component);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3e90bd60.chunk.js.map