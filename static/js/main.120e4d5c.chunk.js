(this.webpackJsonptafront=this.webpackJsonptafront||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),l=n(5),r=n.n(l),a=(n(15),n(2)),c=n(8),d=(n(16),n(1)),o=function(e){var t=e.children,n=e.style;return Object(d.jsx)("div",{style:Object(a.a)(Object(a.a)({},n),{},{display:"flex"}),children:t})},j=function(e){var t=e.children,n=e.style;return Object(d.jsx)("span",{style:Object(a.a)(Object(a.a)({},n),{},{marginTop:"auto",marginBottom:"auto",textAlign:"center"}),children:t})},h=function(e){var t=e.style;return Object(d.jsx)(o,{children:Object(d.jsx)(j,{style:Object(a.a)(Object(a.a)({},t),{},{fontWeight:"bolder",fontSize:"xx-large"}),children:"Build your portfolio"})})},u=n(33);function b(e){return"".concat(e,"\xb0C")}function x(e){var t=e.defaultValue,n=e.updateElement,i=e.index;return Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{defaultValue:t,getAriaValueText:b,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:100,valueLabelDisplay:"auto",onChange:function(e){n(parseInt(e.target.textContent),i)}})})}var g=function(e){var t=e.value;return Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("div",{style:{width:"".concat(t,"%"),backgroundColor:"green",color:"white"},children:t}),Object(d.jsx)("div",{style:{width:"".concat(100-t,"%"),backgroundColor:"blue",color:"white"},children:100-t})]})},O=function(e){var t=e.investment,n=e.style,i=e.removeInvestment,s=e.index,l=e.updateElement;return Object(d.jsxs)(o,{style:n,children:[Object(d.jsx)(j,{style:{width:"20%"},children:Object(d.jsx)("button",{style:{backgroundColor:"white",border:"none",fontWeight:"bolder",fontSize:"xx-large"},onClick:function(){i(s)},children:"x"})}),Object(d.jsx)(j,{style:{width:"20%"},children:Object(d.jsx)("strong",{children:t.name})}),Object(d.jsx)(j,{style:{width:"20%"},children:Object(d.jsx)(g,{value:t.weight})}),Object(d.jsx)(j,{style:{width:"20%"},children:Object(d.jsx)("strong",{children:t.assetClass})}),Object(d.jsx)(j,{style:{width:"20%"},children:Object(d.jsx)(x,{defaultValue:t.weight,updateElement:l,index:s})}),Object(d.jsx)(j,{style:{width:"20%"},children:Object(d.jsx)("input",{value:t.weight,style:{textAlign:"center"}})})]})},v=function(e){var t=e.style;return Object(d.jsxs)(o,{style:t,children:[Object(d.jsx)(j,{style:{width:"20%"}}),Object(d.jsx)(j,{style:{width:"20%",fontWeight:"bolder",fontSize:"x-large"},children:"Investment"}),Object(d.jsx)(j,{style:{width:"20%"}}),Object(d.jsx)(j,{style:{width:"20%",fontWeight:"bolder",fontSize:"x-large"},children:"Asset Class"}),Object(d.jsx)(j,{style:{width:"20%"}}),Object(d.jsx)(j,{style:{width:"20%"}})]})},f=function(e){var t=e.investments,n=e.addInvestment,i=e.removeInvestment,s=e.updateElement;return Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{style:{height:"10vh"}}),t.map((function(e,t){return Object(d.jsx)(O,{investment:e,style:{height:"10vh"},removeInvestment:i,index:t,updateElement:s})})),Object(d.jsx)(o,{children:Object(d.jsx)("button",{style:{marginRight:0,marginLeft:"auto",border:"none",fontSize:"xx-large",fontWeight:"bolder",backgroundColor:"orange",color:"white",borderRadius:"20px",width:"20%"},onClick:function(){n()},children:"add"})})]})},y=function(e){var t=e.value,n=e.style;return Object(d.jsx)("div",{style:Object(a.a)(Object(a.a)({},n),{},{paddingLeft:"5%"}),children:Object(d.jsx)(g,{value:t})})};var m=function(){var e=Object(i.useState)([{name:"Fidelity International Index",assetClass:"International Funds",weight:10},{name:"Fidelity Small Cap Index",assetClass:"Small Cap Funds",weight:25},{name:"Fidelity Mid Cap Index",assetClass:"Mid Cap Funds",weight:50},{name:"Fidelity 500 Index",assetClass:"Large Cap Funds",weight:75},{name:"Fidelity US Bond Index",assetClass:"Bond Funds",weight:90}]),t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)("div",{style:{width:"1300px",marginLeft:"auto",marginRight:"auto"},children:[Object(d.jsx)(h,{style:{height:"10vh"}}),Object(d.jsx)(y,{style:{height:"10vh"},value:Math.round(n.reduce((function(e,t){return Object(a.a)(Object(a.a)({},e),{},{weight:e.weight+t.weight})})).weight/n.length)}),Object(d.jsx)(f,{investments:n,addInvestment:function(){var e=JSON.parse(JSON.stringify(n));e.push(e[e.length-1]),s(e)},removeInvestment:function(e){var t=JSON.parse(JSON.stringify(n));t.splice(e,1),s(t)},updateElement:function(e,t){var i=JSON.parse(JSON.stringify(n));i[t].weight=e,s(i)}})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),l(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),p()}},[[22,1,2]]]);
//# sourceMappingURL=main.120e4d5c.chunk.js.map