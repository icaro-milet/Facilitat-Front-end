/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.userevents.js";var __meta__={id:"selectable",name:"Selectable",category:"framework",depends:["core","userevents"],advanced:!0};!function(e,t){var n=window.kendo,i=n.ui.Widget,l=Math.abs,s="aria-selected",a="k-selected",o="k-selecting",r="k-selectable",c="change",u="unselect",d="k-unselecting",f="span.k-icon.k-i-caret-alt-down,span.k-icon.k-i-caret-alt-up,.k-icon.k-i-caret-alt-down,.k-icon.k-i-caret-alt-right,.k-icon.k-i-caret-alt-left",v=f.replaceAll("k-i","k-svg-i"),h=v.split(",").map((e=>e+" *")).join(","),p=`input,a,textarea,.k-multiselect-wrap,select,button,${f},${v},${h},.k-button>span,.k-button>span *,.k-button>img,label.k-checkbox-label.k-no-text,span.k-numeric-wrap,.k-focusable`,g=n.support.browser.msie,m=!1,_=e.extend;!function(e){e('<div class="parent"><span></span></div>').on("click",">*",(function(){m=!0})).find("span").trigger("click").end().off()}(e);var k=i.extend({init:function(t,l){var s,a,o=this;i.fn.init.call(o,t,l),o._marquee=e("<div class='k-marquee'><div class='k-marquee-color'></div></div>"),o._lastActive=null,o.element.addClass(r),o.relatedTarget=o.options.relatedTarget,s=o.options.multiple,a=o.options.dragToSelect,o.userEvents=new n.UserEvents(o.element,{global:!0,allowSelection:!0,filter:(m?"":".k-selectable ")+o.options.filter,tap:o._tap.bind(o),touchAction:s?"none":"pan-x pan-y"}),s&&(a&&o.userEvents.bind("start",o._start.bind(o)).bind("move",o._move.bind(o)).bind("end",o._end.bind(o)),o.userEvents.bind("select",o._select.bind(o)))},events:[c,u],options:{name:"Selectable",filter:">*",inputSelectors:p,multiple:!1,dragToSelect:!0,relatedTarget:e.noop,ignoreOverlapped:!1,addIdToRanges:!1},_isElement:function(e){var t,n=this.element,i=n.length,l=!1;for(e=e[0],t=0;t<i;t++)if(n[t]===e){l=!0;break}return l},_tap:function(t){var n,i=e(t.target),l=this,s=t.event.ctrlKey||t.event.metaKey,o=l.options.multiple,u=o&&t.event.shiftKey,d=l.options.selectedClass||a,f=t.event.which,v=t.event.button;!l._isElement(i.closest("."+r))||f&&3==f||v&&2==v||this._allowSelection(t.event.target)&&(n=i.hasClass(d),i=i.add(l.relatedTarget(i)),o?u?(l._lastRange&&b(l._lastRange,i)||(l.selectRange(l._firstSelectee(),i,t),l._notify(c,t)),l._lastRange=i):(l._lastRange=null,n&&s?(l._unselect(i),l._notify(c,t)):s?(l.value(i,t),l._notify(c,t)):(!n||l.value().length>1)&&(l.clear(),l.value(i,t),l._notify(c,t)),l._lastActive=l._downTarget=i):n&&s?(l._unselect(i),l._notify(c,t)):n||(l.clear(),l.value(i,t),l._notify(c,t)))},_start:function(t){var n,i=this,l=e(t.target),s=i.options.selectedClass||a,o=l.hasClass(s),c=t.event.ctrlKey||t.event.metaKey;this._allowSelection(t.event.target)&&(i._downTarget=l,i._isElement(l.closest("."+r))?(i.options.useAllItems?i._items=i.element.find(i.options.filter):(n=l.closest(i.element),i._items=n.find(i.options.filter)),t.sender.capture(),i._marquee.appendTo(document.body).css({left:t.x.client+1,top:t.y.client+1,width:0,height:0}),c||i.clear(),l=l.add(i.relatedTarget(l)),o&&(i._selectElement(l,!0),c&&l.addClass(d))):i.userEvents.cancel())},_move:function(e){var t={left:e.x.startLocation>e.x.location?e.x.location:e.x.startLocation,top:e.y.startLocation>e.y.location?e.y.location:e.y.startLocation,width:l(e.x.initialDelta),height:l(e.y.initialDelta)};this._marquee.css(t),this._invalidateSelectables(t,e.event.ctrlKey||e.event.metaKey),e.preventDefault()},_end:function(t){var i=this,l=n.attr("range-selected"),s=n.guid();i._marquee.remove(),i._unselect(i.element.find(i.options.filter+"."+d)).removeClass(d);var a=i.element.find(i.options.filter+"."+o);if(a=a.add(i.relatedTarget(a)),i.options.addIdToRanges)for(var r=0;r<i._currentlyActive.length;r++)e(i._currentlyActive[r]).attr(l,s);i._lastRange&&b(i._lastRange,a)||(i.value(a,t),i._notify(c,t)),i._lastRange=a,i._lastActive=i._downTarget,i._items=null},_invalidateSelectables:function(e,t){var n,i,l,s,r=this._downTarget[0],c=this._items,u=this.options.selectedClass||a;for(this._currentlyActive=[],n=0,i=c.length;n<i;n++)l=(s=c.eq(n)).add(this.relatedTarget(s)),y(s,e)?(s.hasClass(u)?t&&r!==s[0]&&l.removeClass(u).addClass(d):s.hasClass(o)||s.hasClass(d)||this._collidesWithActiveElement(l,e)||l.addClass(o),this._currentlyActive.push(l[0])):s.hasClass(o)?l.removeClass(o):t&&s.hasClass(d)&&l.removeClass(d).addClass(u)},_collidesWithActiveElement:function(e,t){if(!this.options.ignoreOverlapped)return!1;var i,l=this._currentlyActive,s=e[0].getBoundingClientRect(),a=!1,o=n.support.isRtl(e)?"right":"left",r={};t.right=t.left+t.width,t.bottom=t.top+t.height;for(var c=0;c<l.length;c++)if(C(s,i=l[c].getBoundingClientRect())){if(r[o]="left"===o?i.right:i.left,(s=_({},s,r)).left>s.right)return!0;a=!C(s,t)}return a},value:function(e){var t=this,n=t._selectElement.bind(t);if(!e)return t.element.find(t.options.filter+"."+(t.options.selectedClass||a));e.each((function(){n(this)}))},selectedRanges:function(){var t=n.attr("range-selected"),i={};return this.element.find("["+t+"]").each((function(n,l){var s=e(l).attr(t),a=i[s];a||(a=i[s]=[]),a.push(e(l))})),i},selectedSingleItems:function(){var t=this,i=n.attr("range-selected");return t.element.find(t.options.filter+"."+(t.options.selectedClass||a)+":not(["+i+"])").toArray().map((function(t){return e(t)}))},_firstSelectee:function(){var e,t=this;return null!==t._lastActive?t._lastActive:(e=t.value()).length>0?e[0]:t.element.find(t.options.filter)[0]},_selectElement:function(t,n){var i=e(t),l=this.options.selectedClass||a,r=!n&&this._notify("select",{element:t});i.removeClass(o),r||(i.addClass(l),this.options.aria&&i.attr(s,!0))},_notify:function(e,t){return t=t||{},this.trigger(e,t)},_unselect:function(e){if(!this.trigger(u,{element:e})){var t=n.attr("range-selected");return e.removeClass(this.options.selectedClass||a).removeAttr(t),this.options.aria&&e.attr(s,!1),e}},_select:function(t){this._allowSelection(t.event.target)&&(!g||g&&!e(n._activeElement()).is(this.options.inputSelectors))&&t.preventDefault()},_allowSelection:function(t){return!e(t).is(this.options.inputSelectors)||(this.userEvents.cancel(),this._downTarget=null,!1)},resetTouchEvents:function(){this.userEvents.cancel()},clear:function(){var e=this.element.find(this.options.filter+"."+(this.options.selectedClass||a));this._unselect(e)},selectRange:function(t,n){var i,l,s,a=this;for(a.clear(),a.element.length>1&&(s=a.options.continuousItems()),s&&s.length||(s=a.element.find(a.options.filter)),(t=e.inArray(e(t)[0],s))>(n=e.inArray(e(n)[0],s))&&(l=t,t=n,n=l),a.options.useAllItems||(n+=a.element.length-1),i=t;i<=n;i++)a._selectElement(s[i],!0)},destroy:function(){var e=this;i.fn.destroy.call(e),e.element.off(".kendoSelectable"),e.userEvents.destroy(),e._marquee=e._lastActive=e.element=e.userEvents=null}});function b(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function y(e,t){if(!e.is(":visible"))return!1;var i=n.getOffset(e),l=t.left+t.width,s=t.top+t.height;return i.right=i.left+n._outerWidth(e),i.bottom=i.top+n._outerHeight(e),!(i.left>l||i.right<t.left||i.top>s||i.bottom<t.top)}function C(e,t){return!(e.right<=t.left||e.left>=t.right||e.bottom<=t.top||e.top>=t.bottom)}k.parseOptions=function(e){var t=e.mode||e,n="string"==typeof t&&t.toLowerCase();return{multiple:n&&n.indexOf("multiple")>-1,cell:n&&n.indexOf("cell")>-1}},n.ui.plugin(k)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.selectable.js.map
