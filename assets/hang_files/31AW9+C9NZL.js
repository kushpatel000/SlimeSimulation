'use strict';mix_d("FirebirdSpCards__sp-typ-desktop-carousel:sp-typ-desktop-carousel__ePgSnHhN","exports tslib @c/aui-carousel @c/dom @c/remote-operations @c/scoped-dom @p/A @p/a-carousel-framework @c/browser-operations @c/aui-modal @c/aui-untrusted-ajax".split(" "),function(C,l,G,D,H,I,J,K,L,M,N){function t(b){return b&&"object"===typeof b&&"default"in b?b:{"default":b}}var O=t(G),x=t(D),P=t(H),A=t(I),n=t(J),Q=t(K),E=t(L),R=t(M),S=t(N),T=function(b){var c=function(a){a.popover&&a.popover.getContent&&
(a=a.popover.getContent(),n["default"].loadDescendantImagesManually(a))},d=function(a,g){g={$event:{preventDefault:n["default"].$.noop,stopPropagation:n["default"].$.noop},$target:a.getContent().find('[data-a-tab-name="'+g+'"]'),data:{name:"energyEfficiencyTabSet"}};n["default"].trigger("a:declarative:a-tabs:click",g);n["default"].on("a:tabs:energyEfficiencyTabSet:select",function(e){switch(e.selectedTab.tabName){case "firstTab":a.$popover.css("width","367px");a.$popover.css("height","600px");a.$popover.find(".a-popover-inner").css("height",
"600px");break;case "secondTab":a.$popover.css("width","800px"),a.$popover.css("height","1100px"),a.$popover.find(".a-popover-inner").css("height","1100px")}})},f=function(a,g){var e=a&&a.$event,h=a&&a.data||{},k=h.activeTabName,m=h.name;e&&e.preventDefault&&e.preventDefault();e&&e.stopPropagation&&e.stopPropagation();e=g.get(m);e||(n["default"].on("a:popover:beforeShow:"+m,c),e=g.create(a.$target,h));e.show();d(e,k)};b.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",function(a){n["default"].declarative("card-energy-efficiency-secondary-view",
"click",function(g){f(g,a)})});b.when("a-modal").execute("RegisterEnergyEfficiencyEventDesktop",function(a){n["default"].declarative("card-energy-efficiency-modal","click",function(g){f(g,a)})})},U=function(b){b.when("ready").execute("EEBadgeProductFicheResize",function(c){var d=n["default"].$;d(".energyEfficiencyContainer").each(function(f,a){f=d(a).find(".energyEfficiencyProductFicheLabel").first();var g=d(a).find("svg").first();a.offsetWidth<f.width()+g.width()&&(f.removeClass("a-size-small"),
f.addClass("a-size-micro"))})})},V=function(){var b=window.P;T(b);U(b)},W=function(b,c,d){b=JSON.parse(b);b.adCreativeMetaData=c.adCreativeMetaData;b.feedbackFormContainerId=d;return encodeURI(JSON.stringify(b))},y=function(b,c){return b.querySelector("[class*="+c+"]")},X=function(b,c,d){return l.__awaiter(void 0,void 0,void 0,function(){var f,a,g,e,h,k,m;return l.__generator(this,function(q){f="adFeedbackModal_"+b;q=(null===(m=y(c,"ad-feedback-modal-container"))||void 0===m?void 0:m.className)||
"";a="."+c.className+" ."+q.replace(" ",".");e=(g=d().adCreativeMetaData.adCreativeDetails)?g.length:0;h={a11yOpenMessage:"",width:Math.max(560,125*e+130),height:645};k=R["default"].create(f,a,h);return[2,k]})})},aa=function(b,c,d,f,a,g){var e=y(x["default"].cardRoot,"ad-feedback-loading-spinnner");b.on("beforeShow",function(){return l.__awaiter(void 0,void 0,void 0,function(){var h;return l.__generator(this,function(k){switch(k.label){case 0:return h=Y(b,c,d),[4,b.render(function(m){m.innerHTML=
"";var q=m.appendChild,w=x["default"].createElement("div");w.innerHTML=a;w.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 0px; margin-right: 28px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 25px; padding-right: 0px; padding-top: 16px; text-align: left; text-rendering: optimizelegibility; visibility: visible;');var p=
x["default"].createElement("div");p.setAttribute("style",'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to right, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: left; visibility: visible; z-index: 10;');
p.appendChild(w);q.call(m,p);q=x["default"].createElement("div");q.setAttribute("style","padding-bottom: 16px; padding-left: 50px ; padding-top: 16px; justify-content: center; align-items: center;");Z(e,q,f,h,g);m.appendChild(q)})];case 1:return k.sent(),[2]}})})})},Y=function(b,c,d){d=d();var f=d.adCreativeMetaData.adCreativeDetails;null===f||void 0===f?void 0:f.sort(function(a,g){return a.adCreativeIndex<g.adCreativeIndex?-1:1});return W(c,d,b.id)},Z=function(b,c,d,f,a){c.appendChild(b);S["default"].post("/af/multi-creative/desktop-feedback-form",
{accepts:"application/json",contentType:"application/json",additionalHeaders:{"Accept-Language":""===d?"en-US":d}},{pl:f}).then(function(g){return l.__awaiter(void 0,void 0,void 0,function(){var e,h,k;return l.__generator(this,function(m){e=x["default"].createElement("div");e.innerHTML=String(g.responseBody);for(h=0;h<e.children.length;++h)k=e.children[h],"SCRIPT"===k.tagName?B("script",k,c):"LINK"===k.tagName?B("link",k,c):B("div",k,c);c.removeChild(b);return[2]})})}).catch(function(){c.innerHTML=
a})},B=function(b,c,d){var f=x["default"].createElement(b);f.innerHTML=c.innerHTML;c.getAttributeNames().forEach(function(a){f.setAttribute(a,c.getAttribute(a)||"")});d.appendChild(f)},F={},ba=function(b,c){return l.__awaiter(void 0,void 0,void 0,function(){var d,f,a;return l.__generator(this,function(g){d=E["default"].setup();f=y(b,"ad-feedback-primary-link");a=c().adFeedbackLabelId;d.attach("open-modal",f);d.define("open-modal","click",function(){return l.__awaiter(void 0,void 0,void 0,function(){var e;
return l.__generator(this,function(h){switch(h.label){case 0:return(e=F[a])?[3,2]:[4,X(a,b,c)];case 1:e=h.sent();var k=b.dataset;aa(e,k.adFeedbackPayload,c,k.currentLocale,k.formHeaderText,k.formLoadErrorText);F[a]=e;h.label=2;case 2:return e.show(),[2]}})})});return[2]})})},ca=function(b){var c=E["default"].setup(),d=y(b,"ad-feedback-primary-link"),f=y(b,"ad-feedback-text-desktop"),a=y(b,"ad-feedback-sprite");c.attach("mouse-enter",d);c.define("mouse-enter","mouseenter",function(){a.style.backgroundPosition=
"0px -12px";f.style.color="#111111"});c.attach("mouse-leave",d);c.define("mouse-leave","mouseleave",function(){a.style.backgroundPosition="0px 0px";f.style.color="#555"})},da=function(b){return l.__awaiter(void 0,void 0,void 0,function(){var c,d,f;return l.__generator(this,function(a){switch(a.label){case 0:return c=b(),d=A["default"].cardRoot.getElementsByClassName("adFeedbackMainComponent_"+c.adFeedbackLabelId)[0],f=d.dataset.isSponsoredLabelActive,"false"===(f||"false").toLowerCase()?[2]:[4,ca(d)];
case 1:return a.sent(),[4,ba(d,b)];case 2:return a.sent(),[2]}})})};C._operationNames=["getCarouselItems"];C.card=function(b){return l.__awaiter(void 0,void 0,void 0,function(){var c,d,f,a,g,e,h,k,m,q;return l.__generator(this,function(w){switch(w.label){case 0:return V(),c=A["default"].cardRoot.getElementsByClassName("sp-shoveler")[0],d=P["default"].setup(["getCarouselItems"]),f=Q["default"].getCarousel(D.unscope(c)),a=O["default"].getCarousel(c),g=c.dataset||{},e=f.getAttr("name"),h=function(){n["default"].loadDynamicImage("[data-name]='"+
e+"' .sp-dynamic-image");null===b||void 0===b?void 0:b(c)},[4,a.initialized];case 1:w.sent();n["default"].on("a:carousel:"+e+":change:pageSize",h);n["default"].on("a:carousel:"+e+":change:loading",h);n["default"].on("a:carousel:"+e+":change:animating",h);h();a.attachRemoteOperation(function(p){var v=p.indexes;p=p.ids;return d.getCarouselItems(l.__assign(l.__assign({},g),{ids:p,indexes:v,offset:String(v[0]||0)}))});k=A["default"].cardRoot.getElementsByClassName("dynamicSponsoredLabelClass")[0];if(!k)return[2];
m=k.dataset.adFeedbackLabelId;if(!m)return[2];q=function(){for(var p=A["default"].cardRoot.querySelector("[class*='a-carousel-viewport']").childNodes[0],v=[],z=0;z<p.childNodes.length;++z){var r=p.childNodes[z].childNodes[0];if(r&&r.attributes&&(r=r.attributes[0],r.textContent))try{v.push(JSON.parse(r.textContent))}catch(ea){}}p=m;z=[];for(r=0;r<v.length;++r){var u=v[r];z.push({asin:u.asinId,campaignId:u.campaignId,merchantCustomerID:u.encryptedMerchantId,priceInfo:{amount:u.priceAmount,currencyCode:u.currenyCode},
title:u.title,adId:u.adId,adCreativeIndex:r,adCreativeImage:{lowResolutionImage:{url:u.lowResImage,width:0,height:0},highResolutionImages:[{url:u.highResImage,width:0,height:0}]}})}v={adCreativeMetaData:{adCreativeDetails:z},adFeedbackLabelId:p};return v};return[4,da(q)];case 2:return w.sent(),[2]}})})}});
