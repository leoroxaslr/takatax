(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2861],{49914:function(e,n,t){"use strict";t.d(n,{Z:function(){return L}});var r=t(47568),s=t(10253),a=t(70655),o=t(85893),i=t(83899),d=t(78722),c=t.n(d),l=t(32117),u=t.n(l),m=t(95620),f=t(25640),p=t(78224),v=t.n(p),_=t(97989),g=t.n(_),R=t(6),h=t.n(R),E=t(80753),S=t.n(E),b=t(40189),Z=t.n(b),D=t(99761);function N(e){var n=e.domainName,t=e.dsRecord,r=e.dnsSecRules,s=(0,f.useIntl)(),a=(0,D.Z)(n,r).map((function(e){return{field:s.formatMessage({id:e.labelId}),value:t[e.field]}}));return(0,o.jsx)("div",{className:S().container,children:(0,o.jsx)(h(),{data:a})})}N.propTypes={domainName:Z().string,dsRecord:Z().object,dnsSecRules:Z().object};var x=t(47724),j=t(90254),y=t.n(j),M=t(93208),A=t(52269),I=t(92930),T=t(67331),C=t(35340),k=t(62877);function L(e){var n,t=e.dsRecord,d=e.onClose,l=e.domainName,p=e.onSuccess,_=e.dnsSecRules,R=e.showNorthStar;(0,i.useEffect)((function(){I.Z.logAnalyticsEvent(T.z.dns_ds_records_modal_delete)}),[]);var h=(0,M.i)(null===A.aT||void 0===A.aT||null===(n=A.aT.supportContacts)||void 0===n?void 0:n.technicalSupportPhone),E=(0,s.Z)((0,C.E)("domainDnsApi","deleteDsRecord",{params:{dsRecordId:t.id,domainName:l}},x.cM),2),S=E[0],b=E[1].sendRequest,Z=(0,k.An)(S);function D(){return(D=(0,r.Z)((function(){return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return I.Z.logAnalyticsEvent(T.z.dns_ds_records_modal_delete_submit),[4,b()];case 1:return e.sent().error?(I.Z.logAnalyticsEvent(T.z.dns_ds_records_modal_delete_success),[2]):(I.Z.logAnalyticsEvent(T.z.dns_ds_records_modal_delete_error),p(),d(),[2])}}))}))).apply(this,arguments)}var j=(0,f.useIntl)(),L=Z===x.IK.LOAD;return(0,o.jsxs)("div",{children:[Z===x.IK.ERROR&&(0,o.jsx)(y(),{emphasis:"critical",title:(0,o.jsx)(c().h2,{text:j.formatMessage({id:"dsRecordDeleteSubmitError"},{supportPhoneNumber:h})}),className:"mb-4"}),(0,o.jsx)(c().p,{text:j.formatMessage({id:"dsRecordDeleteMessage"})}),(0,o.jsx)(N,{domainName:l,dsRecord:t,dnsSecRules:_}),(0,o.jsxs)(m.default,{gap:"md",children:[(0,o.jsx)(u(),{design:"primary",id:"dnsManualDnsSecDeleteModalDelete",text:j.formatMessage({id:"dnsDeleteRecord"}),disabled:L,icon:L&&(0,o.jsx)(g(),{size:"sm"})||null,"data-eid":v().formatEid("dns","ManualDnsSecDelete","click"),onClick:function(){return D.apply(this,arguments)}}),(0,o.jsx)(u(),{text:j.formatMessage({id:"cancel"}),design:R?"secondary":null,disabled:L,"data-eid":v().formatEid("dns","ManualDnsSecDelete","click"),onClick:function(){I.Z.logAnalyticsEvent(T.z.dns_ds_records_modal_delete_cancel),d()}})]})]})}L.propTypes={domainName:Z().string,dsRecord:Z().object,onClose:Z().func,onSuccess:Z().func,dnsSecRules:Z().object}},45733:function(e,n,t){"use strict";t.d(n,{Z:function(){return z}});var r=t(47568),s=t(14924),a=t(26042),o=t(69396),i=t(10253),d=t(70655),c=t(85893),l=t(83899),u=t(25640),m=t(95620),f=t(97989),p=t.n(f),v=t(32117),_=t.n(v),g=t(78224),R=t.n(g),h=t(65366),E=t(21309),S=t(40189),b=t.n(S),Z=t(99761),D=t(23102);function N(e){var n=e.createHandleChange,t=e.formData,r=e.fieldErrors,i=e.domainName,d=e.dnsSecRules,l=(0,u.useIntl)(),m=(0,Z.Z)(i,d).map((function(e){var i,u=e.field,m=e.fieldType,f=e.type,p=e.optionsRule,v=e.span,_=e.requiredRule,g=e.labelId,R=e.minRule,S=e.maxRule,b=e.minLengthRule,Z=e.maxLengthRule,N=r[u],x=t[u];f===D.Sk.NUMBER?x="number"===typeof x?x.toString():m===D.FH.SELECT?"null":"":x||(x="");var j=(i={id:"".concat(u,"-").concat(m)},(0,s.Z)(i,"data-testid","".concat(u,"-").concat(m)),(0,s.Z)(i,"name",u),(0,s.Z)(i,"value",x),(0,s.Z)(i,"className","col-md-".concat(v)),(0,s.Z)(i,"onChange",n(u,f)),(0,s.Z)(i,"required",d[_]||_===D.k9),(0,s.Z)(i,"label",l.formatMessage({id:g})),(0,s.Z)(i,"invalid",!!N),(0,s.Z)(i,"errorMessage",N?l.formatMessage({id:N},{minValue:d[R],maxValue:d[S],minLength:d[b],maxLength:d[Z]}):null),i);return m===D.FH.SELECT?(0,c.jsxs)(E.Z,(0,o.Z)((0,a.Z)({},j),{children:[(0,c.jsx)("option",{value:"null",disabled:!0}),d[p].map((function(e){return(0,c.jsx)("option",{value:e,children:e},e)}))]}),u):m===D.FH.INPUT?(0,c.jsx)(h.default,(0,o.Z)((0,a.Z)({},j),{type:f}),u):null}));return(0,c.jsx)("div",{className:"row mb-2",children:m})}N.propTypes={createHandleChange:b().func,formData:b().object,dnsSecRules:b().object,domainName:b().string,fieldErrors:b().object};var x=t(47724),j=t(90254),y=t.n(j),M=t(52269),A=t(78722),I=t.n(A),T=t(93208),C=t(92930),k=t(67331);function L(e,n){var t={};return D.XE.forEach((function(r){var s=r.supportedRule,a=r.requiredRule,o=r.type,i=r.optionsRule,d=r.minRule,c=r.maxRule,l=r.minLengthRule,u=r.maxLengthRule,m=r.field,f=n[m];if(s===D.k9||e[s]){if(a===D.k9||e[a])if(o===D.Sk.NUMBER){if("number"!==typeof f)return void(t[m]=D.QY.REQUIRED)}else if(!f)return void(t[m]=D.QY.REQUIRED);i&&f&&!e[i].includes(f)?t[m]=D.QY.INVALID_OPTION:d&&e[d]>f?t[m]=D.QY.MIN_VALUE:c&&e[c]<f?t[m]=D.QY.MAX_VALUE:l&&e[l]>f.length?t[m]=D.QY.MIN_LENGTH:u&&e[u]<f.length&&(t[m]=D.QY.MAX_LENGTH)}})),{ok:0===Object.keys(t).length,errors:t}}var O=t(35340),U=t(62877),w={DS_RECORD_ALREADY_EXISTS:"dsRecordRecordExistsSubmitError",DEFAULT:"dsRecordGeneralSubmitError"};function z(e){var n,t,f=e.editingDsRecord,v=e.domainName,g=e.onClose,h=e.className,E=e.dnsSecRules,S=e.onSuccess,b=e.showNorthStar;(0,l.useEffect)((function(){C.Z.logAnalyticsEvent(f?k.z.dns_ds_records_modal_edit_form:k.z.dns_ds_records_modal_add_form)}),[]);var Z=(0,T.i)(null===M.aT||void 0===M.aT||null===(n=M.aT.supportContacts)||void 0===n?void 0:n.technicalSupportPhone),j=(0,l.useState)({}),A=j[0],z=j[1],K=(0,l.useState)(f||function(e){var n={keyTag:null,algorithm:null,digestType:null,digest:"",flags:null,keyDataAlgorithm:null,maxSigLife:null,protocol:null,publicKey:""};return D.XE.forEach((function(t){var r=t.supportedRule,s=t.defaultRule,a=t.field;e[r]&&s&&(n[a]=e[s])})),n}(E)),P=K[0],V=K[1],q={domainName:v};f&&(q.dsRecordId=null===f||void 0===f?void 0:f.id);var F=(0,i.Z)((0,O.E)("domainDnsApi",f?"putDsRecord":"postDsRecord",{params:q},x.cM),2),Q=F[0],H=F[1].sendRequest,W=(0,U.An)(Q),Y=W===x.IK.LOAD,B=(0,u.useIntl)();function G(){return G=(0,r.Z)((function(e){var n,t,r,s;return(0,d.__generator)(this,(function(a){switch(a.label){case 0:return e.preventDefault(),n=L(E,P),t=n.ok,r=n.errors,z(r),t?(C.Z.logAnalyticsEvent(f?k.z.dns_ds_records_modal_edit_form_submit:k.z.dns_ds_records_modal_add_form_submit),s={algorithm:P.algorithm,digest:P.digest,digestType:P.digestType,flags:P.flags,keyDataAlgorithm:P.keyDataAlgorithm,keyTag:P.keyTag,maxSigLife:P.maxSigLife,protocol:P.protocol,publicKey:P.publicKey},[4,H({body:s})]):[2];case 1:return a.sent().error?(C.Z.logAnalyticsEvent(f?k.z.dns_ds_records_modal_edit_form_error:k.z.dns_ds_records_modal_add_form_error),[2]):(C.Z.logAnalyticsEvent(f?k.z.dns_ds_records_modal_edit_form_success:k.z.dns_ds_records_modal_add_form_success),[4,S()]);case 2:return a.sent(),g(),[2]}}))})),G.apply(this,arguments)}var X,$=(X=!!f,{submit:R().formatEid("ManualDnsSecForm","".concat(X?"edit":"add","Submit"),"click"),cancel:R().formatEid("ManualDnsSecForm","".concat(X?"edit":"add","Cancel"),"click")});return(0,c.jsx)("form",{onSubmit:function(e){return G.apply(this,arguments)},className:h||"p-3 bg-medium",children:(0,c.jsxs)("div",{className:b?null:"container p-0",children:[(0,c.jsx)(N,{domainName:v,fieldErrors:A,createHandleChange:function(e,n){return function(t){if(n===D.Sk.NUMBER&&(t="null"===t||""===t?null:parseInt(t,10)),V((function(n){return(0,o.Z)((0,a.Z)({},n),(0,s.Z)({},e,t))})),A[e]){var r=(0,a.Z)({},A);delete r[e],z(r)}}},formData:P,dnsSecRules:E,showNorthStar:b}),W===x.IK.ERROR&&(0,c.jsx)(y(),{className:"mb-4",id:"manualDnsSecFormSubmitError",emphasis:"critical",title:(0,c.jsx)(I().h2,{text:B.formatMessage({id:w[null===Q||void 0===Q||null===(t=Q.error)||void 0===t?void 0:t.code]||w.DEFAULT},{supportPhoneNumber:Z})})}),(0,c.jsxs)(m.default,{gap:"md",className:b?"action-bar mt-3":"mt-3",children:[(0,c.jsx)(_(),{type:"submit",design:"primary",text:B.formatMessage({id:"Save"}),disabled:Y,icon:Y&&(0,c.jsx)(p(),{size:"sm"})||null,"data-eid":$.submit}),(0,c.jsx)(_(),{type:"button",design:"secondary",text:B.formatMessage({id:"cancel"}),disabled:Y,"data-eid":$.cancel,onClick:function(){C.Z.logAnalyticsEvent(f?k.z.dns_ds_records_modal_edit_form_cancel:k.z.dns_ds_records_modal_add_form_cancel),g()}})]})]})})}z.propTypes={editingDsRecord:b().object,domainName:b().string,onClose:b().func,className:b().string,dnsSecRules:b().object,onSuccess:b().func}},79009:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(85893),s=(t(83899),t(78906)),a=t.n(s),o=t(25640),i=t(87501),d=t.n(i),c=t(38010),l=t.n(c),u=t(78224),m=t.n(u),f=t(32117),p=t.n(f),v=t(45733),_=t(40189),g=t.n(_),R=t(99761),h="ManualDnsSecRow";function E(e){var n=e.dsRecord,t=e.onDelete,s=e.isUpdating,i=e.onUpdate,c=e.onUpdateClose,u=e.domainName,f=e.actionsDisabled,_=e.dnsSecRules,g=e.getDsRecords,E=e.showNorthStar,S=(0,o.useIntl)(),b=(0,R.Z)(u,_);return s?(0,r.jsx)("tr",{"data-testid":h,children:(0,r.jsx)("td",{colSpan:b.length+2,className:a().formRow,children:(0,r.jsx)(v.Z,{onClose:c,editingDsRecord:n,domainName:u,dnsSecRules:_,onSuccess:g,showNorthStar:E})})}):(0,r.jsxs)("tr",{"data-testid":h,children:[b.map((function(e){var t=e.field,s=e.width;return(0,r.jsx)("td",{width:s,className:a()[t],children:n[t]},t+n.id)})),(0,r.jsx)("td",{children:(0,r.jsx)(p(),{disabled:f,icon:(0,r.jsx)(d(),{}),onClick:t,"aria-label":S.formatMessage({id:"Delete"}),"data-eid":m().formatEid("ManualDnsSecRow","startDelete","click"),"data-testid":"".concat(h,".delete")})}),(0,r.jsx)("td",{children:(0,r.jsx)(p(),{disabled:f,icon:(0,r.jsx)(l(),{}),onClick:i,"aria-label":S.formatMessage({id:"Edit"}),"data-eid":m().formatEid("ManualDnsSecRow","startDelete","click"),"data-testid":"".concat(h,".edit")})})]})}E.propTypes={domainName:g().string,dsRecord:g().object,onDelete:g().func,isUpdating:g().bool,onUpdate:g().func,onUpdateClose:g().func,actionsDisabled:g().bool,dnsSecRules:g().object,getDsRecords:g().func}},62821:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(85893),s=(t(83899),t(99761)),a=t(25640),o=t(40189),i=t.n(o);function d(e){var n=e.domainName,t=e.dnsSecRules,o=(0,s.Z)(n,t),i=(0,a.useIntl)();return(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[o.map((function(e){var n=e.labelId,t=e.field;return(0,r.jsx)("th",{"data-testid":"header-".concat(t),children:i.formatMessage({id:n})},n)})),(0,r.jsx)("th",{"aria-label":i.formatMessage({id:"Delete"})}),(0,r.jsx)("th",{"aria-label":i.formatMessage({id:"Edit"})})]})})}d.propTypes={domainName:i().string,dnsSecRules:i().object}},67490:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(26042),s=t(36305),a=t(85893),o=t(47724),i=t(89440),d=t(97989),c=t.n(d),l=t(40189),u=t.n(l),m=t(62877);function f(e){var n=e.resources,t=e.Loaded,d=e.Loading,l=e.Errored,u=e.loadedProps,f=void 0===u?{}:u,p=e.errorProps,v=void 0===p?{}:p,_=e.loadingProps,g=void 0===_?{}:_,R=m.WM.apply(void 0,(0,s.Z)(n));return R===o.IK.LOAD||R===o.IK.INIT?d?(0,a.jsx)(d,(0,r.Z)({},g)):(0,a.jsx)(c(),(0,r.Z)({},g)):R===o.IK.ERROR?l?(0,a.jsx)(l,(0,r.Z)({},v)):(0,a.jsx)(i.Z,(0,r.Z)({},v)):(0,a.jsx)(t,(0,r.Z)({},f))}f.propTypes={resources:u().array.isRequired,Loaded:u().elementType,Loading:u().elementType,Errored:u().elementType,loadedProps:u().object,errorProps:u().object,loadingProps:u().object}},79209:function(e,n,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.keys(e).map((function(n){return"".concat(n,":").concat(e[n])}));return n.sort(),n}t.d(n,{Z:function(){return r}})},26945:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(26042),s=t(69396),a=t(10253),o=t(23102),i=t(47724),d=t(62877),c=t(35340),l=t(83899);function u(e){var n=e.domainName,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=function(){if(t){var e=n;return setTimeout((function(){S.sendRequest({},{domainName:e})}),v)}},p=o.timeoutInMilliseconds,v=void 0===p?3e3:p,_=(0,l.useState)(!1),g=_[0],R=_[1],h=(0,a.Z)((0,c.E)("domainDnsApi","getDsRecords",{params:{domainName:n}},{autoFetchBehavior:i.VQ.ON_CACHE_MISS,resetOnUnmount:t?i.OW.ALWAYS:i.OW.NEVER}),2),E=h[0],S=h[1],b=(0,d.An)(E),Z=E.value;(0,l.useEffect)((function(){var e;if(b===i.IK.SUCCESS){var n=m(Z);R(n),n&&(e=u())}return function(){e&&clearTimeout(e)}}),[b,n]);var D=(0,l.useMemo)((function(){var e=(0,s.Z)((0,r.Z)({},E),{value:f(Z)}),n=(0,s.Z)((0,r.Z)({},S),{sendRequest:function(){R(!0),S.sendRequest()}});return n.isServerDoingWorkToRecords=g,n.isServerDoingWorkToRecords&&(e.isUpdating=!1,e.isLoaded=!0),[e,n]}),[E,S,g]);return D}function m(e){return!!Array.isArray(e)&&e.some((function(e){var n=e.status;return[o.$h.PENDING_ADDITION,o.$h.PENDING_REMOVAL,o.$h.UNKNOWN].includes(n)}))}function f(e){return Array.isArray(e)?e.filter((function(e){var n=e.status;return[o.$h.PENDING_ADDITION,o.$h.ACTIVE].includes(n)})):[]}},99761:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(14924),s=t(26042),a=t(69396),o=t(36305),i=t(23102),d=t(79209),c=t(83899);function l(e,n){return(0,c.useMemo)((function(){var e=(0,a.Z)((0,s.Z)({},n),(0,r.Z)({},i.k9,!0));return i.XE.filter((function(n){return e[n.supportedRule]}))}),[e].concat((0,o.Z)((0,d.Z)(n))))}},35340:function(e,n,t){"use strict";t.d(n,{E:function(){return p}});var r=t(26042),s=t(99534),a=t(36305),o=t(83899),i=t(14416),d=t(9129),c=t(28135),l=t(73695),u=t(47724),m=t(79209),f=t(41174);function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},g=t.params,R=(0,s.Z)(t,["params"]);p=(0,r.Z)({},u.E6,p);var h=(0,i.useDispatch)(),E=(0,i.useSelector)((function(t){return l[e].selectors[n](t,g)}))||(0,c.z)(e,n);if((0,d.isLoaded)(E)&&null===E.value){var S=(0,c.z)(e,n);E.value=S.value}var b=(0,o.useCallback)((function(t){var r,s,a,o,i;(null===l||void 0===l||null===(r=l[e])||void 0===r||null===(s=r.actionCreators)||void 0===s?void 0:s[n])?h(null===l||void 0===l||null===(a=l[e])||void 0===a||null===(o=a.actionCreators)||void 0===o||null===(i=o[n])||void 0===i?void 0:i.reset(t||g)):(0,f.logger)({error:"useReduxfulResource reset api: ".concat(e,", resourceName: ").concat(n," is not a valid api")})}),[h].concat((0,a.Z)((0,m.Z)(g)),(0,a.Z)((0,m.Z)((null===R||void 0===R?void 0:R.body)||{})))),Z=(0,o.useCallback)((function(t,r){var s,a;if(null===l||void 0===l||null===(s=l[e])||void 0===s||null===(a=s.actionCreators)||void 0===a?void 0:a[n])return h(l[e].actionCreators[n](r||g,t||R));(0,f.logger)({error:"useReduxfulResource sendRequest api: ".concat(e,", resourceName: ").concat(n," is not a valid api")})}),[h].concat((0,a.Z)((0,m.Z)(g)),(0,a.Z)((0,m.Z)((null===R||void 0===R?void 0:R.body)||{})))),D=(0,o.useRef)();(0,d.hasError)(E)&&(D.current=E),(0,o.useEffect)((function(){return _(E,p.resetOnMount)&&b(g),function(){_(null===D||void 0===D?void 0:D.current,p.resetOnUnmount)&&(b(g),D.current=null)}}),(0,a.Z)((0,m.Z)(g))),(0,o.useEffect)((function(){v(E,p)&&Z()}),[E,p.autoFetchBehavior]);var N=(0,o.useMemo)((function(){return[E,{sendRequest:Z,reset:b}]}),[Z,b,E]);return N}function v(e,n){if((0,d.isUpdating)(e)||(0,d.hasError)(e))return!1;switch(n.autoFetchBehavior){case u.VQ.ON_CACHE_MISS:return!(0,d.isLoaded)(e);case u.VQ.NEVER:default:return!1}}function _(e,n){switch(n){case u.OW.ALWAYS:return!0;case u.OW.IF_ERROR:return(0,d.hasError)(e);case u.OW.NEVER:default:return!1}}},78906:function(e){e.exports={digest:"ManualDnsSecRow_digest__SqHrV",formRow:"ManualDnsSecRow_formRow__BJpDJ"}},10890:function(e){e.exports={container:"ManualDnsSecTable_container__7oC1I",table:"ManualDnsSecTable_table__KjU4j",addButton:"ManualDnsSecTable_addButton__a2iiK"}},80753:function(e){e.exports={container:"SingleDsRecordTable_container__cKInz"}}}]);