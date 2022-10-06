"use strict";(self.webpackChunkpokemondb=self.webpackChunkpokemondb||[]).push([[266],{6266:(Et,R,O)=>{O.r(R),O.d(R,{MainModule:()=>Ot});var T=O(493),f=O(9653),W=O(6895),Y=O(9814),X=O(7061),m=O(4650);let Z=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[W.ez,Y.o9,X.p]}),t})();var J=O(851),Q=O(6580),C=O(7337);let D=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-main"]],decls:2,vars:0,consts:[[1,"container-fluid","mb-5"]],template:function(i,u){1&i&&(m.TgZ(0,"div",0),m._UZ(1,"router-outlet"),m.qZA())},dependencies:[C.lC]}),t})();var V=O(529),l=(()=>{return(t=l||(l={}))[t.EntitiesOnly=0]="EntitiesOnly",t[t.Both=1]="Both",t[t.None=2]="None",l;var t})();function p(t){return function(i,u){const h={ids:[...u.ids],entities:{...u.entities}},g=t(i,h);return g===l.Both?Object.assign({},u,h):g===l.EntitiesOnly?{...u,entities:h.entities}:u}}function S(t,s){const i=s(t);return(0,m.X6Q)()&&void 0===i&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",s.toString()),i}function x(t){function s(a,o){const n=S(a,t);return n in o.entities?l.None:(o.ids.push(n),o.entities[n]=a,l.Both)}function i(a,o){let n=!1;for(const e of a)n=s(e,o)!==l.None||n;return n?l.Both:l.None}function h(a,o){const n=S(a,t);return n in o.entities?(o.entities[n]=a,l.EntitiesOnly):(o.ids.push(n),o.entities[n]=a,l.Both)}function P(a,o){const e=(a instanceof Array?a:o.ids.filter(r=>a(o.entities[r]))).filter(r=>r in o.entities).map(r=>delete o.entities[r]).length>0;return e&&(o.ids=o.ids.filter(r=>r in o.entities)),e?l.Both:l.None}function v(a,o){return L([a],o)}function L(a,o){const n={};return(a=a.filter(r=>r.id in o.entities)).length>0?a.filter(c=>function b(a,o,n){const r=Object.assign({},n.entities[o.id],o.changes),c=S(r,t),d=c!==o.id;return d&&(a[o.id]=c,delete n.entities[o.id]),n.entities[c]=r,d}(n,c,o)).length>0?(o.ids=o.ids.map(c=>n[c]||c),l.Both):l.EntitiesOnly:l.None}function I(a,o){const n=[],e=[];for(const d of a){const M=S(d,t);M in o.entities?e.push({id:M,changes:d}):n.push(d)}const r=L(e,o),c=i(n,o);switch(!0){case c===l.None&&r===l.None:return l.None;case c===l.Both||r===l.Both:return l.Both;default:return l.EntitiesOnly}}return{removeAll:function A(a){return Object.assign({},a,{ids:[],entities:{}})},addOne:p(s),addMany:p(i),setAll:p(function u(a,o){return o.ids=[],o.entities={},i(a,o),l.Both}),setOne:p(h),setMany:p(function g(a,o){const n=a.map(e=>h(e,o));switch(!0){case n.some(e=>e===l.Both):return l.Both;case n.some(e=>e===l.EntitiesOnly):return l.EntitiesOnly;default:return l.None}}),updateOne:p(v),updateMany:p(L),upsertOne:p(function G(a,o){return I([a],o)}),upsertMany:p(I),removeOne:p(function y(a,o){return P([a],o)}),removeMany:p(P),map:p(function F(a,o){return L(o.ids.reduce((r,c)=>{const d=a(o.entities[c]);return d!==o.entities[c]&&r.push({id:c,changes:d}),r},[]).filter(({id:r})=>r in o.entities),o)}),mapOne:p(function U({map:a,id:o},n){const e=n.entities[o];return e?v({id:o,changes:a(e)},n):l.None})}}function et(t,s){const{removeOne:i,removeMany:u,removeAll:h}=x(t);function g(n,e){return y([n],e)}function y(n,e){const r=n.filter(c=>!(S(c,t)in e.entities));return 0===r.length?l.None:(o(r,e),l.Both)}function A(n,e){const r=S(n,t);return r in e.entities?(e.ids=e.ids.filter(c=>c!==r),o([n],e),l.Both):g(n,e)}function v(n,e){return F([n],e)}function F(n,e){const r=[],c=n.filter(d=>function L(n,e,r){if(!(e.id in r.entities))return!1;const d=Object.assign({},r.entities[e.id],e.changes),M=S(d,t);return delete r.entities[e.id],n.push(d),M!==e.id}(r,d,e)).length>0;if(0===r.length)return l.None;{const d=e.ids,M=[];return e.ids=e.ids.filter((E,k)=>E in e.entities||(M.push(k),!1)),o(r,e),!c&&M.every(E=>e.ids[E]===d[E])?l.EntitiesOnly:l.Both}}function a(n,e){const r=[],c=[];for(const E of n){const k=S(E,t);k in e.entities?c.push({id:k,changes:E}):r.push(E)}const d=F(c,e),M=y(r,e);switch(!0){case M===l.None&&d===l.None:return l.None;case M===l.Both||d===l.Both:return l.Both;default:return l.EntitiesOnly}}function o(n,e){n.sort(s);const r=[];let c=0,d=0;for(;c<n.length&&d<e.ids.length;){const M=n[c],E=S(M,t),k=e.ids[d];s(M,e.entities[k])<=0?(r.push(E),c++):(r.push(k),d++)}e.ids=r.concat(c<n.length?n.slice(c).map(t):e.ids.slice(d)),n.forEach((M,E)=>{e.entities[t(M)]=M})}return{removeOne:i,removeMany:u,removeAll:h,addOne:p(g),updateOne:p(v),upsertOne:p(function I(n,e){return a([n],e)}),setAll:p(function P(n,e){return e.entities={},e.ids=[],y(n,e),l.Both}),setOne:p(A),setMany:p(function b(n,e){const r=n.map(c=>A(c,e));switch(!0){case r.some(c=>c===l.Both):return l.Both;case r.some(c=>c===l.EntitiesOnly):return l.EntitiesOnly;default:return l.None}}),addMany:p(y),updateMany:p(F),upsertMany:p(a),map:p(function U(n,e){return F(e.ids.reduce((c,d)=>{const M=n(e.entities[d]);return M!==e.entities[d]&&c.push({id:d,changes:M}),c},[]),e)}),mapOne:p(function G({map:n,id:e},r){const c=r.entities[e];return c?v({id:e,changes:n(c)},r):l.None})}}const w=(0,f.PH)("[Pokemon All/API] Get all pokemon start",(0,f.Ky)()),j=(0,f.PH)("[Pokemon All/API] Get all pokemon successful",(0,f.Ky)()),lt=(0,f.PH)("[Pokemon All/API] Get all pokemon failure",(0,f.Ky)()),B=function nt(t={}){const{selectId:s,sortComparer:i}={selectId:t.selectId??(y=>y.id),sortComparer:t.sortComparer??!1},u=function _(){return{getInitialState:function t(s={}){return Object.assign({ids:[],entities:{}},s)}}}(),h=function tt(){return{getSelectors:function t(s){const i=y=>y.ids,u=y=>y.entities,h=(0,f.P1)(i,u,(y,P)=>y.map(A=>P[A])),g=(0,f.P1)(i,y=>y.length);return s?{selectIds:(0,f.P1)(s,i),selectEntities:(0,f.P1)(s,u),selectAll:(0,f.P1)(s,h),selectTotal:(0,f.P1)(s,g)}:{selectIds:i,selectEntities:u,selectAll:h,selectTotal:g}}}}();return{selectId:s,sortComparer:i,...u,...h,...i?et(s,i):x(s)}}({selectId:function at(t){return t.name}}),ut=B.getInitialState({apiWorking:!1,firstTimeLoading:!0,errMsg:void 0,error:!1,lastFetchedDate:void 0,pagination:{limit:20,offset:0,firstOffset:0}}),$=(0,f.Lq)(ut,(0,f.on)(w,(t,{pagination:s})=>{let i=t.pagination;return s&&(i={...t.pagination,...s}),{...t,apiWorking:!0,pagination:i}}),(0,f.on)(j,(t,{payload:s,fetchedDate:i})=>{const u=s.results,h=((t,s)=>{const i=s.count,u=s.next,h=s.previous,g=t.offset+t.limit>i?null:t.offset+t.limit,y=t.offset-t.limit<0?0:t.offset-t.limit,P=Math.ceil(i/20),A=Math.ceil(t.offset/t.limit)+1;return{offset:t.offset,limit:t.limit,nextOffset:g,prevOffset:y,firstOffset:0,lastOffset:20*P-20,pages:P,page:A,totalCount:i,nextPageUrl:u,previousPageUrl:h}})(t.pagination,s);return B.setAll(u,{...t,apiWorking:!1,firstTimeLoading:!1,error:!1,errMsg:void 0,pagination:h,lastFetchedDate:i})}),(0,f.on)(lt,(t,{errMsg:s})=>({...t,apiWorking:!1,errMsg:s,error:!0}))),z="allPokemonShells",N=(0,f.ZF)(z),dt=((0,f.P1)(N,B.getSelectors().selectIds),(0,f.P1)(N,B.getSelectors().selectEntities),(0,f.P1)(N,B.getSelectors().selectAll),(0,f.P1)(N,B.getSelectors().selectTotal),(0,f.P1)(N,t=>t.firstTimeLoading),(0,f.P1)(N,t=>t.pagination));var ft=O(4691);let H=(()=>{class t{constructor(i,u){this.httpService=i,this.store=u,this.pagination$=this.store.select(dt)}getPokemonShells(i){let u=new V.LE;return u=u.set("offset",i.offset),u=u.set("limit",i.limit),this.httpService.get("https://pokeapi.co/api/v2/pokemon",u)}fetchPokemonShells(i){this.store.dispatch(w({pagination:i}))}}return t.\u0275fac=function(i){return new(i||t)(m.LFG(ft.O),m.LFG(f.yh))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const mt=[{path:"",component:D,children:[{path:"",redirectTo:"species",pathMatch:"full"},{path:"species",component:(()=>{class t{constructor(i){this.ps=i}ngOnInit(){this.ps.fetchPokemonShells()}}return t.\u0275fac=function(i){return new(i||t)(m.Y36(H))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-main-all"]],decls:1,vars:0,template:function(i,u){1&i&&m._uU(0,"All ")}}),t})(),data:{pageTitle:"Pokemon By Species"}}]}];let ht=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[C.Bz.forChild(mt),C.Bz]}),t})();var yt=O(3900),Mt=O(4004);const gt=[(()=>{class t{constructor(i,u){this.actions$=i,this.ps=u,this.getPokemonShells$=(0,T.GW)(()=>this.actions$.pipe((0,T.l4)(w),(0,T.IC)(()=>this.ps.pagination$),(0,yt.w)(h=>(console.log(h[0]?.pagination),this.ps.getPokemonShells(h[1]).pipe((0,Mt.U)(P=>(console.log(P),j({payload:P,fetchedDate:(new Date).getTime()}))))))))}}return t.\u0275fac=function(i){return new(i||t)(m.LFG(T.eX),m.LFG(H))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac}),t})()];let Ot=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[f.Aw.forFeature(z,$),T.sQ.forFeature(gt),Q.n,Z,J.d,ht]}),t})()}}]);