"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[19],{2019:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r=t(2791),a=t(9434),u=t(4270),i=t(3634),o="Contact_btndel__Jk1PN",c=t(184),s=function(n){var e=n.contact,t=(0,a.I0)();return(0,c.jsxs)("div",{children:[e.name,": ",e.number,(0,c.jsx)("button",{className:o,onClick:function(){return t((0,i.GK)(e.id))},children:"Delete"})]})},l="NOT_FOUND";var f=function(n,e){return n===e};function p(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?f:r,u=t.maxSize,i=void 0===u?1:u,o=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),s=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:l},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return l}return{get:r,put:function(e,a){r(e)===l&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function p(){var e=s.get(arguments);if(e===l){if(e=n.apply(null,arguments),o){var t=s.getEntries(),r=t.find((function(n){return o(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function d(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function m(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var u,i=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,l=s.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],m=d(r),v=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return u=v.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:v,dependencies:m,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var v=m(p),h=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},_=v([function(n){return n.contacts.items},function(n){return n.filter.status}],(function(n,e){var t=e;return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})),x="ContactList_li__dzNT+",j=function(){var n=(0,a.v9)(_);return(0,c.jsx)("ul",{children:n.map((function(n){return(0,c.jsx)("li",{className:x,children:(0,c.jsx)(s,{contact:n})},n.id)}))})},b="ContactForm_form__dhl+T",g="ContactForm_p__F6qmU",C="ContactForm_input__Bl93P",N="ContactForm_btn__wll+u",k=function(){var n=(0,a.I0)();return(0,c.jsxs)("form",{className:b,onSubmit:function(e){e.preventDefault();var t=e.currentTarget,r={name:t.elements.name.value,number:t.elements.number.value};n((0,i.uK)(r)),t.reset()},children:[(0,c.jsx)("p",{className:g,children:"Name"}),(0,c.jsx)("input",{className:C,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,c.jsx)("p",{className:g,children:"Number"}),(0,c.jsx)("input",{className:C,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,c.jsx)("button",{className:N,type:"submit",children:"Add contact"})]})},w=t(8429),A="Filter_p__1rMTA",F=function(){var n=(0,a.I0)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:A,children:"Find contacts by name"}),(0,c.jsx)("input",{onChange:function(e){var t=e.target;return n((0,w.b)(t.value))},type:"text",name:"filter"})]})},z="App_container__ZdBeZ",q="App_loading__BxIv0";function E(){var n=(0,a.I0)(),e=(0,a.v9)(h),t=(0,a.v9)(y);return(0,r.useEffect)((function(){n((0,i.yF)())}),[n]),(0,c.jsxs)("div",{className:z,children:[(0,c.jsx)(u.q,{children:(0,c.jsx)("h1",{children:"Phonebook"})}),(0,c.jsx)(k,{}),(0,c.jsx)("h2",{children:"Contacts"}),e&&!t&&(0,c.jsx)("p",{className:q,children:"Loading..."}),(0,c.jsx)(F,{}),(0,c.jsx)(j,{})]})}}}]);
//# sourceMappingURL=19.315eeb8f.chunk.js.map