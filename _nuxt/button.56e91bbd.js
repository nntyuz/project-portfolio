import{a as l,b as r,o as s,e as i,f as a,h as u,r as d,u as p}from"./entry.c8fa481b.js";const f={__name:"button",props:{type:{type:String,default:"main"},icon:String,iconPosition:{type:String,default:"right"},size:{type:String,default:"large"},disabled:Boolean},emits:["click"],setup(n){const t=n,c=r(()=>{let e=`button-component flex items-center justify-center type-${t.type} size-${t.size}`;return t.disabled&&(e+=" disabled"),t.icon&&(e+=` icon-position-${t.iconPosition} gap-8px`),e});return(e,o)=>(s(),i("button",{class:a(p(c)),onClick:o[0]||(o[0]=m=>e.$emit("click"))},[n.icon?(s(),i("div",{key:0,class:a(n.icon)},null,2)):u("",!0),d(e.$slots,"default",{},void 0,!0)],2))}},y=l(f,[["__scopeId","data-v-62ad8c0f"]]);export{y as default};
