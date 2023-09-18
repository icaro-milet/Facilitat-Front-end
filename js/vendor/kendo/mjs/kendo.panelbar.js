/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.icons.js";var __meta__={id:"panelbar",name:"PanelBar",category:"web",description:"The PanelBar widget displays hierarchical data as a multi-level expandable panel bar.",depends:["core","data","data.odata","icons"]};!function(e,t){var n,a=window.kendo,r=a.ui,i=a.keys,s=e.extend,l=a.htmlEncode,o=e.each,d=Array.isArray,p=a.template,c=r.Widget,u=a.data.HierarchicalDataSource,h=/^(ul|a|div)$/i,m=".kendoPanelBar",f="href",g="k-last",k="k-link",v="."+k,_="error",b=".k-panelbar-item",C=".k-group:visible",x="k-image",y="k-first",I="change",w="expand",A="select",S="click",U="k-content",B="activate",D="collapse",E="dataBound",$="mouseenter",G="contentLoad",O="k-active",T="k-expanded",H="> .k-panel",q="> .k-content",F="k-focus",R="k-disabled",W="k-selected",j=".k-selected",L="k-highlight",P=b+":not(.k-disabled)",M="> "+P+" > "+".k-link, .k-panel > "+P+" > "+v,N="> li > .k-selected, .k-panel > li > .k-selected",K="aria-disabled",Q="aria-expanded",V="aria-hidden",z="aria-selected",J=":visible",X="single",Y={text:"dataTextField",url:"dataUrlField",spriteCssClass:"dataSpriteCssClassField",imageUrl:"dataImageUrlField"},Z={aria:function(e){var t="";return(e.items||e.content||e.contentUrl||e.expanded)&&(t+="aria-expanded='"+(e.expanded?"true":"false")+"' "),!1===e.enabled&&(t+="aria-disabled='true'"),t},wrapperCssClass:function(e,t){var n="k-panelbar-item",a=t.index;return e.firstLevel&&(n+=" k-panelbar-header"),!1===t.enabled?n+=" k-disabled":!0===t.expanded&&(n+=" k-active",n+=" k-expanded"),0===a&&(n+=" k-first"),a==e.length-1&&(n+=" k-last"),t.cssClass&&(n+=" "+t.cssClass),t.level&&(n+=" k-level-"+t.level()),n},textClass:function(e){var t=k;return e.selected&&(t+=" k-selected"),t},textAttributes:function(e){return e?" href='"+e+"'":""},arrowIconOptions:function(e){return{icon:e.expanded?"chevron-up":"chevron-down",iconClass:"k-panelbar-toggle k-panelbar-"+(e.expanded?"collapse":"expand")}},text:function(e){return!1===e.encoded?e.text:a.htmlEncode(e.text)},groupAttributes:function(e){return!0!==e.expanded?` ${a.attr("style-display")}="none"`:""},ariaHidden:function(e){return!0!==e.expanded},groupCssClass:function(){return"k-panelbar-group k-group k-panel"},contentAttributes:function(e){return!0!==e.item.expanded?` ${a.attr("style-display")}="none"`:""},content:function(e){return e.content?e.content:e.contentUrl?"":"&nbsp;"},contentUrl:function(e){return e.contentUrl?'href="'+e.contentUrl+'"':""}};function ee(t){(t=e(t)).filter(".k-first:not(:first-child)").removeClass(y),t.filter(".k-last:not(:last-child)").removeClass(g),t.filter(":first-child").addClass(y),t.filter(":last-child").addClass(g)}function te(t){(t=e(t)).addClass("k-level-"+t.parentsUntil(".k-panelbar","ul").length)}n=function(e){return e.children("span").children(".k-panelbar-toggle")};var ne=a.ui.DataBoundWidget.extend({init:function(e,t){var n,r,i=this;d(t)&&(t={dataSource:t}),r=t&&!!t.dataSource,c.fn.init.call(i,e,t),e=i.wrapper=i.element.addClass("k-panelbar"),t=i.options,e[0].id&&(i._itemId=e[0].id+"_pb_active"),i._tabindex(),i._accessors(),i._dataSource(),i._templates(),i._initData(r),i._updateClasses(),i._animations(t),e.on(S+m,M,i._click.bind(i)).on($+m+" mouseleave"+m,M,i._toggleHover).on(S+m,".k-panelbar-item.k-disabled > .k-link",!1).on(S+m,".k-request-retry",i._retryRequest.bind(i)).on("keydown"+m,i._keydown.bind(i)).on("focus"+m,(function(){var e=i.select();i._current(e[0]?e:i._first())})).on("blur"+m,(function(){i._current(null)})).attr("role","tree"),(n=e.find("li.k-active > ."+U))[0]&&i.expand(n.parent(),!1),t.dataSource||i._angularCompile(),a.notify(i)},events:[w,D,A,B,I,_,E,G],options:{name:"PanelBar",dataSource:{},animation:{expand:{effects:"expand:vertical",duration:200},collapse:{duration:200}},messages:{loading:"Loading...",requestFailed:"Request failed.",retry:"Retry"},autoBind:!0,loadOnDemand:!0,expandMode:"multiple",template:null,dataTextField:null},_angularCompile:function(){var e=this;e.angular("compile",(function(){return{elements:e.element.children("li"),data:[{dataItem:e.options.$angular}]}}))},_angularCompileElements:function(t,n){this.angular("compile",(function(){return{elements:t,data:e.map(n,(function(e){return[{dataItem:e}]}))}}))},_angularCleanup:function(){var e=this;e.angular("cleanup",(function(){return{elements:e.element.children("li")}}))},destroy:function(){c.fn.destroy.call(this),this.element.off(m),this._angularCleanup(),a.destroy(this.element)},_initData:function(e){var t=this;e&&(t.element.empty(),t.options.autoBind&&(t._progress(!0),t.dataSource.fetch()))},_templates:function(){var e=this,t=e.options,n=e._fieldAccessor.bind(e);t.template&&"string"==typeof t.template?t.template=p(t.template):t.template||(t.template=p((e=>{var t=n("text")(e.item);return void 0!==e.item.encoded&&!1===e.item.encoded?`<span class='k-panelbar-item-text'>${t}</span>`:`<span class='k-panelbar-item-text'>${l(t)}</span>`}))),e.templates={content:p((({data:e,item:t,contentAttributes:n,content:a})=>`<div class='k-panelbar-content k-content'${n({data:e,item:t,contentAttributes:n,content:a})}>${a(t)}</div>`)),group:p((({data:e,items:t,group:n,renderItems:a,panelBar:r,ariaHidden:i,groupCssClass:s,groupAttributes:l})=>`<ul role='group' aria-hidden='${i(n)}' class='${s(n)}' ${l(n)}>`+a({data:e,items:t,group:n,renderItems:a,panelBar:r,ariaHidden:i,groupCssClass:s,groupAttributes:l})+"</ul>")),itemWrapper:p((({panelBar:e,item:t,arrow:a,textClass:r,arrowIconOptions:i,textAttributes:s,contentUrl:l})=>{var o=n("url")(t),d=n("imageUrl")(t),p=n("spriteCssClass")(t),c=(l=l(t),o||l?"a":"span");return`<${c} class='${r(t)}' ${l}${s(o)}>`+(d?`<img class='k-panelbar-item-icon k-image' alt='' src='${d}' />`:"")+(p?`<span class='k-sprite ${p}'></span>`:"")+e.options.template({panelBar:e,item:t,arrow:a,textClass:r,textAttributes:s,contentUrl:l})+a({panelBar:e,item:t,arrow:a,textClass:r,arrowIconOptions:i,textAttributes:s,contentUrl:l})+`</${c}>`})),item:p((({data:e,group:t,item:n,panelBar:r,itemWrapper:i,renderContent:s,arrow:l,arrowIconOptions:o,subGroup:d,aria:p,wrapperCssClass:c,contentUrl:u,textClass:h,textAttributes:m})=>`<li aria-selected='false' role='treeitem' ${p(n)}class='${c(t,n)}' `+a.attr("uid")+`='${n.uid}'>`+i({data:e,group:t,item:n,panelBar:r,itemWrapper:i,renderContent:s,arrow:l,arrowIconOptions:o,subGroup:d,aria:p,wrapperCssClass:c,contentUrl:u,textClass:h,textAttributes:m})+(n.items&&n.items.length>0?d({items:n.items,panelBar:r,group:{expanded:n.expanded}}):n.content||n.contentUrl?s({data:e,group:t,item:n,panelBar:r,itemWrapper:i,renderContent:s,arrow:l,arrowIconOptions:o,subGroup:d,aria:p,wrapperCssClass:c,contentUrl:u,textClass:h,textAttributes:m}):"")+"</li>")),loading:p((({messages:e})=>`<li class='k-panelbar-item'><span class='k-icon k-i-loading'></span> ${l(e.loading)}</li>`)),retry:p((({messages:e})=>`<li class='k-panelbar-item'>${l(e.requestFailed)} <button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-request-retry'><span class='k-button-text'>${l(e.retry)}</span></button></li>`)),arrow:p((({item:e,arrowIconOptions:t})=>a.ui.icon(t(e)))),empty:p((()=>""))}},setOptions:function(e){var t=this.options.animation;this._animations(e),e.animation=s(!0,t,e.animation),"dataSource"in e&&this.setDataSource(e.dataSource),c.fn.setOptions.call(this,e)},expand:function(t,n){var a=this,r={};if(t=this.element.find(t),!a._animating||!t.find("ul").is(":visible"))return a._animating=!0,n=!1!==n,t.each((function(i,s){s=e(s);var l=t.children(".k-group,.k-content");l.length||(l=a._addGroupElement(t));var o=l.add(s.find(q));if(!s.hasClass(R)&&o.length>0){if(a.options.expandMode==X&&a._collapseAllExpanded(s))return a;t.find(".k-highlight").removeClass(L),s.addClass(L),n||(r=a.options.animation,a.options.animation={expand:{effects:{}},collapse:{hide:!0,effects:{}}}),a._triggerEvent(w,s)||a._toggleItem(s,!1,!1),n||(a.options.animation=r)}})),a;a.one("complete",(function(){setTimeout((function(){a.expand(t)}))}))},collapse:function(t,n){var a=this,r={};return a._animating=!0,n=!1!==n,(t=a.element.find(t)).each((function(t,i){var s=(i=e(i)).find(H).add(i.find(q));!i.hasClass(R)&&s.is(J)&&(i.removeClass(L),n||(r=a.options.animation,a.options.animation={expand:{effects:{}},collapse:{hide:!0,effects:{}}}),a._triggerEvent(D,i)||a._toggleItem(i,!0),n||(a.options.animation=r))})),a},updateArrow:function(t){var n=this;(t=e(t)).children(v).children(".k-panelbar-collapse, .k-panelbar-expand").remove(),t.filter((function(){var t=n.dataItem(this);return t?t.hasChildren||t.content||t.contentUrl:e(this).find(".k-panel").length>0||e(this).find(".k-content").length>0})).children(".k-link:not(:has([class*=-i-chevron]))").each((function(){var t=e(this),n=t.parent();let r=a.ui.icon({icon:n.hasClass(O)?"chevron-up":"chevron-down",iconClass:"k-panelbar-toggle k-panelbar-"+(n.hasClass(O)?"collapse":"expand")});t.append(r)}))},_accessors:function(){var e,t,n,r=this.options,i=this.element;for(e in Y)t=r[Y[e]],n=i.attr(a.attr(e+"-field")),!t&&n&&(t=n),t||(t=e),d(t)||(t=[t]),r[Y[e]]=t},_progress:function(e,t){var a=this.element,r=this.templates.loading({messages:this.options.messages});1==arguments.length?(t=e)?a.html(r):a.empty():n(e).empty().removeClass("k-i-arrow-rotate-cw k-svg-i-arrow-rotate-cw").toggleClass("k-i-loading",t)},_refreshRoot:function(t){var n=this,i={firstLevel:!0,expanded:!0,length:n.element.children().length};this.element.empty();var l=e.map(t,(function(t,r){if("string"==typeof t)return e(t);{t.items=[];let l=e(n.renderItem({group:i,item:s(t,{index:r})}));return a.applyStylesFromKendoAttributes(l,["display"]),l}}));this.element.append(l);for(var o=this.element.children(".k-panelbar-item"),d=0;d<t.length;d++)this.trigger("itemChange",{item:o.eq(d).find(".k-link").first(),data:t[d],ns:r});this._angularCompileElements(l,t)},_refreshChildren:function(t,n){var a,i,s;n.children(".k-group").empty();var l=t.children.data();if(l.length)for(this.append(t.children,n),this.options.loadOnDemand&&this._toggleGroup(n.children(".k-group"),!1),i=n.children(".k-group").children("li"),a=0;a<i.length;a++)s=i.eq(a),this.trigger("itemChange",{item:s.find(".k-link").first(),data:this.dataItem(s),ns:r});else!function(t){var n=t,a=t.children("ul"),r=n.children(".k-link").children(".k-panelbar-toggle");t.hasClass("k-panelbar")||(!r.length&&a.length?r=e("<span class='k-panelbar-toggle' />").appendTo(n):a.length&&a.children().length||(r.remove(),a.remove()))}(n),i=n.children(".k-group").children("li"),this._angularCompileElements(i,l)},findByUid:function(t){for(var n,r=this.element.find(".k-panelbar-item"),i=a.attr("uid"),s=0;s<r.length;s++)if(r[s].getAttribute(i)==t){n=r[s];break}return e(n)},refresh:function(e){var n=this.options,a=e.node,r=e.action,i=e.items,s=this.wrapper,l=n.loadOnDemand;if(e.field){if(!i[0]||!i[0].level)return;return this._updateItems(i,e.field)}if(a&&(s=this.findByUid(a.uid),this._progress(s,!1)),"add"==r?this._appendItems(e.index,i,s):"remove"==r?this.remove(this.findByUid(i[0].uid)):"itemchange"==r?this._updateItems(i):"itemloaded"==r?this._refreshChildren(a,s):this._refreshRoot(i),"remove"!=r)for(var o=0;o<i.length;o++)if(!l||i[o].expanded){var d=i[o];this._hasChildItems(d)&&d.load()}this.trigger(E,{node:a?s:t})},_error:function(e){var t=e.node&&this.findByUid(e.node.uid),r=this.templates.retry({messages:this.options.messages});t?(this._progress(t,!1),this._expanded(t,!1),a.ui.icon(n(t),{icon:"arrow-rotate-cw"}),e.node.loaded(!1)):(this._progress(!1),this.element.html(r))},_retryRequest:function(e){e.preventDefault(),this.dataSource.fetch()},items:function(){return this.element.find(".k-panelbar-item > span:first-child")},setDataSource:function(e){this.options.dataSource=e,this._dataSource(),this.options.autoBind&&(this._progress(!0),this.dataSource.fetch())},_bindDataSource:function(){this._refreshHandler=this.refresh.bind(this),this._errorHandler=this._error.bind(this),this.dataSource.bind(I,this._refreshHandler),this.dataSource.bind(_,this._errorHandler)},_unbindDataSource:function(){var e=this.dataSource;e&&(e.unbind(I,this._refreshHandler),e.unbind(_,this._errorHandler))},_fieldAccessor:function(t){var n=this.options[Y[t]]||[],r=n.length;return 0===r?function(e){return e[t]}:function(t){var i=e.map(n,a.getter);return t.level?i[Math.min(t.level(),r-1)](t):i[r-1](t)}},_dataSource:function(){var e=this,t=e.options.dataSource;t&&(t=d(t)?{data:t}:t,e._unbindDataSource(),t.fields||(t.fields=[{field:"text"},{field:"url"},{field:"spriteCssClass"},{field:"imageUrl"}]),e.dataSource=u.create(t),e._bindDataSource())},_appendItems:function(t,n,r){var i,l,o=this;r.hasClass("k-panelbar")?(i=r.children("li"),l=r):((l=r.children(".k-group")).length||(l=o._addGroupElement(r)),i=l.children("li"));var d={firstLevel:r.hasClass("k-panelbar"),expanded:!0,length:i.length},p=e.map(n,(function(t,n){if("string"==typeof t)return e(t);{let r=e(o.renderItem({group:d,item:s(t,{index:n})}));return a.applyStylesFromKendoAttributes(r,["display"]),r}}));void 0===t&&(t=i.length);for(var c=0;c<p.length;c++)0===i.length||0===t?l.append(p[c]):p[c].insertAfter(i[t-1]);o._angularCompileElements(p,n),o.dataItem(r)&&(o.dataItem(r).hasChildren=!0,o.updateArrow(r))},_updateItems:function(t,n){var a,i,l,o,d=this,p={panelBar:d.options,item:o,group:{}},c="expanded"!=n;if("selected"==n)if(t[0][n]){var u=d.findByUid(t[0].uid);u.hasClass(R)||d.select(u,!0)}else d.clearSelection();else{var h=e.map(t,(function(e){return d.findByUid(e.uid)}));for(c&&d.angular("cleanup",(function(){return{elements:h}})),a=0;a<t.length;a++)p.item=o=t[a],p.panelBar=d,i=(l=h[a]).parent(),c&&(p.group={firstLevel:i.hasClass("k-panelbar"),expanded:l.parent().hasClass(O),length:l.children().length},l.children(".k-link").remove(),l.prepend(d.templates.itemWrapper(s(p,{arrow:o.hasChildren||o.content||o.contentUrl?d.templates.arrow:d.templates.empty},Z)))),"expanded"==n?d._toggleItem(l,!o[n],!o[n]||"true"):"enabled"==n&&(d.enable(l,o[n]),o[n]||o.selected&&o.set("selected",!1)),l.length&&this.trigger("itemChange",{item:l.find(".k-link").first(),data:o,ns:r});c&&d.angular("compile",(function(){return{elements:h,data:e.map(t,(function(e){return[{dataItem:e}]}))}}))}},_toggleDisabled:function(e,t){(e=this.element.find(e)).toggleClass(R,!t).attr(K,!t)},dataItem:function(t){var n=e(t).closest(b).attr(a.attr("uid")),r=this.dataSource;return r&&r.getByUid(n)},select:function(n,a){var r=this;return n===t?r.element.find(N).parent():((n=r.element.find(n)).length?n.each((function(){var t=e(this),n=t.children(v);if(t.hasClass(R))return r;r._updateSelected(n,a)})):this._updateSelected(n),r)},clearSelection:function(){this.select(e())},enable:function(e,t){return this._toggleDisabled(e,!1!==t),this},disable:function(e){return this._toggleDisabled(e,!1),this},append:function(e,t){t=this.element.find(t);var n=this._insert(e,t,t.length?t.find(H):null);return o(n.items,(function(){n.group.append(this),ee(this),te(this)})),this.updateArrow(t),ee(n.group.find(".k-first, .k-last")),n.group.height("auto"),this},insertBefore:function(e,t){t=this.element.find(t);var n=this._insert(e,t,t.parent());return o(n.items,(function(){t.before(this),ee(this),te(this)})),ee(t),n.group.height("auto"),this},insertAfter:function(e,t){t=this.element.find(t);var n=this._insert(e,t,t.parent());return o(n.items,(function(){t.after(this),ee(this),te(this)})),ee(t),n.group.height("auto"),this},remove:function(e){var t=this,n=(e=this.element.find(e)).parentsUntil(t.element,b),a=e.parent("ul");return e.remove(),!a||a.hasClass("k-panelbar")||a.children(b).length||a.remove(),n.length&&(n=n.eq(0),t.updateArrow(n),ee(n)),t},reload:function(t){var n=this;(t=n.element.find(t)).each((function(){var t=e(this);n._ajaxRequest(t,t.children("."+U),!t.is(J))}))},_first:function(){return this.element.children(P).first()},_last:function(){var e=this.element.children(P).last(),t=e.children(C);return t[0]?t.children(P).last():e},_current:function(n){var a=this,r=a._focused,i=a._itemId;if(n===t)return r;a.element.removeAttr("aria-activedescendant"),r&&r.length&&(r[0].id===i&&r.removeAttr("id"),r.children(v).removeClass(F)),e(n).length&&(i=n[0].id||i,n.attr("id",i).children(v).addClass(F),a.element.attr("aria-activedescendant",i)),a._focused=n},_keydown:function(e){var t=this,n=e.keyCode,a=t._current();e.target==e.currentTarget&&(n==i.DOWN||n==i.RIGHT?(t._current(t._nextItem(a)),e.preventDefault()):n==i.UP||n==i.LEFT?(t._current(t._prevItem(a)),e.preventDefault()):n==i.ENTER||n==i.SPACEBAR?(t._click(e),e.preventDefault()):n==i.HOME?(t._current(t._first()),e.preventDefault()):n==i.END&&(t._current(t._last()),e.preventDefault()))},_nextItem:function(e){if(!e)return this._first();var t=e.children(C),n=e.nextAll(":visible").first();return t[0]&&(n=t.children("."+y)),n[0]||(n=e.parent(C).parent(b).next()),n[0]||(n=this._first()),n},_prevItem:function(e){if(!e)return this._last();var t,n=e.prevAll(":visible").first();if(n[0])for(t=n;t[0];)(t=t.children(C).children("."+g))[0]&&(n=t);else(n=e.parent(C).parent(b))[0]||(n=this._last());return n},_insert:function(t,n,r){var i,l,o=this,d=e.isPlainObject(t),p=n&&n[0];if(p||(r=o.element),l={firstLevel:r.hasClass("k-panelbar"),expanded:e(n).hasClass(O),length:r.children().length},p&&!r.length&&(r=e(o.renderGroup({group:l,options:o.options})),a.applyStylesFromKendoAttributes(r,["display"]),r.appendTo(n)),d||Array.isArray(t)||t instanceof u){if(t instanceof u&&(t=t.data()),i=e.map(d?[t]:t,(function(t,n){if("string"==typeof t)return e(t);{let r=e(o.renderItem({group:l,item:s(t,{index:n})}));return a.applyStylesFromKendoAttributes(r,["display"]),r}})),p){var c=o.dataItem(n);c?(c.hasChildren=!0,n.attr(Q,c.expanded).not(".k-active").children("ul").attr(V,!c.expanded)):n.attr(Q,!1)}}else i="string"==typeof t&&"<"!=t.charAt(0)?o.element.find(t):e(t),o._updateItemsClasses(i);return t.length||(t=[t]),o._angularCompileElements(i,t),{items:i,group:r}},_toggleHover:function(t){var n=e(t.currentTarget);n.parents("li.k-disabled").length||n.toggleClass("k-hover",t.type==$)},_updateClasses:function(){var t,n,a,r,i,s=this;r=(t=s.element.find("li > ul").not((function(){return e(this).parentsUntil(".k-panelbar","div").length})).addClass("k-panelbar-group k-group k-panel").attr("role","group")).parent(),a=(i=s.dataItem(r))&&i.expanded||!1,t.parent().not("[aria-expanded]").attr(Q,a).not(".k-active").children("ul").attr(V,!a).hide(),n=s.element.add(t).children(),s._updateItemsClasses(n),s.updateArrow(n),ee(n)},_updateItemsClasses:function(e){for(var t=e.length,n=0;n<t;n++)this._updateItemClasses(e[n],n)},_updateItemClasses:function(t,n){var r,i,s=this._selected,l=this.options.contentUrls,o=l&&l[n],d=this.element[0];t=e(t).addClass("k-panelbar-item").attr({role:"treeitem","aria-selected":!1}),a.support.browser.msie&&t.css("list-style-position","inside").css("list-style-position",""),t.children("img").addClass(x),(i=t.children("a").addClass(k))[0]&&(i.attr("href",o),i.children("img").addClass(x)),t.filter("li[disabled]").addClass("k-disabled").attr(K,!0).prop("disabled",!1),t.children("div").addClass(U+" k-panelbar-content").attr(V,!0).hide().parent().attr(Q,!1),(i=t.children(j))[0]&&(s&&s.attr(z,!1).children(j).removeClass(W),i.addClass(W),this._selected=t.attr(z,!0)),t.children(v)[0]||(r="<span class='k-link'><span class='k-panelbar-item-text'></span></span>",l&&l[n]&&t[0].parentNode==d&&(r='<a class="k-link" href="'+l[n]+'"></a>'),t.contents().filter((function(){return!(this.nodeName.match(h)||3==this.nodeType&&!a.trim(this.nodeValue.trim))})).wrapAll(r)),t.parent(".k-panelbar")[0]?t.addClass("k-panelbar-header"):t.addClass("k-panelbar-item"),/k\-level\-\d+/i.test(t.attr("class"))||t.addClass("k-level-"+t.parentsUntil(this.element,"ul").length)},_click:function(t){var n,a,r,i=this,s=t.type==S?e(t.target):i._current().children(v),l=i.element;if(!s.parents("li.k-disabled").length&&s.closest(".k-panelbar")[0]==l[0]&&(!s.is(":kendoFocusable")||s.hasClass(k))){var o=s.closest(v),d=o.closest(b);i._updateSelected(o);var p=d.children(".k-group,.k-content"),c=this.dataItem(d);if(!p.length&&(i.options.loadOnDemand&&c&&c.hasChildren||this._hasChildItems(d)||d.content||d.contentUrl)&&(p=i._addGroupElement(d)),a=d.find(H).add(d.find(q)),n=!(!((r=o.attr(f))&&("#"==r.charAt(r.length-1)||-1!=r.indexOf("#"+i.element[0].id+"-")))&&!a.length),a.data("animating")&&n)t.preventDefault();else if(i._triggerEvent(A,d)&&(n=!0),!1!==n)if(i.options.expandMode==X&&i._collapseAllExpanded(d)&&n)t.preventDefault();else{if(a.length){var u=a.is(J);i._triggerEvent(u?D:w,d)||(n=i._toggleItem(d,u))}n&&t.preventDefault()}}},_hasChildItems:function(e){return e.items&&e.items.length>0||e.hasChildren},_toggleItem:function(e,n,a){var r,i,s=this,l=e.find(H),o=e.find(v).attr(f),d=s.dataItem(e),p=!n,c=d&&d.loaded();return d&&!a&&d.expanded!==p?(d.set("expanded",p),r=d.hasChildren||!!d.content||!!d.contentUrl):(!d||a&&"true"!==a||c||d.content||d.contentUrl?l.length?(this._toggleGroup(l,n),r=!0):(i=e.children("."+U)).length&&(r=!0,i.is(":empty")&&o!==t?s._ajaxRequest(e,i,n):s._toggleGroup(i,n)):(s.options.loadOnDemand&&this._progress(e,!0),e.children(".k-group,.k-content").remove(),r=d.hasChildren,d.load()),r)},_toggleGroup:function(t,n){var r=this,i=r.options.animation,l=i.expand,o=i.collapse&&"effects"in i.collapse,d=s({},i.expand,i.collapse);o||(d=s(d,{reverse:!0})),t.is(J)==n?(t.attr(V,!!n),t.parent().attr(Q,!n).toggleClass(O,!n).toggleClass(T,!n).find("> .k-link > .k-panelbar-collapse,> .k-link > .k-panelbar-expand").each((function(t,r){let i=e(r);i.removeClass("k-panelbar-expand k-panelbar-collapse"),a.ui.icon(i,{icon:n?"chevron-down":"chevron-up",iconClass:n?"k-panelbar-expand":"k-panelbar-collapse"})})),n?(l=s(d,{hide:!0})).complete=function(){r._animationCallback()}:l=s({complete:function(e){r._triggerEvent(B,e.closest(b)),r._animationCallback()}},l),t.toggle(0).kendoStop(!0,!0).kendoAnimate(l)):r._animating=!1},_animationCallback:function(){this.trigger("complete"),this._animating=!1},_addGroupElement:function(t){var n=e('<ul role="group" aria-hidden="true" class="k-panelbar-group k-group k-panel"></ul>').hide();return t.append(n),n},_collapseAllExpanded:function(t){var n,a=this,r=!1,i=t.find(H).add(t.find(q));return i.is(J)&&(r=!0),i.is(J)||0===i.length||((n=t.siblings()).find(H).add(n.find(q)).filter((function(){return e(this).is(J)})).each((function(t,n){n=e(n),(r=a._triggerEvent(D,n.closest(b)))||a._toggleGroup(n,!0)})),a.one("complete",(function(){setTimeout((function(){n.each((function(e,t){var n=a.dataItem(t);n&&n.set("expanded",!1)}))}))}))),r},_ajaxRequest:function(t,n,r){var i=this,s=t.find(".k-panelbar-collapse, .k-panelbar-expand"),l=t.find(v),o=setTimeout((function(){s.empty().removeClass("k-i-chevron-up k-i-chevron-down k-svg-i-chevron-up k-svg-i-chevron-down").addClass("k-i-loading")}),100),d=l.attr(f);e.ajax({type:"GET",cache:!1,url:d,dataType:"html",data:{},error:function(e,t){s.removeClass("k-i-loading"),a.ui.icon(s,{icon:s.hasClass("k-panelbar-expand")?"chevron-down":"chevron-up"}),i.trigger(_,{xhr:e,status:t})&&this.complete()},complete:function(){clearTimeout(o),a.ui.icon(s,{icon:s.hasClass("k-panelbar-expand")?"chevron-down":"chevron-up"}),s.removeClass("k-i-loading")},success:function(e){function a(){return{elements:n.get()}}try{i.angular("cleanup",a),n.html(e),i.angular("compile",a)}catch(e){var s=window.console;s&&s.error&&s.error(e.name+": "+e.message+" in "+d),this.error(this.xhr,"error")}i._toggleGroup(n,r),i.trigger(G,{item:t[0],contentElement:n[0]})}})},_triggerEvent:function(e,t){return this.trigger(e,{item:t[0]})},_updateSelected:function(e,t){var n=this,a=n.element,r=e.parent(b),i=n._selected,s=n.dataItem(r);i&&i.attr(z,!1),n._selected=r.attr(z,!0),a.find(N).removeClass(W),a.find("> .k-highlight, .k-panel > .k-highlight").removeClass(L),e.addClass(W),e.parentsUntil(a,b).filter(":has(.k-link)").addClass(L),n._current(r[0]?r:null),s&&s.set("selected",!0),t||n.trigger(I)},_animations:function(e){e&&"animation"in e&&!e.animation&&(e.animation={expand:{effects:{}},collapse:{hide:!0,effects:{}}})},renderItem:function(e){var t=this;e=s({panelBar:t,group:{}},e);var n=t.templates.empty,a=e.item;return t.templates.item(s(e,{itemWrapper:t.templates.itemWrapper,renderContent:t.renderContent,arrow:t._hasChildItems(a)||a.content||a.contentUrl?t.templates.arrow:n,subGroup:!e.loadOnDemand||a.expanded?t.renderGroup:n},Z))},renderGroup:function(e){return(this.templates||e.panelBar.templates).group(s({renderItems:function(e){for(var t="",n=0,a=e.items,r=a?a.length:0,i=s({length:r},e.group);n<r;n++)t+=e.panelBar.renderItem(s(e,{group:i,item:s({index:n},a[n])}));return t}},e,Z))},renderContent:function(e){return e.panelBar.templates.content(s(e,Z))}});a.ui.plugin(ne)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.panelbar.js.map
