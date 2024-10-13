import{_ as O,m as A,g as m,h as $,i as T,j as W,k as w,l as D,n as N,o,c as n,r as _,d as B,t as p,q as U,s as x,w as y,v as b,x as h,y as I,z as j,a as u,A as q,B as E,F as S,C as z,b as F,D as G}from"./D_Ho1R15.js";import{u as J,_ as P,w as Q}from"./DsJayNuO.js";import"./BW8rxMOU.js";import"./BQkc-AXV.js";import"./DvDH6DOc.js";const R={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},H={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},l=A(m.ui.strategy,m.ui.badge,R),K=$({inheritAttrs:!1,props:{size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(l.size).includes(e)}},color:{type:String,default:()=>l.default.color,validator(e){return[...m.ui.colors,...Object.keys(l.color)].includes(e)}},variant:{type:String,default:()=>l.default.variant,validator(e){return[...Object.keys(l.variant),...Object.values(l.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:r}=T("badge",W(e,"ui"),l),{size:s,rounded:d}=J({ui:t,props:e}),g=w(()=>{var v,k;const c=((k=(v=t.value.color)==null?void 0:v[e.color])==null?void 0:k[e.variant])||t.value.variant[e.variant];return D(N(t.value.base,t.value.font,d.value,t.value.size[s.value],c==null?void 0:c.replaceAll("{color}",e.color)),e.class)});return{attrs:r,badgeClass:g}}});function X(e,t,r,s,d,g){return o(),n("span",U({class:e.badgeClass},e.attrs),[_(e.$slots,"default",{},()=>[B(p(e.label),1)])],16)}const Y=O(K,[["render",X]]),Z=A(m.ui.strategy,m.ui.card,H),ee=$({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:r}=T("card",W(e,"ui"),Z),s=w(()=>D(N(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:r,cardClass:s}}});function te(e,t,r,s,d,g){return o(),x(I(e.$attrs.onSubmit?"form":e.as),U({class:e.cardClass},e.attrs),{default:y(()=>[e.$slots.header?(o(),n("div",{key:0,class:b([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[_(e.$slots,"header")],2)):h("",!0),e.$slots.default?(o(),n("div",{key:1,class:b([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[_(e.$slots,"default")],2)):h("",!0),e.$slots.footer?(o(),n("div",{key:2,class:b([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[_(e.$slots,"footer")],2)):h("",!0)]),_:3},16,["class"])}const ae=O(ee,[["render",te]]),oe={class:"flex"},re={class:"w-1/4 p-4 overflow-y-auto"},se={class:"sticky top-4 h-16"},ne={class:"mt-6"},ie=["onClick"],le={class:"text-xl font-bold mb-2"},de={class:"mb-4"},ue={key:0,class:"mb-4"},ce=$({__name:"WorkflowList",props:{workflowCollections:{type:Array,required:!0}},setup(e){const t=e,r=j(""),s=j(null),d=j(null),g=w(()=>t.workflowCollections.flatMap(i=>i.workflows)),c=w(()=>g.value.filter(i=>i.definition.name.toLowerCase().includes(r.value.toLowerCase())));function v(i){const f=document.getElementById(`workflow-${i.definition.uuid}`);f&&s.value&&(s.value.scrollTop=f.offsetTop-s.value.offsetTop)}function k(i){d.value=i,v(i)}return(i,f)=>{const V=Y,L=P,M=ae;return o(),n("div",oe,[u("div",re,[u("div",se,[q(u("input",{"onUpdate:modelValue":f[0]||(f[0]=a=>r.value=a),type:"text",placeholder:"Search workflows",class:"w-full mb-4 p-2 border rounded"},null,512),[[E,r.value]])]),u("ul",ne,[(o(!0),n(S,null,z(c.value,a=>(o(),n("li",{key:a.definition.uuid,onClick:C=>k(a),class:b(["cursor-pointer hover:bg-gray-100 p-2 rounded",{"bg-blue-100":d.value===a}])},p(a.definition.name),11,ie))),128))])]),u("div",{class:"w-3/4 p-4 overflow-y-auto",ref_key:"workflowContainer",ref:s},[(o(!0),n(S,null,z(c.value,a=>(o(),x(M,{key:a.definition.uuid,id:`workflow-${a.definition.uuid}`,class:b(["mb-4 p-6",{"border-2 border-blue-500":d.value===a}])},{header:y(()=>[u("h2",le,p(a.definition.name),1)]),default:y(()=>[u("p",de,p(a.definition.annotation),1),a.definition.tags&&a.definition.tags.length>0?(o(),n("div",ue,[(o(!0),n(S,null,z(a.definition.tags,C=>(o(),x(V,{key:C,class:"mr-2 mb-2",color:"primary",variant:"soft"},{default:y(()=>[B(p(C),1)]),_:2},1024))),128))])):h("",!0),F(L,{to:`/workflow/${a.definition.uuid}`,class:"text-primary-400"},{default:y(()=>[B(" Details")]),_:2},1032,["to"])]),_:2},1032,["id","class"]))),128))],512)])}}}),me=$({__name:"index",setup(e){return(t,r)=>(o(),x(ce,{workflowCollections:G(Q)},null,8,["workflowCollections"]))}});export{me as default};
