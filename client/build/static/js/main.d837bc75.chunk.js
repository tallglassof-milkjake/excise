(this.webpackJsonpcms=this.webpackJsonpcms||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){},104:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(20),r=t.n(n),s=t(14),m=t(6),i=t(114),o=t(9);t(64);var d=()=>{const e=Object(o.b)().user,a=e.name,t=e.picture;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"user-heading"},"Welcome"),c.a.createElement("p",{className:"user-name"},a),c.a.createElement("img",{src:t,alt:"Profile",className:"img-fluid sidebar-img"}))};t(65);var u=()=>c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row foot-row"},c.a.createElement("div",{className:"col foot-col"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fab fa-etsy fa-lg excise-icon"}),"Excise-Able"),c.a.createElement("ul",{className:"foot-list text-left mx-auto"},c.a.createElement("li",{className:"foot-list-item"},c.a.createElement("i",{className:"far fa-copyright"})," Jake Mackinlay")))));t(66);var E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:" side-bar-items"},c.a.createElement("div",{className:"user-info"},c.a.createElement(d,null)),c.a.createElement("div",{className:"menu-list"},c.a.createElement(i.a.Item,null,c.a.createElement(i.a.Link,{className:"sidebar-menu-item",href:"/welcome"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-house-user menu-icon"})),"Home")),c.a.createElement(i.a.Item,null,c.a.createElement(i.a.Link,{className:"sidebar-menu-item",eventKey:"link-1",href:"/dashboard"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-tachometer-alt menu-icon"})),"Dashboard")),c.a.createElement(i.a.Item,null,c.a.createElement(i.a.Link,{className:"sidebar-menu-item",eventKey:"link-2",href:"/excise"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-database menu-icon"})),"Excise")),c.a.createElement(i.a.Item,null,c.a.createElement(i.a.Link,{className:"sidebar-menu-item",eventKey:"link-3",href:"/calculator"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-calculator menu-icon"})),"Calculator")),c.a.createElement(i.a.Item,null,c.a.createElement(i.a.Link,{className:"sidebar-menu-item",eventKey:"link-4",href:"/calendar"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-calendar-alt menu-icon"})),"Calendar")))),c.a.createElement("div",{className:"footer"},c.a.createElement(u,null)))},v=t(21),h=t.n(v),p=t(27),b=t(7),N=t(24),f=t.n(N),g=function(){return f.a.get("/api/excise")},x=function(e){return f.a.get("/api/excise/"+e)},y=function(e){return console.log(e),f.a.post("/api/excise",e)},w=(t(47),t(19)),O=t(13);const k=Object(l.createContext)(),j=k.Provider;function L(e,a){switch(a.type){case"UPDATE_EXCISE":return Object(O.a)(Object(O.a)({},e),{},{excises:[...a.excises],loading:!1});case"REMOVE_EXCISE":return Object(O.a)(Object(O.a)({},e),{},{excises:e.excises.filter(e=>e.id!==a._id)});case"SET_RECENT_EXCISE":return Object(O.a)(Object(O.a)({},e),{},{recentExcise:a.excise,loading:!1});case"ADD_EXCISE":return Object(O.a)(Object(O.a)({},e),{},{excises:[a.excise,...e.excises],loading:!1});case"LOADING":return Object(O.a)(Object(O.a)({},e),{},{loading:!0});default:return e}}const C=e=>{e.value;let a=Object(w.a)(e,["value"]);const t=Object(l.useReducer)(L,{excises:[],currentExcise:{_id:0,product:"",vessel_id:"",volume:""},loading:!1}),n=Object(b.a)(t,2),r=n[0],s=n[1];return c.a.createElement(j,Object.assign({value:[r,s]},a))};var D=({currentExcise:e})=>c.a.createElement("tbody",null,e.map(e=>c.a.createElement("tr",{key:e._id},c.a.createElement("td",{"data-th":"Product",className:"body"},e.product),c.a.createElement("td",{"data-th":"Volume",className:"body"},e.volume," L"),c.a.createElement("td",{"data-th":"Abv %",className:"body"},e.abv," %"))));t(86);var I=({itemPerPage:e,totalExcise:a,paginate:t})=>{const l=[];for(let c=1;c<=Math.ceil(a/e);c++)l.push(c);return c.a.createElement("nav",{className:"pagination"},c.a.createElement("ul",{className:"nav mx-auto"},l.map(e=>c.a.createElement("li",{key:e,className:"page-item text-center"},c.a.createElement("a",{onClick:a=>{a.preventDefault(),t(e)},href:"!#",className:"page-link"},e)))))};var S=({headings:e,excise:a})=>{const t=Object(l.useState)(1),n=Object(b.a)(t,2),r=n[0],s=n[1],m=Object(l.useState)(3),i=Object(b.a)(m,1)[0],o=r*i,d=o-i,u=a.slice(d,o);return console.log(a),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card current-products"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row card-head"},c.a.createElement("div",{className:"col"},c.a.createElement("h3",{className:"card-title recent-entries-text text-left"},c.a.createElement("i",{className:"fas fa-book-open fa-2x"}),"Recent Entries"),c.a.createElement("p",{className:"text-left current-text"},"Quick access latest additions to the database"))),c.a.createElement("table",{className:"product-table table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,e.map(({name:e,width:a})=>c.a.createElement("th",{className:"col headings",key:e,style:{width:a}},e)))),c.a.createElement(D,{excise:a,currentExcise:u})),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col justify-content-center"},c.a.createElement(I,{className:"product-pagination",itemPerPage:i,totalExcise:a.length,paginate:e=>s(e)}))))))};var A=()=>{const e=Object(o.b)().user.name;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 welcome-message"},"Welcome,"),c.a.createElement("h2",{className:"user"},e))};t(87);var P=()=>c.a.createElement("div",{className:"card calc-card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row card-head"},c.a.createElement("div",{className:"col"},c.a.createElement("h3",{className:"card-title calculator-head text-left"},c.a.createElement("i",{className:"fas fa-calculator fa-2x"}),"Calculators"))),c.a.createElement("p",{className:"card-text text-left calc-text"},"I'm baby glossier brooklyn squid, celiac fam unicorn butcher readymade cardigan ad letterpress health goth qui. +1 3 wolf moon vice, plaid pitchfork franzen succulents hexagon exercitation YOLO pickled id drinking vinegar biodiesel. Fanny pack elit sint man bun esse eiusmod vape selvage. Hot chicken aesthetic typewriter crucifix brooklyn."),c.a.createElement("button",{className:"btn btn-block calc-btn"},"Calculate")));t(88);var R=()=>{const e=Object(l.useState)([]),a=Object(b.a)(e,2),t=a[0],n=a[1];Object(l.useEffect)(()=>{(function(){var e=Object(p.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,n(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[]);return c.a.createElement("div",{className:"welcome-main"},c.a.createElement(A,null),c.a.createElement("div",{className:"row welcome-table-row"},c.a.createElement("div",{className:"col welcome-table-col d-flex align-items-stretch"},c.a.createElement("div",{className:"card-group welcome-cards"},c.a.createElement(S,{headings:[{name:"Product",width:"10%"},{name:"Volume",width:"10%"},{name:"Abv %",width:"10%"}],excise:t}),c.a.createElement(P,null)))))};t(89);var V=()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-2 side-bar-col"},c.a.createElement(E,null)),c.a.createElement("div",{className:"col-10 main-col"},c.a.createElement("div",{className:"content-section"},c.a.createElement(R,null)))),F=t(112),_=t(113),G=t(111);t(90);var T=()=>{const e=Object(o.b)().loginWithRedirect;return c.a.createElement(G.a,{className:"btn btn-block btn-success btn-lg",onClick:()=>e()},"Login")};t(91);var X=()=>{const e=Object(o.b)().logout;return c.a.createElement(G.a,{className:"btn logout btn-block",onClick:()=>e({returnTo:window.location.origin})},"Log Out")};var M=()=>Object(o.b)().isAuthenticated?c.a.createElement(X,null):c.a.createElement(T,null);var q=()=>c.a.createElement("div",{className:"navbar-nav ml-auto"},c.a.createElement(M,null));t(92);var J=function(){return c.a.createElement(F.a,{expand:"lg",className:"nav-top",style:{paddingRight:25,paddingLeft:25}},c.a.createElement(F.a.Brand,{style:{color:"white"},className:"navhead",href:"#home"},c.a.createElement("span",{className:"excise"},c.a.createElement("i",{className:"fab fa-etsy fa-lg"})),"Excise-Able"),c.a.createElement(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(F.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(i.a,{className:"mr-auto"}),c.a.createElement(_.a,{inline:!0},c.a.createElement(q,null))))};t(95),t(96);var U=()=>c.a.createElement("div",{className:"container-fluid load-container"},c.a.createElement("div",{className:"row load-row align-items-center"},c.a.createElement("div",{className:"col text-center"},c.a.createElement("i",{className:"fas fa-spinner fa-5x"}))));var W=e=>{let a=e.component,t=Object(w.a)(e,["component"]);return c.a.createElement(m.a,Object.assign({component:Object(o.c)(a,{onRedirecting:()=>c.a.createElement(U,null)})},t))};t(99);var B=()=>c.a.createElement("div",{className:"row hello-row"},c.a.createElement("div",{className:"col-4"}),c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"card mx-auto"},c.a.createElement("div",{className:"card-content"},c.a.createElement("h1",{className:"login-heading"},"Excise-able"),c.a.createElement("p",null,"Log in to get started"),c.a.createElement(T,null)))),c.a.createElement("div",{className:"col-4"}));var K=function({excise:e,currentExcise:a}){let t=Object(m.h)(),l=t.path,n=(t.url,Object(m.g)().id);return console.log(l),console.log(n),c.a.createElement(c.a.Fragment,null,c.a.createElement("tbody",null,a.map(e=>c.a.createElement("tr",{key:e._id,className:"data-row"},c.a.createElement("td",{"data-th":"Date"},c.a.createElement(s.b,{to:"/dashboard/".concat(e._id),className:"data-link",id:e._id},e.date)),c.a.createElement("td",{"data-th":"Product"},e.product),c.a.createElement("td",{"data-th":"Volume"},e.volume," L"),c.a.createElement("td",{"data-th":"Abv %"},e.abv," %")))))};t(100);var z=({headings:e,handleSort:a,excise:t})=>{const n=Object(l.useState)(1),r=Object(b.a)(n,2),s=r[0],m=r[1],i=Object(l.useState)(6),o=Object(b.a)(i,1)[0],d=s*o,u=d-o,E=t.slice(u,d);return console.log(E),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card dash-card"},c.a.createElement("table",{className:"table table-striped dashboard-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,e.map(({name:e,width:a})=>c.a.createElement("th",{className:"col headings",key:e,style:{width:a}},e)))),c.a.createElement(K,{currentExcise:E,excise:t})),c.a.createElement(I,{itemPerPage:o,totalExcise:t.length,paginate:e=>m(e)})))};t(101);var H=()=>{const e=Object(l.useState)([]),a=Object(b.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)({}),s=Object(b.a)(r,2),m=(s[0],s[1],Object(l.useState)("descend")),i=Object(b.a)(m,2);i[0],i[1];return Object(l.useEffect)(()=>{(function(){var e=Object(p.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,n(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[]),c.a.createElement("div",{className:"row head-row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"row dash-main"},c.a.createElement("div",{className:"col dash-message"},c.a.createElement("h1",{className:"display-4 dash-title"},"Dashboard"),c.a.createElement("i",{className:"fas fa-tachometer-alt fa-4x"}),c.a.createElement("p",null,"View and Edit product details")),c.a.createElement("div",{className:"row dash-table-row"},c.a.createElement("div",{className:"col dash-table-col justify-content-center"},c.a.createElement(z,{headings:[{name:"Date",width:"10%"},{name:"Product",width:"10%"},{name:"Volume",width:"10%"},{name:"Abv %",width:"10%"}],excise:t}))))))};var Q=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-2 side-bar-col"},c.a.createElement(E,null)),c.a.createElement("div",{className:"col-10 main-col"},c.a.createElement("div",{className:"content-section"},c.a.createElement(H,null))))};t(102);var Y=function(){const e=Object(l.useRef)(),a=Object(l.useRef)(),t=Object(l.useRef)(),n=Object(l.useRef)(),r=Object(l.useRef)(),s=Object(l.useRef)(),m=Object(l.useRef)(),i=Object(l.useRef)(),o=Object(l.useRef)(),d=Object(l.useContext)(k),u=Object(b.a)(d,2),E=u[0],v=u[1];return c.a.createElement("div",{className:"excise-main container"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("h1",{className:"display-4 excise-head"},"Add to Database"),c.a.createElement("i",{className:"fas fa-database fa-4x data-icon"}),c.a.createElement("p",{className:"lead"},"Fill out finished product details here to save to database"),c.a.createElement("hr",null)),c.a.createElement("div",{className:"col-md-4 text-center"})),c.a.createElement(_.a,{className:"excise-form",onSubmit:l=>{l.preventDefault(),v({type:"LOADING"}),console.log(a.current.value),y({date:e.current.value,product:a.current.value,description:t.current.value,veesel_id:n.current.value,volume:r.current.value,abv:s.current.value,lals:m.current.value,employee:i.current.value,notes:o.current.value}).then(e=>{v({type:"ADD_EXCISE",excise:e.data})}).catch(e=>console.log(e)),e.current.value="",a.current.value="",t.current.value="",n.current.value="",r.current.value="",s.current.value="",m.current.value="",i.current.value="",o.current.value=""}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"Date:"),c.a.createElement(_.a.Control,{type:"date",ref:e,className:"date-input"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"Product:"),c.a.createElement(_.a.Control,{type:"text",ref:a,placeholder:"Product",className:"product-input"}))),c.a.createElement("div",{className:"col-4"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"Description:"),c.a.createElement(_.a.Control,{type:"text",ref:t,placeholder:"Description",className:"description-input"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"Vessel Id:"),c.a.createElement(_.a.Control,{type:"text",ref:n,placeholder:"Vessel Id",className:"vessel-input"}))),c.a.createElement("div",{className:"col-2"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"Volume:"),c.a.createElement(_.a.Control,{type:"number",ref:r,placeholder:"Volume",className:"volume-input",step:".01"}))),c.a.createElement("div",{className:"col-2"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"ABV:"),c.a.createElement(_.a.Control,{type:"number",ref:s,placeholder:"ABV",className:"abv-input",step:".01"}))),c.a.createElement("div",{className:"col-2"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"LALs:"),c.a.createElement(_.a.Control,{type:"number",ref:m,placeholder:"LALs",className:"lals-input",step:".01"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"Employee:"),c.a.createElement(_.a.Control,{type:"text",ref:i,placeholder:"Employee",className:"employee-input"}))),c.a.createElement("div",{className:"col-4"},c.a.createElement(_.a.Group,null,c.a.createElement(_.a.Label,null,"Notes:"),c.a.createElement(_.a.Control,{as:"textarea",rows:3,type:"text",ref:o,placeholder:"Notes",className:"notes-input"})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement(G.a,{disabled:E.loading,type:"submit"},"Submit")))))};var Z=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col side-bar-col"},c.a.createElement(E,null)),c.a.createElement("div",{className:"col-10 main-col"},c.a.createElement("div",{className:"content-section"},c.a.createElement(Y,null))))};class $ extends l.Component{constructor(e){super(e),this.fetchData=()=>{x(this.props.id.id).then(e=>{console.log(e.data),this.setState({data:e.data})}),console.log("hello out there"),console.log(this.state.data)},this.state={id:this.props.id,data:{},headings:this.props.headings}}componentDidMount(){this.fetchData(),console.log(this.state.data)}render(){return console.log(this.state.data),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("h1",null,"Product: ",this.state.data.product),c.a.createElement("p",null,"Date: ",this.state.data.date),c.a.createElement("p",null,"Description ",this.state.data.description)),c.a.createElement("div",{className:"card"},c.a.createElement("h1",null,"Excise Numbers"),c.a.createElement("p",null,"Vessel: ",this.state.data.vessel_id),c.a.createElement("p",null,"Volume: ",this.state.data.volume),c.a.createElement("p",null,"Abv: ",this.state.data.abv),c.a.createElement("p",null,"LaLs: ",this.state.data.lals)),c.a.createElement("div",{className:"card"},c.a.createElement("h1",null,"Other Information"),c.a.createElement("p",null,this.state.data.employee),c.a.createElement("p",null,this.state.data.notes)))}}var ee=$;var ae=({headings:e,props:a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(ee,{headings:e,id:a}));var te=({props:e})=>c.a.createElement("div",null,c.a.createElement(ae,{headings:[{name:"Date",width:"10%"},{name:"Product",width:"10%"},{name:"Description",width:"10%"},{name:"Vessel ID",width:"10%"},{name:"Volume",width:"10%"},{name:"Abv %",width:"10%"},{name:"LALs",width:"10%"},{name:"Employee",width:"10%"},{name:"Notes",width:"10%"}],props:e}));var le=e=>{e.id;let a=Object(w.a)(e,["id"]);console.log(a.match.params.id);const t=Object(m.g)();return console.log(t),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-2 side-bar-col"},c.a.createElement(E,null)),c.a.createElement("div",{className:"col-10 main-col"},c.a.createElement("div",{className:"content-section"},c.a.createElement(te,{props:t}))))},ce=t(52);var ne=({times:e})=>{console.log(e);return(()=>{for(let a=0;a<e.length;a++)return console.log(e),c.a.createElement("td",{className:"col"},e[a])})(),c.a.createElement("tbody",null,c.a.createElement("tr",null,e.forEach(a=>c.a.createElement("td",{key:e.key},e.time))))};var re=({headings:e,times:a})=>c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,e.map(({name:e,width:a})=>c.a.createElement("th",{className:"col",key:e,style:{width:a}},e)))),c.a.createElement(ne,{times:a})),c.a.createElement("a",{href:"#",className:"btn calendar-btn"},"Go somewhere"));var se=({headings:e,times:a})=>c.a.createElement("div",{className:"card mx-auto mt-5",style:{width:"50rem"}},c.a.createElement("div",{className:"card-body calendar-card"},c.a.createElement("h5",{className:"card-title"},"Day/date placeholder"),c.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),c.a.createElement(re,{headings:e,times:a})));t(103),t(104);var me=()=>{const e=Object(l.useState)(new Date),a=Object(b.a)(e,2),t=a[0],n=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-2 side-bar-col"},c.a.createElement(E,null)),c.a.createElement("div",{className:"main-col"},c.a.createElement("div",{className:"calendar-row row "},c.a.createElement("div",{className:"calendar-col col mx-auto"},c.a.createElement(ce.a,{onChange:n,value:t}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(se,{headings:[{name:"Time",width:"10%"},{name:"Schedule",width:"90%"}],times:[{time:"06:00",key:1},{time:"07:00",key:2},{time:"08:00",key:3},{time:"09:00",key:4},{time:"10:00",key:5},{time:"11:00",key:6},{time:"12:00",key:7},{time:"13:00",key:8},{time:"14:00",key:9},{time:"15:00",key:10},{time:"16:00",key:12},{time:"17:00",key:13},{time:"18:00",key:14},{time:"19:00",key:15},{time:"20:00",key:16}]})))))};var ie=function(){return c.a.createElement(s.a,null,c.a.createElement(C,null,c.a.createElement("div",{className:"nav-color"},c.a.createElement(J,null)),c.a.createElement("div",{className:"container-fluid h-100 d-flex"},c.a.createElement("div",{className:"main-screen d-flex"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:B}),c.a.createElement(W,{path:"/welcome",exact:!0,component:V}),c.a.createElement(W,{path:"/dashboard",exact:!0,component:Q}),c.a.createElement(W,{path:"/excise",exact:!0,component:Z}),c.a.createElement(W,{path:"/loading",exact:!0,component:U}),c.a.createElement(W,{path:"/dashboard/:id",exact:!0,component:le}),c.a.createElement(W,{path:"/calendar",exact:!0,component:me}))))))};var oe=({children:e})=>{const a=Object(m.f)();return c.a.createElement(o.a,{domain:"dev-kevcdse4.au.auth0.com",clientId:"ovidMTyWJUykor6l8hy9zaXTr1dqPIpy",redirectUri:"https://excise-able.herokuapp.com/welcome",onRedirectCallback:e=>{a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)}},e)};t(107),t(108);r.a.render(c.a.createElement(s.a,null,c.a.createElement(oe,{domain:"dev-kevcdse4.au.auth0.com",clientId:"ovidMTyWJUykor6l8hy9zaXTr1dqPIpy",redirectUri:"https://excise-able.herokuapp.com/welcome"},c.a.createElement(ie,null))),document.getElementById("root"))},47:function(e,a,t){},53:function(e,a,t){e.exports=t(109)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},99:function(e,a,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.d837bc75.chunk.js.map