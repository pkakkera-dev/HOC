(this.webpackJsonphoc=this.webpackJsonphoc||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),r=a.n(c),i=(a(28),a(7)),l=a(5),s=(a(8),function(e){return o.a.createElement("div",{className:"home"},o.a.createElement("h3",null," Higher Order Component "),o.a.createElement("article",null,"Higher-Order Components (HOC) As briefly mentioned before a HOC is a pattern to reuse (class) component logic across your React application. That way you don't have to duplicate logic that's in example based on state updates, like data fetching or routing. The React docs describe a HOC as a \"function that takes a component and returns a new component\", roughly meaning the component that is used as input for the HOC will be enhanced and returned as a different component. HOCs are very commonly used in React by packages like react-router or react-redux."),o.a.createElement("article",null,"Examples of HOCs in these packages are the withRouter and connect HOCs. The first one lets you access routing props in any component that you pass to it, while the latter makes it possible to connect to the Redux state from the input component. Creating a HOC isn't that hard and is very well explained in the documentation on the official React website, which I'll demonstrate by creating a new HOC that's called withDataFetching. This will add basic data fetching features using state and lifecycles to any component that you pass to this HOC. Using the Github API a component will be created that renders a list of my public repositories."))}),u=a(16),m=a(17),h=a(21),d=a(18),p=a(22),f=function(e){return function(t){return function(a){function c(){var e,t;Object(u.a)(this,c);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(d.a)(c)).call.apply(e,[this].concat(n)))).state={data:{},loading:!0},t}return Object(p.a)(c,a),Object(m.a)(c,[{key:"componentDidMount",value:function(){this.fetchData(e.dataType)}},{key:"fetchData",value:function(e){var t=this;try{fetch("https://jsonplaceholder.typicode.com/"+e).then((function(e){return e.json()})).then((function(e){console.log("data from fetch",e);var a=e.splice(0,10);t.setState({data:a,loading:!1})})).catch((function(e){t.setState((function(e){return{loading:!e.loading}}))}))}catch(a){console.log("fetchRemoteData error : ",a)}}},{key:"render",value:function(){var e=o.a.createElement("div",{className:"loader"});return o.a.createElement(n.Fragment,null,this.state.loading?e:o.a.createElement(t,{data:this.state.data}))}}]),c}(o.a.Component)}},g=f({dataType:"albums"})((function(e){return console.log(e),o.a.createElement("div",{className:"albums"},e&&e.data&&e.data.length>0?e.data.map((function(e){return o.a.createElement("span",{key:e.id},e.title)})):o.a.createElement("div",null," No Data Found "))})),b=f({dataType:"photos"})((function(e){return o.a.createElement("div",{className:"songs"},e&&e.data&&e.data.length>0?e.data.map((function(e){return o.a.createElement("span",{key:e.id}," ",e.title)})):o.a.createElement("div",null," No data Found "))})),y=function(e){return o.a.createElement("div",{className:"about"},o.a.createElement("strong",null,"Coming Soon"))};var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i.a,null,o.a.createElement("div",{className:"nav-link"},o.a.createElement(i.b,{to:"/"}," Home"),o.a.createElement(i.b,{to:"albums"}," Album"),o.a.createElement(i.b,{to:"/songs"}," Songs"),o.a.createElement(i.b,{to:"/about"}," About")),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",exact:!0,component:s}),o.a.createElement(l.a,{path:"/albums",component:g}),o.a.createElement(l.a,{path:"/songs",component:b}),o.a.createElement(l.a,{path:"/about",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.4f842087.chunk.js.map