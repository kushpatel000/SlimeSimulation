'use strict';mix_d("P13NSCCards__p13n-desktop-carousel:p13n-desktop-carousel__HqraJZLk","exports tslib @p/A @c/metrics @c/aui-carousel @c/dom @c/remote-operations @c/scoped-dom @p/a-carousel-framework @c/logger @c/aui-utils @c/aui-untrusted-ajax @c/browser-operations".split(" "),function(R,p,aa,I,ba,ca,da,ea,fa,ha,ia,ja,ka){function C(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var w=C(aa),la=C(ba),E=C(da),u=C(ea),ma=C(fa),x=C(ha),L=C(ia),S=C(ja),na=C(ka),T={},M=function(a,c,b){void 0===
c&&(c="");void 0===b&&(b=1);c=a+c;T.hasOwnProperty(c)||(T[c]=!0,I.count(a,(I.count(a)||0)+b))},oa=function(a){M(w["default"].capabilities.mobile?"Card:EERU:SharedLib:mobile:render":"Card:EERU:SharedLib:desktop:render");var c=function(d,e){d={$event:{preventDefault:w["default"].$.noop,stopPropagation:w["default"].$.noop},$target:d.getContent().find('[data-a-tab-name="'+e+'"]'),data:{name:"energyEfficiencyTabSet"}};w["default"].trigger("a:declarative:a-tabs:click",d)},b=function(d,e){var g=d&&d.$event,
f=d&&d.data||{},n=f.activeTabName,k=f.modalHeight,t=f.name;g&&g.preventDefault&&g.preventDefault();g&&g.stopPropagation&&g.stopPropagation();g=e.get(t);g||(w["default"].on("a:popover:beforeShow:"+t,function(h){h.popover&&h.popover.getContent&&(h=h.popover.getContent(),h.find(".a-manually-loaded").parent().css("min-height",k),w["default"].loadDescendantImagesManually(h))}),g=e.create(d.$target,f));g.show();c(g,n)};a.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",function(d){w["default"].declarative("card-energy-efficiency-secondary-view",
"click",function(e){M("Card:EERU:SharedLib:mobile:click",e&&e.data&&e.data.name||"");b(e,d)})});a.when("a-modal").execute("RegisterEnergyEfficiencyEventDesktop",function(d){w["default"].declarative("card-energy-efficiency-modal","click",function(e){M("Card:EERU:SharedLib:desktop:click",e&&e.data&&e.data.name||"");b(e,d)})})},pa=function(a){a.when("ready").execute("EEBadgeProductFicheResize",function(c){var b=w["default"].$;b(".energyEfficiencyContainer").each(function(d,e){d=b(e).find(".energyEfficiencyProductFicheLabel").first();
e=b(e).find("svg").first();d.parent().outerHeight()>e.outerHeight()&&(d.removeClass("a-size-small"),d.addClass("a-size-micro"),d.parent().outerHeight()>e.outerHeight()&&d.parent().css("line-height","10px"))})})},y=function(a,c){a&&(c?L["default"].show(a):L["default"].hide(a))},N=function(a,c){return(a=c.getElementsByClassName(a))&&1===a.length?a[0]:void 0},F=function(a){I.count(a,(I.count(a)||0)+1)},qa=function(){function a(c,b,d,e,g,f,n,k){var t=this;this.throttledScrollAction=w["default"].throttle(function(){return p.__awaiter(t,
void 0,void 0,function(){return p.__generator(this,function(h){switch(h.label){case 0:return[4,this.getNextBatchIfBottomInView()];case 1:return h.sent(),[2]}})})},200);this.containerDataset=this.getContainerDataset(c);this.bottomOfListElement=b;this.containerForInsertion=d;this.insertFetchedItems=e;this.errorFetchingItemsElement=f;this.fetchAsinsRemoteOperation=g;this.spinnerFetchingItemsElement=n;this.batchSize=k||8;this.processingStatus={batchFailureCount:0,currentIndex:Number(c.dataset.indexOffset)||
0,individualBatchAttemptsCount:0,isAllContentLoaded:!1,isProcessing:!1}}a.prototype.getContainerDataset=function(c){if(!c.dataset||!c.dataset.asinList)throw Error("Dataset not present or does not contain required data!");return{asinList:JSON.parse(c.dataset.asinList),linkParameters:c.dataset.linkParameters||"{}",reftag:c.dataset.reftag||"",strategyId:c.dataset.strategyId||"",widgetGroupId:c.dataset.widgetGroupId||""}};a.prototype.getNextItemBatch=function(c){var b=this;this.processingStatus.individualBatchAttemptsCount+=
1;this.processingStatus.isProcessing=!0;var d=this.processingStatus.currentIndex;if(d>=this.containerDataset.asinList.length)return this.processingStatus.isAllContentLoaded=!0,Promise.resolve(void 0);y(this.spinnerFetchingItemsElement,!0);d=this.containerDataset.asinList.slice(d,d+this.batchSize);var e=d.map(function(g,f){return f+b.processingStatus.currentIndex});return this.fetchAsinsRemoteOperation({ids:d,indexes:e,linkparameters:this.containerDataset.linkParameters,offset:e[0].toString(),reftagprefix:this.containerDataset.reftag}).then(function(g){y(b.spinnerFetchingItemsElement,
!1);b.insertFetchedItems(c,g);b.processingStatus.batchFailureCount=0;b.processingStatus.currentIndex+=b.batchSize;b.processingStatus.individualBatchAttemptsCount=0;b.processingStatus.isProcessing=!1}).catch(function(g){console.log("Error fetching items: "+g);if(2<=b.processingStatus.individualBatchAttemptsCount){b.processingStatus.batchFailureCount+=1;if(2<=b.processingStatus.batchFailureCount){b.processingStatus.isProcessing=!0;y(b.spinnerFetchingItemsElement,!1);y(b.errorFetchingItemsElement,!0);
return}b.processingStatus.currentIndex+=b.batchSize}void b.getNextItemBatch(c)})};a.prototype.getNextBatchIfBottomInView=function(){return p.__awaiter(this,void 0,void 0,function(){return p.__generator(this,function(c){switch(c.label){case 0:if(this.processingStatus.isProcessing)return[3,3];this.processingStatus.isProcessing=!0;return L["default"].onScreen(this.bottomOfListElement,500)&&!this.processingStatus.isAllContentLoaded&&2>this.processingStatus.batchFailureCount?[4,this.getNextItemBatch(this.containerForInsertion)]:
[3,2];case 1:return c.sent(),[3,3];case 2:this.processingStatus.isProcessing=!1,c.label=3;case 3:return[2]}})})};a.prototype.isInErrorState=function(){return 2<=this.processingStatus.batchFailureCount};a.prototype.resetLazyLoading=function(){this.processingStatus.batchFailureCount=0;y(this.errorFetchingItemsElement,!1)};return a}(),U=function(a,c,b){void 0===c&&(c=function(){});void 0===b&&(b=function(){});return p.__awaiter(void 0,void 0,void 0,function(){return p.__generator(this,function(d){switch(d.label){case 0:return a.dataset.event?
[4,ra(a.dataset.event,a,c,b)]:[3,2];case 1:return d.sent(),[3,5];case 2:return a.dataset.url?[4,sa(a.dataset.url,c,b)]:[3,4];case 3:return d.sent(),[3,5];case 4:x["default"].log("Element is missing dataset.url or dataset.event attribute"),b(),d.label=5;case 5:return[2]}})})},ra=function(a,c,b,d){return p.__awaiter(void 0,void 0,void 0,function(){var e,g,f,n,k,t;return p.__generator(this,function(h){switch(h.label){case 0:e=function(m){return p.__awaiter(void 0,void 0,void 0,function(){var r,l;return p.__generator(this,
function(q){switch(q.label){case 0:return r=function(v){v?b():(x["default"].log("Failed to call PPDS custom API"),d())},l=function(v){x["default"].log("Caught error when calling PPDS custom API: "+v.stack);d()},[4,m().then(r).catch(l)];case 1:return q.sent(),[2]}})})};g=function(m){return p.__awaiter(void 0,void 0,void 0,function(){var r;return p.__generator(this,function(l){switch(l.label){case 0:if(!c.dataset.asin)return[3,2];r={asin:c.dataset.asin};return[4,e(m.bind(null,r))];case 1:return l.sent(),
[3,3];case 2:x["default"].log("Element was missing required data: asin"),d(),l.label=3;case 3:return[2]}})})};f=a;switch(f){case "NOT_INTERESTED":return[3,1];case "DELETE_NOT_INTERESTED":return[3,5]}return[3,7];case 1:if(!c.dataset.asin)return[3,3];n={asin:c.dataset.asin,reason:c.dataset.reason,strategyId:c.dataset.strategyId||c.dataset.strategyid,widgetGroupId:c.dataset.widgetGroupId||c.dataset.widgetgroupid};k=E["default"].setup(["recordNotInterested"]);return[4,e(k.recordNotInterested.bind(null,
n))];case 2:return h.sent(),[3,4];case 3:x["default"].log("Element was missing required data: asin"),d(),h.label=4;case 4:return[3,8];case 5:return t=E["default"].setup(["deleteNotInterested"]),[4,g(t.deleteNotInterested)];case 6:return h.sent(),[3,8];case 7:return x["default"].log("Invalid PPDS event type: "+a),d(),[3,8];case 8:return[2]}})})},sa=function(a,c,b){return p.__awaiter(void 0,void 0,void 0,function(){return p.__generator(this,function(d){switch(d.label){case 0:return[4,S["default"].post(a,
{accepts:"text/html,*/*",contentType:"application/x-www-form-urlencoded"}).then(function(){c()}).catch(function(e){x["default"].log("Failed to call AJAX endpoint "+a+" with error: "+e.message,"ERROR");b()})];case 1:return d.sent(),[2]}})})},ta=function(a,c,b,d,e,g,f,n,k,t){var h=a.getElementsByClassName(d)[0],m=a.getElementsByClassName(e)[0],r=n?a.getElementsByClassName(n)[0]:void 0,l=a.querySelector(g);if(!m||!h||!l)throw Error("One or more elements to record feedback are not present.");d=function(q,
v){q&&(q.onclick=function(){return p.__awaiter(void 0,void 0,void 0,function(){var B;return p.__generator(this,function(z){switch(z.label){case 0:return[4,U(q,function(){v&&k?k():!v&&t&&t();y(l,!1);y(m,v);y(h,!v);r&&(r.style.opacity=v?"0.3":"1");f&&F(f.prefix+":record-feedback:success")},function(){console.log("Failed to record feedback on click");y(l,!0);f&&F(f.prefix+":record-feedback:failure")})];case 1:return z.sent(),f&&(B=v?f.primaryAction:f.secondaryAction,F(f.prefix+":record-feedback:"+B)),
[2]}})})})};c=N(c,a);d(c,!0);a=N(b,a);d(a,!1)},ua=function(a,c,b,d,e){var g=function(t){return E["default"].setup(["getCanariesFeedbackReasons"]).getCanariesFeedbackReasons(t)},f=d.getElementsByClassName("p13n-not-interested-reasons")[0],n=N("p13n-not-interested-success-message",d),k=d.querySelector("#p13n-record-feedback-error-message");return function(){e.includes(a)||e.push(a);f?(y(n,!1),f.hasChildNodes()||g({asin:a,strategyId:c,widgetGroupId:b}).then(function(t){Array.prototype.slice.call(t.getElementsByClassName("p13n-feedback-reasons-option")).forEach(function(h){h.getElementsByTagName("input")[0].onclick=
function(){return p.__awaiter(void 0,void 0,void 0,function(){return p.__generator(this,function(m){U(h,function(){y(k,!1);y(f,!1);y(n,!0)},function(){console.log("Failed to record feedback reason on click");k&&y(k,!0)});return[2]})})}});f.appendChild(t)}),y(f,!0)):y(n,!0)}},va=function(a,c){return function(){var b=c.indexOf(a);-1<b&&c.splice(b,1)}},wa={ctiList:["Website/Personalization/Report a Problem CX"],category:"Website",type:"Personalization",item:"Report a Problem CX",folder:"9c9c97c9-6f69-4dba-a55d-26045c6a3068",
group:"P13N Report a Problem CX"},xa=[{ctiList:["Website/Personalization/Similarities","Website/Detail Page/Similarities"],category:"Website",type:"Personalization",item:"Similarities",folder:"4d16d05d-9a17-4b36-b8fe-9ee159ff81de",group:"Similarities"}],Ba=function(a){var c=u["default"].cardRoot.querySelector(".p13n-report-flag"),b=na["default"].setup();b.define("showFlag","mouseover",function(){c.classList.remove("p13n-report-flag-hide")});b.define("hideFlag","mouseout",function(){c.classList.add("p13n-report-flag-hide")});
b.attach("showFlag",a);b.attach("hideFlag",a);var d=u["default"].cardRoot.querySelector(".internal-flag-form"),e=d.querySelector(".internal-flag-env-data").dataset,g=d.querySelector(".internal-flag-title-text"),f=d.querySelector(".internal-flag-description").firstElementChild,n=d.querySelector(".internal-flag-alias"),k=d.querySelector(".internal-flag-response-message"),t=function(h){h.preventDefault();h=function(q){return!q||!q.trim()};if(h(g.value)||h(f.value)||h(n.value))return O(k,!1,"Something went wrong. One of the required fields was missing."),
!1;h=u["default"].cardRoot.querySelectorAll(".a-dynamic-image");var m;if(m=u["default"].cardRoot.querySelector(".a-carousel-heading")){var r=ya(a,h.length);m="Internal user reported issue '"+g.value+"' with widget: "+m.innerText}else r=za(a),m="Internal user reported issue '"+g.value+"'";h=Aa(h,r,f.value,n.value,e);var l=wa;xa.forEach(function(q){q.ctiList.includes(e.cti)&&(l=q)});S["default"].post("https://p13ngoals.corp.amazon.com/sims",{accepts:"text/html, application/json",contentType:"application/json;charset=UTF-8"},
{sim_params:{assigned_folder:l.folder,description:h,descriptionContentType:"text/amz-markdown-sim",extensions:{tt:{assignedGroup:l.group,category:l.category,impact:5,item:l.item,type:l.type}},tags:[{id:"internal-problem-generated"}],title:m}}).then(function(q){O(k,!0,q)}).catch(function(q){O(k,!1,q)});return!1};d.onsubmit=function(h){return t(h)};b=u["default"].cardRoot.querySelector(".p13n-desktop-report-problem-flag-data");if(b.dataset.name)w["default"].on("a:popover:hide:"+b.dataset.name,function(){d.reset();
k.innerText=""})},ya=function(a,c){if(!a.dataset.aCarouselOptions)return x["default"].log("Empty ASIN List in carouselElement.dataset.aCarouselOptions","ERROR"),[];a=JSON.parse(a.dataset.aCarouselOptions).ajax.id_list;var b=u["default"].cardRoot.querySelector(".a-carousel-firstvisibleitem");b=(Number(b.value)||1)-1;return a.map(function(d){return JSON.parse(d).id}).slice(b,b+c)},za=function(a){return(a=a.dataset.asinList)?a.split(","):[]},Aa=function(a,c,b,d,e){for(var g="",f=0;f<a.length;f++){var n=
a[f];g+=(n?"![]("+n.src+")":"IMAGE MISSING")+"\nASIN: "+(c[f]?c[f]:"ASIN MISSING")+"\n\n"}return"**This SIM-T ticket is created by the 'Report a Problem' internal tool. To know more, here's its wiki: https://w.amazon.com/bin/view/Personalization/CoreRecommendations/Projects/Canaries/Report-a-Problem-UX-on-P13NWidget/UserGuide/**\n\n**Alias:** ["+(d+"](https://phonetool.amazon.com/users/"+d+")\n**Comment:** "+b+"\n\n**Widget Group ID:** "+e.widgetGroupId+"\n**Strategy ID:** "+e.strategyId+"\n**CTI:** "+
e.cti+"\n**Facets:** ")+(e.facets+"\n**Content Reftag:** "+e.reftag+"\n"+(""!==e.baseAsin?"**Page ASIN:** "+e.baseAsin+"\n":"")+"\n**SessionID:** ")+(e.sessionId+"\n**MarketplaceID:** "+e.marketplaceId+"\n**Device Type:** "+e.deviceType+"\n\n**List of ASINs:**\n\n")+g},O=function(a,c,b){c?(a.classList.remove("a-color-error"),b.responseBody&&"object"===typeof b.responseBody?b.responseBody.response&&b.responseBody.response.id?a.innerHTML="Success, here's the <a href=\"https://t.corp.amazon.com/"+b.responseBody.response.id+
'" target="_blank">SIM-T ticket</a> you created.':(x["default"].log("Fail to find the id of the SIM-T ticket created in the response body of response data.","ERROR"),a.innerText="Success, but we could not find the link to the SIM-T ticket."):(x["default"].log("The response body of response data is not an object.","ERROR"),a.innerText="Success, but we could not find the link to the SIM-T ticket.")):(a.classList.add("a-color-error"),a.innerText="string"===typeof b?b:"Oops! Something went wrong. Please try again.")},
Ca={feedbackModalInit:function(a,c){var b={prefix:"p13n-desktop-feedback-modal",primaryAction:"not-interested",secondaryAction:"remove-not-interested"},d=[],e=u["default"].cardRoot.querySelector(".p13n-desktop-canaries-kebab-data");if(e){F(b.prefix+":kebab:render");e.onclick=function(){return F(b.prefix+":kebab:click")};u["default"].cardRoot.querySelector(".p13n-desktop-feedback-modal-link").onclick=function(){return F(b.prefix+":modal:open")};var g=u["default"].cardRoot.querySelector(".p13n-ni-iyr-redirect");
g&&(g.onclick=function(){return F(b.prefix+":iyr:click")});g=u["default"].cardRoot.getElementsByClassName("p13n-canaries-desktop-feedback-modal")[0];if(!g)throw Error("Dataset not present or does not contain required data!");var f=g.querySelector("#endOfList"),n=u["default"].cardRoot.getElementsByClassName("p13n-desktop-feedback-modal-faceouts-list")[0],k=g.querySelector("#p13n-desktop-feedback-modal-loading-items"),t=g.querySelector("#p13n-desktop-feedback-modal-error-loading-items"),h=new qa(e,
f,n,function(q,v){var B;if(v.hasChildNodes()){v=Array.from(v.childNodes);try{for(var z=p.__values(v),A=z.next();!A.done;A=z.next()){var H=A.value;v=H;var G=v.getElementsByClassName("p13n-individual-feedbackButton")[0];ta(v,"p13n-individual-feedbackButton","p13n-feedback-undo-button","p13n-desktop-feedback-modal-initial-faceout","p13n-desktop-feedback-modal-undo-faceout","#p13n-record-feedback-error-message",b,"p13n-feedback-list-asin-image",ua(G.dataset.asin||"",e.dataset.strategyId||"",e.dataset.widgetGroupId||
"",v,d),va(G.dataset.asin||"",d));q.appendChild(H);G.dataset.strategyId=e.dataset.strategyId;G.dataset.widgetGroupId=e.dataset.widgetGroupId}}catch(J){var K={error:J}}finally{try{A&&!A.done&&(B=z.return)&&B.call(z)}finally{if(K)throw K.error;}}}},function(q){return E["default"].setup(["getCanariesFeedbackModalItems"]).getCanariesFeedbackModalItems(q)},t,k);u["default"].cardRoot.querySelector(".p13n-desktop-feedback-modal-link").addEventListener("click",function(){return p.__awaiter(void 0,void 0,
void 0,function(){return p.__generator(this,function(q){switch(q.label){case 0:return""!==n.innerHTML||h.isInErrorState()?[3,2]:[4,h.getNextItemBatch(n)];case 1:return q.sent(),[3,4];case 2:if(!h.isInErrorState())return[3,4];h.resetLazyLoading();return[4,h.getNextItemBatch(n)];case 3:q.sent(),q.label=4;case 4:return[2]}})})});g.addEventListener("wheel",h.throttledScrollAction);var m=function(q){return E["default"].setup(["refreshCard"]).refreshCard(q)};g=e.dataset.uniqueId;f=e.dataset.input;!f&&(k=
u["default"].cardRoot.querySelector(".p13n-desktop-canaries-wrapper-data"),null===k||void 0===k?0:k.dataset)&&(f=k.dataset.input);var r=JSON.parse(f||"{}"),l=u["default"].cardRoot.querySelector("#p13n-desktop-feedback-modal-close-message");w["default"].on("a:popover:hide:p13n-desktop-feedback-modal_"+g,function(){return p.__awaiter(void 0,void 0,void 0,function(){var q,v,B,z,A,H,G,K,J,V;return p.__generator(this,function(P){switch(P.label){case 0:if(!(0<d.length&&r&&r.content))return[3,2];q=!1;return[4,
E["default"].setup(["getDesktopRefreshExperimentTreatment"]).getDesktopRefreshExperimentTreatment().then(function(D){q=D.isT1}).catch(function(D){x["default"].log("Error fetching items: "+D.message);q=!1})];case 1:P.sent();if(q){v=r.content.recommendations;B=[];try{for(z=p.__values(v),A=z.next();!A.done;A=z.next())H=A.value,G=H.id,K=d.indexOf(G),0>K&&B.push(H)}catch(D){J={error:D}}finally{try{A&&!A.done&&(V=z.return)&&V.call(z)}finally{if(J)throw J.error;}}B.length<c?l?(l.style.display="inline",l.style.position=
"absolute",l.style.top=(u["default"].cardRoot.offsetHeight-l.offsetHeight)/2+"px",l.style.right=(u["default"].cardRoot.offsetWidth-l.offsetWidth)/2+"px"):x["default"].log("Could not find the changeover element for message surfacing"):(r.content.recommendations=B,m(r).then(function(D){u["default"].cardRoot.innerHTML=D.outerHTML;a()}).catch(function(D){x["default"].log("Error fetching items: "+D)}))}P.label=2;case 2:return[2]}})})})}}},Da={setupModal:function(a){return p.__awaiter(void 0,void 0,void 0,
function(){var c;return p.__generator(this,function(b){c=u["default"].cardRoot.querySelector(".p13n-report-problem-modal-root");if(!c)return[2];Ba(a);return[2]})})}},W=[],Ea=function(a){var c=Array.prototype.slice.call(a.querySelectorAll("[data-metrics]"));c.push(a);c.forEach(function(b){if(b&&b.dataset&&b.dataset.metrics&&(!b.id||!W.includes(b.id))){var d=JSON.parse(b.dataset.metrics),e;for(e in d)d.hasOwnProperty(e)&&I.count(e,d[e]);b.removeAttribute("data-metrics");b.id&&W.push(b.id)}})},X=/(?=[ \-\/])|(?=[\u3105-\u312F])|(?=[\u31A0-\u31BA])|(?=[\u4E00-\u9FD5])|(?=[\u3400-\u4DB5])|(?=[\uF900-\uFAFF])|(?=[\u3040-\u309F])|(?=[\u30A0-\u30FF])|(?=[\u3190-\u319F])/,
Y=/[^\/\-\[\]():\s]/,Fa=function(a){var c=w["default"].$("<div>")[0];c.classList.add("p13n-sc-offscreen-truncate");var b=parseInt(a.getAttribute("data-rows")||"2",10),d=function(){var f=a.innerHTML;a.innerHTML="&hellip;";var n=a.clientHeight;a.innerHTML=f;return n}();if(b){if(d){var e=function(f){c.innerHTML=f;return Math.round(c.clientHeight/d)<=b},g=function(f,n){f=f.split(n);var k=Math.floor(a.clientWidth/12),t=function(m){c.classList.add("p13n-sc-offscreen-truncate");c.style.overflow="hidden";
c.textContent=m;a.appendChild(c);m=a.clientWidth>=a.scrollWidth;a.removeChild(c);return m},h=function(m){var r=m.length-k;m.trim().length>k&&!t(m)&&Array.prototype.slice.call(m).map(function(l,q){return q>k&&q<=r&&Y.test(l)?"&shy;"+l:l});return m};return f.map(function(m){return h(m)}).join("")};return{truncate:function(){var f=a.innerHTML.trim(),n=a.textContent||"";f=g(f,X);a.appendChild(c);if(e(f))a.removeChild(c),a.innerHTML=f;else{var k=f.split(X);for(var t=1,h=k.length,m,r,l=0;t!==h;)if(m=Math.floor((h+
t)/2),r=k.slice(0,m).join("")+"&hellip;",e(r)){if(1>=h-m){for(l=m;0<l&&!Y.test(k[l-1]);)l--;break}t=m}else h=m;k=0===l?void 0:k.slice(0,l).join("")+"&hellip;";k?(a.innerHTML=k,a.setAttribute("title",n)):(x["default"].log("Unable to successfully truncate line "+f,"ERROR"),a.removeChild(c))}}}}x["default"].log("Truncation element does not have a line height or it is zero","ERROR")}else x["default"].log("Truncation element missing necessary line number data","ERROR")},Ga=function(a){var c=Array.prototype.slice.call(a.getElementsByClassName("p13n-sc-truncate"));
a=a.getElementsByClassName("p13n-sc-truncate-fallback");(window.CSS&&CSS.supports&&CSS.supports("-webkit-line-clamp","1")?c:c.concat(Array.prototype.slice.call(a))).filter(function(b){return!!b.offsetParent}).map(function(b){var d=Fa(b);d&&(d.truncate(),b.classList.add("p13n-sc-truncated"),b.classList.remove("p13n-sc-truncate"),b.classList.remove("p13n-sc-truncate-fallback"),b.className=b.className.replace(/p13n-sc-line-clamp-\d/g,""))})},Q=function(a){return 0===Math.floor(a/10)?"0"+a.toString():
a.toString()},Ha=function(a){var c=a.dayscountdowntoendtemplate,b=a.expiredstring,d=a.hourscountdowntoendtemplate,e=a.minutescountdowntoendtemplate;a=parseInt(a.endtime,10);var g=Date.now();if(g<=a){b=null;var f=a-g;g=Math.floor(f/864E5);var n=Math.floor(f/36E5);a=Math.floor(f/6E4%60);f=Math.floor(f/1E3%60);if(1<g&&c&&(b=c,null!==b))return c=b.replace("${daysCount}",g.toString());e&&(b=0===n?e:d);return null!==b?(c=b.replace("_hours_",Q(n)),c=c.replace("_minutes_",Q(a)),c=c.replace("_seconds_",Q(f))):
""}return b},Ia=function(a){if(null!==a&&a.dataset.endtime)var c=setInterval(function(){a.innerText===a.dataset.expiredstring&&clearInterval(c);var b=Ha({dayscountdowntoendtemplate:a.dataset.dayscountdowntoendtemplate||"",endtime:a.dataset.endtime||"",expiredstring:a.dataset.expiredstring||"",hourscountdowntoendtemplate:a.dataset.hourscountdowntoendtemplate||"",minutescountdowntoendtemplate:a.dataset.minutescountdowntoendtemplate||""});a.innerText=b},1E3)},Ja={initCarousel:function(a){return p.__awaiter(void 0,
void 0,void 0,function(){var c,b,d;return p.__generator(this,function(e){c=(a||{}).afterPageLoaded;b=u["default"].cardRoot.classList.contains("p13n-sc-shoveler")?[u["default"].cardRoot]:Array.prototype.slice.call(u["default"].cardRoot.getElementsByClassName("p13n-sc-shoveler"));d=E["default"].setup(["getCarouselItems"]);if(null===b||void 0===b||!b.length)return[2];b.forEach(function(g){return p.__awaiter(void 0,void 0,void 0,function(){var f,n,k,t,h;return p.__generator(this,function(m){switch(m.label){case 0:f=
function(){w["default"].loadDynamicImage("[data-name]='"+h+"' .p13n-sc-dynamic-image");Ga(g);Ea(g);null===c||void 0===c?void 0:c(g);var r=window.P;oa(r);pa(r)};f();if(g.classList.contains("p13n-carousel-initialized"))return[2];g.classList.add("p13n-carousel-initialized");n=ma["default"].getCarousel(ca.unscope(g));k=la["default"].getCarousel(g);t=g.dataset||{};h=n.getAttr("name");return[4,Promise.all([k.initialized,Da.setupModal(g)])];case 1:return m.sent(),w["default"].on("a:carousel:"+h+":change:pageSize",
f),w["default"].on("a:carousel:"+h+":change:loading",f),w["default"].on("a:carousel:"+h+":change:animating",f),w["default"].on("a:carousel:"+h+":change:fetchedItems",f),k.attachRemoteOperation(function(r){var l=r.indexes;r=r.ids;return d.getCarouselItems(p.__assign(p.__assign({},t),{ids:r,indexes:l,offset:String(l[0]||0)}))}),[2]}})})});return[2]})})}},Ka=function(){var a,c=Array.prototype.slice.call(u["default"].cardRoot.querySelectorAll('[class*="dealsCardDealTimer"]'));try{for(var b=p.__values(c),
d=b.next();!d.done;d=b.next())Ia(d.value)}catch(g){var e={error:g}}finally{try{d&&!d.done&&(a=b.return)&&a.call(b)}finally{if(e)throw e.error;}}},Z=function(){return p.__awaiter(void 0,void 0,void 0,function(){var a,c;return p.__generator(this,function(b){switch(b.label){case 0:return a=Ja.initCarousel({afterPageLoaded:Ka}),c=Ca.feedbackModalInit(Z,1),[4,a];case 1:return b.sent(),[4,c];case 2:return b.sent(),[2]}})})};R._operationNames="getCarouselItems getCanariesFeedbackModalItems refreshCard getDesktopRefreshExperimentTreatment deleteNotInterested recordNotInterested".split(" ");
R.card=Z});
