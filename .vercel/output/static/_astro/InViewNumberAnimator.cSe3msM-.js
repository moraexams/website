import{r as v,a as u}from"./index._OACqPSs.js";var d={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function h(){if(x)return f;x=1;var s=v(),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,_=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function m(n,e,c){var r,t={},o=null,R=null;c!==void 0&&(o=""+c),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(R=e.ref);for(r in e)p.call(e,r)&&!i.hasOwnProperty(r)&&(t[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:a,type:n,key:o,ref:R,props:t,_owner:_.current}}return f.Fragment=l,f.jsx=m,f.jsxs=m,f}var y;function S(){return y||(y=1,d.exports=h()),d.exports}var b=S();function O({targetValue:s,duration:a=2e3,suffix:l}){const[p,_]=u.useState(0),[i,m]=u.useState(!1),n=u.useRef(null),e=u.useRef(null),c=r=>{n.current||(n.current=r);const t=r-n.current,o=Math.min(t/a,1);_(Math.floor(o*s)),t<a&&i&&requestAnimationFrame(c)};return u.useEffect(()=>{const r={root:null,rootMargin:"0px",threshold:1},t=new IntersectionObserver(o=>{o[0].isIntersecting&&(m(!0),t.disconnect())},r);return e.current&&t.observe(e.current),()=>{t.disconnect()}},[]),u.useEffect(()=>{i&&s>=p&&(n.current=null,requestAnimationFrame(c))},[i,s]),b.jsx("span",{ref:e,style:{fontFamily:"Noto Sans, monospace"},children:(i?p.toString():"0").padStart(s.toString().length,"0").concat(l||"")})}export{O as default};
