"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[896],{3896:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(2791),a=n(9434),o=n(6907),u="ContactList_contacts__list__hSN0M",c=n(3634),i="ContactsItem_delete__contacts__+ULTl",s="ContactsItem_contactsItem__woGWp",l=n(184),f=function(e){var t=e.id,n=e.name,r=e.phone,o=(0,a.I0)();return(0,l.jsxs)("li",{className:s,children:[n+": "+r,(0,l.jsx)("button",{className:i,type:"button",onClick:function(){return o((0,c._f)(t))},children:"Delete"})]})},p="NOT_FOUND";var d=function(e,t){return e===t};function m(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?d:r,o=n.maxSize,u=void 0===o?1:o,c=n.resultEqualityCheck,i=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),s=1===u?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:p},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(i):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return p}return{get:r,put:function(t,a){r(t)===p&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(u,i);function l(){var t=s.get(arguments);if(t===p){if(t=e.apply(null,arguments),c){var n=s.getEntries(),r=n.find((function(e){return c(e.value,t)}));r&&(t=r.value)}s.put(arguments,t)}return t}return l.clearCache=function(){return s.clear()},l}function v(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function h(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,u=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,l=s.memoizeOptions,f=void 0===l?n:l,p=Array.isArray(f)?f:[f],d=v(r),m=e.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return o=m.apply(null,e)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:m,dependencies:d,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return a}var _=h(m),y=function(e){return e.filter},x=function(e){return e.contacts.items},C=function(e){return e.contacts.isLoading},g=_([x,y],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),b=function(){var e=(0,a.v9)(g);return(0,l.jsx)("ul",{className:u,children:e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,l.jsx)(f,{id:t,name:n,phone:r},t)}))})},j=n(9439),w="ContactForm_addContacts__5b4Ah",N="ContactForm_form__dhl+T",k="ContactForm_contactsLable__wW0ez",A="ContactForm_contactsInput__H4gys",F=function(){var e=(0,r.useState)(""),t=(0,j.Z)(e,2),n=t[0],o=t[1],u=(0,r.useState)(""),i=(0,j.Z)(u,2),s=i[0],f=i[1],p=(0,a.I0)(),d=(0,a.v9)(x);return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{className:N,onSubmit:function(e){e.preventDefault();var t=d.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}));t?alert("".concat(n," is already in contacts.")):(p((0,c.el)({name:n,number:s})),o(""),f(""))},children:[(0,l.jsx)("label",{className:k,children:"Contact name"}),(0,l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(e){o(e.target.value)},placeholder:"Mango...",className:A}),(0,l.jsx)("label",{className:k,children:"Phone"}),(0,l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:function(e){f(e.target.value)},placeholder:"+1111111111111",className:A}),(0,l.jsx)("button",{type:"submit",className:w,children:"Add contact"})]})})},I=n(1634),z="Filter_filterContainer__8G57N",L="Filter_filterInput__1Cysk",E=function(){var e=(0,a.I0)(),t=(0,a.v9)(y);return(0,l.jsxs)("div",{className:z,children:[(0,l.jsx)("label",{children:" Find contacts by name"}),(0,l.jsx)("input",{type:"text",className:L,value:t,onChange:function(t){return e((0,I.sP)(t.target.value))}})]})},S="Contacts_contactsContainer__7xvg8";function q(){var e=(0,a.I0)(),t=(0,a.v9)(C);return(0,r.useEffect)((function(){e((0,c.yF)())}),[e]),(0,l.jsx)("div",{className:S,children:(0,l.jsx)("div",{children:(0,l.jsxs)(o.B6,{children:[(0,l.jsx)(F,{}),(0,l.jsx)(E,{}),(0,l.jsx)("div",{children:t&&"Request in progress..."}),(0,l.jsx)(b,{})]})})})}}}]);
//# sourceMappingURL=896.f6c99d3d.chunk.js.map