(this.webpackJsonphoc=this.webpackJsonphoc||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),r=a.n(c),l=(a(28),a(7)),i=a(5),s=(a(8),function(e){return o.a.createElement("div",{className:"home"},"This is Home Page")}),u=a(16),m=a(17),d=a(21),h=a(18),p=a(22),f=function(e){return function(t){return function(a){function c(){var e,t;Object(u.a)(this,c);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(h.a)(c)).call.apply(e,[this].concat(n)))).state={data:{},loading:!1},t}return Object(p.a)(c,a),Object(m.a)(c,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.setState({loading:!0}),this.fetchData(e.dataType)}},{key:"fetchData",value:function(e){var t=this;try{fetch("https://jsonplaceholder.typicode.com/"+e).then((function(e){return e.json()})).then((function(e){console.log("data from fetch",e);var a=e.splice(0,10);t.setState({data:a,loading:!1})})).catch((function(e){t.setState((function(e){return{loading:!e.loading}}))}))}catch(a){console.log("fetchRemoteData error : ",a)}}},{key:"render",value:function(){var e=o.a.createElement("div",{className:"loader"});return o.a.createElement(n.Fragment,null,this.state.loading?e:o.a.createElement(t,{data:this.state.data}))}}]),c}(o.a.Component)}},g=f({dataType:"albums"})((function(e){return console.log(e),o.a.createElement("div",{className:"albums"},e&&e.data&&e.data.length>0?e.data.map((function(e){return o.a.createElement("span",{key:e.id},e.title)})):o.a.createElement("div",null," No Data Found "))})),E=f({dataType:"photos"})((function(e){return o.a.createElement("div",{className:"songs"},e&&e.data&&e.data.length>0?e.data.map((function(e){return o.a.createElement("span",{key:e.id}," ",e.title)})):o.a.createElement("div",null," No data Found "))})),v=function(e){return o.a.createElement("div",{className:"about"},"This is About Page")};var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,null,o.a.createElement("div",{className:"nav-link"},o.a.createElement(l.b,{to:"/"}," Home"),o.a.createElement(l.b,{to:"albums"}," Album"),o.a.createElement(l.b,{to:"/songs"}," Songs"),o.a.createElement(l.b,{to:"/about"}," About")),o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",exact:!0,component:s}),o.a.createElement(i.a,{path:"/albums",component:g}),o.a.createElement(i.a,{path:"/songs",component:E}),o.a.createElement(i.a,{path:"/about",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.c95fdf1e.chunk.js.map