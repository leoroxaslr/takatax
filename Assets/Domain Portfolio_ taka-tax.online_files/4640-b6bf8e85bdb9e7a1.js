"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4640],{85892:function(e,t,n){n.d(t,{I:function(){return l},c:function(){return c}});var o=n(26042),r=n(69396),i=n(10253),a=n(36305),s=n(48348),c=function(e){return Object.keys(s.MODAL_NAME_MAPPING).find((function(t){return e===s.MODAL_NAME_MAPPING[t]}))},l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var l=(0,i.Z)(t,6),_=l[0],A=l[1],d=l[2],O=l[3],u=l[4],N=void 0===u?null:u,D=l[5],I={onClose:O,triggeredFrom:D,actionName:c(_)};switch(A&&(I.domainFilter=A),N&&(I=(0,o.Z)({},I,N)),D&&(I.triggeredFrom=D),_){case s.MODAL_NAME_MAPPING.AUTO_RENEW_MODAL:case s.MODAL_NAME_MAPPING.TRANSFER_LOCK_MODAL:case s.MODAL_NAME_MAPPING.LOCK_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{index:e.index,internationalDisplayName:e.internationalDisplayName,name:e.name}}));break;case s.MODAL_NAME_MAPPING.FORWARDING_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{index:e.index,name:e.name}}));break;case s.MODAL_NAME_MAPPING.NAMESERVERS_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{internationalDisplayName:e.internationalDisplayName,name:e.name}}));break;case s.MODAL_NAME_MAPPING.LIST_FOR_SALE_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{name:e.name,sale:e.sale}}));break;case s.MODAL_NAME_MAPPING.RENEW_NOW_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{name:e.name,internationalDisplayName:e.internationalDisplayName,renewalPrice:e.renewalPrice}}));break;case s.MODAL_NAME_MAPPING.STATUS_INFO_MODAL:I=(0,r.Z)((0,o.Z)({},I),{id:d[0].id,name:d[0].name,status:d[0].status,registrarHold:d[0].registrarHold,invalidWhois:d[0].invalidWhois});break;case s.MODAL_NAME_MAPPING.FOLDER_MODAL:case s.MODAL_NAME_MAPPING.PROFILE_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{name:e.name,internationalDisplayName:e.internationalDisplayName}}));break;case s.MODAL_NAME_MAPPING.PRIVACY_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{index:e.index,internationalDisplayName:e.internationalDisplayName,name:e.name}}));break;case s.MODAL_NAME_MAPPING.EXPORT_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{internationalDisplayName:e.internationalDisplayName}}));break;case s.MODAL_NAME_MAPPING.PROTECTION_PLAN_MODAL:case s.MODAL_NAME_MAPPING.BUY_DOP_STANDALONE_MODAL:case s.MODAL_NAME_MAPPING.REMOVE_DOP_STANDALONE_MODAL:I.domainsToUpdateAfterThisAction=d.map((function(e){return{id:e.id,expirationDate:e.expirationDate,internationalDisplayName:e.internationalDisplayName,name:e.name,protectionPlan:e.protectionPlan}}));break;case s.MODAL_NAME_MAPPING.CONTACT_MODAL:case s.MODAL_NAME_MAPPING.EU_ELIGIBILITY_MODAL:case s.MODAL_NAME_MAPPING.CONSOLIDATE_MODAL:case s.MODAL_NAME_MAPPING.DELETE_DOMAIN_MODAL:case s.MODAL_NAME_MAPPING.EMAIL_PRIVACY_MODAL:break;default:I.domainsToUpdateAfterThisAction=(0,a.Z)(d)}return I}},54640:function(e,t,n){n.d(t,{Z:function(){return b}});var o=n(85893),r=n(83899),i=n(40189),a=n.n(i),s=n(10253),c=n(14416),l=n(85892),_=n(43838),A=n(26042),d=n(69396),O=n(7330),u=n.n(O),N=n(64820),D=n.n(N),I=n(86122),E=n.n(I),M=n(83490),P=n.n(M),T=n(51535),m=n.n(T),L=n(92930),f=n(67331),p=n(33492),S=n(95558),g=n(53807),C=n(48348),v=n(26036),R=function(e){var t,n=e.type,o=e.action,r=e.ssoUrl,i=void 0===r?null:r,a=e.coaInitiateUrl,s=void 0===a?null:a,c=e.domainFilter,l=e.shopperPortfolioSize,_=void 0===l?0:l,O=e.selectedCount,N=void 0===O?0:O,I=e.triggeredFrom,M=void 0===I?"":I,T=e.singleDomainData,R=void 0===T?{}:T,h=D().actionCreators.getPortfolioSelectedCount.reset,G=D().actionCreators.getActionsEligibility.reset,U=null===c||void 0===c||null===(t=c.domainNamesFilter)||void 0===t?void 0:t.names[0];switch(o.key){case C.DOMAIN_EDIT_OPTIONS.EDIT_NAMESERVERS:var F=u().actionCreators.updateNameServers.reset,y=D().actionCreators.getNameserverRules.reset,w=D().actionCreators.getNameservers.reset;return[C.MODAL_NAME_MAPPING.NAMESERVERS_MODAL,[F,h,G,y,w]];case C.DOMAIN_EDIT_OPTIONS.EDIT_CONTACT:var b=u().actionCreators.validateContactUpdate.reset,x=m().actionCreators.getBulkContactByPrivacyMasking.reset,k=D().actionCreators.getPortfolioContactRestriction.reset,Y=D().actionCreators.getTldLockPeriods.reset;return[C.MODAL_NAME_MAPPING.CONTACT_MODAL,[h,G,b,x,k,Y]];case C.DOMAIN_EDIT_OPTIONS.FORWARD:var W=D().actionCreators.getForwarding.reset,B=u().actionCreators.deleteForwarding.reset,z=u().actionCreators.updateForwarding.reset;return[C.MODAL_NAME_MAPPING.FORWARDING_MODAL,[W,G,h,B,z]];case C.DOMAIN_EDIT_OPTIONS.EDIT_DNS:return n===C.MODAL_ACTION_TYPE.SINGLE&&(L.Z.logAnalyticsEvent(f.z.portfolio_dns_management_redirect,{actionName:C.DOMAIN_EDIT_OPTIONS.EDIT_DNS,shopperPortfolioSize:_,selectedCount:N,triggeredFrom:M}),window.location.assign("/control/".concat(U,"/dns"))),[];case C.DOMAIN_EDIT_OPTIONS.LIST_FOR_SALE:return n===C.MODAL_ACTION_TYPE.SINGLE?function(e,t,n,o,r){var i=(0,p.F)(e),a=encodeURIComponent("/domains/".concat(n,"/details?view=edit"));if(i===g.L.NOT_LISTED)return[C.MODAL_NAME_MAPPING.LIST_FOR_SALE_MODAL];if(i===g.L.LISTED)return L.Z.logAnalyticsEvent(f.z.portfolio_afternic_manage_listing_redirect,{triggeredFrom:o,listingStatus:e,shopperPortfolioSize:r}),window.open("".concat(t,"federate/afternic?path=").concat(a),"_blank"),[]}(R.domainListingStatus,i,U,M,_):[C.MODAL_NAME_MAPPING.LIST_FOR_SALE_MODAL];case C.DOMAIN_EDIT_OPTIONS.EDIT_PROTECTION_PLANS:case C.DOMAIN_EDIT_OPTIONS.EDIT_PROTECTION_PLANS_UP:case C.DOMAIN_EDIT_OPTIONS.EDIT_PROTECTION_PLANS_DOWN:return function(e,t){var n=E().actionCreators.protectionDowngrade.reset,o=D().actionCreators.getPortfolioSelectedCount.reset,r=D().actionCreators.getActionsEligibility.reset;if(e===C.MODAL_ACTION_TYPE.SINGLE){if(t.isDopEligible)return[C.MODAL_NAME_MAPPING.PROTECTION_PLAN_MODAL,[r,n,o]];if(!t.hasDopStandalone&&t.isDopStandAloneEligible){var i=E().actionCreators.addProtection.reset;return[C.MODAL_NAME_MAPPING.BUY_DOP_STANDALONE_MODAL,[i]]}if(t.hasDopStandalone)return[C.MODAL_NAME_MAPPING.REMOVE_DOP_STANDALONE_MODAL,[n]]}return[C.MODAL_NAME_MAPPING.PROTECTION_PLAN_MODAL,[r,n,o]]}(n,R);case C.DOMAIN_EDIT_OPTIONS.RENEW_NOW:var X=D().actionCreators.getRenewalTerms.reset,V=u().actionCreators.portfolioAutoRenew.reset,Z=D().actionCreators.getRedemptionPriceOverrideAuth.reset;return[C.MODAL_NAME_MAPPING.RENEW_NOW_MODAL,[X,G,function(e,t){return E().actionCreators.bulkRenewDomain.reset((0,d.Z)((0,A.Z)({},e),{itc:C.ITC_BULK_RENEW_DOMAIN}),t)},V,Z]];case C.DOMAIN_EDIT_OPTIONS.TURN_AUTO_RENEW_ON:case C.DOMAIN_EDIT_OPTIONS.TURN_AUTO_RENEW_OFF:var K=u().actionCreators.portfolioAutoRenew.reset;return[C.MODAL_NAME_MAPPING.AUTO_RENEW_MODAL,[G,K,h]];case C.DOMAIN_EDIT_OPTIONS.TURN_LOCK_ON:case C.DOMAIN_EDIT_OPTIONS.TURN_LOCK_OFF:var j=u().actionCreators.portfolioUpdateLocks.reset;return[C.MODAL_NAME_MAPPING.LOCK_MODAL,[G,j,h]];case C.DOMAIN_EDIT_OPTIONS.ADD_TO_FOLDER:return[C.MODAL_NAME_MAPPING.FOLDER_MODAL,[]];case C.DOMAIN_EDIT_OPTIONS.PROFILE:var q=P().actionCreators.getProfiles.reset,H=P().actionCreators.addDomainToProfile.reset,J=P().actionCreators.removeDomainFromProfile.reset;return[C.MODAL_NAME_MAPPING.PROFILE_MODAL,[G,q,H,J,h]];case C.DOMAIN_EDIT_OPTIONS.CA_ELIGIBILITY:var Q=D().actionCreators.getCiraAgreements.reset,$=u().actionCreators.updateCiraAgreements.reset;return[C.MODAL_NAME_MAPPING.CA_ELIGIBILITY_MODAL,[G,Q,$,h]];case C.DOMAIN_EDIT_OPTIONS.US_ELIGIBILITY:var ee=D().actionCreators.getNexusAgreements.reset,te=u().actionCreators.updateNexusAgreements.reset;return[C.MODAL_NAME_MAPPING.US_ELIGIBILITY_MODAL,[G,ee,te,h]];case C.DOMAIN_EDIT_OPTIONS.XXX_ELIGIBILITY:var ne=D().actionCreators.getXXXMemberships.reset,oe=u().actionCreators.updateXXXMemberships.reset;return[C.MODAL_NAME_MAPPING.XXX_ELIGIBILITY_MODAL,[G,ne,oe,h]];case C.DOMAIN_EDIT_OPTIONS.EU_ELIGIBILITY:var re=D().actionCreators.getEUCitizenship.reset,ie=D().actionCreators.updateEUCitizenship.reset;return[C.MODAL_NAME_MAPPING.EU_ELIGIBILITY_MODAL,[re,ie,h]];case C.DOMAIN_EDIT_OPTIONS.COPY_TO_CLIPBOARD:return[C.MODAL_NAME_MAPPING.COPY_TO_CLIPBOARD_MODAL,[]];case C.DOMAIN_EDIT_OPTIONS.EDIT_PRIVACY:case C.DOMAIN_EDIT_OPTIONS.EDIT_PRIVACY_ON:case C.DOMAIN_EDIT_OPTIONS.EDIT_PRIVACY_OFF:var ae=m().actionCreators.updateMaskingLevel.reset;return[C.MODAL_NAME_MAPPING.PRIVACY_MODAL,[G,ae,h]];case C.DOMAIN_EDIT_OPTIONS.EXPORT_AS_CSV:return[C.MODAL_NAME_MAPPING.EXPORT_MODAL,[]];case C.DOMAIN_EDIT_OPTIONS.TRANSFER_TO_ACCOUNT:return function(e,t,n,o,r){if(e){var i={filters:(0,A.Z)({},e)};L.Z.logAnalyticsEvent(f.z.portfolio_change_of_account_redirect,{actionName:C.DOMAIN_EDIT_OPTIONS.TRANSFER_TO_ACCOUNT,shopperPortfolioSize:n,selectedCount:o,triggeredFrom:r}),window.sessionStorage.setItem(v.L.dcc_domains_filter,JSON.stringify(i)),window.sessionStorage.setItem(v.L.coa_from_portfolio,JSON.stringify({isFromPortfolio:!0})),(0,S.en)(t)}return[]}(c,s,_,N,M);case C.DOMAIN_EDIT_OPTIONS.CONSOLIDATE_DATES:var se=E().actionCreators.consolidateDomains.reset;return[C.MODAL_NAME_MAPPING.CONSOLIDATE_MODAL,[G,se,h]];case C.DOMAIN_EDIT_OPTIONS.DELETE_DOMAIN:return[C.MODAL_NAME_MAPPING.DELETE_DOMAIN_MODAL,[]];case C.DOMAIN_EDIT_OPTIONS.EDIT_EMAIL_PRIVACY:return[C.MODAL_NAME_MAPPING.EMAIL_PRIVACY_MODAL,[]];case C.DOMAIN_EDIT_OPTIONS.STATUS:return[C.MODAL_NAME_MAPPING.STATUS_INFO_MODAL,[]];case C.DOMAIN_EDIT_OPTIONS.TRANSFER_LOCK:return[C.MODAL_NAME_MAPPING.TRANSFER_LOCK_MODAL,[]];default:return[]}};var h=n(11780),G=n(13993),U=n(11822),F=function(e){var t=e.selectedActionCtx,n=e.setSelectedActionCtx,o=e.portfolioData,i=e.ssoUrl,a=e.coaInitiateUrl,A=e.userColumns,d=(0,c.useDispatch)(),O=(0,r.useState)(""),u=O[0],N=O[1],D=(0,r.useState)({}),I=D[0],E=D[1],M=function(){N(""),E({}),n(null)},P=function(e,n){n&&(Array.isArray(n)?n.forEach((function(e){return d(e())})):"function"===typeof n&&d(n()));var r=function(){switch(null===t||void 0===t?void 0:t.actionName){case C.DOMAIN_EDIT_OPTIONS.TURN_AUTO_RENEW_ON:return{enableAutoRenew:!0};case C.DOMAIN_EDIT_OPTIONS.TURN_AUTO_RENEW_OFF:return{enableAutoRenew:!1};case C.DOMAIN_EDIT_OPTIONS.TURN_LOCK_ON:return{enableLock:!0};case C.DOMAIN_EDIT_OPTIONS.TURN_LOCK_OFF:return{enableLock:!1};case C.DOMAIN_EDIT_OPTIONS.EDIT_PRIVACY_ON:return{maskingTypeToApply:C.PRIVACY_MASKING_TYPE.MASKED};case C.DOMAIN_EDIT_OPTIONS.EDIT_PRIVACY_OFF:return{maskingTypeToApply:C.PRIVACY_MASKING_TYPE.OPEN};case C.DOMAIN_EDIT_OPTIONS.EDIT_PROTECTION_PLANS:return{modalType:null};case C.DOMAIN_EDIT_OPTIONS.EDIT_PROTECTION_PLANS_UP:return{modalType:U.Wv.UPGRADE};case C.DOMAIN_EDIT_OPTIONS.EDIT_PROTECTION_PLANS_DOWN:return{modalType:U.Wv.DOWNGRADE};case C.DOMAIN_EDIT_OPTIONS.EXPORT_AS_CSV:return{userColumns:A};default:return null}}(),i=function(){var e=[];return(o.domains||[]).forEach((function(n){(0,G.jX)(n.name,null===t||void 0===t?void 0:t.selectedDomains)&&e.push(n)})),e}(),a=(0,l.I)(e,(null===t||void 0===t?void 0:t.domainFilter)||{},i,M,r,null===t||void 0===t?void 0:t.triggeredFrom);E(a),N(e)};return(0,r.useEffect)((function(){!function(){var e,n,o,r,c,l,_={type:(null===t||void 0===t?void 0:t.type)||C.MODAL_ACTION_TYPE.BULK,action:{key:null===t||void 0===t?void 0:t.actionName},ssoUrl:i,coaInitiateUrl:a,domainFilter:(null===t||void 0===t?void 0:t.domainFilter)||{},shopperPortfolioSize:(null===t||void 0===t||null===(e=t.selectedDomains)||void 0===e?void 0:e.shopperPortfolioSize)||0,selectedCount:(null===t||void 0===t||null===(n=t.selectedDomains)||void 0===n?void 0:n.selectedCount)||0,triggeredFrom:null===t||void 0===t?void 0:t.triggeredFrom,singleDomainData:{domainListingStatus:(null===t||void 0===t||null===(o=t.singleDomainData)||void 0===o?void 0:o.domainListingStatus)||"",hasDopStandalone:(null===t||void 0===t||null===(r=t.singleDomainData)||void 0===r?void 0:r.hasDopStandalone)||!1,isDopStandAloneEligible:(null===t||void 0===t||null===(c=t.singleDomainData)||void 0===c?void 0:c.isDopStandAloneEligible)||!1,isDopEligible:(null===t||void 0===t||null===(l=t.singleDomainData)||void 0===l?void 0:l.isDopEligible)||!1}},A=(0,s.Z)(R(_),2),d=A[0],O=void 0===d?null:d,u=A[1];O?P(O,void 0===u?null:u):M()}()}),[]),u?(0,_.IO)(u,I):null};F.propTypes={selectedActionCtx:a().object.isRequired,setSelectedActionCtx:a().func.isRequired,portfolioData:a().object.isRequired,coaInitiateUrl:a().string.isRequired,ssoUrl:a().string.isRequired,userColumns:a().array.isRequired};var y=(0,c.connect)((function(e){var t=(0,h.BN)("domainsDccApi","getPortfolio",e),n=(0,h.BN)("dccApi","getPortfolioColumns",e),o=(0,h.BN)("dccApi","updatePortfolioColumns",e),r=e.config.queryString||"";return{portfolioData:t,ssoUrl:e.config.baseUrls.ssoUrl,coaInitiateUrl:"".concat(e.config.baseUrls.coaInitiate).concat(r),userColumns:(null===o||void 0===o?void 0:o.columns)||n||[]}}))(F),w=function(e){var t=e.selectedActionCtx,n=e.setSelectedActionCtx,i=(0,r.useState)(null),a=i[0],s=i[1];return(0,r.useEffect)((function(){s(t?(0,o.jsx)(y,{selectedActionCtx:t,setSelectedActionCtx:n}):null)}),[t]),a};w.propTypes={selectedActionCtx:a().object,setSelectedActionCtx:a().func.isRequired};var b=w},11822:function(e,t,n){n.d(t,{Au:function(){return s},Ho:function(){return _},Kc:function(){return A},Kz:function(){return l},Mw:function(){return c},WM:function(){return r},Wv:function(){return o},jA:function(){return d},lr:function(){return i},rR:function(){return a}});var o={DOWNGRADE:"downgrade",UPGRADE:"upgrade",CHANGE:"change"},r={GOOD:"GOOD",BETTER:"BETTER",BEST:"BEST",DOPL:"DOPL",DOPCLONE:"DOPCLONE"},i={additionalSettings:"domains.dcc.controller/additionalSettings.",banner:"domains.dcc.controller/banner.",domainUsage:"domains.dcc.controller/domainUsage.",portfolio:"domains.dcc.controller/portfolio.",ownershipProtection:"domains.dcc.controller/ownershipProtection.",dns:"domains.dcc.controller/dns.",newProtectionDisplay:"domains.dcc.controller/newProtectionDisplay."},a={additionalSettings:"dcc_domsettings_upgrade_addnsettings_A",banner:"dcc_domsettings_upgrade_banner_A",domainUsage:"dcc_domsettings_xgrade_domainUsage_A",portfolio:"dcc_domsettings_xgrade_portfolio_A",ownershipProtection:"dcc_valuationpage_xgrade_ownershipProtection_A",dnsGetProtection:"dcc_domsettings_xgrade_dns_get_protection",newProtectionDisplay:"dcc_domsettings_new_protection_display",domainUsageExpressCart:"dcc_domsettings_xgrade_expresscart_domainUsage_A",newProtectionDisplayExpress:"dcc_domsettings_new_protection_display_expresscart",additionalSettingsXpresscart:"dcc_domsettings_upgrade_addnsettings_expresscart_A"},s="dcc-control",c=["TransactionalTwoFactorAuthRequired","OneTimePasswordRequired"],l="https://www.verisign.com/en_US/domain-names/dnib/index.xhtml",_="a-32311",A={upgrade:{bulk:"upgradeBulkProtectionPlans",single:"upgradeProtectionPlan"},both:{bulk:"editProtectionPlans",single:"editProtectionPlan"},downgrade:{bulk:"downgradeBulkProtectionPlans",single:"downgradeProtectionPlan"},change:{single:"editProtectionPlan"}},d="dynamic"},26036:function(e,t,n){n.d(t,{L:function(){return o}});var o={dcc_domains_filter:"dcc_domains_filter",coa_from_portfolio:"coa_from_portfolio",coa_from_settings_page:"coa_from_settings_page"}},13993:function(e,t,n){n.d(t,{$F:function(){return D},KE:function(){return c},Qe:function(){return A},WU:function(){return d},ei:function(){return N},hg:function(){return O},jX:function(){return u},qi:function(){return l},ry:function(){return I},vP:function(){return _}});var o=n(26042),r=n(69396),i=n(36305),a=n(48348),s=n(3689),c=function(e,t){return{selectAll:!1,selected:new Set,excluded:new Set,selectedCount:0,totalInSearch:e||0,shopperPortfolioSize:t||0,lastSelectedItem:null}},l=function(e,t,n){return(0,r.Z)((0,o.Z)({},e),{totalInSearch:t||0,shopperPortfolioSize:n||0})},_=function(e,t,n,o){var r,i=new Set;t?(o=o>=0?o:e)!==e&&(null===n||void 0===n||null===(r=n.excluded)||void 0===r?void 0:r.size)&&(i=n.excluded):o=0;return{selectAll:t,selected:new Set,excluded:i,selectedCount:o,totalInSearch:e,shopperPortfolioSize:n.shopperPortfolioSize,lastSelectedItem:null}},A=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=t.name,i=t.rowIndex,a=Object.assign({},e);a.lastSelectedItem=i;var s=function(e){n?a.selected.add(e):a.selected.delete(e)},c=function(e){n?(a.excluded.delete(e),a.selectedCount++):(a.excluded.add(e),a.selectedCount--)};return e.selectAll?(o.length?o.forEach((function(e){return c(e)})):c(r),0===a.selectedCount&&a.excluded.size===a.shopperPortfolioSize?_(a.totalInSearch,!1,a):a):(o.length?o.forEach((function(e){return s(e)})):s(r),a.selectedCount=a.selected.size,0!==a.selectedCount&&a.selectedCount===a.shopperPortfolioSize?_(a.totalInSearch,!0,a):a)},d=function(e,t){var n=Object.assign({},t);if(n.lastSelectedItem=null,!t.selectAll){var o=t.selected;return e.forEach((function(e){if(!o.has(e.name)){var t=e.name;n.selected.add(t),n.selectedCount++}})),n}var r=t.excluded;return e.forEach((function(e){r.has(e.name)&&(n.excluded.delete(e.name),n.selectedCount++)})),n},O=function(e,t){var n=Object.assign({},t);if(n.lastSelectedItem=null,!t.selectAll){var o=t.selected;return e.forEach((function(e){o.has(e.name)&&(n.selected.delete(e.name),n.selectedCount--)})),n}var r=t.excluded;return e.forEach((function(e){r.has(e.name)||(n.excluded.add(e.name),n.selectedCount--)})),n},u=function(e,t){if(!t||!e)return!1;var n=t.selectAll,o=t.excluded,r=t.selected;return n&&!o.has(e)||(null===r||void 0===r?void 0:r.has(e))},N=function(e,t){var n=e.internationalDisplayName,o=t.internationalDisplayName;return n<o?-1:n>o?1:0},D=function(e){return(0,r.Z)((0,o.Z)({},e),{lastSelectedItem:null})},I=function(e,t,n){var o,r,c,l,_=null===(o=e.getSelectedDomains)||void 0===o?void 0:o.selectedDomains,A=1!==(null===t||void 0===t||null===(r=t.domainNamesFilter)||void 0===r||null===(c=r.names)||void 0===c?void 0:c.length)||(null===t||void 0===t||null===(l=t.domainNamesFilter)||void 0===l?void 0:l.type)===a.DOMAIN_NAMES_FILTER_TYPE.EXCLUDE,d=(0,i.Z)(n),O=d.length>0,u=d.length;return A&&_&&(O=_.selected.size===_.selectedCount,d=[],_.selected.forEach((function(e){d.push({name:e,internationalDisplayName:s.default.toUnicode(e).toLowerCase()})})),u=_.selectedCount),O&&d.sort(N),{selectedCount:u,allDomainNamesAvailable:O,availableDomainNames:d}}}}]);