"use strict";(self.webpackChunkpokemondb=self.webpackChunkpokemondb||[]).push([[897],{8897:(Fn,ot,P)=>{P.r(ot),P.d(ot,{MainModule:()=>Dn});var M=P(493),c=P(9653),T=P(6895),It=P(9814),Ft=P(7061),e=P(4650);let Zt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[T.ez,It.o9,Ft.p]}),t})();var Nt=P(851),Ut=P(6580),H=P(7337),z=P(8505),it=P(105),Kt=P(529),d=(()=>{return(t=d||(d={}))[t.EntitiesOnly=0]="EntitiesOnly",t[t.Both=1]="Both",t[t.None=2]="None",d;var t})();function S(t){return function(n,i){const r={ids:[...i.ids],entities:{...i.entities}},l=t(n,r);return l===d.Both?Object.assign({},i,r):l===d.EntitiesOnly?{...i,entities:r.entities}:i}}function b(t,o){const n=o(t);return(0,e.X6Q)()&&void 0===n&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",o.toString()),n}function st(t){function o(h,p){const a=b(h,t);return a in p.entities?d.None:(p.ids.push(a),p.entities[a]=h,d.Both)}function n(h,p){let a=!1;for(const s of h)a=o(s,p)!==d.None||a;return a?d.Both:d.None}function r(h,p){const a=b(h,t);return a in p.entities?(p.entities[a]=h,d.EntitiesOnly):(p.ids.push(a),p.entities[a]=h,d.Both)}function y(h,p){const s=(h instanceof Array?h:p.ids.filter(f=>h(p.entities[f]))).filter(f=>f in p.entities).map(f=>delete p.entities[f]).length>0;return s&&(p.ids=p.ids.filter(f=>f in p.entities)),s?d.Both:d.None}function C(h,p){return A([h],p)}function A(h,p){const a={};return(h=h.filter(f=>f.id in p.entities)).length>0?h.filter(g=>function O(h,p,a){const f=Object.assign({},a.entities[p.id],p.changes),g=b(f,t),k=g!==p.id;return k&&(h[p.id]=g,delete a.entities[p.id]),a.entities[g]=f,k}(a,g,p)).length>0?(p.ids=p.ids.map(g=>a[g]||g),d.Both):d.EntitiesOnly:d.None}function Q(h,p){const a=[],s=[];for(const k of h){const v=b(k,t);v in p.entities?s.push({id:v,changes:k}):a.push(k)}const f=A(s,p),g=n(a,p);switch(!0){case g===d.None&&f===d.None:return d.None;case g===d.Both||f===d.Both:return d.Both;default:return d.EntitiesOnly}}return{removeAll:function m(h){return Object.assign({},h,{ids:[],entities:{}})},addOne:S(o),addMany:S(n),setAll:S(function i(h,p){return p.ids=[],p.entities={},n(h,p),d.Both}),setOne:S(r),setMany:S(function l(h,p){const a=h.map(s=>r(s,p));switch(!0){case a.some(s=>s===d.Both):return d.Both;case a.some(s=>s===d.EntitiesOnly):return d.EntitiesOnly;default:return d.None}}),updateOne:S(C),updateMany:S(A),upsertOne:S(function E(h,p){return Q([h],p)}),upsertMany:S(Q),removeOne:S(function u(h,p){return y([h],p)}),removeMany:S(y),map:S(function L(h,p){return A(p.ids.reduce((f,g)=>{const k=h(p.entities[g]);return k!==p.entities[g]&&f.push({id:g,changes:k}),f},[]).filter(({id:f})=>f in p.entities),p)}),mapOne:S(function B({map:h,id:p},a){const s=a.entities[p];return s?C({id:p,changes:h(s)},a):d.None})}}function Gt(t,o){const{removeOne:n,removeMany:i,removeAll:r}=st(t);function l(a,s){return u([a],s)}function u(a,s){const f=a.filter(g=>!(b(g,t)in s.entities));return 0===f.length?d.None:(p(f,s),d.Both)}function m(a,s){const f=b(a,t);return f in s.entities?(s.ids=s.ids.filter(g=>g!==f),p([a],s),d.Both):l(a,s)}function C(a,s){return L([a],s)}function L(a,s){const f=[],g=a.filter(k=>function A(a,s,f){if(!(s.id in f.entities))return!1;const k=Object.assign({},f.entities[s.id],s.changes),v=b(k,t);return delete f.entities[s.id],a.push(k),v!==s.id}(f,k,s)).length>0;if(0===f.length)return d.None;{const k=s.ids,v=[];return s.ids=s.ids.filter((w,Z)=>w in s.entities||(v.push(Z),!1)),p(f,s),!g&&v.every(w=>s.ids[w]===k[w])?d.EntitiesOnly:d.Both}}function h(a,s){const f=[],g=[];for(const w of a){const Z=b(w,t);Z in s.entities?g.push({id:Z,changes:w}):f.push(w)}const k=L(g,s),v=u(f,s);switch(!0){case v===d.None&&k===d.None:return d.None;case v===d.Both||k===d.Both:return d.Both;default:return d.EntitiesOnly}}function p(a,s){a.sort(o);const f=[];let g=0,k=0;for(;g<a.length&&k<s.ids.length;){const v=a[g],w=b(v,t),Z=s.ids[k];o(v,s.entities[Z])<=0?(f.push(w),g++):(f.push(Z),k++)}s.ids=f.concat(g<a.length?a.slice(g).map(t):s.ids.slice(k)),a.forEach((v,w)=>{s.entities[t(v)]=v})}return{removeOne:n,removeMany:i,removeAll:r,addOne:S(l),updateOne:S(C),upsertOne:S(function Q(a,s){return h([a],s)}),setAll:S(function y(a,s){return s.entities={},s.ids=[],u(a,s),d.Both}),setOne:S(m),setMany:S(function O(a,s){const f=a.map(g=>m(g,s));switch(!0){case f.some(g=>g===d.Both):return d.Both;case f.some(g=>g===d.EntitiesOnly):return d.EntitiesOnly;default:return d.None}}),addMany:S(u),updateMany:S(L),upsertMany:S(h),map:S(function B(a,s){return L(s.ids.reduce((g,k)=>{const v=a(s.entities[k]);return v!==s.entities[k]&&g.push({id:k,changes:v}),g},[]),s)}),mapOne:S(function E({map:a,id:s},f){const g=f.entities[s];return g?C({id:s,changes:a(g)},f):d.None})}}function rt(t={}){const{selectId:o,sortComparer:n}={selectId:t.selectId??(u=>u.id),sortComparer:t.sortComparer??!1},i=function Rt(){return{getInitialState:function t(o={}){return Object.assign({ids:[],entities:{}},o)}}}(),r=function $t(){return{getSelectors:function t(o){const n=u=>u.ids,i=u=>u.entities,r=(0,c.P1)(n,i,(u,y)=>u.map(m=>y[m])),l=(0,c.P1)(n,u=>u.length);return o?{selectIds:(0,c.P1)(o,n),selectEntities:(0,c.P1)(o,i),selectAll:(0,c.P1)(o,r),selectTotal:(0,c.P1)(o,l)}:{selectIds:n,selectEntities:i,selectAll:r,selectTotal:l}}}}();return{selectId:o,sortComparer:n,...i,...r,...n?Gt(o,n):st(o)}}const $=(0,c.PH)("[Pokemon All/API] Get all pokemon start",(0,c.Ky)()),lt=(0,c.PH)("[Pokemon All/API] Get all pokemon successful",(0,c.Ky)()),ee=(0,c.PH)("[Pokemon All/API] Get all pokemon failure",(0,c.Ky)()),ct=(0,c.PH)("[Pokemon/UI] Reset pokemon detail prop"),j=(0,c.PH)("[Pokemon/API] Get a pokemon start",(0,c.Ky)()),J=(0,c.PH)("[Pokemon/API] Get a pokemon successful",(0,c.Ky)()),at=(0,c.PH)("[Pokemon/API] Get a pokemon failure",(0,c.Ky)()),pt=(0,c.PH)("[Pokemon/API] Get a pokemon species start",(0,c.Ky)()),ut=(0,c.PH)("[Pokemon/API] Get a pokemon species successful",(0,c.Ky)());(0,c.PH)("[Pokemon/API] Get a pokemon species failure",(0,c.Ky)());const N=rt({selectId:function oe(t){return t.name}}),ie=N.getInitialState({apiWorking:!1,firstTimeLoading:!0,errMsg:void 0,error:!1,lastFetchedDate:void 0,pagination:{limit:20,firstOffset:0}}),ft=(0,c.Lq)(ie,(0,c.on)($,(t,{page:o})=>({...t,apiWorking:!0,pagination:{...t.pagination,pageRequested:o}})),(0,c.on)(lt,(t,{payload:o,fetchedDate:n})=>{const i=o.results,r=((t,o)=>{const n=o.count,i=o.next,r=o.previous,l=Math.floor(n/20);let u=0,y=t.nextOffset??0;i?(y=+(new URL(i).searchParams.get("offset")??0),u=(y-(t.limit??20))/(t.limit??20)):u=l;let m=t.prevOffset??0;return r&&(m=+(new URL(r).searchParams.get("offset")??0)),{pageRequested:t.pageRequested,limit:t.limit,currentPage:u,nextOffset:y,prevOffset:m,firstOffset:0,lastOffset:20*l-20,pages:l,totalCount:n,nextPageUrl:i,previousPageUrl:r}})(t.pagination,o);return N.addMany(i,{...t,apiWorking:!1,firstTimeLoading:!1,error:!1,errMsg:void 0,pagination:r,lastFetchedDate:n})}),(0,c.on)(ee,(t,{errMsg:o})=>({...t,apiWorking:!1,errMsg:o,error:!0}))),dt="allPokemonShells";var D=(()=>{return(t=D||(D={})).Next="NEXT",t.Prev="PREV",D;var t})();const F=(0,c.ZF)(dt),se=((0,c.P1)(F,N.getSelectors().selectIds),(0,c.P1)(F,N.getSelectors().selectEntities),(0,c.P1)(F,N.getSelectors().selectAll)),re=((0,c.P1)(F,N.getSelectors().selectTotal),(0,c.P1)(F,t=>t.firstTimeLoading)),le=(0,c.P1)(F,t=>t.apiWorking),gt=(0,c.P1)(F,t=>t.pagination),mt="allPokemonActionBar",ht=(0,c.PH)("[Pokemon All Actions/UI] Set action bar items",(0,c.Ky)());(0,c.PH)("[Pokemon All Actions/UI] Edit action property",(0,c.Ky)());const U=rt({selectId:function pe(t){return t.id}}),ue=U.getInitialState({apiWorking:!1}),Pt=(0,c.Lq)(ue,(0,c.on)(ht,(t,{actions:o})=>U.setAll(o,{...t}))),G=(0,c.ZF)(mt),fe=((0,c.P1)(G,U.getSelectors().selectIds),(0,c.P1)(G,U.getSelectors().selectEntities),(0,c.P1)(G,U.getSelectors().selectAll)),yt=((0,c.P1)(G,U.getSelectors().selectTotal),"pokemonDetail"),X=(0,c.ZF)(yt),de=(0,c.P1)(X,t=>t.apiLoading),ge=(0,c.P1)(X,t=>t.pokemon),me=(0,c.P1)(X,t=>t.species);var kt=P(4691);const St="https://pokeapi.co/api/v2/pokemon";let I=(()=>{class t{constructor(n,i){this.httpService=n,this.store=i,this.pagination$=this.store.select(gt),this.actionBarActions$=this.store.select(fe),this.pokemonList$=this.store.select(se),this.pokemonListLoading$=this.store.select(le),this.pokemonListFirstLoading$=this.store.select(re),this.allPaginationData$=this.store.select(gt),this.pokemonDetailLoading$=this.store.select(de),this.selectedPokemon$=this.store.select(ge)}getPokemonShells(n,i){let r=new Kt.LE,l=St;return i?l=i:(r=r.set("offset",20*(n??0)),r=r.set("limit",20)),this.httpService.get(l,r)}getPokemon(n){return this.httpService.get(`${St}/${n}`).pipe()}fetchPokemonShells(n,i){this.store.dispatch($({page:n,scrollPosition:i}))}resetPokemonDetailProp(){this.store.dispatch(ct())}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(kt.O),e.LFG(c.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=P(1576),Ot=P(4859),he=P(7392);function Pe(t,o){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"button",3),e.NdJ("click",function(){const l=e.CHM(n).$implicit,u=e.oxw();return e.KtG(u.onActionClick(l))}),e.TgZ(2,"mat-icon"),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()(),e.BQk()}if(2&t){const n=o.$implicit;e.xp6(3),e.hij("",n.icon," "),e.xp6(2),e.Oqu(n.display)}}const ye=["*"];let ke=(()=>{class t{constructor(){this.actions=[]}ngOnInit(){}onActionClick(n){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["shared-action-bar"]],inputs:{actions:"actions"},ngContentSelectors:ye,decls:5,vars:1,consts:[["fxLayout","row","fxLayoutAlign","space-between center","id","app-dashboard-action-bar",1,""],[1,""],[4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"click"]],template:function(n,i){1&n&&(e.F$t(),e.TgZ(0,"section",0)(1,"div",1),e.YNc(2,Pe,6,2,"ng-container",2),e.qZA(),e.TgZ(3,"div"),e.Hsn(4),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngForOf",i.actions))},dependencies:[T.sg,Ot.lW,he.Hw,x.xw,x.Wh],styles:["button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}"]}),t})();function Se(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",8)(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"div"),e._uU(5," | "),e.qZA(),e.TgZ(6,"div"),e._uU(7),e.qZA()(),e.BQk()),2&t){const n=o.ngIf;e.xp6(3),e.AsE(" page ",n.currentPage," / ",n.pages," "),e.xp6(4),e.hij(" total: ",n.totalCount," ")}}function Oe(t,o){if(1&t&&(e.ynx(0),e.YNc(1,Se,8,3,"ng-container",7),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,n.ps.allPaginationData$))}}function ve(t,o){1&t&&(e.TgZ(0,"button",9),e._uU(1,"Show pagination data"),e.qZA())}let Me=(()=>{class t{constructor(n){this.ps=n}ngOnInit(){}onActivate(n){"pokemonDetails"===n.compId?(0,it.H5)("app-dashboard-action-bar"):"pokemonList"===n.compId&&this.ps.selectedPokemon$.pipe((0,z.b)(i=>{i?.name&&setTimeout(()=>{(0,it.H5)(i.name)},500)})).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(I))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main"]],decls:15,vars:8,consts:[[1,"container-fluid","mb-5","main"],[1,"sticky-top","dashboard"],[3,"actions"],["fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","5px",1,"page-data"],[4,"ngIf","ngIfElse"],[3,"activate"],["showBtn",""],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","5px"],["mat-button","","color","primary"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"shared-action-bar",2),e.ALo(3,"async"),e.TgZ(4,"div",3)(5,"div"),e._uU(6),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"div"),e._uU(9," | "),e.qZA(),e.TgZ(10,"div"),e.YNc(11,Oe,3,3,"ng-container",4),e.qZA()()()(),e.TgZ(12,"router-outlet",5),e.NdJ("activate",function(l){return i.onActivate(l)}),e.qZA()(),e.YNc(13,ve,2,0,"ng-template",null,6,e.W1O)),2&n){const r=e.MAs(14);e.xp6(2),e.Q6J("actions",e.lcZ(3,4,i.ps.actionBarActions$)),e.xp6(4),e.hij(" ",e.lcZ(7,6,i.ps.pokemonListLoading$)?"Loading...":""," "),e.xp6(5),e.Q6J("ngIf",!0)("ngIfElse",r)}},dependencies:[T.O5,x.xw,x.SQ,x.Wh,Ot.lW,ke,H.lC,T.Ov],styles:[".sticky-top.dashboard[_ngcontent-%COMP%]{z-index:20;background-color:#fff;border-bottom:1px solid #eee;width:100%;margin-bottom:15px}.main[_ngcontent-%COMP%]{overflow:auto;min-height:100vh}"]}),t})();var q=P(7579);let V=(()=>{class t{constructor(){this.wholePage=!1,this.loading=!0,this.logoShakeState=!1,this.compDest$=new q.x}ngOnChanges(n){this.parentClass=this.wholePage?"whole-page loading-container":"container loading-container mt-5"}ngOnInit(){}ngOnDestroy(){this.compDest$.next(null),this.compDest$.complete()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-shared-loading"]],inputs:{wholePage:"wholePage",message:"message"},features:[e.TTD],decls:12,vars:3,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"w-100"],[1,""],[1,"loading-logo"],["src","assets/img/poke-logo.png","alt","logo",1,"logo-img","d-inline-block"],[1,"loading-parent"],[1,"lds-facebook"],[1,"secfont"]],template:function(n,i){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2),e._UZ(4,"img",3),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"div")(8,"div")(9,"div"),e.qZA()(),e.TgZ(10,"div",6),e._uU(11),e.qZA()()()),2&n&&(e.Tol(i.parentClass),e.xp6(11),e.hij(" Loading ",i.message," ... "))},dependencies:[x.xw,x.Wh],styles:[".loading-logo[_ngcontent-%COMP%]{height:3rem}.loading-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.loading-parent[_ngcontent-%COMP%]{justify-content:center;align-items:center}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}.whole-page[_ngcontent-%COMP%]{position:fixed;width:100%}.lds-facebook[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;position:absolute;left:8px;width:16px;background:#007bff;animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:8px;animation-delay:-.24s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:32px;animation-delay:-.12s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:56px;animation-delay:0}@keyframes lds-facebook{0%{top:8px;height:64px}50%,to{top:24px;height:32px}}"]}),t})();var Ce=P(3238),vt=P(6338),Mt=P(9646),xe=P(4968),Te=P(5577),_=P(4004),W=P(9300),Ae=P(4986),_e=P(4482),Ct=P(5403),Ee=P(8421);const xt={leading:!0,trailing:!1};var Le=P(2805);function De(t,o,n,i){const r=window&&!!window.document&&window.document.documentElement;let l=r&&o?window:n;if(t&&(l=t&&r&&"string"==typeof t?function Ie(t,o,n){return(n?window.document:o).querySelector(t)}(t,n.nativeElement,i):t,!l))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return l}function tt(t){return t&&!t.firstChange}const Ze={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},Ne={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class Ue{constructor(o=!0){this.vertical=o,this.propsMap=o?Ze:Ne}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function Re(t){return["Window","global"].some(n=>Object.prototype.toString.call(t).includes(n))}function et(t,o){return t?o.document.documentElement:null}function Tt(t,o){const n=function We({container:t,isWindow:o,axis:n}){const{offsetHeightKey:i,clientHeightKey:r}=At(n);return _t(t,o,i,r)}(o);return o.isWindow?function $e(t,o,n){const{axis:i,container:r,isWindow:l}=n,{offsetHeightKey:u,clientHeightKey:y}=At(i),m=t+Et(et(l,r),i,l),O=_t(o.nativeElement,l,u,y),C=function Ye(t,o,n){const i=o.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+Et(t,o,n)}(o.nativeElement,i,l)+O;return{height:t,scrolled:m,totalToScroll:C,isWindow:l}}(n,t,o):function Ge(t,o,n){const{axis:i,container:r}=n;return{height:t,scrolled:r[i.scrollTopKey()],totalToScroll:r[i.scrollHeightKey()],isWindow:!1}}(n,0,o)}function At(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function _t(t,o,n,i){if(isNaN(t[n])){const r=et(o,t);return r?r[i]:0}return t[n]}function Et(t,o,n){const i=o.pageYOffsetKey(),r=o.scrollTopKey(),l=o.offsetTopKey();return isNaN(window.pageYOffset)?et(n,t)[r]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[l]}function Qe(t,o={down:0,up:0},n){let i,r;if(t.totalToScroll<=0)return!1;const l=t.isWindow?t.scrolled:t.height+t.scrolled;return n?(i=(t.totalToScroll-l)/t.totalToScroll,r=(o?.down?o.down:0)/10):(i=t.scrolled/(t.scrolled+(t.totalToScroll-l)),r=(o?.up?o.up:0)/10),i<=r}class qe{constructor({totalToScroll:o}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=o}updateScrollPosition(o){return this.lastScrollPosition=o}updateTotalToScroll(o){this.lastTotalToScroll!==o&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=o)}updateScroll(o,n){this.updateScrollPosition(o),this.updateTotalToScroll(n)}updateTriggeredFlag(o,n){n?this.triggered.down=o:this.triggered.up=o}isTriggeredScroll(o,n){return n?this.triggered.down===o:this.triggered.up===o}}function Ve(t){const{scrollContainer:o,scrollWindow:n,element:i,fromRoot:r}=t,l=function Be({windowElement:t,axis:o}){return function He(t,o){const n=t.isWindow||o&&!o.nativeElement?o:o.nativeElement;return{...t,container:n}}({axis:o,isWindow:Re(t)},t)}({axis:new Ue(!t.horizontal),windowElement:De(o,n,i,r)}),u=new qe({totalToScroll:Tt(i,l)}),m={up:t.upDistance,down:t.downDistance};return function tn(t){let o=(0,xe.R)(t.container,"scroll");return t.throttle&&(o=o.pipe(function be(t,o=Ae.z,n=xt){const i=(0,Le.H)(t,o);return function we(t,o=xt){return(0,_e.e)((n,i)=>{const{leading:r,trailing:l}=o;let u=!1,y=null,m=null,O=!1;const C=()=>{m?.unsubscribe(),m=null,l&&(B(),O&&i.complete())},A=()=>{m=null,O&&i.complete()},L=E=>m=(0,Ee.Xf)(t(E)).subscribe((0,Ct.x)(i,C,A)),B=()=>{if(u){u=!1;const E=y;y=null,i.next(E),!O&&L(E)}};n.subscribe((0,Ct.x)(i,E=>{u=!0,y=E,(!m||m.closed)&&(r?B():L(E))},()=>{O=!0,(!(l&&u&&m)||m.closed)&&i.complete()}))})}(()=>i,n)}(t.throttle,void 0,{leading:!0,trailing:!0}))),o}({container:l.container,throttle:t.throttle}).pipe((0,Te.z)(()=>(0,Mt.of)(Tt(i,l))),(0,_.U)(O=>function en(t,o,n){const{scrollDown:i,fire:r}=function je(t,o,n){const i=function ze(t,o){return t<o.scrolled}(t,o);return{fire:Qe(o,n,i),scrollDown:i}}(t,o,n);return{scrollDown:i,fire:r,stats:o}}(u.lastScrollPosition,O,m)),(0,z.b)(({stats:O})=>u.updateScroll(O.scrolled,O.totalToScroll)),(0,W.h)(({fire:O,scrollDown:C,stats:{totalToScroll:A}})=>function Ke(t,o,n){return!!(t&&o||!n&&o)}(t.alwaysCallback,O,u.isTriggeredScroll(A,C))),(0,z.b)(({scrollDown:O,stats:{totalToScroll:C}})=>{u.updateTriggeredFlag(C,O)}),(0,_.U)(nn))}function nn(t){const{scrollDown:o,stats:{scrolled:n}}=t;return{type:o?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:n}}}let on=(()=>{class t{constructor(n,i){this.element=n,this.zone=i,this.scrolled=new e.vpe,this.scrolledUp=new e.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:n,infiniteScrollDisabled:i,infiniteScrollDistance:r}){const l=tt(n),u=tt(i),y=tt(r),m=!u&&!this.infiniteScrollDisabled||u&&!i.currentValue||y;(l||u||y)&&(this.destroyScroller(),m&&this.setup())}setup(){(function Fe(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=Ve({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(n=>this.zone.run(()=>this.handleOnScroll(n)))})}handleOnScroll({type:n,payload:i}){switch(n){case"[NGX_ISE] DOWN":return this.scrolled.emit(i);case"[NGX_ISE] UP":return this.scrolledUp.emit(i);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq),e.Y36(e.R0b))},t.\u0275dir=e.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[e.TTD]}),t})(),sn=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})();const rn=function(t){return["../",t]};function ln(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"a",6)(2,"mat-list-item")(3,"div",7),e._UZ(4,"img",8),e.qZA(),e.TgZ(5,"div",9),e._uU(6),e.qZA()()(),e.BQk()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(4,rn,n.name)),e.xp6(3),e.Q6J("src","assets/img/pokeball.png",e.LSH),e.xp6(1),e.Q6J("id",n.name),e.xp6(1),e.hij(" ",n.name," ")}}function cn(t,o){1&t&&(e.ynx(0),e._UZ(1,"app-shared-loading",10),e.BQk()),2&t&&(e.xp6(1),e.Q6J("message","Pokemons"))}function an(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"mat-nav-list",3),e.YNc(2,ln,7,6,"ng-container",4),e.qZA(),e.YNc(3,cn,2,1,"ng-container",5),e.ALo(4,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngForOf",n.list),e.xp6(1),e.Q6J("ngIf",e.lcZ(4,2,n.ps.pokemonListLoading$))}}function pn(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," No Pokemons found. "),e.qZA())}let un=(()=>{class t{constructor(n){this.ps=n,this.scrollLoad=new e.vpe}ngOnInit(){}showInfo(n){}onScrollDown(){this.scrollLoad.emit(D.Next)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(I))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-all-pokemon-list"]],inputs:{list:"list"},outputs:{scrollLoad:"scrollLoad"},decls:4,vars:6,consts:[["infiniteScroll","",1,"poke-list",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollContainer","fromRoot","scrolled"],[4,"ngIf","ngIfElse"],["noItems",""],["dense",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["matLine","",3,"routerLink"],[1,"logo","mr-2"],[3,"src"],[3,"id"],[3,"message"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.NdJ("scrolled",function(){return i.onScrollDown()}),e.YNc(1,an,5,4,"ng-container",1),e.qZA(),e.YNc(2,pn,2,0,"ng-template",null,2,e.W1O)),2&n){const r=e.MAs(3);e.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",50)("infiniteScrollContainer",".content-parent")("fromRoot",!0),e.xp6(1),e.Q6J("ngIf",i.list&&i.list.length>0)("ngIfElse",r)}},dependencies:[T.sg,T.O5,Ce.X2,vt.Hk,vt.Tg,V,on,H.yS,T.Ov],styles:["[_nghost-%COMP%]{width:100%}.poke-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{height:35px}.poke-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.poke-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:15px}.poke-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover{background-color:transparent;font-weight:700}.poke-list[_ngcontent-%COMP%]   .mat-list-single-selected-option[_ngcontent-%COMP%]{background-color:#e4e6f9;font-weight:500}"],changeDetection:0}),t})();function fn(t,o){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"div",4)(2,"app-main-all-pokemon-list",5),e.NdJ("scrollLoad",function(r){e.CHM(n);const l=e.oxw();return e.KtG(l.onScroll(r))}),e.ALo(3,"async"),e.qZA()(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(2),e.Q6J("list",e.lcZ(3,1,n.ps.pokemonList$))}}function dn(t,o){1&t&&(e.TgZ(0,"div",6),e._UZ(1,"app-shared-loading"),e.qZA())}let gn=(()=>{class t{constructor(n){this.ps=n,this.compId="pokemonList",this.title="Pokemon Directory",this.scrollPosition=D,this.actionBtns=[],this.showPageData=!1}ngOnInit(){}navPage(n){this.ps.fetchPokemonShells(void 0,n)}onScroll(n){this.navPage(D.Next)}togglePageData(){this.showPageData=!this.showPageData}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(I))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-all"]],decls:7,vars:5,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","15px"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","5px",1,"w-100","p-title"],[4,"ngIf","ngIfElse"],["firstTimeLoadMask",""],["fxLayout","row","fxLayoutAlign","start start",1,"w-100"],[3,"list","scrollLoad"],[1,"my-5"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.qZA(),e.YNc(3,fn,4,3,"ng-container",2),e.ALo(4,"async"),e.qZA(),e.YNc(5,dn,2,0,"ng-template",null,3,e.W1O)),2&n){const r=e.MAs(6);e.xp6(2),e.hij(" ",i.title," "),e.xp6(1),e.Q6J("ngIf",!1===e.lcZ(4,3,i.ps.pokemonListFirstLoading$))("ngIfElse",r)}},dependencies:[T.O5,x.xw,x.SQ,x.Wh,V,un,T.Ov],styles:[".p-title[_ngcontent-%COMP%]{font-family:quicksand;font-weight:500;font-size:1.5rem}.main-container[_ngcontent-%COMP%]{inset:60px 0}.main-sidenav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:200px;background:rgba(255,0,0,.5)}.fixed-display[_ngcontent-%COMP%]{border:1px solid #ccc}.page-data[_ngcontent-%COMP%]{font-size:13px;font-family:comfortaa;font-weight:700}"]}),t})();var wt=P(2722),Lt=P(5829);let bt=(()=>{class t{constructor(n,i){this.store=n,this.httpService=i,this.pokemonSpecies$=this.store.select(me)}getSpecies(n){return this.httpService.get(n)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(c.yh),e.LFG(kt.O))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),mn=(()=>{class t{constructor(n){this.pss=n,this.flavorText="",this.compDest$=new q.x}ngOnInit(){this.pss.pokemonSpecies$.pipe((0,wt.R)(this.compDest$),(0,_.U)(n=>n?.flavor_text_entries[0].flavor_text)).subscribe({next:n=>{this.flavorText=n}})}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(bt))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-all-pokemon-detail-flavor-text"]],decls:2,vars:1,consts:[[1,"flavor","poppins","white-section"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._uU(1),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",i.flavorText,"\n"))},styles:[".detail[_ngcontent-%COMP%]{overflow:auto}.poke-title[_ngcontent-%COMP%]{font-size:30px}.white-section[_ngcontent-%COMP%]{border:1px solid #ccc;padding:15px;border-radius:10px;background-color:#fff}.poke-profile[_ngcontent-%COMP%]{width:33%}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:2px solid #682A68;border-radius:10px;padding:8px}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:0}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:22px}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .poke-type[_ngcontent-%COMP%]{font-size:13px;font-style:italic}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .poke-pic[_ngcontent-%COMP%]{height:15rem;background-color:#fff;border-radius:25px;margin-bottom:12px}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .poke-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.poke-profile.mobile-width[_ngcontent-%COMP%]{width:100%}"]}),t})();var hn=P(655),Pn=P(8603);class K{transform(o){let n="#ccc";if(o)switch(o){case"normal":n="#A8A878";break;case"fighting":n="#C03028";break;case"flying":n="#A890F0";break;case"poison":n="#A040A0";break;case"ground":n="#E0C068";break;case"rock":n="#B8A038";break;case"bug":n="#A8B820";break;case"ghost":n="#705898";break;case"steel":n="#B8B8D0";break;case"fire":n="#F08030";break;case"water":n="#6890F0";break;case"grass":n="#78C850";break;case"electric":n="#F8D030";break;case"psychic":n="#F85888";break;case"ice":n="#98D8D8";break;case"dragon":n="#7038F8";break;case"dark":n="#705848";break;case"fairy":n="#EE99AC"}return n}}function yn(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",16),e._uU(2),e.qZA(),e.BQk()),2&t){const n=o.$implicit,i=o.last;e.xp6(2),e.AsE(" ",n.type.name,"",i?"":","," ")}}K.\u0275fac=function(o){return new(o||K)},K.\u0275pipe=e.Yjl({name:"pokemonTypeColorHex",type:K,pure:!0}),(0,hn.gn)([(0,Pn.Z)()],K.prototype,"transform",null);const kn=function(t){return{"background-color":t}};function Sn(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div")(2,"h3",3),e._uU(3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5),e.ALo(6,"pokemonTypeColorHex"),e.TgZ(7,"div",6)(8,"h5",7)(9,"div",8)(10,"div",9)(11,"div",10),e._uU(12),e.qZA(),e.TgZ(13,"div",11),e.YNc(14,yn,3,2,"ng-container",12),e.qZA()()(),e.TgZ(15,"div",13),e._uU(16),e.qZA()(),e.TgZ(17,"div",14),e._UZ(18,"img",15),e.qZA(),e._UZ(19,"app-main-all-pokemon-detail-flavor-text"),e.qZA()()(),e.TgZ(20,"p"),e._uU(21),e.qZA()(),e.BQk()),2&t){const n=o.ngIf;e.xp6(3),e.hij(" ",n.name," "),e.xp6(1),e.Q6J("ngClass.lt-md","mobile-width"),e.xp6(1),e.Q6J("ngStyle",e.VKq(10,kn,e.lcZ(6,8,null==n.types[0]||null==n.types[0].type?null:n.types[0].type.name))),e.xp6(7),e.hij(" ",n.name," "),e.xp6(2),e.Q6J("ngForOf",n.types),e.xp6(2),e.hij(" #",n.id," "),e.xp6(2),e.Q6J("src",n.sprites.other["official-artwork"].front_default,e.LSH),e.xp6(3),e.hij(" Pokemon ",n.name," ")}}function On(t,o){1&t&&(e.TgZ(0,"div",17),e._UZ(1,"app-shared-loading"),e.qZA())}const vn=[{path:"",component:Me,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:gn,data:{pageTitle:"All Pokemon"}},{path:":pokemonName",component:(()=>{class t{constructor(n,i){this.ps=n,this.route=i,this.compId="pokemonDetails",this.pokemonDetail=void 0,this.compDest$=new q.x,this.route.data.pipe((0,wt.R)(this.compDest$),(0,_.U)(r=>r.pokemonDetail)).subscribe(r=>{this.pokemonDetail=r})}ngOnInit(){}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(I),e.Y36(H.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-all-pokemon-detail"]],decls:4,vars:1,consts:[[1,"detail"],[4,"ngIf"],["isLoading",""],[1,"poke-title"],[1,"float-left","poke-profile","mb-2","mr-2",3,"ngClass.lt-md"],[1,"card",3,"ngStyle"],[1,"card-body"],["fxLayout","row","fxLayoutAlign","space-between stretch","fxLayoutGap","10px",1,"card-title"],[1,"white-section","w-100","section-1"],["fxLayout","column","fxLayoutAlign","start start","fxLayoutGap","5px"],[1,"font-weight-bold"],["fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","start center","fxLayoutGap.gt-sm","5px"],[4,"ngFor","ngForOf"],["fxLayout","column","fxLayoutAlign","center center",1,"white-section","section-1","font-weight-bold"],[1,"poke-pic","text-center"],[3,"src"],[1,"poke-type","font-weight-normal"],[1,"my-5"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.YNc(1,Sn,22,12,"ng-container",1),e.qZA(),e.YNc(2,On,2,0,"ng-template",null,2,e.W1O)),2&n&&(e.xp6(1),e.Q6J("ngIf",i.pokemonDetail))},dependencies:[T.sg,T.O5,T.PC,x.xw,x.SQ,x.Wh,Lt.oO,Lt.Zl,V,mn,K],styles:[".detail[_ngcontent-%COMP%]{overflow:auto}.poke-title[_ngcontent-%COMP%]{font-size:30px}.white-section[_ngcontent-%COMP%]{border:1px solid #ccc;padding:15px;border-radius:10px;background-color:#fff}.poke-profile[_ngcontent-%COMP%]{width:33%}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:2px solid #682A68;border-radius:10px;padding:8px}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:0}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:22px}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .poke-type[_ngcontent-%COMP%]{font-size:13px;font-style:italic}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .poke-pic[_ngcontent-%COMP%]{height:15rem;background-color:#fff;border-radius:25px;margin-bottom:12px}.poke-profile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .poke-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.poke-profile.mobile-width[_ngcontent-%COMP%]{width:100%}"]}),t})(),data:{pageTitle:"Detail"},resolve:{pokemonDetail:(()=>{class t{constructor(n){this.ps=n}resolve(){return this.ps.selectedPokemon$.pipe((0,W.h)(n=>!!n),(0,_.U)(n=>n))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(I))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]}];let Mn=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[H.Bz.forChild(vn),H.Bz]}),t})();const Cn=[{display:"Refresh",id:"refresh",disabled:!1,icon:"refresh"}],xn=[(()=>{class t{constructor(n,i){this.actions$=n,this.ps=i}ngrxOnInitEffects(){return ht({actions:Cn})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(M.eX),e.LFG(I))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})()];var nt=P(3900),Tn=P(6943),Dt=P(4847);const An=[(()=>{class t{constructor(n,i,r){this.actions$=n,this.ps=i,this.rs=r,this.getPokemonShells$=(0,M.GW)(()=>this.actions$.pipe((0,M.l4)($),(0,M.IC)(()=>this.ps.pagination$),(0,W.h)(l=>!(void 0===l[0].page&&!l[1].nextPageUrl)),(0,nt.w)(l=>{let u=l[1];const y=l[0];let m;return y.scrollPosition&&(y.scrollPosition===D.Next?m=u.nextPageUrl:y.scrollPosition===D.Prev&&(m=u.previousPageUrl)),this.ps.getPokemonShells(y.page??0,m).pipe((0,_.U)(C=>lt({payload:C,fetchedDate:(new Date).getTime()})))}))),this.getPokemonFromRouteParams$=(0,M.GW)(()=>this.actions$.pipe((0,M.l4)(Tn.tE),(0,M.IC)(()=>this.rs.routeParams$),(0,W.h)(l=>!!l[1].pokemonName),(0,_.U)(l=>l[1].pokemonName),(0,_.U)(l=>j({pokemonName:l}))))}ngrxOnInitEffects(){return $({page:0})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(M.eX),e.LFG(I),e.LFG(Dt.c))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})()],En=(0,c.Lq)({apiLoading:!1,pokemonFetching:null,pokemon:void 0,error:!1,species:void 0},(0,c.on)(ct,t=>({...t,pokemon:void 0})),(0,c.on)(j,(t,{pokemonName:o})=>({...t,pokemonFetching:o,species:void 0,apiLoading:!0,pokemon:void 0})),(0,c.on)(J,(t,{payload:o})=>({...t,apiLoading:!1,pokemon:o,errMsg:void 0,error:!1})),(0,c.on)(at,(t,{errMsg:o})=>({...t,apiLoading:!1,errMsg:o,error:!0})),(0,c.on)(ut,(t,{payload:o})=>({...t,species:o})));var wn=P(262);const Ln=[(()=>{class t{constructor(n,i,r,l){this.actions$=n,this.ps=i,this.rs=r,this.pss=l,this.getPokemon$=(0,M.GW)(()=>this.actions$.pipe((0,M.l4)(j),(0,nt.w)(u=>this.ps.getPokemon(u.pokemonName).pipe((0,_.U)(m=>J({payload:m})),(0,wn.K)(m=>(console.log(m),(0,Mt.of)(at({errMsg:m.error+m.message})))))))),this.getPokemonSpeciesTrigger$=(0,M.GW)(()=>this.actions$.pipe((0,M.l4)(J),(0,_.U)(u=>pt({url:u.payload.species.url})))),this.getPokemonSpecies$=(0,M.GW)(()=>this.actions$.pipe((0,M.l4)(pt),(0,nt.w)(u=>this.pss.getSpecies(u.url).pipe((0,_.U)(m=>ut({payload:m,fetchedDate:(new Date).getTime()}))))))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(M.eX),e.LFG(I),e.LFG(Dt.c),e.LFG(bt))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})()];let bn=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),Dn=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Aw.forFeature(dt,ft),M.sQ.forFeature(An),c.Aw.forFeature(mt,Pt),M.sQ.forFeature(xn),c.Aw.forFeature(yt,En),M.sQ.forFeature(Ln),Ut.n,Zt,Nt.d,sn,bn,Mn]}),t})()}}]);