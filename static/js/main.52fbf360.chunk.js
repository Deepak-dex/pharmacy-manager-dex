(this["webpackJsonppharmacy-frontend"]=this["webpackJsonppharmacy-frontend"]||[]).push([[0],{18:function(e,t,a){e.exports={featured:"style_featured__2HGk2",featured_item:"style_featured_item__2V0fo",item_container:"style_item_container__1r1KN",item_content:"style_item_content__3Xji9",item_subcontent:"style_item_subcontent__mhQaM",featured_icon_d:"style_featured_icon_d__wqhOE",featured_icon_u:"style_featured_icon_u__wUtra",featured_sub:"style_featured_sub__2bPgz"}},224:function(e,t,a){},33:function(e,t,a){e.exports={sidebar:"style_sidebar__1fZGr",logo:"style_logo__34Wti",sidebar_menu:"style_sidebar_menu__bNRBv",active:"style_active__u7U3e",icon:"style_icon__13ymY",logout:"style_logout__2QGl4"}},343:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(21),r=a.n(c),i=(a(224),a(27)),o=a(20),l=a.n(o),d=a(29),u=a(5),j=a(72),p=a.n(j),b=a.p+"static/media/sign.7429c3cd.jpg",h=a(43),m=a(155),O=a(2);function _(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),r=Object(u.a)(c,2),o=r[0],j=r[1],_=Object(n.useState)(),x=Object(u.a)(_,2),g=x[0],f=x[1],y=Object(i.f)(),v=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===a||void 0===a?void 0:a.length)>3&&(null===o||void 0===o?void 0:o.length)>9&&(null===g||void 0===g?void 0:g.length)>4)){e.next=9;break}return t={headers:{accepts:"application/json","Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify({name:a,email:o,password:g})},e.next=4,fetch("https://pharmacy-backend-dex.herokuapp.com/api/user/register",t);case 4:n=e.sent,console.log(n),y.push("/signin"),e.next=10;break;case 9:(null===a||void 0===a?void 0:a.length)<4?alert("Name must be of 4 letters"):(null===o||void 0===o?void 0:o.length)<4?alert("Enter correct gmail ID"):(null===g||void 0===g?void 0:g.length)<5&&alert("Password must be of 5 letters");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:p.a.signup,children:[Object(O.jsxs)("div",{className:p.a.container,children:[Object(O.jsx)("div",{className:p.a.img_container,children:Object(O.jsx)("img",{src:b,alt:"",className:p.a.med_img})}),Object(O.jsxs)("div",{className:p.a.sub_container,children:[Object(O.jsx)("div",{className:p.a.title,children:Object(O.jsx)("h1",{children:"Sign up "})}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Name",type:"text",value:a,autoComplete:"current-password",onChange:function(e){return s(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Email",type:"text",value:o,autoComplete:"current-password",onChange:function(e){return j(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Password",type:"password",value:g,autoComplete:"current-password",onChange:function(e){return f(e.target.value)}}),Object(O.jsx)("span",{onClick:v,children:"submit"})]})]}),Object(O.jsxs)("p",{className:p.a.signin_statement,children:["Already have an account? ",Object(O.jsx)(h.b,{to:"/signin",children:"sing in"})]})]})}var x=a(63),g=a.n(x);function f(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),r=Object(u.a)(c,2),o=r[0],j=r[1],p=Object(i.f)();Object(n.useEffect)((function(){null!==localStorage.getItem("token")&&(console.log("already signedin"),p.push("/"))}),[localStorage.getItem("token")]);var _=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{accepts:"application/json","Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify({email:a,password:o})},e.next=3,fetch("https://pharmacy-backend-dex.herokuapp.com/api/user/login",t);case 3:return n=e.sent,console.log(n),e.next=7,n.json();case 7:n=e.sent,console.log(n),localStorage.setItem("token",JSON.stringify(n)),p.push("/");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:g.a.signin,children:[Object(O.jsxs)("div",{className:g.a.container,children:[Object(O.jsx)("div",{className:g.a.img_container,children:Object(O.jsx)("img",{src:b,alt:"",className:g.a.med_img})}),Object(O.jsxs)("div",{className:g.a.sub_container,children:[Object(O.jsx)("div",{className:g.a.title,children:Object(O.jsx)("h1",{children:"Sign in "})}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Email",type:"text",value:a,autoComplete:"current-password",onChange:function(e){return s(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Password",type:"password",value:o,autoComplete:"current-password",onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("span",{onClick:_,children:"submit"}),Object(O.jsxs)("div",{className:g.a.demo,children:[Object(O.jsx)("h4",{children:"For Demo"}),Object(O.jsx)("p",{children:"Email: f123@gmail.com"}),Object(O.jsx)("p",{children:"Password: dex123"})]})]})]}),Object(O.jsxs)("p",{className:g.a.signin_statement,children:["Don't have an account? ",Object(O.jsx)(h.b,{to:"/signup",children:"sing up"})]})]})}var y=a(99),v=a.n(y),N=a(18),k=a.n(N),w=a(389),S=a(390);function C(e){return console.log(e),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:k.a.featured,children:[Object(O.jsxs)("div",{className:k.a.featured_item,children:[Object(O.jsx)("span",{children:"Weekly Sale"}),Object(O.jsxs)("div",{className:k.a.item_container,children:[Object(O.jsxs)("span",{className:k.a.item_content,children:["\u20b9",e.weeksale]}),Object(O.jsxs)("span",{className:k.a.item_subcontent,children:[Math.abs(e.weeksale-e.prevweeksale)," ",e.weeksale-e.prevweeksale<0?Object(O.jsx)(w.a,{className:k.a.featured_icon_d}):Object(O.jsx)(S.a,{className:k.a.featured_icon_u})]})]}),Object(O.jsx)("span",{className:k.a.featured_sub,children:"Compared to last week"})]}),Object(O.jsxs)("div",{className:k.a.featured_item,children:[Object(O.jsx)("span",{children:"Monthly Sale"}),Object(O.jsxs)("div",{className:k.a.item_container,children:[Object(O.jsxs)("span",{className:k.a.item_content,children:["\u20b9",e.monthsale]}),Object(O.jsxs)("span",{className:k.a.item_subcontent,children:[Math.abs(e.monthsale-e.prevmonthsale)," ",e.monthsale-e.prevmonthsale<0?Object(O.jsx)(w.a,{className:k.a.featured_icon_d}):Object(O.jsx)(S.a,{className:k.a.featured_icon_u})]})]}),Object(O.jsx)("span",{className:k.a.featured_sub,children:"Compared to last month"})]}),Object(O.jsxs)("div",{className:k.a.featured_item,children:[Object(O.jsx)("span",{children:"Total Sale"}),Object(O.jsx)("div",{className:k.a.item_container,children:Object(O.jsxs)("span",{className:k.a.item_content,children:["\u20b9",e.totalsale]})}),Object(O.jsx)("span",{className:k.a.featured_sub,children:"The grand total of all sales"})]})]}),Object(O.jsxs)("div",{className:k.a.featured,children:[Object(O.jsxs)("div",{className:k.a.featured_item,children:[Object(O.jsx)("span",{children:"Total Medicines"}),Object(O.jsx)("div",{className:k.a.item_container,children:Object(O.jsx)("span",{className:k.a.item_content,children:e.totalmed})}),Object(O.jsx)("span",{className:k.a.featured_sub,children:"Number of medicines in stock"})]}),Object(O.jsxs)("div",{className:k.a.featured_item,children:[Object(O.jsx)("span",{children:"Expired Medicines"}),Object(O.jsx)("div",{className:k.a.item_container,children:Object(O.jsx)("span",{className:k.a.item_content,children:e.expiredmed})}),Object(O.jsx)("span",{className:k.a.featured_sub,children:"Medicines expired or about to expire"})]}),Object(O.jsxs)("div",{className:k.a.featured_item,children:[Object(O.jsx)("span",{children:"Out of stock"}),Object(O.jsx)("div",{className:k.a.item_container,children:Object(O.jsx)("span",{className:k.a.item_content,children:e.outofstockmed})}),Object(O.jsx)("span",{className:k.a.featured_sub,children:"Medicines about to be out of stock"})]})]})]})}var T=a(98);function D(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),r=Object(u.a)(c,2),i=(r[0],r[1]),o=Object(n.useState)(),j=Object(u.a)(o,2),p=j[0],b=j[1],h=Object(n.useState)(0),m=Object(u.a)(h,2),_=m[0],x=m[1],g=Object(n.useState)(0),f=Object(u.a)(g,2),y=f[0],N=f[1],k=Object(n.useState)([]),w=Object(u.a)(k,2),S=(w[0],w[1]),D=Object(n.useState)(),M=Object(u.a)(D,2),E=M[0],I=M[1],J=Object(n.useState)(),A=Object(u.a)(J,2),P=A[0],q=A[1],W=Object(n.useState)(),Q=Object(u.a)(W,2),B=Q[0],G=Q[1],Y=Object(n.useState)(),F=Object(u.a)(Y,2),K=F[0],L=F[1],z=Object(n.useState)(),H=Object(u.a)(z,2),U=H[0],Z=H[1],R=Object(n.useState)([]),V=Object(u.a)(R,2),X=V[0],$=V[1],ee=Object(n.useState)([]),te=Object(u.a)(ee,2),ae=te[0],ne=te[1];Date.prototype.getMonthWeek=function(){var e=new Date(this.getFullYear(),this.getMonth(),1).getDay();return Math.ceil((this.getDate()+e)/7)},Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"GET"},e.next=3,fetch("https://pharmacy-backend-dex.herokuapp.com/api/sale",t);case 3:return a=e.sent,e.next=6,a.json();case 6:return a=e.sent,S(a),e.next=10,fetch("https://pharmacy-backend-dex.herokuapp.com/api/medicine",t);case 10:return n=e.sent,e.next=13,n.json();case 13:n=e.sent,i(n),b(n.length),x(n.filter((function(e){return new Date(e.expiry)<new Date((new Date).setDate((new Date).getDate()-60))}))),N(n.filter((function(e){return e.quantity<=10}))),console.log("yaha se chala",n),se(a);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var se=function(e){for(var t=0,a=0,n=0,c=0,r=0,i=[],o=[],l=0;l<e.length;l++){var d,u,j,p,b;if(0==i?(i=[0],o=[e[l].createdAt.split("T")[0]]):e[l-1].createdAt.split("T")[0]!==e[l].createdAt.split("T")[0]&&(i.push(0),o.push(e[l].createdAt.split("T")[0])),i[i.length-1]+=parseInt(null===(d=e[l])||void 0===d?void 0:d.ordersTotal),(new Date).getMonth()-1==new Date(e[l].createdAt).getMonth()&&(r+=parseInt(null===(u=e[l])||void 0===u?void 0:u.ordersTotal)),(new Date).getMonth()==new Date(e[l].createdAt).getMonth())if(a+=parseInt(null===(p=e[l])||void 0===p?void 0:p.ordersTotal),(new Date).getMonthWeek()-1==new Date(e[l].createdAt).getMonthWeek())c+=parseInt(null===(b=e[l])||void 0===b?void 0:b.ordersTotal);else if((new Date).getMonthWeek()==new Date(e[l].createdAt).getMonthWeek()){var h;t+=parseInt(null===(h=e[l])||void 0===h?void 0:h.ordersTotal)}n+=parseInt(null===(j=e[l])||void 0===j?void 0:j.ordersTotal),console.log("loop",t,c,a,r,n)}console.log(i),console.log(o),console.log("end",t,c,a,r,n),I(t),q(c),G(a),L(r),Z(n),$(i),ne(o),s(!1)},ce={labels:ae,datasets:[{label:"Total sales",data:X,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(O.jsxs)("div",{className:v.a.home,children:[Object(O.jsx)("h1",{className:v.a.heading,children:"Dashboard"}),!a&&Object(O.jsx)(C,{totalmed:p,expiredmed:_.length,outofstockmed:y.length,weeksale:E,prevweeksale:P,monthsale:B,prevmonthsale:K,totalsale:U}),Object(O.jsx)("h1",{className:v.a.heading,children:"Analytics"}),Object(O.jsx)("div",{className:v.a.lineChart,children:Object(O.jsx)(T.b,{data:ce,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},height:110})})]})}var M=a(58),E=a.n(M),I=a(392),J=a(406),A=a(391),P=a(393),q=a(410);function W(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!0),r=Object(u.a)(c,2),i=(r[0],r[1]),o=Object(n.useState)(),j=Object(u.a)(o,2),p=j[0],b=j[1],h=Object(n.useState)(),m=Object(u.a)(h,2),_=m[0],x=m[1];Date.prototype.getMonthWeek=function(){var e=new Date(this.getFullYear(),this.getMonth(),1).getDay();return Math.ceil((this.getDate()+e)/7)},Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,c,r,o,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"GET"},e.next=3,fetch("https://pharmacy-backend-dex.herokuapp.com/api/sale",t);case 3:return a=e.sent,e.next=6,a.json();case 6:for(a=e.sent,console.log("response",a),n=[],c=[0,0,0,0,0,0,0],r=[0,0,0,0,0],o=0;o<a.length;o++)console.log("for weekly",a[o].createdAt),new Date(a[o].createdAt).getMonthWeek()>=(new Date).getMonthWeek()&&(c[new Date(a[o].createdAt).getDay()]+=a[o].ordersTotal),(new Date).getMonth()==new Date(a[o].createdAt).getMonth()&&(r[new Date(a[o].createdAt).getMonthWeek()-1]+=a[o].ordersTotal),d={id:a[o]._id,name:a[o].name,phone:a[o].phone,time:a[o].createdAt.split("T")[0],orders:a[o].orders,ordersTotal:a[o].ordersTotal},n.push(d);s(n),b(c),x(r),i(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g={labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],datasets:[{label:"Sales this week",data:p,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]},f={labels:["1st week","2nd week","3rd week","4th week","5th week"],datasets:[{label:"Sales this month",data:_,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]},y={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:E.a.chart_container,children:[Object(O.jsx)("div",{className:E.a.chart,children:Object(O.jsx)(T.b,{data:g,options:y})}),Object(O.jsx)("div",{className:E.a.chart,children:Object(O.jsx)(T.a,{data:f,options:y})})]}),Object(O.jsx)("h1",{className:E.a.heading,children:"Sales"}),Object(O.jsx)("div",{className:E.a.sales_container,children:a.map((function(e){return Object(O.jsxs)(J.a,{children:[Object(O.jsx)(A.a,{expandIcon:Object(O.jsx)(I.a,{}),children:Object(O.jsxs)("div",{className:E.a.summary,children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("h4",{children:"Purchased At"}),e.time]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("h4",{children:"Name"}),e.name]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("h4",{children:"Phone"}),e.phone]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("h4",{children:"Order total"}),e.ordersTotal]})]})}),Object(O.jsx)(P.a,{className:E.a.Accordion_details,children:Object(O.jsxs)("div",{className:E.a.detail_container,children:[Object(O.jsx)("h4",{children:"Medicine purchased"}),Object(O.jsx)("div",{className:E.a.detail,children:e.orders.map((function(e){return Object(O.jsx)(q.a,{variant:"outlined",label:"".concat(e.name,"  x").concat(e.quantity)})}))})]})})]})}))})]})}var Q=a(19),B=a(50),G=a.n(B),Y=a(124),F=a(38),K=a(405),L=a(194),z=a(186),H=a(407),U=a(394),Z=a(395),R=a(396);function V(){var e,t=Object(n.useState)([]),a=Object(u.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!0),i=Object(u.a)(r,2),o=i[0],j=i[1],p=Object(n.useState)(""),b=Object(u.a)(p,2),h=b[0],_=b[1],x=Object(n.useState)(!1),g=Object(u.a)(x,2),f=g[0],y=g[1],v=Object(n.useState)(""),N=Object(u.a)(v,2),k=N[0],w=N[1],S=Object(n.useState)(""),C=Object(u.a)(S,2),T=C[0],D=C[1],M=Object(n.useState)(""),E=Object(u.a)(M,2),I=E[0],J=E[1],A=Object(n.useState)(""),P=Object(u.a)(A,2),q=P[0],W=P[1],B=Object(n.useState)(new Date),V=Object(u.a)(B,2),X=V[0],$=V[1];function ee(e){return new Promise((function(t){return setTimeout(t,e)}))}Object(n.useEffect)((function(){ae("get")}),[]);var te=[{field:"id",headerName:"ID",width:180},{field:"name",headerName:"Name",width:170,editable:!0},{field:"price",headerName:"Price",width:110,type:"number",editable:!0},{field:"quantity",headerName:"Quantity",type:"number",width:130,editable:!0},{field:"expiry",headerName:"Expiry",type:"date",sortable:!0,width:140},{field:"actions",headerName:"Actions",width:110,renderCell:function(e){var t=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.next=3,ee(450);case 3:w(e.row.id),D(e.row.name),J(e.row.price),W(e.row.quantity),$(new Date(e.row.expiry)),_("update");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:G.a.edit,onClick:t,children:Object(O.jsx)(U.a,{})}),Object(O.jsx)("span",{className:G.a.delete,onClick:function(){w(e.row.id),ae("delete")},children:Object(O.jsx)(Z.a,{})})]})}}],ae=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,s,r,i,o,d,u,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),"get"!==t){e.next=7;break}return n={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"GET"},e.next=5,fetch("https://pharmacy-backend-dex.herokuapp.com/api/medicine",n);case 5:a=e.sent,console.log("get");case 7:if("add"!==t){e.next=12;break}return s={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"POST",body:JSON.stringify({name:T,price:I,quantity:q,expiry:X})},e.next=11,fetch("https://pharmacy-backend-dex.herokuapp.com/api/medicine/add",s);case 11:a=e.sent;case 12:if("update"!==t){e.next=17;break}return r={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"POST",body:JSON.stringify({_id:k,name:T,price:I,quantity:q,expiry:X})},e.next=16,fetch("https://pharmacy-backend-dex.herokuapp.com/api/medicine/update",r);case 16:a=e.sent;case 17:if("delete"!==t){e.next=26;break}if(i={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"DELETE",body:JSON.stringify({_id:k})},""!==k){e.next=22;break}return j(!1),e.abrupt("return");case 22:return e.next=24,fetch("https://pharmacy-backend-dex.herokuapp.com/api/medicine/delete",i);case 24:a=e.sent,console.log("yaha se chala voh",k);case 26:return e.next=28,a.json();case 28:for(a=e.sent,console.log("response",a),o=[],d=0;d<a.length;d++)u=new Date(a[d].expiry),p={id:a[d]._id,name:a[d].name,price:a[d].price,quantity:a[d].quantity,expiry:u.toLocaleDateString()},o.push(p);return y(!1),c(o),j(!1),e.abrupt("return");case 36:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=Object(z.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}))();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:G.a.heading,children:"Medicines"}),Object(O.jsx)("div",{className:G.a.add_container,children:Object(O.jsxs)("span",{onClick:function(){y(!0),_("add"),D(""),J(""),W(""),$(new Date)},className:G.a.add_btn,children:[Object(O.jsx)(R.a,{className:G.a.add_icon})," Add "]})}),Object(O.jsx)("div",{className:G.a.table,children:Object(O.jsx)(Y.a,{loading:o,rows:s&&s,columns:te,pageSize:10,disableSelectionOnClick:!0,autoPageSize:!0,disableColumnMenu:!0})}),Object(O.jsxs)(H.a,{open:f,className:G.a.modal,children:[Object(O.jsxs)("div",{className:G.a.close,children:[" Add Medicine ",Object(O.jsx)("span",{onClick:function(){return y(!1)},children:"+"})," "]}),Object(O.jsxs)("form",(e={className:ne.root},Object(Q.a)(e,"className",G.a.form),Object(Q.a)(e,"children",[Object(O.jsx)(m.a,{id:"standard-password-input",label:"Name",type:"text",value:T,autoComplete:"current-password",onChange:function(e){return D(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Price",type:"number",value:I,autoComplete:"current-password",onChange:function(e){return J(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Quantity",type:"number",value:q,autoComplete:"current-password",onChange:function(e){return W(e.target.value)}}),Object(O.jsx)(F.a,{utils:L.a,children:Object(O.jsx)(K.a,{label:"Expiry",value:X,onChange:$})})]),e)),Object(O.jsx)("span",{className:G.a.save,onClick:function(){return ae(h)},children:"Save"})]})]})}var X=a(64),$=a.n(X);function ee(){var e,t=Object(n.useState)([]),a=Object(u.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!0),i=Object(u.a)(r,2),o=i[0],j=i[1],p=Object(n.useState)("get"),b=Object(u.a)(p,2),h=b[0],_=b[1],x=Object(n.useState)(!1),g=Object(u.a)(x,2),f=g[0],y=g[1],v=Object(n.useState)(""),N=Object(u.a)(v,2),k=N[0],w=N[1],S=Object(n.useState)(""),C=Object(u.a)(S,2),T=C[0],D=C[1],M=Object(n.useState)(""),E=Object(u.a)(M,2),I=E[0],J=E[1],A=Object(n.useState)(""),P=Object(u.a)(A,2),q=P[0],W=P[1];function B(e){return new Promise((function(t){return setTimeout(t,e)}))}Object(n.useEffect)((function(){F()}),[]);var G=[{field:"id",headerName:"ID",width:180},{field:"name",headerName:"Name",width:170,editable:!0},{field:"phone",headerName:"Phone",width:110,type:"number",editable:!0},{field:"email",headerName:"Email",width:130,editable:!0},{field:"actions",headerName:"Actions",width:110,renderCell:function(e){var t=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.next=3,B(450);case 3:w(e.row.id),D(e.row.name),J(e.row.phone),W(e.row.email),_("update");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(e.row.id),_("delete"),console.log("id",k),F();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:$.a.edit,onClick:t,children:Object(O.jsx)(U.a,{})}),Object(O.jsx)("span",{className:$.a.delete,onClick:a,children:Object(O.jsx)(Z.a,{})})]})}}],F=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,s,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),"get"!=h){e.next=6;break}return a={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"GET"},e.next=5,fetch("https://pharmacy-backend-dex.herokuapp.com/api/customer",a);case 5:t=e.sent;case 6:if("update"!==h){e.next=11;break}return n={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"POST",body:JSON.stringify({_id:k,name:T,phone:I,email:q})},e.next=10,fetch("https://pharmacy-backend-dex.herokuapp.com/api/customer/update",n);case 10:t=e.sent;case 11:if("delete"!==h){e.next=17;break}return s={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"DELETE",body:JSON.stringify({_id:k})},e.next=15,fetch("https://pharmacy-backend-dex.herokuapp.com/api/customer/delete",s);case 15:t=e.sent,console.log("yaha se chala voh",k);case 17:return e.next=19,t.json();case 19:for(t=e.sent,console.log("response",t),r=[],i=0;i<t.length;i++)o={id:t[i]._id,name:t[i].name,phone:t[i].phone,email:t[i].email},r.push(o);return y(!1),c(r),j(!1),e.abrupt("return");case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=Object(z.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}))();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:$.a.heading,children:"Customers"}),Object(O.jsx)("div",{className:$.a.table,children:Object(O.jsx)(Y.a,{loading:o,rows:s&&s,columns:G,pageSize:10,disableSelectionOnClick:!0,autoPageSize:!0,sx:{boxShadow:2,border:2,"& .MuiDataGrid-cell:hover":{color:"#05B7E1"}},disableColumnMenu:!0})}),Object(O.jsxs)(H.a,{open:f,className:$.a.modal,children:[Object(O.jsxs)("div",{className:$.a.close,children:[" Edit Customer ",Object(O.jsx)("span",{onClick:function(){return y(!1)},children:"+"})," "]}),Object(O.jsxs)("form",(e={className:K.root},Object(Q.a)(e,"className",$.a.form),Object(Q.a)(e,"children",[Object(O.jsx)(m.a,{id:"standard-password-input",label:"Name",type:"text",value:T,autoComplete:"current-password",onChange:function(e){return D(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Phone",type:"number",value:I,autoComplete:"current-password",onChange:function(e){return J(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Email",type:"email",value:q,autoComplete:"current-password",onChange:function(e){return W(e.target.value)}})]),e)),Object(O.jsx)("span",{className:$.a.save,onClick:F,children:"Save"})]})]})}var te=a(17),ae=a(37),ne=a.n(ae),se=a(193),ce=a(398);function re(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!0),r=Object(u.a)(c,2),i=r[0],o=r[1],j=Object(n.useState)(),p=Object(u.a)(j,2),b=p[0],h=p[1],_=Object(n.useState)(),x=Object(u.a)(_,2),g=x[0],f=x[1],y=Object(n.useState)(),v=Object(u.a)(y,2),N=v[0],k=v[1],w={selectedmed:"",quantity:""},S=Object(n.useState)([w]),C=Object(u.a)(S,2),T=C[0],D=C[1],M=Object(n.useState)(0),E=Object(u.a)(M,2),I=E[0],J=E[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"GET"},e.next=3,fetch("https://pharmacy-backend-dex.herokuapp.com/api/medicine/",t);case 3:return a=e.sent,e.next=6,a.json();case 6:a=e.sent,console.log("response",a),s(a),o(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=0;T.map((function(t){t.selectedmed[0]&&(e+=t.selectedmed[0].price*t.quantity)})),J(e)}),[T]);var A=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,s,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"POST",body:JSON.stringify({name:b,email:g,phone:N})},e.next=3,fetch("https://pharmacy-backend-dex.herokuapp.com/api/customer/add",t);case 3:return a=(a=e.sent).json,console.log(a),n=0,s=T.map((function(e){return n+=e.selectedmed[0].price*e.quantity,Object.assign({},{id:e.selectedmed[0]._id,name:e.selectedmed[0].name,quantity:e.quantity})})),console.log("ord",s),c={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"POST",body:JSON.stringify({name:b,phone:N,orders:s,ordersTotal:n})},console.log("name:",b,"phone:",N,"orders:",s,"ordersTotal:",n),e.next=13,fetch("https://pharmacy-backend-dex.herokuapp.com/api/sale/add",c);case 13:r=(r=e.sent).json,console.log(r),h(""),k(""),f(""),D([w]),P(s);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,s,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=19;break}s=0;case 3:if(!(s<a.length)){e.next=16;break}if(console.log(t[n].id==a[s]._id,a[s]._id,t[n].id),t[n].id!=a[s]._id){e.next=13;break}return console.log(a[s].quantity-t[n].quantity,t[n].id),c={headers:{accepts:"application/json","Content-Type":"application/json",authToken:JSON.parse(localStorage.getItem("token"))},method:"POST",body:JSON.stringify({quantity:a[s].quantity-t[n].quantity,_id:t[n].id})},e.next=10,fetch("/api/medicine/updateQ",c);case 10:r=(r=e.sent).json,console.log(r);case 13:s++,e.next=3;break;case 16:n++,e.next=1;break;case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:ne.a.heading,children:"Billing"}),Object(O.jsxs)("div",{className:ne.a.customer_info_container,children:[Object(O.jsx)("h3",{className:ne.a.heading2,children:"Customer Information"}),Object(O.jsxs)("div",{className:ne.a.customer_info,children:[Object(O.jsx)(m.a,{id:"standard-password-input",label:"Name",type:"text",value:b,autoComplete:"current-password",onChange:function(e){return h(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Email",type:"text",value:g,autoComplete:"current-password",onChange:function(e){return f(e.target.value)}}),Object(O.jsx)(m.a,{id:"standard-password-input",label:"Phone",type:"text",value:N,autoComplete:"current-password",onChange:function(e){return k(e.target.value)}})]}),!i&&T.map((function(e,t){return Object(O.jsxs)("div",{className:ne.a.med,children:[Object(O.jsx)("span",{className:ne.a.select,children:Object(O.jsx)(se.Multiselect,{options:a,displayValue:"name",onSelect:function(e){!function(e,t){console.log(e);var a=T.map((function(a,n){return t==n?Object.assign(a,{selectedmed:e}):a}));D(a),console.log("change",T)}(e,t)},selectionLimit:1,name:"selectedmed",selectedValues:e.selectedmed})}),Object(O.jsx)(m.a,Object(Q.a)({id:"standard-password-input",name:"quantity",label:"Quntity",type:"number",value:e.quantity,autoComplete:"current-password",onChange:function(e){return function(e,t){if(!(e.target.value<1)&&T[t].selectedmed[0]&&e.target.value<=T[t].selectedmed[0].quantity){var a=T.map((function(a,n){return t==n?Object.assign(a,Object(Q.a)({},e.target.name,e.target.value)):a}));D(a)}}(e,t)}},"value",e.quantity)),Object(O.jsxs)("span",{className:ne.a.price_container,children:[Object(O.jsx)("span",{className:ne.a.price_heading,children:"Price"}),"\u20b9",T[t].selectedmed[0]&&T[t].selectedmed[0].price*T[t].quantity]}),Object(O.jsx)("span",{onClick:function(){return function(e){console.log("del",e),D((function(t){return t.filter((function(a){return a!==t[e]}))}))}(t)},className:ne.a.delete_btn,children:"Delete"})]},t)})),Object(O.jsx)("div",{className:ne.a.add_container,children:Object(O.jsx)(ce.a,{onClick:function(){console.log("added"),D([].concat(Object(te.a)(T),[w]))},fontSize:"large",className:ne.a.add_btn})}),Object(O.jsxs)("div",{className:ne.a.submit_container,children:[Object(O.jsx)("span",{onClick:A,className:ne.a.submit_btn,children:"Submit"}),Object(O.jsxs)("span",{className:ne.a.total_container,children:[Object(O.jsx)("span",{className:ne.a.total_heading,children:"Total"}),Object(O.jsxs)("span",{className:ne.a.total,children:["\u20b9",I]})]})]})]})]})}var ie=a(33),oe=a.n(ie),le=a.p+"static/media/logo.a9a25829.png",de=a(399),ue=a(400),je=a(401),pe=a(402),be=a(403),he=a(404);function me(){var e=Object(i.f)(),t=Object(i.g)().pathname;return Object(O.jsxs)("div",{className:oe.a.sidebar,style:{display:"/signin"===t||"/signup"===t?"none":"block"},children:[Object(O.jsx)("img",{src:le,className:oe.a.logo,alt:"logo"}),Object(O.jsxs)("div",{className:oe.a.sidebar_menu,children:[Object(O.jsx)("h3",{children:"Dashboard"}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)(h.c,{to:"/",exact:!0,activeClassName:oe.a.active,children:[" ",Object(O.jsx)(de.a,{className:oe.a.icon})," Home "]}),Object(O.jsxs)(h.c,{to:"/sales",activeClassName:oe.a.active,children:[" ",Object(O.jsx)(ue.a,{className:oe.a.icon})," Sales "]}),Object(O.jsxs)(h.c,{to:"/customers",activeClassName:oe.a.active,children:[" ",Object(O.jsx)(je.a,{className:oe.a.icon})," Customers "]})]})]}),Object(O.jsxs)("div",{className:oe.a.sidebar_menu,children:[Object(O.jsx)("h3",{children:"Quick Menu"}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)(h.c,{to:"/medicines",activeClassName:oe.a.active,children:[" ",Object(O.jsx)(pe.a,{className:oe.a.icon})," Medicines "]}),Object(O.jsxs)(h.c,{to:"/billing",activeClassName:oe.a.active,children:[" ",Object(O.jsx)(be.a,{className:oe.a.icon})," Billing "]})]})]}),Object(O.jsx)("div",{className:oe.a.sidebar_menu,children:Object(O.jsxs)("span",{className:oe.a.logout,onClick:function(){localStorage.removeItem("token"),e.push("/signin")},children:[" ",Object(O.jsx)(he.a,{className:oe.a.icon})," Logout"]})})]})}var Oe=function(){var e=Object(i.f)();return console.log(Object(i.g)().pathname),Object(n.useEffect)((function(){null==localStorage.getItem("token")&&(console.log("access denied"),e.push("/signin"))}),[localStorage.getItem("token")]),Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(me,{}),Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/signup",exact:!0,component:_}),Object(O.jsx)(i.a,{path:"/signin",exact:!0,component:f}),Object(O.jsx)(i.a,{path:"/",exact:!0,component:D}),Object(O.jsx)(i.a,{path:"/medicines",exact:!0,component:V}),Object(O.jsx)(i.a,{path:"/customers",exact:!0,component:ee}),Object(O.jsx)(i.a,{path:"/billing",exact:!0,component:re}),Object(O.jsx)(i.a,{path:"/sales",exact:!0,component:W}),Object(O.jsx)(i.a,{path:"*",exact:!0,component:D})]})]})})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(Oe,{})})}),document.getElementById("root"))},37:function(e,t,a){e.exports={heading:"style_heading__16_U-",customer_info_container:"style_customer_info_container__1z3f1",heading2:"style_heading2__1-LMC",customer_info:"style_customer_info__2Qu4Y",med:"style_med__2AsM8",select:"style_select__1cJNT",price_container:"style_price_container__12BRf",price_heading:"style_price_heading__1aM-b",delete_btn:"style_delete_btn__1626c",add_container:"style_add_container__2bjSk",add_btn:"style_add_btn__17Sm0",submit_container:"style_submit_container__149-4",submit_btn:"style_submit_btn__3bQ0w",total_container:"style_total_container__32x88",total:"style_total__1jNo2"}},50:function(e,t,a){e.exports={heading:"style_heading__2UuDI",add_container:"style_add_container__3NbDj",add_btn:"style_add_btn__37DBa",add_icon:"style_add_icon__1l9Kc",table:"style_table__JvlHW",edit:"style_edit__hM6ni",delete:"style_delete__DA-K8",close:"style_close__KHCPx",form:"style_form__1CloY",save:"style_save__3tgjQ"}},58:function(e,t,a){e.exports={heading:"style_heading__3L_1X",chart_container:"style_chart_container__10qYO",chart:"style_chart__SBJAZ",sales_container:"style_sales_container__15C56",summary:"style_summary__CD3Ew",detail_container:"style_detail_container__26j-C",detail:"style_detail__eEVK3"}},63:function(e,t,a){e.exports={signin:"style_signin__3O39d",container:"style_container__3PJ-h",med_img:"style_med_img__2FWHY",img_container:"style_img_container__1BhDo",sub_container:"style_sub_container__11h6Z",title:"style_title__1JTq2",signin_statement:"style_signin_statement__h4gvE",demo:"style_demo__3uSbS"}},64:function(e,t,a){e.exports={heading:"style_heading__23oKp",table:"style_table__3ZePH",edit:"style_edit__3qEk8",delete:"style_delete__24Jmd",close:"style_close__rrgko",form:"style_form__2_oC4",save:"style_save__3WuWR"}},72:function(e,t,a){e.exports={signup:"style_signup__2YLPE",container:"style_container__2ny6y",med_img:"style_med_img__tciYK",img_container:"style_img_container__1Q1fA",sub_container:"style_sub_container__2mk7N",title:"style_title__1e07K",signin_statement:"style_signin_statement__uWUWw"}},99:function(e,t,a){e.exports={home:"style_home__2ms5k",heading:"style_heading__29IjU",lineChart:"style_lineChart__2RJ9T"}}},[[343,1,2]]]);
//# sourceMappingURL=main.52fbf360.chunk.js.map