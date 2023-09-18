/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.icons.js";var __meta__={id:"tabstrip",name:"TabStrip",category:"web",description:"The TabStrip widget displays a collection of tabs with associated tab content.",depends:["data","icons"],features:[{id:"tabstrip-fx",name:"Animation",description:"Support for animation",depends:["fx"]}]};!function(t,e){var n=window.kendo,r=n.ui,a=n.keys,i=t.map,o=t.each,s=n.trim,l=t.extend,c=n.isFunction,d=(n.template,n._outerWidth),p=n._outerHeight,u=r.Widget,f=/^(a|div)$/i,h=".kendoTabStrip",m="href",b="prev",v="next",g="show",_="k-link",k="k-last",C="click",w="k-image",x="k-first",G="select",y="activate",U="k-tabstrip-content k-content",T="contentUrl",A="mouseenter",S="contentLoad",E="k-disabled",I="k-active",P="k-focus",B="k-hover",R="k-tab-on-top",F=".k-item:not(.k-disabled)",H=".k-item",W="aria-hidden",N="aria-controls",D="aria-disabled",$="aria-selected",q="aria-labelledby",L={content:t=>`<div class='k-tabstrip-content k-content' ${t.contentAttributes(t)} tabindex='0'>${t.content(t.item)}</div>`,itemWrapper:({tag:t,item:e,contentUrl:n,textAttributes:r,image:a,sprite:i,text:o})=>`<${t(e)} class='k-link' ${n(e)} ${r(e)}>${a(e)}${i(e)}${o(e)}</${t(e)}>`,item:t=>`<li class='${t.wrapperCssClass(t.group,t.item)}' role='tab' ${t.item.active?"aria-selected='true'":""}>${t.itemWrapper(t)}</li>`,image:({imageUrl:t})=>`<img class='k-image' alt='' src='${t}' />`,sprite:({spriteCssClass:t})=>`<span class='k-sprite ${t}'></span>`,empty:()=>""},z={wrapperCssClass:function(t,e){var n=["k-tabstrip-item","k-item"],r=e.index;return!1===e.enabled&&n.push("k-disabled"),0===r&&n.push("k-first"),r==t.length-1&&n.push("k-last"),n.join(" ")},textAttributes:function(t){return t.url?" href='"+t.url+"'":""},text:function(t){return!1===t.encoded?t.text:n.htmlEncode(t.text)},tag:function(t){return t.url?"a":"span"},contentAttributes:function(t){return!0!==t.active?` ${n.attr("style-display")}="none" aria-hidden='true'`:""},content:function(t){return t.content?t.content:t.contentUrl?"":"&nbsp;"},contentUrl:function(t){return t.contentUrl?n.attr("content-url")+'="'+t.contentUrl+'"':""}};function M(e){e.children("img").addClass(w),e.children("a").addClass(_).children("img").addClass(w),e.filter("li[disabled]").addClass(E).attr(D,"true").prop("disabled",!1),e.filter(":not([class*=k-state])").children("a").filter(":focus").parent().addClass("k-active "+R),e.attr("role","tab"),e.filter(".k-active").attr($,!0),e.each((function(){var e=t(this);e.children("."+_).length||e.contents().filter((function(){return!(this.nodeName.match(f)||3==this.nodeType&&!s(this.nodeValue))})).wrapAll("<span UNSELECTABLE='on' class='k-link'/>")}))}function j(t){var e=t.children(".k-item");e.filter(".k-first:not(:first-child)").removeClass(x),e.filter(".k-last:not(:last-child)").removeClass(k),e.filter(":first-child").addClass(x),e.filter(":last-child").addClass(k)}function O(t,e){return`<span aria-hidden='true' class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-tabstrip-${t}' unselectable='on'>${n.ui.icon({icon:e,iconClass:"k-button-icon"})}</span>`}var Q=u.extend({init:function(t,e){var r,a=this;u.fn.init.call(a,t,e),a._animations(a.options),e=a.options,a._contentUrls=e.contentUrls||[],a._wrapper(),a._isRtl=n.support.isRtl(a.wrapper),a._tabindex(),a._updateClasses(),a._dataSource(),a.tabGroup.attr("role","tablist"),e.dataSource&&a.dataSource.fetch(),a._tabPosition(),a._scrollable(),a._processContentUrls(),a._attachEvents(),a.options.value&&(r=a.options.value),a._initialActivate(),a.value(r),n.notify(a)},events:[G,y,g,"error",S,"change","dataBinding","dataBound"],options:{name:"TabStrip",dataEncodedField:"",dataTextField:"",dataContentField:"",dataImageUrlField:"",dataUrlField:"",dataSpriteCssClass:"",dataContentUrlField:"",tabPosition:"top",animation:{open:{effects:"expand:vertical fadeIn",duration:200},close:{duration:200}},collapsible:!1,navigatable:!0,contentUrls:!1,scrollable:{distance:200}},setDataSource:function(t){var e=this;e.options.dataSource=t,e._dataSource(),e.dataSource.fetch()},setOptions:function(t){var e=this,n=e.options.animation;e._animations(t),t.contentUrls&&(e._contentUrls=t.contentUrls),t.animation=l(!0,n,t.animation),t.navigatable?e.wrapper.on("keydown"+h,e._keyDownProxy):e.wrapper.off("keydown"+h,e._keyDownProxy),u.fn.setOptions.call(e,t)},activateTab:function(t){if(!this.tabGroup.children("[data-animating]").length){t=this.tabGroup.find(t);var e=this,r=e.options.animation,a=r.open,i=l({},r.close),o=i&&"effects"in i,s=t.parent().children(),c=s.filter(".k-active"),d=s.index(t),u=a&&"duration"in a&&"effects"in a;i=l(o?i:l({reverse:!0},a),{hide:!0}),n.size(a.effects)?(c.kendoRemoveClass(I,{duration:i.duration}),t.kendoRemoveClass(B,{duration:i.duration})):(c.removeClass(I),t.removeClass(B));var f=e.contentAnimators;if(e.inRequest&&(e.xhr.abort(),e.inRequest=!1),0===f.length)return e.tabGroup.find("."+R).removeClass(R),t.addClass(R).css("z-index"),t.addClass(I),e._current(t),e.trigger("change"),e._scrollableModeActive&&e._scrollTabsToItem(t),!1;var h=f.filter(".k-active"),m=e.contentHolder(d),b=m.closest(".k-content");if(e.tabsHeight=p(e.tabGroup)+parseInt(e.wrapper.css("border-top-width"),10)+parseInt(e.wrapper.css("border-bottom-width"),10),0===m.length)return h.removeClass(I).attr(W,!0).kendoStop(!0,!0).kendoAnimate(i),!1;t.attr("data-animating",!0);var v=!(!t.children("."+_).data(T)&&!e._contentUrls[d])&&m.is(":empty"),k=function(){c.removeAttr($),t.attr($,!0),e._current(t),b.addClass(I).removeAttr(W).kendoStop(!0,!0).kendoAnimate(l({init:function(){e.trigger(g,{item:t[0],contentElement:m[0]}),n.resize(m)}},a,{complete:function(){e.element.css("min-height",w),t.removeAttr("data-animating"),e.trigger(y,{item:t[0],contentElement:m[0]}),n.resize(m),u&&(n.support.browser.msie||n.support.browser.edge)&&m.finish().animate({opacity:.9},"fast","linear",(function(){m.finish().animate({opacity:1},"fast","linear")}))}}))},C=function(){v?(t.removeAttr("data-animating"),e.ajaxRequest(t,m,(function(){t.attr("data-animating",!0),k(),e.trigger("change")}))):(k(),e.trigger("change")),e._scrollableModeActive&&e._scrollTabsToItem(t)},w=e.element.css("min-height");return e.element.css("min-height",e.element.outerHeight()),h.removeClass(I),e.tabGroup.find("."+R).removeClass(R),t.addClass(R).css("z-index"),n.size(a.effects)?t.kendoAddClass(I,{duration:a.duration}):t.addClass(I),h.attr(W,!0),h.length?h.kendoStop(!0,!0).kendoAnimate(l({complete:C},i)):C(),!0}},ajaxRequest:function(e,r,a,i){e=this.tabGroup.find(e);var o=this,s=t.ajaxSettings.xhr,l=e.find("."+_),d=e.width()/2,p=!1,u=e.find(".k-loading").removeClass("k-complete");u[0]||(u=t("<span class='k-loading'/>").prependTo(e));var f=2*d-u.width(),h=function(){u.animate({marginLeft:(parseInt(u.css("marginLeft"),10)||0)<d?f:0},500,h)};n.support.browser.msie&&n.support.browser.version<10&&setTimeout(h,40),i=i||l.data(T)||o._contentUrls[e.index()]||l.attr(m),o.inRequest=!0;var b={type:"GET",cache:!1,url:i,dataType:"html",data:{},xhr:function(){var e=this,n=s(),r=e.progressUpload?"progressUpload":!!e.progress&&"progress";return n&&t.each([n,n.upload],(function(){this.addEventListener&&this.addEventListener("progress",(function(t){r&&e[r](t)}),!1)})),e.noProgress=!(window.XMLHttpRequest&&"upload"in new XMLHttpRequest),n},progress:function(t){if(t.lengthComputable){var e=parseInt(t.loaded/t.total*100,10)+"%";u.stop(!0).addClass("k-progress").css({width:e,marginLeft:0})}},error:function(t,e){o.trigger("error",{xhr:t,status:e})&&this.complete()},stopProgress:function(){clearInterval(p),u.stop(!0).addClass("k-progress")[0].style.cssText=""},complete:function(t){o.inRequest=!1,this.noProgress?setTimeout(this.stopProgress,500):this.stopProgress(),"abort"==t.statusText&&u.remove()},success:function(t){u.addClass("k-complete");try{var s=this,l=10;s.noProgress&&(u.width(l+"%"),p=setInterval((function(){s.progress({lengthComputable:!0,loaded:Math.min(l,100),total:100}),l+=10}),40)),o.angular("cleanup",(function(){return{elements:r.get()}})),n.destroy(r),r.html(t)}catch(t){var c=window.console;c&&c.error&&c.error(t.name+": "+t.message+" in "+i),this.error(this.xhr,"error")}a&&a.call(o,r),o.angular("compile",(function(){return{elements:r.get()}})),o.trigger(S,{item:e[0],contentElement:r[0]})}};"object"==typeof i&&(b=t.extend(!0,{},b,i),c(b.url)&&(b.url=b.url())),o.xhr=t.ajax(b)},append:function(t){var e=this,n=e._create(t);return o(n.tabs,(function(t){var r=n.contents[t];e.tabGroup.append(this),"bottom"==e.options.tabPosition?e.tabWrapper.before(r):e.wrapper.append(r),e.angular("compile",(function(){return{elements:[r]}}))})),j(e.tabGroup),e._updateContentElements(),e.resize(!0),e},contentElement:function(r){if(isNaN(r-0))return e;var a=this.contentElements&&this.contentElements[0]&&!n.kineticScrollNeeded?this.contentElements:this.contentAnimators,i=t(this.tabGroup.children()[r]).attr(N);if(a)for(var o=0,s=a.length;o<s;o++)if(a.eq(o).closest(".k-content")[0].id==i)return a[o];return e},contentHolder:function(e){var r=t(this.contentElement(e)),a=r.children(".km-scroll-container");return n.support.touch&&a[0]?a:r},deactivateTab:function(t){var e=this,r=e.options.animation,a=r.open,i=l({},r.close),o=i&&"effects"in i;t=e.tabGroup.find(t),i=l(o?i:l({reverse:!0},a),{hide:!0}),n.size(a.effects)?t.kendoRemoveClass(I,{duration:a.duration}):t.removeClass(I),t.removeAttr($),e.contentAnimators.filter(".k-active").kendoStop(!0,!0).kendoAnimate(i).removeClass(I).attr(W,!0)},destroy:function(){var t=this;u.fn.destroy.call(t),t._refreshHandler&&t.dataSource.unbind("change",t._refreshHandler),t.wrapper.off(h),t.tabGroup.off(h),t._scrollableModeActive&&(t._scrollPrevButton.off().remove(),t._scrollNextButton.off().remove()),n.destroy(t.wrapper)},disable:function(t){return this._toggleDisabled(t,!1),this},enable:function(t,e){return this._toggleDisabled(t,!1!==e),this},insertAfter:function(e,n){n=t(e).is(t(n))?this.tabGroup.find(n).prev():this.tabGroup.find(n);var r=this,a=r._create(e),i=r.element.find("[id='"+n.attr(N)+"']");return o(a.tabs,(function(e){var o=a.contents[e],s=a.newTabsCreated?r._contentUrls.length-(a.tabs.length-e):t(o).index()-1;n.after(this),i.after(o),r._moveUrlItem(s,t(this).index()),r.angular("compile",(function(){return{elements:[o]}}))})),j(r.tabGroup),r._updateContentElements(a.newTabsCreated),r.resize(!0),r},insertBefore:function(e,n){n=t(e).is(t(n))?this.tabGroup.find(n).next():this.tabGroup.find(n);var r=this,a=r._create(e),i=r.element.find("[id='"+n.attr(N)+"']");return o(a.tabs,(function(e){var o=a.contents[e],s=a.newTabsCreated?r._contentUrls.length-(a.tabs.length-e):t(o).index()-1;n.before(this),i.before(o),r._moveUrlItem(s,t(this).index()),r.angular("compile",(function(){return{elements:[o]}}))})),j(r.tabGroup),r._updateContentElements(a.newTabsCreated),r.resize(!0),r},items:function(){return this.tabGroup[0].children},refresh:function(t){var e,r,a,i=this,o=i.options,s=n.getter(o.dataEncodedField),l=n.getter(o.dataTextField),c=n.getter(o.dataContentField),d=n.getter(o.dataContentUrlField),p=n.getter(o.dataImageUrlField),u=n.getter(o.dataUrlField),f=n.getter(o.dataSpriteCssClass),h=[],m=i.dataSource.view();for((t=t||{}).action&&(m=t.items),e=0,a=m.length;e<a;e++)r={text:l(m[e])},o.dataEncodedField&&(r.encoded=s(m[e])),o.dataContentField&&(r.content=c(m[e])),o.dataContentUrlField&&(r.contentUrl=d(m[e])),o.dataUrlField&&(r.url=u(m[e])),o.dataImageUrlField&&(r.imageUrl=p(m[e])),o.dataSpriteCssClass&&(r.spriteCssClass=f(m[e])),h[e]=r;if("add"==t.action)t.index<i.tabGroup.children().length?i.insertBefore(h,i.tabGroup.children().eq(t.index)):i.append(h);else if("remove"==t.action)for(e=0;e<m.length;e++)i.remove(t.index);else"itemchange"==t.action?(e=i.dataSource.view().indexOf(m[0]),t.field===o.dataTextField&&i.tabGroup.children().eq(e).find(".k-link").text(m[0].get(t.field)),t.field===o.dataUrlField&&(i._contentUrls[e]=m[0].get(t.field))):(i.trigger("dataBinding"),i.remove("li"),i._contentUrls=[],i.append(h),i.trigger("dataBound"))},reload:function(e){e=this.tabGroup.find(e);var n=this,r=n._contentUrls;return e.each((function(){var e=t(this),a=e.find("."+_).data(T)||r[e.index()],i=n.contentHolder(e.index());a&&n.ajaxRequest(e,i,null,a)})),n},remove:function(e){var r,a=this,i=typeof e;return"string"===i?e=a.tabGroup.find(e):"number"===i&&(e=a.tabGroup.children().eq(e)),r=e.map((function(){var e=t(this).index(),r=a.contentElement(e);return n.destroy(r),a._removeUrlItem(e),r})),e.remove(),r.empty(),r.remove(),a._updateContentElements(),a.resize(!0),a},select:function(e){var n=this;return 0===arguments.length?n.tabGroup.children("li.k-active"):(isNaN(e)||(e=n.tabGroup.children().get(e)),e=n.tabGroup.find(e),t(e).each((function(e,r){(r=t(r)).hasClass(I)||n.trigger(G,{item:r[0],contentElement:n.contentHolder(r.index())[0]})||n.activateTab(r)})),n)},value:function(r){var a=this;if(r===e)return a.select().text();r!=a.value()&&a.tabGroup.children().each((function(){n.trim(t(this).text())==r&&a.select(this)}))},_active:function(){var t=this.tabGroup.children().filter(".k-active");(t=t[0]?t:this._endItem("first"))[0]&&this._current(t)},_animations:function(t){t&&"animation"in t&&!t.animation&&(t.animation={open:{effects:{}},close:{effects:{}}})},_appendUrlItem:function(t){this._contentUrls.push(t)},_attachEvents:function(){var t=this,e=t.options;t.wrapper.on(A+h+" mouseleave"+h,".k-tabstrip-items > .k-item:not(.k-disabled):not(.k-active)",t._toggleHover).on("focus"+h,t._active.bind(t)).on("blur"+h,(function(){t._current(null)})),t._keyDownProxy=t._keydown.bind(t),e.navigatable&&t.wrapper.on("keydown"+h,t._keyDownProxy),t.tabGroup.on(C+h,".k-disabled .k-link",!1).on(C+h," > "+F,t._itemClick.bind(t))},_click:function(t){var e,n,r=this,a=t.find("."+_),i=a.attr(m),o=r.options.collapsible,s=t.index(),l=r.contentHolder(s),c=t.parent().children().filter(".k-focus");if(t.closest(".k-widget")[0]==r.wrapper[0]){if(t.is(".k-disabled"+(o?"":",.k-active")))return c.removeClass(P),r._focused=t,t.addClass(P),r._current(t),r._scrollableModeActive&&r._scrollTabsToItem(t),!0;if(n=a.data(T)||r._contentUrls[s]||i&&("#"==i.charAt(i.length-1)||-1!=i.indexOf("#"+r.element[0].id+"-")),e=!i||n,r.tabGroup.children("[data-animating]").length)return e;if(r.trigger(G,{item:t[0],contentElement:l[0]}))return!0;if(!1!==e)return o&&t.is(".k-active")?(r.deactivateTab(t),!0):(r.activateTab(t)&&(e=!0),e)}},_create:function(e){var r,a,o,s=this,c=!1;return e=e instanceof n.data.ObservableArray?e.toJSON():e,t.isPlainObject(e)||Array.isArray(e)?(e=Array.isArray(e)?e:[e],c=!0,r=i(e,(function(n,r){return s._appendUrlItem(e[r].contentUrl||null),t(Q.renderItem({group:s.tabGroup,item:l(n,{index:r})}))})),a=i(e,(function(e,r){if("string"==typeof e.content||e.contentUrl){let a=t(Q.renderContent({item:l(e,{index:r})}));return n.applyStylesFromKendoAttributes(a,["display"]),a}}))):(r="string"==typeof e&&"<"!=e[0]?s.element.find(e):t(e),a=t(),r.each((function(){if(/k-tabstrip-items/.test(this.parentNode.className)){var e=s.element.find("[id='"+this.getAttribute(N)+"']");o=e}else o=t("<div class='"+U+"'/>");a=a.add(o)})),M(r)),{tabs:r,contents:a,newTabsCreated:c}},_current:function(t){var n=this._focused;if(t===e)return n;n&&n.removeClass(P),t&&(t.hasClass(I)||t.addClass(P)),this._focused=t},_dataSource:function(){var t=this;t.dataSource&&t._refreshHandler?t.dataSource.unbind("change",t._refreshHandler):t._refreshHandler=t.refresh.bind(t),t.dataSource=n.data.DataSource.create(t.options.dataSource).bind("change",t._refreshHandler)},_elementId:function(t,e,r){var a=t.attr("id"),i=this.element.attr("id"),o=n.guid();if(!a||a.indexOf(i+"-")>-1){var s=(i||o)+"-";return r&&(s+="tab-"),s+(e+1)}return a},_endItem:function(t){return this.tabGroup.children(F)[t]()},_getItem:function(t){return this.tabGroup.children(H)[t]()},_initialActivate:function(){var t=this,e=t.tabGroup.children("li.k-active"),n=t.contentHolder(e.index());e[0]&&n.length>0&&0===n[0].childNodes.length&&t.activateTab(e.eq(0))},_item:function(t,e){var n;return n=e===b?"last":"first",t?((t=t[e]())[0]||(t=this.tabGroup.children(H)[n]()),t.hasClass(E)&&t.addClass(P),(t.hasClass(E)||t.hasClass(I))&&(this._focused=t),t):this._endItem(n)},_itemClick:function(e){var r=this.wrapper[0];if(r!==document.activeElement)if(n.support.browser.msie)try{r.setActive()}catch(t){r.focus()}else r.focus();this._click(t(e.currentTarget))&&e.preventDefault()},_keydown:function(t){var e,n=this,r=t.keyCode,i=n._current(),o=n._isRtl,s=/top|bottom/.test(n.options.tabPosition);if(t.target==t.currentTarget&&i){if(r!==a.DOWN||s)if(r!==a.UP||s)if(r===a.RIGHT&&s)e=o?b:v;else if(r===a.LEFT&&s)e=o?v:b;else if(r==a.ENTER||r==a.SPACEBAR)n._click(i),t.preventDefault();else{if(r==a.HOME)return n._click(n._getItem("first")),void t.preventDefault();if(r==a.END)return n._click(n._getItem("last")),void t.preventDefault()}else e=b;else e=v;e&&(n._click(n._item(i,e)),t.preventDefault())}},_moveUrlItem:function(t,e){this._contentUrls.splice(e,0,this._contentUrls.splice(t,1)[0])},_processContentUrls:function(){var e=this;e._contentUrls.length?e.tabGroup.children(".k-item").each((function(n,r){var a=e._contentUrls[n];"string"==typeof a&&t(r).find(">."+_).data(T,a)})):e._contentUrls.length=e.tabGroup.find("li.k-item").length},_removeUrlItem:function(t){this._contentUrls.splice(t,1)},_resize:function(){this._scrollable()},_scrollable:function(){var t,e,r,a,i=this,o=i.options;if(i._scrollableAllowed())if(i.wrapper.addClass("k-tabstrip-scrollable"),t=i.wrapper[0].offsetWidth,(e=i.tabGroup[0].scrollWidth)>t&&!i._scrollableModeActive){i._nowScrollingTabs=!1,i._isRtl=n.support.isRtl(i.element);var s=n.support.touch?"touchstart":"mousedown",l=n.support.touch?"touchend":"mouseup",c=n.support.browser,d=i._isRtl&&!c.msie&&!c.edge;i.tabWrapper.prepend(O("prev","caret-alt-left")),i.tabWrapper.append(O("next","caret-alt-right")),r=i._scrollPrevButton=i.tabWrapper.children(".k-tabstrip-prev"),a=i._scrollNextButton=i.tabWrapper.children(".k-tabstrip-next"),r.on(s+h,(function(){i._nowScrollingTabs=!0,i._scrollTabsByDelta(o.scrollable.distance*(d?1:-1))})),a.on(s+h,(function(){i._nowScrollingTabs=!0,i._scrollTabsByDelta(o.scrollable.distance*(d?-1:1))})),r.add(a).on(l+h,(function(){i._nowScrollingTabs=!1})),i._scrollableModeActive=!0,i._toggleScrollButtons()}else i._scrollableModeActive&&e<=t?(i._scrollableModeActive=!1,i.wrapper.removeClass("k-tabstrip-scrollable"),i._scrollPrevButton.off().remove(),i._scrollNextButton.off().remove()):i._scrollableModeActive?i._toggleScrollButtons():i.wrapper.removeClass("k-tabstrip-scrollable")},_scrollableAllowed:function(){var t=this.options;return t.scrollable&&!t.scrollable.distance&&(t.scrollable={distance:200}),t.scrollable&&!isNaN(t.scrollable.distance)&&("top"==t.tabPosition||"bottom"==t.tabPosition)},_scrollTabsToItem:function(t){var e,r=this,a=r.tabGroup,i=n.scrollLeft(a),o=d(t),s=r._isRtl?t.position().left:t.position().left-a.children().first().position().left,l=a[0].offsetWidth,c=n.support.browser;r._isRtl&&(c.mozilla||c.webkit&&c.version>=85)&&(i*=-1),r._isRtl?s<0?e=i+s-(l-i):s+o>l&&(e=i+s-o):i+l<s+o?e=s+o-l:i>s&&(e=s),a.finish().animate({scrollLeft:e},"fast","linear",(function(){r._toggleScrollButtons()}))},_scrollTabsByDelta:function(t){var e=this,r=e.tabGroup,a=n.scrollLeft(r),i=n.support.browser;e._isRtl&&(i.mozilla||i.webkit&&i.version>=85)&&(a*=-1),r.finish().animate({scrollLeft:a+t},"fast","linear",(function(){e._nowScrollingTabs&&!jQuery.fx.off?e._scrollTabsByDelta(t):e._toggleScrollButtons()}))},_tabPosition:function(){var t=this,e=t.options.tabPosition;t.wrapper.addClass("k-tabstrip-"+e),"bottom"==e&&t.tabWrapper.appendTo(t.wrapper),"left"!==e&&"right"!==e||t.tabGroup.attr("aria-orientation","vertical"),t.resize(!0)},_toggleHover:function(e){t(e.currentTarget).toggleClass(B,e.type==A)},_toggleDisabled:function(e,n){(e=this.tabGroup.find(e)).each((function(){t(this).toggleClass(E,!n).attr(D,!n)}))},_toggleScrollButtons:function(){var t=this,e=t.tabGroup,r=n.scrollLeft(e);t._scrollPrevButton.toggleClass("k-disabled",0===r),t._scrollNextButton.toggleClass("k-disabled",r===e[0].scrollWidth-e[0].offsetWidth)},_updateClasses:function(){var n,r,a,i=this,o=/top|bottom/.test(i.options.tabPosition);i.wrapper.addClass("k-widget k-tabstrip"),i.tabGroup||(i.tabGroup=i.wrapper.children("ul"),i.tabGroup.wrap("<div />"),i.tabWrapper=i.tabGroup.parent()),i.tabGroup[0]||(i.tabGroup=t("<ul />").prependTo(i.wrapper),i.tabGroup.wrap("<div />"),i.tabWrapper=i.tabGroup.parent()),i.tabWrapper.addClass("k-tabstrip-items-wrapper"),i.tabWrapper.addClass(o?"k-hstack":"k-vstack"),i.tabGroup.addClass("k-tabstrip-items k-reset"),(n=i.tabGroup.find("li").addClass("k-tabstrip-item k-item")).length&&(a=(r=n.filter(".k-active").index())>=0?r:e,i.tabGroup.contents().filter((function(){return 3==this.nodeType&&!s(this.nodeValue)})).remove()),r>=0&&n.eq(r).addClass(R),i.contentElements=i.wrapper.children("div:not(.k-tabstrip-items-wrapper)"),i.contentElements.addClass(U).eq(a).addClass(I).css({display:"block"}),n.length&&(M(n),j(i.tabGroup),i._updateContentElements(!0))},_updateContentElements:function(e){var r=this,a=r._contentUrls,i=r.tabGroup.children(".k-item"),o=r.wrapper.children("div:not(.k-tabstrip-items-wrapper)"),s=r._elementId.bind(r);o.length&&i.length>o.length?o.each((function(n){var r,a=s(t(this),n),o=i.filter("[aria-controls="+(a||0)+"]")[0];!o&&e&&(o=i[n]),o&&(o.setAttribute(N,a),r=o.id=s(t(o),n,!0),this.setAttribute(q,r)),this.setAttribute("id",a)})):i.each((function(e){var n,i=o.eq(e),l=s(i,e);this.setAttribute(N,l),n=this.id=s(t(this),e,!0),!i.length&&a[e]?t("<div class='"+U+"'/>").appendTo(r.wrapper).attr("id",l):(i.attr("id",l),t(this).children(".k-loading")[0]||a[e]||t("<span class='k-loading k-complete'/>").prependTo(this)),i.attr("role","tabpanel"),i.attr("tabindex","0"),i.attr(q,n),i.filter(":not(.k-active)").attr(W,!0)})),r.contentElements=r.contentAnimators=r.wrapper.children("div:not(.k-tabstrip-items-wrapper)"),r.tabsHeight=p(r.tabGroup)+parseInt(r.wrapper.css("border-top-width"),10)+parseInt(r.wrapper.css("border-bottom-width"),10),n.kineticScrollNeeded&&n.mobile.ui.Scroller&&(n.touchScroller(r.contentElements),r.contentElements=r.contentElements.children(".km-scroll-container"))},_wrapper:function(){var t=this;t.element.is("ul")?t.wrapper=t.element.wrapAll("<div />").parent():t.wrapper=t.element}});l(Q,{renderItem:function(t){t=l({tabStrip:{},group:{}},t);var e=L.empty,n=t.item;return L.item(l(t,{image:n.imageUrl?L.image:e,sprite:n.spriteCssClass?L.sprite:e,itemWrapper:L.itemWrapper},z))},renderContent:function(t){return L.content(l(t,z))}}),n.ui.plugin(Q)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.tabstrip.js.map
